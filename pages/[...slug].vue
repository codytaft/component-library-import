<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { getPage } from '../graphql/queries/getPage'
import { useRoute, normalizePath, useAsyncQuery } from '#imports'

// import type { Page, PageQuery } from '../interfaces/contentfulTypes';

const route = useRoute()
console.log({ route })

// const router = useRouter();

const { data: pages, error } = await useAsyncQuery(getPage, {
	slug: normalizePath(route.path),
})

// Error handling
if (error) {
	// TODO: log error
}
if (pages.value) {
	console.log({ pages: pages.value })
}
// Redirect if page doesn't exist - probably better in middeware to avoid flash
if ((pages.value?.pageCollection?.items.length ?? 0) == 0) {
	// router.push('/');
}

const page = pages.value?.pageCollection?.items[0]
</script>

<template>
	<div v-if="page?.contentModulesCollection?.items">
		<!-- Render each Module -->
		<template
			v-for="contentModule in page.contentModulesCollection.items"
			:key="contentModule.sys?.id"
		>
			<ModuleWrapper
				v-if="contentModule.sys?.id && contentModule.__typename"
				:="{
					typeName: contentModule.__typename,
					id: contentModule.sys?.id,
				}"
			/>
		</template>
	</div>
</template>
