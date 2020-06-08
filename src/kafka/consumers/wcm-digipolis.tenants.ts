import { KafkaMessage } from '@acpaas/kafka-nodejs-helper';

import { KafkaConfig } from '../kafka.types';
import { AbstractKafkaConsumer } from './AbstractKafkaConsumer';

export class WcmDigipolisTenantsConsumer extends AbstractKafkaConsumer {
	protected subscribe(config: KafkaConfig): void {
		this.kafka.subscribe({
			topic: config.topics.tenants,
			groupId: config.subscribers.tenants,
			callback: (message: KafkaMessage) => this.emit(message.key, message),
		});
	}
}
