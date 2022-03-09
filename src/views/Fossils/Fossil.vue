<template>
  <q-page padding class="text-center">
	
	<h1>Fossile : {{ fossil.name }}</h1>

    <section id="section-fossil-detail">
		Prix de vente : {{ fossil.price }} clochettes
	</section>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const fossil = ref<Object>(
	{
		id: 1,
		name: 'Pachycéphalosaure',
		image: 'https://static.wikia.nocookie.net/animalcrossing/images/6/65/Dino_001.jpg/revision/latest/scale-to-width-down/211?cb=20161021161334&path-prefix=fr',
		price_crane: '4000',
		price_torse: '3500',
		price_queue: '3000',
		description: 'L\'Agrias est un insecte apparaissant dans la série Animal Crossing à partir d\'Animal Crossing: Wild World. On en trouve dans l \'air près des fleurs, durant l\'été, de juin à septembre sur l\'hémisphère nord ou d\'octobre à mars sur l\'hémisphère sud. On peut le voir voler de 8:00 à 17:00. L\'Agrias se vend pour 3 000 clochettes et mesure 42 mm en moyenne.'
	},
)

</script>

<style scoped>
  @import '@/assets/css/wiki/fossil.css';
</style>

<style lang="scss" scoped>
  @import '@/assets/scss/wiki/fossil.scss';
</style>