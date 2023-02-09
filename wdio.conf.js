const { join } = require('path')
const allure = require('allure-commandline')
const video = require('wdio-video-reporter');
exports.config = {

        runner: 'local',
    framework: 'mocha',
    user: "sharedpastel_ZgERxO",
    key: "ZzpJx1D7ExhXxE8G4gmv",
    app: "bs://ed9a0aba7d2b508f5bc68a3c7ad1808d48cd6ff6",
    sync: true,
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'localhost',
    waitforTimeout: 20000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 1,
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }],

        [video, {
            saveAllVideos: true,       // If true, also saves videos for successful test cases
            videoSlowdownMultiplier: 15, // Higher to get slower videos, lower for faster videos [Value 1-100]
        }]

    ],
    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })

    },
    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        if (error) {
            driver.takeScreenshot();
        }
    },


    services: ['browserstack'],
    specs: [
        './tests/specs/e2eCadastro.spec.js'
    ],

    //port: 4723,

    mochaOpts: {

        timeout: 300000
    },


    capabilities: [
        {

            'app': 'bs://ed9a0aba7d2b508f5bc68a3c7ad1808d48cd6ff6',
            'device': 'Samsung Galaxy S22 Ultra',
            'os_version': '12.0',
            'project': 'First NodeJS project',
            'build': 'browserstack-build-1',
            'name': 'first_test',


            'browserstack.local': false,
            'browserstack.debug': true
        },


    ]
};

