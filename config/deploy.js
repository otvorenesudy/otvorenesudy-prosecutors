/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {
      environment: deployTarget,
      outputPath: 'dist'
    },

    'revision-data': {
      type: 'git-commit'
    }
  };

  if (deployTarget === 'production') {
    var ssh = {
      host: 'otvorenesudy.sk',
      username: 'deploy',
      password: process.env.OTVORENESUDY_DEPLOY_PASSWORD
    }

    ENV['ssh-index'] = {
      host: ssh.host,
      username: ssh.username,
      remoteDir: '/home/deploy/projects/opencourts-prosecutors-production/',
      password: ssh.password,
      allowOverwrite: true
    };

    ENV.rsync = {
      ssh: true,
      host: `${ssh.username}@${ssh.host}`,
      password: ssh.password,
      dest: ENV['ssh-index'].remoteDir,
      delete: false,
      recursive: true
    };
  }

  return ENV;
};
