import dotenv from 'dotenv'

const envFound = dotenv.config();

if (envFound.error) {
    // This error occured for development environment
    console.log(` ⚠️ Couldn't find .env file ⚠️ `)
}

export default {
    /**
     * Listening port
     */
    port: process.env.PORT,

    /**
     * MongoDB Url
     */
    databaseURL: process.env.DATABASE_URL,
    /**
     * API config
     */
    api: {
        prefix: '/quiz/api'
    },
    /**
     * Secret Key to generate the jwt token
     */
    secretKey: String(process.env.SECRET_KEY)
}