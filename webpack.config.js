module.exports = {
  context: __dirname + '/src',
  entry: './identicon.js',
  output: {
    path: __dirname,
    filename: 'index.js',
    library: 'Identicon',
    libraryTarget: 'umd'
  }
};
