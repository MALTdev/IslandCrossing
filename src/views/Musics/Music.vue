<template>
  <q-page padding class="text-center" v-if="music">
	
	<section id="section-music">
		<section id="section-music-image">
			<h1>{{ music.name }}</h1>
			<div id="music-image-and-audio">
				<q-img :src="music.image" class="music-image" fit="cover"/>
				<audio class="audiofile" controls>
					<source :src="music.audioFile" type="audio/mp3"/>
				</audio>
				<span id="music-genre">{{ music.genre }}</span>
			</div>
		</section>
		
		<section id="music-more-info">
			<p>{{ music.description }}</p>
		</section>
	</section>    
  </q-page>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useQuasar } from "quasar";
import { useMusicsStore } from "@/stores/musics"
import type { Music } from '@/stores/musics'
import { useRoute } from 'vue-router'

const route = useRoute()
const $q = useQuasar();
const musicsStore = useMusicsStore();

const music = ref<Music>(null)

onBeforeMount(async() => {
	try {
		music.value = await musicsStore.getMusic(route.params.id);
		console.log(music.value)
	} catch (error) {
		$q.notify({
			message: "Une erreur est survenu. Veuillez conctacter un administrateur.",
			type: "negative",
		});
	}
})
</script>

<style scoped>
  @import '@/assets/css/wiki/music.css';
</style>

<style lang="scss" scoped>
  @import '@/assets/scss/wiki/music.scss';
</style>