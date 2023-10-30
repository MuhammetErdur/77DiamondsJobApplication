const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  uncaught: 'exception',
  screenshotOnRunFailure: false,
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://testertest.77diamondstest.com/',
  },
})
