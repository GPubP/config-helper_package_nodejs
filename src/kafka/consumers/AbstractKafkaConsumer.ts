import Kafka from '@acpaas/kafka-nodejs-helper';
import { EventEmitter } from 'events';

import { KafkaConfig } from '../kafka.types.js';

export abstract class AbstractKafkaConsumer extends EventEmitter {
	protected kafkaConfig: KafkaConfig;
	protected kafka: Kafka;

	constructor(kafkaInstance: Kafka, kafkaConfig: KafkaConfig) {
		super();

		this.kafkaConfig = kafkaConfig;
		this.kafka = kafkaInstance;

		if (!kafkaConfig.host) {
			return;
		}

		this.subscribe(this.kafkaConfig);
	}

	public on(name: string, handler: (...args: unknown[]) => void): this;
	public on(name: string[], handler: (...args: unknown[]) => void): this;
	public on(
		names: string | string[],
		handler: (...args: unknown[]) => void,
	): this {
		if (!Array.isArray(names)) {
			return super.on(names as string, handler);
		}

		names.forEach((name) => super.on(name, handler));

		return this;
	}

	protected abstract subscribe(config: KafkaConfig): void;
}
