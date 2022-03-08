<template>
  <q-page padding class="text-center">
	
	<h1>Villageois {{ villager.name }}</h1>

    <section id="section-villager-detail">
		<section id="section-villager-detail-top">
			<div class="first-section">
				<div>
					<q-icon 
						v-if="villager.gender === 'male'"
						name="fas fa-mars"
						color="blue"
					/>
					<q-icon
						v-else
						name="fas fa-venus"
						color="red"
					/>
				</div>
				<div>
					<span class="text-bold">Espèce : </span>
					<span>{{ villager.species.name }}</span>
					<div>
						<q-img :src="villager.species.image" class="villager-image-species" fit="scale-down"/>
					</div>
				</div>
				<div>
					<span class="text-bold">Personnalité : </span>
					<span>{{ villager.personnality }}</span>
				</div>
			</div>

			<div class="second-section">
				<div class="villager-detail-image">
					<q-img :src="villager.image" class="villager-image" fit="scale-down"/>
				</div>

				<span class="text-bold villager-name">{{ villager.name }}</span>
			</div>
			
			<div class="third-section">
				<div>
					<span class="text-bold">Date d'anniversaire : </span>
					<span>{{ villager.birthdayDate }}</span>
				</div>
				<div>
					<span class="text-bold">Signe astrologique : </span>
					<span>{{ villager.astrologic }}</span>
				</div>
			</div>
		</section>

		<section id="section-villager-detail-bottom">
			<div>
				<h2>{{ villager.sentence }}</h2>
				<div>
					<q-img :src="villager.house" class="villager-image-house" fit="scale-down"/>
				</div>
			</div>
		</section>
	</section>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const villager = ref<Object>(
	{
		id: 1,
		name: 'Axel',
		image: 'http://ekladata.com/nH8jwaxBSThHVSeJXNUqbtpQKmk.png',
		species: {
			name: 'Elephant',
			image: 'https://cdn-icons-png.flaticon.com/512/194/194204.png',
		},
		personnality: 'Sportif',
		sentence: 'Vive le sport muhahahaha',
		gender: 'male',
		birthdayDate: '20/08/1998',
		astrologic: 'Lion',
		house: 'https://i.ytimg.com/vi/aEk4oeZ2diY/maxresdefault.jpg',
	},
)

</script>

<style>
  @import '@/assets/css/villager.css';
</style>

<style lang="scss">
  @import '@/assets/scss/villager.scss';
</style>