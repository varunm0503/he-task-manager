module.exports = {
    preset: 'ts-jest',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
    },
  };