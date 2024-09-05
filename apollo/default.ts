import { defineApolloClient } from '@nuxtjs/apollo'

export default defineApolloClient({
	// The GraphQL endpoint.
	httpEndpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,

	// Provide a GraphQL endpoint to be used client-side. Overrides `httpEndpoint`.
	// BrowserHttpEndpoint: '/graphql',

	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'cache-and-network',
		},
	},

	// Specify if the client should solely use WebSocket.
	// Requires  `wsEndpoint`.
	websocketsOnly: false,
})
