<template>
  <q-page padding class="text-center">
    <q-card>
		<q-card-section>
			<h2>Les fossiles des Jeux Animal Crossing</h2>
		</q-card-section>
		<q-card-section>
			<p>Les fossiles sont des objets précieux cachés dans le sol et présents dans toute la série Animal Crossing. Trouvables à l'aide d'une pelle, ils sont repérables grâce à une marque en forme d'étoile dans la terre. Dans les anciens opus, ils sont au nombre de 52.</p>
		</q-card-section>
	</q-card>

	<section id="section-list">
		<FossilCard
			v-for="fossil in fossils"
			:key="fossil.id"
			:id="fossil.id"
			:name="fossil.name"
			:image="fossil.image"
		/>
	</section>
  </q-page>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, ref } from 'vue'
import FossilCard from '@/components/Cards/Fossil.vue'
import { useQuasar } from "quasar";
import { useFossilsStore } from "@/stores/fossils";
import type { Fossil } from "@/stores/fossils";


const $q = useQuasar();
const fossilsStore = useFossilsStore();

const fossils = ref<Array<Fossil>>([])

onBeforeMount(async () => {
	try {
		fossils.value = await fossilsStore.getFossils();
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