<template>
  <q-page padding class="text-center">
    <q-card>
		<q-card-section>
			<h2>Les personnages des Jeux Animal Crossing</h2>
		</q-card-section>
		<q-card-section>
			<p>Cette catégorie regroupe tous les personnages qui ne sont pas villageois à part entière et qui ont un rôle particulier.</p>
		</q-card-section>
	</q-card>

	<section id="section-list">
		<Character
			v-for="character in characters"
			:key="character.id"
			:id="character.id"
			:name="character.name"
			:image="character.image"
		/>
	</section>
  </q-page>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import Character from '@/components/Cards/Character.vue'

const characters = ref<Array<Object>>([
	{
		id: 1,
		name: 'Nook',
		image: 'https://www.vhv.rs/dpng/d/435-4350892_animal-crossing-tom-nook-png-transparent-png.png',
	},
	{
		id: 2,
		name: 'Méli',
		image: 'https://nsa40.casimages.com/img/2020/08/16/200816115540372263.png',
	},
	{
		id: 3,
		name: 'Mélo',
		image: 'https://img.over-blog-kiwi.com/0/71/74/43/20200117/ob_806705_aurore.png',
	},
	{
		id: 4,
		name: 'Marie',
		image: 'http://ekladata.com/nEB5HtzvOnrdbPm2weTMbVfGM14.png',
	}
])

</script>

<style scoped>
  @import '@/assets/css/wiki/listing.css';
</style>