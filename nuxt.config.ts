import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['@/assets/css/main.css', '@/assets/css/theme.css'],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	typescript: {
		strict: true,
	},

	runtimeConfig: {
		contentfulDeliveryToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
		public: {
			envType: process.env.ENV_TYPE,
			// Contentful
			contentfulEnvironment: process.env?.CONTENTFUL_ENVIRONMENT,
			contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
		},
	},

	modules: ['@nuxtjs/apollo', '@nuxt/eslint'],

	apollo: {
		clients: {
			default: {
				httpEndpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
			},
		},
	},

	compatibilityDate: '2024-09-05',
})
