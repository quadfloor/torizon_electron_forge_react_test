const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{
    loader: 'style-loader',
    options: {
      esModule: false,
    }
  },
  {
    loader: 'css-loader',
    options: {
      esModule: false,
      modules: {}
    }
  }],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};
