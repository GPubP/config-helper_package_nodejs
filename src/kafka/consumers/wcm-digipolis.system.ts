import Kafka, { KafkaMessage } from '@acpaas/kafka-nodejs-helper';
import { EventEmitter } from 'events';

import { KafkaConfig } from '../kafka.types';

class WcmDigipolisSystemConsumer extends EventEmitter {
	constructor(kafkaInstance: Kafka, config: KafkaConfig) {
		super();

		kafkaInstance.subscribe({
			topic: config.systemTopic,
			groupId: config.systemGroupId,
			callback: (message: KafkaMessage) => this.emit(message.key, message),
		});
	}
}

export { WcmDigipolisSystemConsumer };
