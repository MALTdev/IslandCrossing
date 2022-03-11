<template>
  <q-page padding class="text-center" v-if="seaCreature">
	
	<h1>Créature : {{ seaCreature.name }}</h1>

    <section id="section-sea-creature-detail">
		<q-img class="sea-creature-image" :src="seaCreature.image_url" fit="scale-down"/>
	</section>
	<section>
		<p><span class="text-bold">Période :</span> {{ seaCreature.period }}</p>
		<p><span class="text-bold">Heures :</span> {{ seaCreature.hours }}</p>
		<p><span class="text-bold">Lieu :</span> {{ seaCreature.place }}</p>
		<p><span class="text-bold">Mouvement :</span> {{ seaCreature.movement }}</p>
		<p><span class="text-bold">Prix de vente :</span> {{ seaCreature.price }} clochettes</p>
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