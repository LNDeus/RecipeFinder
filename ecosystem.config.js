module.exports = {
  apps: [
    {
      name: process.env.PM2_APP_NAME,
      script: 'app/bin/server.js',
      exec_mode: 'cluster',
      watch: ['**/*.js', '**/*.json', '**/*.txt'],
      env_localhost: {
        NODE_ENV: 'localhost',
        autorestart: false,
        instances: 1,
      },
      env_production: {
        autorestart: false,
        watch: false,
        instances: 'max',
        NODE_ENV: 'production',
      },
    },
  ],
};
