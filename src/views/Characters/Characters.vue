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
		<CharacterCard
			v-for="character in characters"
			:key="character.id"
			:id="character.id"
			:name="character.name"
			:image="character.photoImage"
		/>
	</section>
  </q-page>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, ref } from 'vue'
import CharacterCard from '@/components/Cards/Character.vue'
import { useQuasar } from "quasar";
import { useCharactersStore } from "@/stores/characters";
import type { Character } from "@/stores/characters";


const $q = useQuasar();
const charactersStore = useCharactersStore();

const characters = ref<Array<Character>>([])

onBeforeMount(async () => {
	try {
		characters.value = await charactersStore.getCharacters();
	} catch (error) {
		$q.notify({
			message: "Une erreur est survenu. Veuillez conctacter un administrateur.",
			type: "negative",
		});
	}
})
</script>

<style scoped>
  @import '@/assets/css/wiki/listing.css';
</style>