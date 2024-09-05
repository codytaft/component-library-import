/**
 * Source: https://apollo.nuxtjs.org/recipes/authentication
 * Provides the auth token to the apollo client defined in nuxt.config
 */
import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app'
import type { ErrorResponse } from '@nuxtjs/apollo'
import type { GraphQLErrors, NetworkError } from '@apollo/client/errors'

export default defineNuxtPlugin((nuxtApp) => {
	const runtimeConfig = useRuntimeConfig()
	const $error = nuxtApp.$error as (error: NetworkError | GraphQLErrors) => void
	// For handling "Authentication failed. The access token is missing from the headers." error

	nuxtApp.hook('apollo:auth', ({ token }) => {
		// Apply apollo client token
		token.value = runtimeConfig.contentfulDeliveryToken
	})

	// Nuxt Apollo error hook
	nuxtApp.hook('apollo:error', (error: ErrorResponse) => {
		if (error.networkError) {
			$error(error.networkError)
		}
		if (error.graphQLErrors) {
			$error(error.graphQLErrors)
		}
	})
})
