import gql from 'graphql-tag'

export const getPage = gql`
	query PageQuery($slug: String!, $preview: Boolean = false) {
		pageCollection(where: { slug: $slug }, limit: 1, preview: $preview) {
			items {
				pageModulesCollection {
					items {
						__typename
						sys {
							id
						}
					}
				}
			}
		}
	}
`
