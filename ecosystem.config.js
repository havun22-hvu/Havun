module.exports = {
  apps: [{
    name: 'havun-website',
    cwd: '/var/www/havun.nl',
    script: 'npm',
    args: 'start',
    env: {
      PORT: 3003,
      NODE_ENV: 'production'
    }
  }]
}
