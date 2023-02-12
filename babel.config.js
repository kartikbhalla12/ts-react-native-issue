module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@api': './src/api',
          '@app': './src/app',
          '@components': './src/components',
          '@config': './src/config',
          '@constants': './src/constants',
          '@content': './src/content',
          '@hooks': './src/hooks',
          '@icons': './src/icons',
          '@interfaces': './src/interfaces',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@styles': './src/styles',
          '@types': './src/types',
          '@utils': './src/utils',
        },
      },
    ],
    ['react-native-paper/babel'],
    ['optional-require'],
  ],
};
