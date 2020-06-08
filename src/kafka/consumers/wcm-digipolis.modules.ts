import { KafkaMessage } from '@acpaas/kafka-nodejs-helper';

import { KafkaConfig } from '../kafka.types';
import { AbstractKafkaConsumer } from './AbstractKafkaConsumer';

export class WcmDigipolisModulesConsumer extends AbstractKafkaConsumer {
	protected subscribe(config: KafkaConfig): void {
		this.kafka.subscribe({
			topic: config.topics.modules,
			groupId: config.subscribers.modules,
			callback: (message: KafkaMessage) => this.emit(message.key, message),
		});
	}
}
