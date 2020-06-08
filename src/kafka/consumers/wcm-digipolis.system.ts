import { KafkaMessage } from '@acpaas/kafka-nodejs-helper';

import { KafkaConfig } from '../kafka.types';
import { AbstractKafkaConsumer } from './AbstractKafkaConsumer';

export class WcmDigipolisSystemConsumer extends AbstractKafkaConsumer {
	protected subscribe(config: KafkaConfig): void {
		this.kafka.subscribe({
			topic: config.topics.system,
			groupId: config.subscribers.system,
			callback: (message: KafkaMessage) => this.emit(message.key, message),
		});
	}
}
