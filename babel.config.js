module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: ['js', 'jsx', '.json'],
        alias: {
          components: './components',
          pages: '/pages',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
