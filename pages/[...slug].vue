<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { getPage } from '../graphql/queries/getPage'

const route = useRoute()

const router = useRouter()

const { data: pages, error } = await useAsyncQuery(getPage, {
	slug: normalizePath(route.path),
})

// Error handling
if (error) {
	// TODO: handle error
}

// Redirect if page doesn't exist - probably better in middeware to avoid flash
if ((pages.value?.pageCollection?.items.length ?? 0) == 0) {
	router.push('/')
}

const page = pages.value?.pageCollection?.items[0]
</script>

<template>
	<div>
		<div v-if="page?.pageModulesCollection?.items">
			<!-- Render each Module -->
			<template
				v-for="pageModule in page.pageModulesCollection.items"
				:key="pageModule.sys?.id"
			>
				<ModuleWrapper
					v-if="pageModule.sys?.id && pageModule.__typename"
					:="{
						typeName: pageModule.__typename,
						id: pageModule.sys?.id,
					}"
				/>
			</template>
		</div>
	</div>
</template>
