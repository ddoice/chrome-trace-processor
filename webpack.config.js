
const path = require('path');

const config = {
  mode: 'production',
  devtool: false,
  target: 'node',
  entry: {
    processor: './front_end/models/trace/Processor.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    extensionAlias: {
      '.js': ['.ts', '.d.ts', '.js'],
      '.mjs': ['.mts', '.mjs'],
    },
    fallback: {
      fs: false,
      'fs/node': false,
    },
    alias: {
      './App.js': false,
      './AppProvider.js': false,
      './Base64.js': false,
      './CharacterIdMap.js': false,
      './Color.js': false,
      './ColorConverter.js': false,
      './ColorUtils.js': false,
      './Console.js': false,
      './Debouncer.js': false,
      './EventTarget.js': false,
      './JavaScriptMetaData.js': false,
      './Lazy.js': false,
      './Linkifier.js': false,
      './Mutex.js': false,
      './Object.js': false,
      './Progress.js': false,
      './QueryParamHandler.js': false,
      './ResolverBase.js': false,
      './ResourceType.js': false,
      './Revealer.js': false,
      './Runnable.js': false,
      './SegmentedRange.js': false,
      './SettingRegistration.js': false,
      './Settings.js': false,
      './SimpleHistoryManager.js': false,
      './StringOutputStream.js': false,
      './TextDictionary.js': false,
      './Throttler.js': false,
      './Trie.js': false,
      './WasmDisassembly.js': false,
      './Worker.js': false,
    },
  },
  output: {
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs',
    filename: '[name].js',
  },
  optimization: {
    minimize: false,
  },
};

module.exports = config;
