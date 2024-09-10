import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	overwrite: true,
	schema: [
		{
			[`https://graphql.contentful.com/content/v1/spaces/${
				process.env.CONTENTFUL_SPACE_ID
			}/environments/${process.env.CONTENTFUL_ENVIRONMENT ?? 'master'}`]: {
				headers: {
					Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
				},
			},
		},
	],
	documents: 'graphql/queries/!(*.d).{ts,tsx}',
	generates: {
		'./interfaces/queries.ts': {
			plugins: ['typescript-operations'],
		},
	},
	config: {
		skipSchema: true,
	},
}

export default config
