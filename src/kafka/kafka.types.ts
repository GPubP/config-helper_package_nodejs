export interface KafkaConfig {
	host: string;
	origin: string;
	ca: string;
	key: string;
	cert: string;
	systemTopic: string;
	systemGroupId: string;
}
