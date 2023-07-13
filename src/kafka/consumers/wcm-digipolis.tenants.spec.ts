import Kafka from '@acpaas/kafka-nodejs-helper';
import { jest } from '@jest/globals';

import { WcmDigipolisTenantsConsumer } from './wcm-digipolis.tenants';
import { wait } from '../../../test/helpers/wait';
import { KafkaConfig } from '../kafka.types';

const kafkaMock = {
	subscribe: jest.fn(async ({ callback }) => {
		await wait(1);
		callback({
			key: 'some-key',
			body: {}
		});
	})
} as unknown as Kafka;

describe('[UNIT - KAFKA] wcm-digipolis.tenants consumer', () => {
	it('should not subscribe to kafka topic if no host is specified', () => {
		const kafkaConfig = {
			host: '',
			topics: {
				system: 'system-topic',
				modules: 'modules-topic',
				tenants: 'tenants-topic'
			},
			subscribers: {
				system: 'subscriber-system',
				modules: 'subscriber-modules',
				tenants: 'subscriber-tenants'
			}
		} as unknown as KafkaConfig;
		new WcmDigipolisTenantsConsumer(kafkaMock, kafkaConfig);

		expect(kafkaMock.subscribe).toHaveBeenCalledTimes(0);
	});

	it('should subscribe to system kafka event', async () => {
		const listenerFunc = jest.fn();
		const kafkaConfig = {
			host: 'some-host',
			topics: {
				system: 'system-topic',
				modules: 'modules-topic',
				tenants: 'tenants-topic'
			},
			subscribers: {
				system: 'subscriber-system',
				modules: 'subscriber-modules',
				tenants: 'subscriber-tenants'
			}
		} as unknown as KafkaConfig;
		const instance = new WcmDigipolisTenantsConsumer(
			kafkaMock,
			kafkaConfig,
		);

		instance.on('some-key', listenerFunc);

		await wait(1);

		expect(kafkaMock.subscribe).toHaveBeenCalled();
		expect(
			(kafkaMock.subscribe as jest.Mock).mock.calls[0][0],
		).toHaveProperty('topic', 'tenants-topic'),
		expect(
			(kafkaMock.subscribe as jest.Mock).mock.calls[0][0],
		).toHaveProperty('groupId', 'subscriber-tenants'),
		expect(listenerFunc).toHaveBeenCalledWith({
			key: 'some-key',
			body: {}
		});
	});
});
