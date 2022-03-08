<template>
  <q-page padding class="text-center">
	
	<h1>{{ character.name }}</h1>

    <section id="section-character-detail">
		<section id="section-character-informations">
			<div id="character-detail-image">
				<q-img id="character-image" :src="character.image" fit="scale-down"/>
			</div>
			<table>
				<tbody>
					<tr>
						<td class="character-label text-uppercase text-bold">Nom</td>
						<td>{{ character.name }}</td>
					</tr>
					<tr>
						<td class="character-label text-uppercase text-bold">Espèce</td>
						<td>{{ character.species.name }}</td>
					</tr>
					<tr>
						<td class="character-label text-uppercase text-bold">Date d'anniversaire</td>
						<td>{{ character.birthdayDate }}</td>
					</tr>
					<tr>
						<td class="character-label text-uppercase text-bold">Signe astrologique</td>
						<td>{{ character.astrologic }}</td>
					</tr>
				</tbody>
			</table>
		</section>
		<section id="section-character-description">
			<p>{{ character.description }}</p>
		</section>
	</section>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const character = ref<Object>(
	{
		id: 1,
		name: 'Rounard',
		image: 'http://ekladata.com/nH8jwaxBSThHVSeJXNUqbtpQKmk.png',
		birthdayDate: '18 Octobre',
		astrologic: 'Balance',
		species: {
			name: 'Renard',
		},
		description: 'Rounard (つねきち, Tsunekichi en japonais, Redd en anglais, Ladino en espagnol, Volpolo en italien, Rainer en allemand) est un renard commerçant voire trafiquant, souvent qualifié d\'arnaqueur par les joueurs, apparaissant dans la majorité des jeux de la série Animal Crossing.'
	},
)

</script>

<style scoped>
  @import '@/assets/css/wiki/character.css';
</style>

<style lang="scss" scoped>
  @import '@/assets/scss/wiki/character.scss';
</style>