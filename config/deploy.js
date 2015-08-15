module.exports = {
   production: {
    store: {
      host: 'catfish.redistogo.com',
      port: 9896,
      password: process.env['REDIS_PW']
    },
    assets: {
      accessKeyId: 'AKIAJ25XK75XSVWI7UPQ',
      secretAccessKey: process.env['AWS_ACCESS_KEY'],
      bucket: 'tektronix-metacatalog',
      prefix: 'webapp'
    },
    tagging: 'package'
  },

  docker: {
    buildEnv: 'docker',
    //boot2docker ssh -L 6379:localhost:6379
    store: {
      host: 'localhost',
      port: 6379
    }
  }
};
