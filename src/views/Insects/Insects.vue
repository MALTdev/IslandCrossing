<template>
  <q-page padding class="text-center">
    <q-card>
		<q-card-section>
			<h2>Les insectes des Jeux Animal Crossing</h2>
		</q-card-section>
		<q-card-section>
			<p>Que vous cherchiez à gagner quelques clochettes ou bien à compléter les différentes expositions du musée, il vous faudra vous lancer dans la chasse aux insectes. Alors armez-vous de votre filet et partez en quête pour trouver les 80 insectes différents présents dans Animal Crossing New Horizons.</p>
		</q-card-section>
	</q-card>

	<section id="section-list">
		<InsectCard
			v-for="insect in insects"
			:key="insect.id"
			:id="insect.id"
			:name="insect.name"
			:image="insect.image"
			:show-item-collection="true"
		/>
	</section>
  </q-page>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, ref } from 'vue'
import InsectCard from '@/components/Cards/Insect.vue'
import { useQuasar } from "quasar";
import { useInsectsStore } from "@/stores/insects";
import type { Insect } from "@/stores/insects";


const $q = useQuasar();
const insectsStore = useInsectsStore();

const insects = ref<Array<Insect>>([])

onBeforeMount(async () => {
	try {
		insects.value = await insectsStore.getInsects();
		console.log(insects.value)
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