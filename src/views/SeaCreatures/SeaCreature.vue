<template>
  <q-page padding class="text-center">
	
	<h1>Créature : {{ seaCreature.name }}</h1>

    <section id="section-sea-creature-detail">
		Prix de vente : {{ seaCreature.price }} clochettes
	</section>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const seaCreature = ref<Object>(
	{
		id: 1,
		name: 'Crabe royal',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/fondsmarins/Crabe%20royal.png',
		price: '8000',
		area: 'Océan',
		size: 'Grande',
		period: 'Novembre - Mars',
		movement: 'Très rapide',
		hours: 'Toute la journée',
		description: 'L\'Agrias est un insecte apparaissant dans la série Animal Crossing à partir d\'Animal Crossing: Wild World. On en trouve dans l \'air près des fleurs, durant l\'été, de juin à septembre sur l\'hémisphère nord ou d\'octobre à mars sur l\'hémisphère sud. On peut le voir voler de 8:00 à 17:00. L\'Agrias se vend pour 3 000 clochettes et mesure 42 mm en moyenne.'
	},
)

</script>

<style scoped>
  @import '@/assets/css/wiki/sea-creature.css';
</style>

<style lang="scss" scoped>
  @import '@/assets/scss/wiki/sea-creature.scss';
</style>