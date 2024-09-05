<script lang="ts"></script>

<script setup lang="ts">
// components and types
import {
	Accordion,
	type AccordionType,
} from '@cooperco/cooper-component-library'

// queries
import { accordionQuery } from '~/graphql/queries/getAccordion'
export interface ModuleWrapperProps {
	typeName: string
	id: string
}

const props = defineProps<ModuleWrapperProps>()
// Should match 1:1 with type PageContentModulesItem in contentfulTypes.ts
const ModuleTypeName = {
	Accordion: 'Accordion',
} as const

interface ComponentModuleWrapper {
	moduleType: typeof Accordion

	moduleContent: AccordionType
}

let renderModule: boolean = true

const fetchData = async () => {
	let moduleType: ComponentModuleWrapper['moduleType']
	let moduleContent: ComponentModuleWrapper['moduleContent']

	switch (ModuleTypeName[props.typeName as keyof typeof ModuleTypeName]) {
		case ModuleTypeName.Accordion: {
			moduleType = markRaw(Accordion)

			const res = await queryById(accordionQuery, props.id)
			let responseValue = res.value?.accordion || {}
			if (responseValue?.accordionItemCollection?.items) {
				const items = responseValue.accordionItemCollection.items.map(
					(item) => {
						const { richText, highlightedColors } = parseRichTextField(
							item?.bodyCopy
						)
						return {
							...item,
							bodyCopy: richText,
							highlightedColors,
						}
					}
				)
				responseValue = { ...responseValue, accordionItemCollection: { items } }
			}
			moduleContent = {
				type: responseValue.accordionType,
				modules: responseValue.accordionItemCollection?.items,
			}
			break
		}

		default:
			renderModule = false
			return {} as ComponentModuleWrapper
	}
	return { moduleContent, moduleType }
}

const { moduleContent, moduleType } = await fetchData()
</script>

<template>
	<template v-if="renderModule">
		<div>
			<component
				:is="moduleType"
				v-bind="{
					...moduleContent,
				}"
			/>
		</div>
	</template>
</template>
