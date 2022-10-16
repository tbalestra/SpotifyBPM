export default {
	apps: [
		{
			name: 'dwjg-api',
			script: './server.js',
			env_production: {
				NODE_ENV: 'production'
			},
			env_development: {
				NODE_ENV: 'preview'
			},
			watch: true
		}
	]
};