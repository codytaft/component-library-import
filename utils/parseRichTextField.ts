import {
	documentToHtmlString,
	type Options,
} from '@contentful/rich-text-html-renderer'

import { INLINES, type Node } from '@contentful/rich-text-types'

// import type {
// 	CustomizedLink,
// 	DynamicValue,
// 	HighlightedText,
// 	Maybe,
// 	ModuleDetailsBodyCopyEntries,
// 	ModuleDetailsBodyCopyLinks,
// 	NoBreakText,
// 	Sys,
// } from '../interfaces/contentfulTypes'

// Object containing the variables to be used in the dynamic values
const vars: { [key: string]: unknown } = {}

// Function to handle the inline entries
const handleInlineEntry = (entry) => {
	const entryTypeHandlers: { [key: string]: () => string } = {
		NoBreakText: () => `<span class="text-nowrap">${entry.text}</span>`, // Non breakable text
		HighlightedText: () =>
			`<span class="text-${entry.color}">${entry.text}</span>`, // Highlighted text
		CustomizedLink: () =>
			`<a href="${entry.url}" aria-label="${entry.ariaLabel}">${entry.text}</a>`, // Customized link with text, url and aria-label
		DynamicValue: () =>
			vars[entry.key as string] ? `${vars[entry.key as string]}` : '', // Dynamic value to be replaced with the actual value
	}
	const handler =
		entryTypeHandlers[(entry as { __typename: string }).__typename]
	return handler ? handler() : ''
}

export function parseRichTextField(contentfulField: ContentfulField) {
	// Map to store inline entries, the entryMap will be used to get the entry by id
	const entryMap = new Map()

	// Object to store the highlighted colors for each field
	let highlightedColors: string[] = []

	contentfulField.links?.entries.inline.forEach((entry) => {
		entryMap.set(entry.sys?.id, entry) // Store the inline entries in the map

		// Store the highlighted colors for each field
		if (entry.color) {
			highlightedColors = [...(highlightedColors || []), entry.color]
		}
	})

	// Options for rich text rendering
	const options: Options = {
		renderNode: {
			[INLINES.EMBEDDED_ENTRY]: (node: Node) => {
				const entry = entryMap.get(node.data.target.sys.id)
				return entry && handleInlineEntry(entry)
			},
		},
		preserveWhitespace: true,
	}

	const taggedRichText = documentToHtmlString(contentfulField.json, options) // Contentful function to convert rich text to HTML

	// Remove the <p> tags if the rich text is wrapped in <p> tags, Contentful wraps the rich text in <p> tags
	const richText = taggedRichText.replace(/^<p>(.*?)<\/p>$/s, '$1')

	return {
		richText,
		highlightedColors,
	}
}
