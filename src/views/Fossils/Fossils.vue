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
		<Fossil
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
import { reactive, ref } from 'vue'
import Fossil from '@/components/Cards/Fossil.vue'

const fossils = ref<Array<Object>>([
	{
		id: 1,
		name: 'Pachycéphalosaure',
		image: 'https://static.wikia.nocookie.net/animalcrossing/images/6/65/Dino_001.jpg/revision/latest/scale-to-width-down/211?cb=20161021161334&path-prefix=fr',
	},
	{
		id: 2,
		name: 'Pachycéphalosaure',
		image: 'https://static.wikia.nocookie.net/animalcrossing/images/6/65/Dino_001.jpg/revision/latest/scale-to-width-down/211?cb=20161021161334&path-prefix=fr',
	},
	{
		id: 3,
		name: 'Pachycéphalosaure',
		image: 'https://static.wikia.nocookie.net/animalcrossing/images/6/65/Dino_001.jpg/revision/latest/scale-to-width-down/211?cb=20161021161334&path-prefix=fr',
	},
	{
		id: 4,
		name: 'Pachycéphalosaure',
		image: 'https://static.wikia.nocookie.net/animalcrossing/images/6/65/Dino_001.jpg/revision/latest/scale-to-width-down/211?cb=20161021161334&path-prefix=fr',
	},
	{
		id: 5,
		name: 'Pachycéphalosaure',
		image: 'https://static.wikia.nocookie.net/animalcrossing/images/6/65/Dino_001.jpg/revision/latest/scale-to-width-down/211?cb=20161021161334&path-prefix=fr',
	},
	{
		id: 6,
		name: 'Pachycéphalosaure',
		image: 'https://static.wikia.nocookie.net/animalcrossing/images/6/65/Dino_001.jpg/revision/latest/scale-to-width-down/211?cb=20161021161334&path-prefix=fr',
	},
	{
		id: 7,
		name: 'Pachycéphalosaure',
		image: 'https://static.wikia.nocookie.net/animalcrossing/images/6/65/Dino_001.jpg/revision/latest/scale-to-width-down/211?cb=20161021161334&path-prefix=fr',
	},
	{
		id: 8,
		name: 'Pachycéphalosaure',
		image: 'https://static.wikia.nocookie.net/animalcrossing/images/6/65/Dino_001.jpg/revision/latest/scale-to-width-down/211?cb=20161021161334&path-prefix=fr',
	},
	{
		id: 9,
		name: 'Pachycéphalosaure',
		image: 'https://static.wikia.nocookie.net/animalcrossing/images/6/65/Dino_001.jpg/revision/latest/scale-to-width-down/211?cb=20161021161334&path-prefix=fr',
	},
	{
		id: 10,
		name: 'Pachycéphalosaure',
		image: 'https://static.wikia.nocookie.net/animalcrossing/images/6/65/Dino_001.jpg/revision/latest/scale-to-width-down/211?cb=20161021161334&path-prefix=fr',
	},
	{
		id: 11,
		name: 'Pachycéphalosaure',
		image: 'https://static.wikia.nocookie.net/animalcrossing/images/6/65/Dino_001.jpg/revision/latest/scale-to-width-down/211?cb=20161021161334&path-prefix=fr',
	},
	{
		id: 12,
		name: 'Pachycéphalosaure',
		image: 'https://static.wikia.nocookie.net/animalcrossing/images/6/65/Dino_001.jpg/revision/latest/scale-to-width-down/211?cb=20161021161334&path-prefix=fr',
	},
	{
		id: 13,
		name: 'Pachycéphalosaure',
		image: 'https://static.wikia.nocookie.net/animalcrossing/images/6/65/Dino_001.jpg/revision/latest/scale-to-width-down/211?cb=20161021161334&path-prefix=fr',
	},
	{
		id: 14,
		name: 'Pachycéphalosaure',
		image: 'https://static.wikia.nocookie.net/animalcrossing/images/6/65/Dino_001.jpg/revision/latest/scale-to-width-down/211?cb=20161021161334&path-prefix=fr',
	},
	{
		id: 15,
		name: 'Pachycéphalosaure',
		image: 'https://static.wikia.nocookie.net/animalcrossing/images/6/65/Dino_001.jpg/revision/latest/scale-to-width-down/211?cb=20161021161334&path-prefix=fr',
	},
	{
		id: 16,
		name: 'Pachycéphalosaure',
		image: 'https://static.wikia.nocookie.net/animalcrossing/images/6/65/Dino_001.jpg/revision/latest/scale-to-width-down/211?cb=20161021161334&path-prefix=fr',
	}
])

</script>

<style scoped>
  @import '@/assets/css/wiki/listing.css';
</style>