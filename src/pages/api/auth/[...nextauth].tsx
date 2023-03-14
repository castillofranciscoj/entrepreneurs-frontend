import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import LinkedInProvider from 'next-auth/providers/linkedin'
import { TypeORMLegacyAdapter } from '@next-auth/typeorm-legacy-adapter'

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		LinkedInProvider({
			clientId: process.env.LINKEDIN_CLIENT_ID,
			clientSecret: process.env.LINKEDIN_CLIENT_SECRET
		  }),
	],
	secret : process.env.JWT_SECRET,
	adapter: TypeORMLegacyAdapter({
		type: 'postgres',  // or mysql, postgresql, mssql
		host: process.env.DB_HOST,
		port: 5432,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		synchronize: true
	  }),
})