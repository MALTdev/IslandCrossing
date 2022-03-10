<template>
  <q-page padding class="text-center" v-if="character">
	
	<h1>{{ character.name }}</h1>

    <section id="section-character-detail">
		<section id="section-character-informations">
			<div id="character-detail-image">
				<q-img id="character-image" :src="character.image" fit="scale-down"/>
			</div>
			<table>
				<tbody>
					<tr>
						<td class="character-label text-uppercase text-bold">Nom</td>
						<td>{{ character.name }}</td>
					</tr>
					<tr>
						<td class="character-label text-uppercase text-bold">Espèce</td>
						<td>{{ character.species.name }}</td>
					</tr>
					<tr>
						<td class="character-label text-uppercase text-bold">Date d'anniversaire</td>
						<td>{{ character.birthdayDate }}</td>
					</tr>
					<tr>
						<td class="character-label text-uppercase text-bold">Signe astrologique</td>
						<td>{{ character.astrologic }}</td>
					</tr>
				</tbody>
			</table>
		</section>
		<section id="section-character-description">
			<p>{{ character.description }}</p>
		</section>
	</section>
  </q-page>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useQuasar } from "quasar";
import { useCharactersStore } from "@/stores/characters"
import type { Character } from '@/stores/characters'
import { useRoute } from 'vue-router'

const route = useRoute()
const $q = useQuasar();
const charactersStore = useCharactersStore();

const character = ref<Character>(null)

onBeforeMount(async() => {
	try {
		character.value = await charactersStore.getCharacter(route.params.id);
		console.log(character.value)
	} catch (error) {
		$q.notify({
			message: "Une erreur est survenu. Veuillez conctacter un administrateur.",
			type: "negative",
		});
	}
})
</script>

<style scoped>
  @import '@/assets/css/wiki/character.css';
</style>

<style lang="scss" scoped>
  @import '@/assets/scss/wiki/character.scss';
</style>