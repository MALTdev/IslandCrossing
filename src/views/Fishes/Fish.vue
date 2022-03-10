<template>
  <q-page padding class="text-center" v-if="fish">
	
	<h1>Poisson : {{ fish.name }}</h1>

    <section id="section-fish-detail">
		Prix de vente : {{ fish.price }} clochettes
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
		console.log(fish.value)
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