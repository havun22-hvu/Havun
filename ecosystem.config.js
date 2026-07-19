module.exports = {
  apps: [{
    name: 'havun-website',
    cwd: '/var/www/havun.nl',
    // Run the next binary directly (not `npm start` -> `sh -c` -> next).
    // The wrapper layers detach the real listener from pm2, which then loses
    // tracking (status "errored", pid 0) while the orphaned next-server keeps
    // holding port 3003 -> EADDRINUSE restart loop. Pointing pm2 straight at the
    // binary keeps exactly one process that pm2 can track and restart.
    script: './node_modules/next/dist/bin/next',
    args: 'start -p 3003',
    env: {
      NODE_ENV: 'production'
    }
  }]
}
