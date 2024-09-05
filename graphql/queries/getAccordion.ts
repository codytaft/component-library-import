import gql from 'graphql-tag'

export const accordionQuery = gql`
	query accordionQuery($id: String!, $preview: Boolean = false) {
		accordion(id: $id, preview: $preview) {
			accordionType
			accordionItemCollection {
				items {
					headline
					bodyCopy {
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
					image: icon {
						media {
							fileName
							src: url
						}
						altTag
					}
					color
				}
			}
		}
	}
`
