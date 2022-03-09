<template>
  <q-page padding class="text-center">
    <q-card>
		<q-card-section>
			<h2>Les créatures marines des Jeux Animal Crossing</h2>
		</q-card-section>
		<q-card-section>
			<p>Avec la mise à jour 1.3.0 d’Animal Crossing New Horizons, Nintendo a ajouté la nage et la plongée. Mais on y retrouve également de nouvelles prises à réaliser avec les créatures marines qui s’ajoutent donc au bébêtopédie. Voici tout ce qu’il faut savoir sur leur capture et la liste complète des 40 créatures marines.</p>
		</q-card-section>
	</q-card>

	<section id="section-list">
		<SeaCreature
			v-for="seaCreature in seaCreatures"
			:key="seaCreature.id"
			:id="seaCreature.id"
			:name="seaCreature.name"
			:image="seaCreature.image"
		/>
	</section>
  </q-page>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import SeaCreature from '@/components/Cards/SeaCreature.vue'

const seaCreatures = ref<Array<Object>>([
	{
		id: 1,
		name: 'Crabe royal',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/fondsmarins/Crabe%20royal.png',
	},
	{
		id: 2,
		name: 'Crabe royal',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/fondsmarins/Crabe%20royal.png',
	},
	{
		id: 3,
		name: 'Crabe royal',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/fondsmarins/Crabe%20royal.png',
	},
	{
		id: 4,
		name: 'Crabe royal',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/fondsmarins/Crabe%20royal.png',
	},
	{
		id: 5,
		name: 'Crabe royal',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/fondsmarins/Crabe%20royal.png',
	},
	{
		id: 6,
		name: 'Crabe royal',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/fondsmarins/Crabe%20royal.png',
	},
	{
		id: 7,
		name: 'Crabe royal',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/fondsmarins/Crabe%20royal.png',
	},
	{
		id: 8,
		name: 'Crabe royal',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/fondsmarins/Crabe%20royal.png',
	},
	{
		id: 9,
		name: 'Crabe royal',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/fondsmarins/Crabe%20royal.png',
	},
	{
		id: 10,
		name: 'Crabe royal',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/fondsmarins/Crabe%20royal.png',
	},
	{
		id: 11,
		name: 'Crabe royal',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/fondsmarins/Crabe%20royal.png',
	},
	{
		id: 12,
		name: 'Crabe royal',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/fondsmarins/Crabe%20royal.png',
	},
	{
		id: 13,
		name: 'Crabe royal',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/fondsmarins/Crabe%20royal.png',
	},
	{
		id: 14,
		name: 'Crabe royal',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/fondsmarins/Crabe%20royal.png',
	},
	{
		id: 15,
		name: 'Crabe royal',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/fondsmarins/Crabe%20royal.png',
	},
	{
		id: 16,
		name: 'Crabe royal',
		image: 'https://www.animalcrossing-online.com/new-horizons-switch/img/fondsmarins/Crabe%20royal.png',
	}
])

</script>

<style scoped>
  @import '@/assets/css/wiki/listing.css';
</style>