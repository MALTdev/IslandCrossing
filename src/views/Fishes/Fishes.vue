<template>
  <q-page padding class="text-center">
    <q-card>
		<q-card-section>
			<h2>Les poissons des Jeux Animal Crossing</h2>
		</q-card-section>
		<q-card-section>
			<p>Parmi les principales activités à réaliser dans Animal Crossing New Horizons, la pèche est indéniablement l’un des gros morceaux. On pèche pour avoir de nouveaux poissons, pour en revendre certains à prix d’or, on jongle entre la mer et la rivière, et on enchaîne les cannes à pèche. Loin d’être une simple composante, la pèche est une activité majeure.</p>
		</q-card-section>
	</q-card>

	<section id="section-list">
		<FishCard
			v-for="fish in fishes"
			:key="fish.id"
			:id="fish.id"
			:name="fish.name"
			:image="fish.image"
			:show-item-collection="true"
		/>
	</section>
  </q-page>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, ref } from 'vue'
import FishCard from '@/components/Cards/Fish.vue'
import { useQuasar } from "quasar";
import { useFishesStore } from "@/stores/fishes";
import type { Fish } from "@/stores/fishes";


const $q = useQuasar();
const fishesStore = useFishesStore();

const fishes = ref<Array<Object>>([
	{
		id: 1,
		name: 'Carpe Koï',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/poissons/Carpe%20ko%C3%AF.png',
	},
	{
		id: 2,
		name: 'Carpe Koï',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/poissons/Carpe%20ko%C3%AF.png',
	},
	{
		id: 3,
		name: 'Carpe Koï',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/poissons/Carpe%20ko%C3%AF.png',
	},
	{
		id: 4,
		name: 'Carpe Koï',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/poissons/Carpe%20ko%C3%AF.png',
	},
	{
		id: 5,
		name: 'Carpe Koï',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/poissons/Carpe%20ko%C3%AF.png',
	},
	{
		id: 6,
		name: 'Carpe Koï',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/poissons/Carpe%20ko%C3%AF.png',
	},
	{
		id: 7,
		name: 'Carpe Koï',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/poissons/Carpe%20ko%C3%AF.png',
	},
	{
		id: 8,
		name: 'Carpe Koï',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/poissons/Carpe%20ko%C3%AF.png',
	},
	{
		id: 9,
		name: 'Carpe Koï',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/poissons/Carpe%20ko%C3%AF.png',
	},
	{
		id: 10,
		name: 'Carpe Koï',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/poissons/Carpe%20ko%C3%AF.png',
	},
	{
		id: 11,
		name: 'Carpe Koï',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/poissons/Carpe%20ko%C3%AF.png',
	},
	{
		id: 12,
		name: 'Carpe Koï',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/poissons/Carpe%20ko%C3%AF.png',
	},
	{
		id: 13,
		name: 'Carpe Koï',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/poissons/Carpe%20ko%C3%AF.png',
	},
	{
		id: 14,
		name: 'Carpe Koï',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/poissons/Carpe%20ko%C3%AF.png',
	},
	{
		id: 15,
		name: 'Carpe Koï',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/poissons/Carpe%20ko%C3%AF.png',
	},
	{
		id: 16,
		name: 'Carpe Koï',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/poissons/Carpe%20ko%C3%AF.png',
	}
])
/*
const fishes = ref<Array<Fish>>([])

onBeforeMount(async () => {
	try {
		fishes.value = await fishesStore.getFishes();
		console.log(fishes.value)
	} catch (error) {
		$q.notify({
			message: "Une erreur est survenu. Veuillez conctacter un administrateur.",
			type: "negative",
		});
	}
})*/
</script>

<style scoped>
  @import '@/assets/css/wiki/listing.css';
</style>