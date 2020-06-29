//This file is loaded by next upon startup.
//Tell next to poll all files every 300ms
module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
};
