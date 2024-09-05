import type { DocumentNode } from 'graphql'

// General function to call the graphql endpoint
export const queryById = async function <T>(
	query: DocumentNode,
	moduleId: string,
	options: object = {}
) {
	const { data, error } = await useAsyncQuery<T>(
		{
			query,
			variables: { id: moduleId },
		},
		options
	)

	if (error) {
		// eslint-disable-next-line capitalized-comments
		// log.error(`error querying id: ${moduleId}`);
		// console.log(`error querying id: ${moduleId}`);
	}
	return data
}
