import { defineNuxtPlugin } from 'nuxt/app'
import { initGlobalComponents } from '@cooperco/cooper-component-library'

export default defineNuxtPlugin((nuxtApp) => {
	initGlobalComponents(nuxtApp.vueApp)
})
