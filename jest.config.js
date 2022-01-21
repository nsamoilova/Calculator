module.exports = {
    moduleNameMapper: {
        '.(css|less|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
        "^redux_main/(.+)$": "<rootDir>/src/redux/$1",
        "^components/(.+)$": "<rootDir>/src/components/$1"
      },
}