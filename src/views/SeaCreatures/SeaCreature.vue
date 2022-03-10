<template>
  <q-page padding class="text-center" v-if="seaCreature">
	
	<h1>Créature : {{ seaCreature.name }}</h1>

    <section id="section-sea-creature-detail">
		Prix de vente : {{ seaCreature.price }} clochettes
	</section>
  </q-page>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useQuasar } from "quasar";
import { useSeaCreaturesStore } from "@/stores/seaCreatures"
import type { SeaCreature } from '@/stores/seaCreatures'
import { useRoute } from 'vue-router'

const route = useRoute()
const $q = useQuasar();
const seaCreaturesStore = useSeaCreaturesStore();

const seaCreature = ref<SeaCreature>(null)

onBeforeMount(async() => {
	try {
		seaCreature.value = await seaCreaturesStore.getSeaCreature(route.params.id);
		console.log(seaCreature.value)
	} catch (error) {
		$q.notify({
			message: "Une erreur est survenu. Veuillez conctacter un administrateur.",
			type: "negative",
		});
	}
})
</script>

<style scoped>
  @import '@/assets/css/wiki/sea-creature.css';
</style>

<style lang="scss" scoped>
  @import '@/assets/scss/wiki/sea-creature.scss';
</style>