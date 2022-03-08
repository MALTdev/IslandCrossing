<template>
  <q-page padding class="text-center">
    <q-card>
		<q-card-section>
			<h2>Les villageois des Jeux Animal Crossing</h2>
		</q-card-section>
		<q-card-section>
			<p>Les <b>villageois</b> sont les personnages non jouables (PNJ) qui habitent dans le <b>village</b> ou l'île du joueur. Ils sont anthropomorphes car, bien qu'issus de différentes espèces d'animaux, ils se comportent comme des êtres humains : ils sont toujours debout, peuvent parler, utiliser des <b>mimiques</b>, mettre des vêtements et habitent dans une maison. Chaque villageois est caractérisé par un sexe (femelle ou mâle), une <b>personnalité</b>, des <b>préférences</b> (préférences de café, hobby, talent ou rêve), un <b>anniversaire</b>, un <b>signe astrologique</b> et une <b>phrase de signature</b>. Chaque maison est meublée différemment.</p>
			<p>Chaque village peut accueillir un nombre limité de villageois :</p>
			<ul class="list">
				<li>15 dans Animal Crossing,</li>
				<li>8 dans Animal Crossing: Wild World,</li>
				<li>10 dans Animal Crossing: Let's Go to the City, Animal Crossing: New Leaf et Animal Crossing: New Horizons.</li>
			</ul>
		</q-card-section>
		<q-card-section id="section-filters">
			<q-input
              v-model="filters.name"
              type="text"
              label="Nom de l'habitant"
			  class="field"
            />
			<q-select
              v-model="filters.species"
              label="Espèce de l'habitant"
			  :options="species"
			  class="field"
            />
			<q-select
              v-model="filters.personnality"
              label="Nom de l'habitant"
			  :options="personnalities"
			  class="field"
            />
		</q-card-section>
	</q-card>

	<section id="section-list">
		<Villager
			v-for="villager in villagers"
			:key="villager.id"
			:id="villager.id"
			:name="villager.name"
			:image="villager.image"
		/>
	</section>
  </q-page>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import Villager from '@/components/Cards/Villager.vue'

const filters = reactive({
  name: "",
  species: "",
  personnality: "",
});

const species = ref<Array<String>>([
	'Pingouin',
	'Tigre',
	'Chat',
	'Aigle',
	'Crocodile',
	'Elephant',
])

const personnalities = ref<Array<String>>([
	'Chic',
	'Paresseux',
	'Sportif',
	'Arrogante',
])

const villagers = ref<Array<Object>>([
	{
		id: 1,
		name: 'Axel',
		image: 'http://ekladata.com/nH8jwaxBSThHVSeJXNUqbtpQKmk.png',
	},
	{
		id: 2,
		name: 'Monica',
		image: 'https://nsa40.casimages.com/img/2020/08/16/200816115540372263.png',
	},
	{
		id: 3,
		name: 'Aurore',
		image: 'https://img.over-blog-kiwi.com/0/71/74/43/20200117/ob_806705_aurore.png',
	},
	{
		id: 4,
		name: 'Reynald',
		image: 'http://ekladata.com/nEB5HtzvOnrdbPm2weTMbVfGM14.png',
	}
])

</script>

<style scoped>
  @import '@/assets/css/wiki/listing.css';
</style>