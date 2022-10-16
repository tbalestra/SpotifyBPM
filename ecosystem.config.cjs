module.exports = {
	apps: [
		{
			name: 'dwjg-api',
			script: './server.js',
			env_production: {
				NODE_ENV: 'production'
			},
			env_preview: {
				NODE_ENV: 'preview'
			},
			watch: true
		}
	]
};