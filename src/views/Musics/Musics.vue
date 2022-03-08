<template>
  <q-page padding class="text-center">
    <q-card>
		<q-card-section>
			<h2>Les musiques des Jeux Animal Crossing</h2>
		</q-card-section>
		<q-card-section>
			<p>Cette catégorie regroupe tous les musiques présentes dans les différents jeux animal crossing.</p>
		</q-card-section>
	</q-card>

	<section id="section-list">
		<Music
			v-for="music in musics"
			:key="music.id"
			:id="music.id"
			:name="music.name"
			:image="music.image"
		/>
	</section>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Music from '@/components/Cards/Music.vue'

const musics = ref<Array<Object>>([
	{
		id: 1,
		name: 'Agent K.K',
		image: 'https://dodo.ac/np/images/thumb/8/83/Agent_K.K._NH_Texture.png/256px-Agent_K.K._NH_Texture.png',
	},
	{
		id: 2,
		name: 'Bubblegum K.K',
		image: 'https://dodo.ac/np/images/thumb/6/69/Bubblegum_K.K._NH_Texture.png/256px-Bubblegum_K.K._NH_Texture.png',
	},
	{
		id: 3,
		name: 'Hypno K.K',
		image: 'https://dodo.ac/np/images/thumb/d/d1/Hypno_K.K._NH_Texture.png/256px-Hypno_K.K._NH_Texture.png',
	},
	{
		id: 4,
		name: 'Imperiak K.K',
		image: 'https://dodo.ac/np/images/thumb/9/9a/Imperial_K.K._NH_Texture.png/256px-Imperial_K.K._NH_Texture.png',
	}
])

</script>

<style scoped>
  @import '@/assets/css/wiki/listing.css';
</style>