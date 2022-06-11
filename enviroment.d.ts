declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_MONGO_URL: string;
			NEXT_PUBLIC_MONGO_DB: string;
			NODE_ENV: 'development' | 'production';
			PORT?: string;
			PWD: string;
		}
	}
}
