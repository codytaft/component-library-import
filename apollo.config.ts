// Settings for vscode plugin
module.exports = {
	client: {
		service: {
			name: 'cbr',
			// URL to the GraphQL API
			url: `https://graphql.contentful.com/content/v1/spaces/${
				process.env.CONTENTFUL_SPACE_ID
			}/environments/${process.env?.CONTENTFUL_ENVIRONMENT || 'master'}`,
			headers: {
				authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
			},
		},
		// Files processed by the extension
		includes: ['src/**/*.vue', 'src/**/*.js'],
	},
}
