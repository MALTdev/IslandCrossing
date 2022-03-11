<template>
  <q-page padding class="text-center" v-if="fish">
	
	<h1>Poisson : {{ fish.name }}</h1>

    <section id="section-fish-detail">

		<q-img class="fish-image" :src="fish.image_url" fit="scale-down"/>

		<p><span class="text-bold">Lieu de capture :</span> {{ fish.place }}</p>
		<p><span class="text-bold">Période de capture :</span> {{ fish.period }}</p>
		<p><span class="text-bold">Heures de capture :</span> {{ fish.hours }}</p>
		<p><span class="text-bold">Taille du poisson :</span> {{ fish.size }}</p>
		<p><span class="text-bold">Prix de vente :</span> {{ fish.price }} clochettes</p>
	</section>
  </q-page>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useQuasar } from "quasar";
import { useFishesStore } from "@/stores/fishes"
import type { Fish } from '@/stores/fishes'
import { useRoute } from 'vue-router'

const route = useRoute()
const $q = useQuasar();
const fishesStore = useFishesStore();

const fish = ref<Fish>(null)

onBeforeMount(async() => {
	try {
		fish.value = await fishesStore.getFish(route.params.id);
	} catch (error) {
		$q.notify({
			message: "Une erreur est survenu. Veuillez conctacter un administrateur.",
			type: "negative",
		});
	}
})
</script>

<style scoped>
  @import '@/assets/css/wiki/fish.css';
</style>

<style lang="scss" scoped>
  @import '@/assets/scss/wiki/fish.scss';
</style>