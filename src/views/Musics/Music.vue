<template>
  <q-page padding class="text-center">
	
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
import { ref } from 'vue'

const music = ref<Object>(
	{
		id: 1,
		name: 'Imperial K.K',
		image: 'https://dodo.ac/np/images/thumb/9/9a/Imperial_K.K._NH_Texture.png/256px-Imperial_K.K._NH_Texture.png',
		audioFile: 'https://dodo.ac/np/images/1/1a/NH_Imperial_K.K._%28Aircheck%2C_Hi-Fi%29.flac',
		genre: 'Chinese folk',
		description: '"Imperial K.K." is a K.K. Slider song that first appears in Doubutsu no Mori. It is based on the traditional Chinese music, and derives its name from China\'s history as an imperial state prior to the downfall of the Qing dynasty in 1912. It has a gong, a few Asian gamelans, lutes, horns, and other Asian percussion.'
	},
)

</script>

<style scoped>
  @import '@/assets/css/wiki/music.css';
</style>

<style lang="scss" scoped>
  @import '@/assets/scss/wiki/music.scss';
</style>