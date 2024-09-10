export type AccordionQueryQueryVariables = Exact<{
	id: Scalars['String']['input']
	preview?: InputMaybe<Scalars['Boolean']['input']>
}>

export type AccordionQueryQuery = {
	__typename?: 'Query'
	accordion?: {
		__typename?: 'Accordion'
		accordionType?: string | null
		accordionItemCollection?: {
			__typename?: 'AccordionAccordionItemCollection'
			items: Array<{
				__typename?: 'AccordionItem'
				headline?: string | null
				color?: string | null
				bodyCopy?: {
					__typename?: 'AccordionItemBodyCopy'
					json: any
					links: {
						__typename?: 'AccordionItemBodyCopyLinks'
						entries: {
							__typename?: 'AccordionItemBodyCopyEntries'
							inline: Array<
								| {
										__typename?: 'Accordion'
										sys: { __typename?: 'Sys'; id: string }
								  }
								| {
										__typename?: 'AccordionItem'
										sys: { __typename?: 'Sys'; id: string }
								  }
								| {
										__typename?: 'Image'
										sys: { __typename?: 'Sys'; id: string }
								  }
								| {
										__typename?: 'Link'
										sys: { __typename?: 'Sys'; id: string }
								  }
								| {
										__typename?: 'MigrationVersionTracker'
										sys: { __typename?: 'Sys'; id: string }
								  }
								| {
										__typename?: 'Page'
										sys: { __typename?: 'Sys'; id: string }
								  }
								| {
										__typename?: 'PageMetadata'
										sys: { __typename?: 'Sys'; id: string }
								  }
								| {
										__typename?: 'TestimonialModule'
										sys: { __typename?: 'Sys'; id: string }
								  }
								| {
										__typename?: 'TileLabel'
										sys: { __typename?: 'Sys'; id: string }
								  }
								| {
										__typename?: 'Video'
										sys: { __typename?: 'Sys'; id: string }
								  }
								| null
							>
						}
					}
				} | null
				image?: {
					__typename?: 'Image'
					altTag?: string | null
					media?: {
						__typename?: 'Asset'
						fileName?: string | null
						src?: string | null
					} | null
				} | null
			} | null>
		} | null
	} | null
}

export type PageQueryQueryVariables = Exact<{
	slug: Scalars['String']['input']
	preview?: InputMaybe<Scalars['Boolean']['input']>
}>

export type PageQueryQuery = {
	__typename?: 'Query'
	pageCollection?: {
		__typename?: 'PageCollection'
		items: Array<{
			__typename?: 'Page'
			pageModulesCollection?: {
				__typename?: 'PagePageModulesCollection'
				items: Array<
					| { __typename: 'Accordion'; sys: { __typename?: 'Sys'; id: string } }
					| {
							__typename: 'AccordionItem'
							sys: { __typename?: 'Sys'; id: string }
					  }
					| { __typename: 'Image'; sys: { __typename?: 'Sys'; id: string } }
					| { __typename: 'Link'; sys: { __typename?: 'Sys'; id: string } }
					| {
							__typename: 'MigrationVersionTracker'
							sys: { __typename?: 'Sys'; id: string }
					  }
					| { __typename: 'Page'; sys: { __typename?: 'Sys'; id: string } }
					| {
							__typename: 'PageMetadata'
							sys: { __typename?: 'Sys'; id: string }
					  }
					| {
							__typename: 'TestimonialModule'
							sys: { __typename?: 'Sys'; id: string }
					  }
					| { __typename: 'TileLabel'; sys: { __typename?: 'Sys'; id: string } }
					| { __typename: 'Video'; sys: { __typename?: 'Sys'; id: string } }
					| null
				>
			} | null
		} | null>
	} | null
}
