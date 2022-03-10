<template>
  <q-page padding class="text-center" v-if="insect">
	
	<h1>Insecte : {{ insect.name }}</h1>

    <section id="section-insect-detail">
		Prix de vente : {{ insect.price }} clochettes
	</section>
  </q-page>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useQuasar } from "quasar";
import { useInsectsStore } from "@/stores/insects"
import type { Insect } from '@/stores/insects'
import { useRoute } from 'vue-router'

const route = useRoute()
const $q = useQuasar();
const insectsStore = useInsectsStore();

const insect = ref<Insect>(null)

onBeforeMount(async() => {
	try {
		insect.value = await insectsStore.getInsect(route.params.id);
		console.log(insect.value)
	} catch (error) {
		$q.notify({
			message: "Une erreur est survenu. Veuillez conctacter un administrateur.",
			type: "negative",
		});
	}
})
</script>

<style scoped>
  @import '@/assets/css/wiki/insect.css';
</style>

<style lang="scss" scoped>
  @import '@/assets/scss/wiki/insect.scss';
</style>