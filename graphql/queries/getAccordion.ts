import gql from 'graphql-tag'

export const accordionQuery = gql`
	query accordionQuery($id: String!, $preview: Boolean = false) {
		accordion(id: $id, preview: $preview) {
			accordionType
			accordionItemCollection {
				items {
					headline
					copy {
						json
						links {
							entries {
								inline {
									sys {
										id
									}
								}
							}
						}
					}
					icon {
						media {
							fileName
						}
						altTag
					}
					color
				}
			}
		}
	}
`
