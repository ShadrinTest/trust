const { setHeadlessWhen } = require("@codeceptjs/configure");

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Appium: {
      platform: "Android",
      waitForTimeout: 20000,
      device: "emulator",
      desiredCapabilities: {
        app:
          "/Users/rinatmachmutov/Desktop/demo_Trust/apk/v1.11.0-googlePlay-release.apk",

        platformName: "Android",
        platformVersion: "7.0",
        appPackage: "com.wallet.crypto.trustapp",
        appActivity: ".ui.start.activity.StartActivity",
        // autoGrantPermissions: true,
        // noReset: true,
        // adbExecTimeout: 120000,
        // noSign: true,
      },
    },
  },
  include: {
    I: "./steps_file.js",
  },
  bootstrap: null,
  mocha: {},
  name: "demo_Trust",
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
