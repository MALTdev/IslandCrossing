<template>
  <q-page padding class="text-center">
	
	<h1>Insecte : {{ insect.name }}</h1>

    <section id="section-insect-detail">
		Prix de vente : {{ insect.price }} clochettes
	</section>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const insect = ref<Object>(
	{
		id: 1,
		name: 'Agrias',
		image: 'https://margxt.fr/wp-content/uploads/2020/03/agrias-butterfly.png',
		price: '3000',
		area: 'Dans l\'air près des fleurs',
		size: '42 mm',
		period: 'Ete',
		hours: '8:00 à 17:00',
		description: 'L\'Agrias est un insecte apparaissant dans la série Animal Crossing à partir d\'Animal Crossing: Wild World. On en trouve dans l \'air près des fleurs, durant l\'été, de juin à septembre sur l\'hémisphère nord ou d\'octobre à mars sur l\'hémisphère sud. On peut le voir voler de 8:00 à 17:00. L\'Agrias se vend pour 3 000 clochettes et mesure 42 mm en moyenne.'
	},
)

</script>

<style scoped>
  @import '@/assets/css/wiki/insect.css';
</style>

<style lang="scss" scoped>
  @import '@/assets/scss/wiki/insect.scss';
</style>