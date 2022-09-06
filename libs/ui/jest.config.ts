/* eslint-disable */
export default {
  displayName: 'ui',
  preset: '../../jest.preset.js',
  moduleDirectories: ['src'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

  coverageDirectory: '../../coverage/libs/ui',
};
