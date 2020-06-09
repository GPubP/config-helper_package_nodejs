import nock from 'nock'

import { TenantsConfig } from '../src/index';
import * as mockConfig from './mocks/module-config.json';

describe('ApiKeyGuard', () => {
	let config: TenantsConfig;

	beforeEach((done) => {
		nock('http://mocked-url.com')
			.get('/api/1.0.0/modules/config')
			.reply(200, mockConfig);

		config = new TenantsConfig({
			apikey: '000-000',
			baseUrl: 'http://mocked-url.com',
			cronFrequency: '0 0 1 1 1',
		});

		// TODO: find a better way for this
		setTimeout(() => {
			done();
		}, 100);
	});

	it('should block requests without a header', () => {
		return config.apiKeyGuard({
			headers: {},
		} as any, null, (error) => {
			expect(error.status).toEqual(401);
			expect(error.code).toEqual('Unauthorized');
		});
	});

	it('should block requests with a wrong apikey', () => {
		return config.apiKeyGuard({
			headers: {
				apikey: 'incorrect',
			},
		} as any, null, (error) => {
			expect(error.status).toEqual(401);
			expect(error.code).toEqual('Unauthorized');
		});
	});

	it('should accept requests with a correct apikey', () => {
		return config.apiKeyGuard({
			headers: {
				apikey: '02666a7b-7219-488c-bab9-021f3dd8dad9',
			},
		} as any, null, (error) => {
			expect(error).toEqual(undefined);
		});
	});
});

describe('Request Module', () => {
	let config: TenantsConfig;

	beforeEach((done) => {
		nock('http://mocked-url.com')
			.get('/api/1.0.0/modules/config')
			.reply(200, mockConfig);

		config = new TenantsConfig({
			apikey: '000-000',
			baseUrl: 'http://mocked-url.com',
			cronFrequency: '0 0 1 1 1',
		});

		// TODO: find a better way for this
		setTimeout(() => {
			done();
		}, 100);
	});

	it('should make requests', () => {
		nock('http://test.be')
			.get('/test')
			.matchHeader('apikey', '02666a7b-7219-488c-bab9-021f3dd8dad9')
			.reply(200, 'OK');

		config.requestModule('super-coole-website', 'Users & Roles bsl', 'GET', '/test')
			.then((response) => {
				expect(response.body).toEqual('OK');
			});
	});
});
