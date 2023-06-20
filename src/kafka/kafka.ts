import Kafka from '@acpaas/kafka-nodejs-helper';

import { KafkaConfig } from './kafka.types';

export const createKafkaInstance = (config: KafkaConfig) =>
	new Kafka({
		kafkaHost: config.host,
		origin: config.origin,
		...(config.ca
			? {
				ssl: {
					rejectUnauthorized: true,
					ca: [config.ca],
					key: config.key,
					cert: config.cert
				}
			}
			: null)
	});
