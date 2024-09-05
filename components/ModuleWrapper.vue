<script lang="ts">
export interface ModuleWrapperProps {
	typeName: string
	id: string
}
</script>

<script setup lang="ts">
// components and types
import {
	Accordion,
	type AccordionType,
} from '@cooperco/cooper-component-library'

// queries
import { accordionQuery } from '~/graphql/queries/getAccordion'

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
			console.log({ res })

			moduleContent = res.value?.accordion

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
		<component
			:is="moduleType"
			v-bind="{
				...moduleContent,
			}"
		/>
	</template>
</template>
