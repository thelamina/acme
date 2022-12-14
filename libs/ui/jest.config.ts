/* eslint-disable */
export default {
  displayName: 'ui',
  preset: '../../jest.preset.js',
  // moduleDirectories: ['src'],
  // transform: {
  //   '^.+\\.[tj]sx?$': 'babel-jest',
  // },
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

  coverageDirectory: '../../coverage/libs/ui',
};
