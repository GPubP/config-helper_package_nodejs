export interface KafkaConfig {
	host: string;
	origin: string;
	ca: string;
	key: string;
	cert: string;
	topics: {
		system: string;
		tenants: string;
		modules: string;
	};
	subscribers: {
		system: string;
		tenants: string;
		modules: string;
	};
}
