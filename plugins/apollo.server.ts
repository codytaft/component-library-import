/**
 * Source: https://apollo.nuxtjs.org/recipes/authentication
 * Provides the auth token to the apollo client defined in nuxt.config
 */
import { defineNuxtPlugin } from 'nuxt/app'
import type { ErrorResponse } from '@nuxtjs/apollo'

export default defineNuxtPlugin((nuxtApp) => {
	const runtimeConfig = useRuntimeConfig()
	const cookie = useCookie('cbr')

	nuxtApp.hook('apollo:auth', ({ token }) => {
		// Apply apollo client token
		token.value = runtimeConfig.contentfulDeliveryToken
		cookie.value = runtimeConfig.contentfulDeliveryToken
	})
	// Nuxt Apollo error hook
	nuxtApp.hook('apollo:error', (error: ErrorResponse) => {
		if (error.networkError) {
			console.error(error.graphQLErrors)
			return error.networkError
		}
		if (error.graphQLErrors) {
			console.error(error.graphQLErrors)
			return error.graphQLErrors
		}
	})
})
