declare module '@acpaas/kafka-nodejs-helper' {
	export interface KafkaHeaders {
		timestamp: string;
		action: string;
		type: string;
		origin: string;
		correlationId: string;
		topic: string;
	}

	export interface KafkaMessage<T = unknown> {
		magicByte: number;
		attributes: number;
		timestamp: string;
		offset: string;
		key: string;
		value: T;
		headers: KafkaHeaders;
	}

	class Kafka {
		constructor(config: {
			kafkaHost: string;
			origin: string;
			ssl: {
				rejectUnauthorized: boolean;
				ca: string[]
				key: string;
				cert: string;
			},
		});

		subscribe(config: {
			topic: string;
			groupId: string;
			callback: (message: KafkaMessage) => void
		}): void;
	}

	export default Kafka;
}
