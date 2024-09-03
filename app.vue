<script setup lang="ts">
import { Accordion } from '@cooperco/cooper-component-library'
const modules = [
	{
		title: 'What is it used for?',
		content: `The goal of genetic screening is to identify individuals who might be at risk for serious medical conditions. Our tests compare how variations in your child’s genes might be different from the general population. Thanks to decades of research, it\'s often possible to determine whether specific variants are associated with a genetic condition.`,
		Image: {
			media: {
				src: 'https://images.ctfassets.net/qqblaiss500w/3nsoVyV5ZMRE97iC8bOVKR/963789bfeb5d3f5394fd0d015e0d90ff/Frame_1967__6_.svg',
			},
		},
	},
	{
		title: 'Why is it important?',
		content: `Early detection of medical conditions may allow for faster diagnosis and treatment before symptoms appear.144 This allows you to potentially take proactive measures for your child which may include making healthy lifestyle changes or exploring preventive medical treatments. And, in the case of some rare disorders, early detection could even save your child’s life.144`,
		Image: {
			media: {
				src: 'https://images.ctfassets.net/qqblaiss500w/4OuH6bUhqcubwhyMTCO0yh/3d1f751f7344f3d320287188b8741eca/Frame_1967__7_.svg',
			},
		},
	},
	{
		title: 'Types of conditions',
		content: `Picture genetic testing options include analysis of as many as 1,500+ genes related to conditions including:\n &bull; Blood disorders\n &bull; Cancers\n &bull; Cardiovascular conditions\n &bull; Epilepsy\n &bull; Hearing and vision loss\n &bull; Immunodeficiency disorders\n &bull; Metabolic disorders\n &bull; Vision loss\n &bull; Other disorders`,
		Image: {
			media: {
				src: 'https://images.ctfassets.net/qqblaiss500w/1XtsrKpFB6Hbl06ikiC7Uf/ea26ced2ca10e9ac019933c4c2414625/Frame_1967__8_.svg',
			},
		},
	},
]
</script>

<template>
	<div>
		<Accordion type="List" :modules="modules" />
	</div>
</template>
