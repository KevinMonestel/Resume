const configs = {
    development: {
        ENV_TYPE: 'Ambiente desarrollo'
    },
    staging: {
        ENV_TYPE: 'Ambiente staging'
    },
    production: {
        ENV_TYPE: 'Ambiente productivo'
    }
}

const nodeEnv = process.env.NODE_ENV;

module.exports = configs[nodeEnv];