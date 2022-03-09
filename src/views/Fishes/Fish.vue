<template>
  <q-page padding class="text-center">
	
	<h1>Poisson : {{ fish.name }}</h1>

    <section id="section-fish-detail">
		Prix de vente : {{ fish.price }} clochettes
	</section>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const fish = ref<Object>(
	{
		id: 1,
		name: 'Carpe Koï',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/poissons/Carpe%20ko%C3%AF.png',
		price: '4000',
		area: 'Etang',
		size: 'Moyenne',
		period: 'Toute l\'année',
		hours: '16h - 9h',
		description: 'L\'Agrias est un insecte apparaissant dans la série Animal Crossing à partir d\'Animal Crossing: Wild World. On en trouve dans l \'air près des fleurs, durant l\'été, de juin à septembre sur l\'hémisphère nord ou d\'octobre à mars sur l\'hémisphère sud. On peut le voir voler de 8:00 à 17:00. L\'Agrias se vend pour 3 000 clochettes et mesure 42 mm en moyenne.'
	},
)

</script>

<style scoped>
  @import '@/assets/css/wiki/fish.css';
</style>

<style lang="scss" scoped>
  @import '@/assets/scss/wiki/fish.scss';
</style>