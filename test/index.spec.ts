import { Response } from 'express';
import fs from 'fs';
import { GotReturn } from 'got';
import jwt from 'jsonwebtoken';
import nock from 'nock';
import { mockReq, mockRes } from 'sinon-express-mock';

import { wait } from './helpers/wait';
import { default as mockConfig } from './mocks/module-config.json';
import { BSLRequest, TenantsConfig } from '../src/index';
import { axiosInstance } from '../src/instances/axios';

describe('ApiKeyGuard', () => {
	let config: TenantsConfig;

	beforeEach((done) => {
		nock('http://mocked-url.com')
			.get('/api/1.0.0/modules/config')
			.reply(200, mockConfig);

		config = new TenantsConfig({
			apikey: '000-000',
			baseUrl: 'http://mocked-url.com/api/1.0.0',
			cronFrequency: '0 0 1 1 1'
		});

		// TODO: find a better way for this
		setTimeout(() => {
			done();
		}, 100);
	});

	it('should block requests without a header', () => {
		return config.apiKeyGuard(
			{ headers: {} } as BSLRequest,
			null as unknown as Response<unknown>,
			(error) => {
				expect(error.status).toEqual(401);
				expect(error.code).toEqual('Unauthorized');
			},
		);
	});

	it('should block requests with a wrong apikey', () => {
		return config.apiKeyGuard(
			{
				headers: { apikey: 'incorrect' }
				// tslint:disable-next-line: no-any
			} as unknown as BSLRequest,
			null as unknown as Response<unknown>,
			(error) => {
				expect(error.status).toEqual(401);
				expect(error.code).toEqual('Unauthorized');
			},
		);
	});

	it('should accept requests with a correct apikey', () => {
		return config.apiKeyGuard(
			{
				headers: { apikey: '02666a7b-7219-488c-bab9-021f3dd8dad9' }
				// tslint:disable-next-line: no-any
			} as unknown as BSLRequest,
			null as unknown as Response<unknown>,
			(error) => {
				expect(error).toEqual(undefined);
			},
		);
	});
});

describe('Request Module', () => {
	let config: TenantsConfig;

	beforeEach(async () => {
		nock('http://mocked-url.com')
			.get('/api/1.0.0/modules/config')
			.reply(200, mockConfig);

		config = new TenantsConfig({
			apikey: '000-000',
			baseUrl: 'http://mocked-url.com/api/1.0.0',
			cronFrequency: '0 0 1 1 1'
		});

		await wait(500);
	});

	it('should make requests', () => {
		nock('http://test.be')
			.get('/test')
			.matchHeader('apikey', '02666a7b-7219-488c-bab9-021f3dd8dad9')
			.reply(200, { message: 'OK' });

		return config
			.requestModule(
				'02666a7b-7219-488c-bab9-021f3dd8dad9',
				'users-roles',
				'GET',
				'/test',
			)
			.then((response) => {
				expect(response).toEqual({ message: 'OK' });
			});
	});

	it('should make requests as stream', async () => {
		const spy = jest.spyOn(axiosInstance, 'gotRequest');

		nock('http://test.be')
			.get('/test')
			.matchHeader('apikey', '02666a7b-7219-488c-bab9-021f3dd8dad9')
			.reply(200, { message: 'OK' });

		await config.requestModule(
			'02666a7b-7219-488c-bab9-021f3dd8dad9',
			'users-roles',
			'GET',
			'/test',
			{ isStream: true },
		) as GotReturn;

		expect(spy).toHaveBeenCalled();
	});

	it('should throw error when request failed', () => {
		nock('http://test.be')
			.get('/test')
			.matchHeader('apikey', '02666a7b-7219-488c-bab9-021f3dd8dad9')
			.reply(500, {});

		let catched = false;

		return config
			.requestModule(
				'02666a7b-7219-488c-bab9-021f3dd8dad9',
				'users-roles',
				'GET',
				'/test',
			)
			.catch(() => (catched = true))
			.then(() => expect(catched).toEqual(true));
	});

	it('should throw error when invalid tenant key is passed', () => {
		let catched = false;

		return config
			.requestModule('invalid-key', 'users-roles', 'GET', '/test')
			.catch((error: Error) => {
				expect(error.message).toEqual(
					'Could not find tenant based on tenant key',
				);
				catched = true;
			})
			.then(() => expect(catched).toEqual(true));
	});

	it('should throw error when moduleContext can\'t be found', () => {
		let catched = false;

		return config
			.requestModule(
				'02666a7b-7219-488c-bab9-021f3dd8dad9',
				'invalid-module',
				'GET',
				'/test',
			)
			.catch((error: Error) => {
				expect(error.message).toEqual(
					'Could not find module with endpoint invalid-module for tenant super-coole-website',
				);
				catched = true;
			})
			.then(() => expect(catched).toEqual(true));
	});
});

describe('verifyJwt', () => {
	let config: TenantsConfig;

	beforeEach(async () => {
		nock('http://mocked-url.com')
			.get('/api/1.0.0/modules/config')
			.reply(200, mockConfig);

		config = new TenantsConfig({
			apikey: '000-000',
			baseUrl: 'http://mocked-url.com/api/1.0.0',
			cronFrequency: '0 0 1 1 1'
		});

		await wait(500);
	});

	it('should verifying ', () => {
		const publicToken = fs
			.readFileSync('./test/mocks/jwtRS256.key.pub')
			.toString();
		const privateToken = fs
			.readFileSync('./test/mocks/jwtRS256.key')
			.toString();
		const token = jwt.sign(
			{ very: 'secret' },
			privateToken,
			{ algorithm: 'RS256' },
		);
		const req = mockReq({ get: () => `token ${token}` });
		const res = mockRes();
		const next = jest.fn();

		config.verifyJwt(publicToken)(req, res, next);

		expect(next).toHaveBeenCalled();
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		expect((req as any)?.locals?.requestContext?.very).toEqual('secret');
	});

	it('should not verify if public token is incorrect ', () => {
		const publicToken = 'invalid publico';
		const privateToken = fs
			.readFileSync('./test/mocks/jwtRS256.key')
			.toString();
		const token = jwt.sign(
			{ very: 'secret' },
			privateToken,
			{ algorithm: 'RS256' },
		);
		const req = mockReq({ get: () => `token ${token}` });
		const res = mockRes();
		const next = jest.fn();

		config.verifyJwt(publicToken)(req, res, next);

		expect(next).toHaveBeenCalled();
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		expect((req as any)?.locals?.requestContext).toBeUndefined();
	});

	it('should not verify token if not preceded with \'token\'', () => {
		const publicToken = fs
			.readFileSync('./test/mocks/jwtRS256.key.pub')
			.toString();
		const privateToken = fs
			.readFileSync('./test/mocks/jwtRS256.key')
			.toString();
		const token = jwt.sign(
			{ very: 'secret' },
			privateToken,
			{ algorithm: 'RS256' },
		);
		const req = mockReq({ get: () => `${token}` });
		const res = mockRes();
		const next = jest.fn();

		config.verifyJwt(publicToken)(req, res, next);

		expect(next).toHaveBeenCalled();
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		expect((req as any)?.locals?.requestContext).toBeUndefined();
	});

	it('should not verify token if no public key is passed', () => {
		expect(() => config.verifyJwt()).toThrowError(
			'verifyJwt: cannot verify incoming request when no public key is specified',
		);
	});
});

describe('getJWTContent', () => {
	let config: TenantsConfig;

	beforeEach(async () => {
		nock('http://mocked-url.com')
			.get('/api/1.0.0/modules/config')
			.reply(200, mockConfig);

		config = new TenantsConfig({
			apikey: '000-000',
			baseUrl: 'http://mocked-url.com/api/1.0.0',
			cronFrequency: '0 0 1 1 1'
		});

		await wait(500);
	});

	it('should return requestContext when on request', () => {
		const req = mockReq({ locals: { requestContext: 'yolo' } });

		const result = config.getJWTContent(req as unknown as BSLRequest);

		expect(result).toEqual('yolo');
	});

	it('should return undefined when requestContecxt is not on req', () => {
		const req = mockReq({ locals: {} });

		const result = config.getJWTContent(req);

		expect(result).toBeUndefined();
	});

	it('should return undefined when there is no locals on request', () => {
		const req = mockReq({});

		const result = config.getJWTContent(req);

		expect(result).toBeUndefined();
	});
});

describe('getAllApps', () => {
	let config: TenantsConfig;

	beforeEach(async () => {
		nock('http://mocked-url.com')
			.get('/api/1.0.0/modules/config')
			.reply(200, mockConfig);

		config = new TenantsConfig({
			apikey: '000-000',
			baseUrl: 'http://mocked-url.com/api/1.0.0',
			cronFrequency: '0 0 1 1 1'
		});

		await wait(500);
	});

	it('should get all apps', () => {
		const result = config.getAllApps();

		expect(result).toEqual(mockConfig.appsAccess);
	});
});

describe('getAppModuleConfig', () => {
	let config: TenantsConfig;

	beforeEach(async () => {
		nock('http://mocked-url.com')
			.get('/api/1.0.0/modules/config')
			.reply(200, mockConfig);

		config = new TenantsConfig({
			apikey: '000-000',
			baseUrl: 'http://mocked-url.com/api/1.0.0',
			cronFrequency: '0 0 1 1 1'
		});

		await wait(500);
	});

	it('should get a custom module config for a tenant', () => {
		const result = config.getAppModuleConfig('test-key');

		expect(result).toEqual({ test: true });
	});
	it('should handle a wrong tenantkey', () => {
		const result = config.getAppModuleConfig('wrong-key');

		expect(result).toEqual({});
	});
});

describe('getModuleContext', () => {
	let config: TenantsConfig;

	beforeEach(async () => {
		nock('http://mocked-url.com')
			.get('/api/1.0.0/modules/config')
			.reply(200, mockConfig);

		config = new TenantsConfig({
			apikey: '000-000',
			baseUrl: 'http://mocked-url.com/api/1.0.0',
			cronFrequency: '0 0 1 1 1'
		});

		await wait(500);
	});

	it('should get module context', () => {
		const result = config.getModuleContext();

		expect(result).toEqual(mockConfig.moduleConfiguration);
	});
});
