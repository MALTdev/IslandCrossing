<template>
  	<div
	  class="fish"
      @click="goToDetailFish(id)"
	>
		<div class="fish-section-image">  
			<q-img :src="image" class="fish-image" fit="scale-down"/>
			<div
				v-if="showItemCollection"
				class="fish-leaf fish-not-in-collection"
				@click.stop="addOrRemoveFromCollection(id)">
			</div>
	 	</div>
		<div class="fish-name">
			<span class="text-white">{{ name }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import router from "@/router";
import { useFishesStore } from "@/stores/fishes";

const fishesStore = useFishesStore();

const props = defineProps({
  id: Number,
  name: String,
  image: String,
  showItemCollection: Boolean,
})

async function goToDetailFish(id: Number) {
  router.push({ name: "fish", params: { id: id } });
}

function addOrRemoveFromCollection (id: Number) {
	fishesStore.addFishInCollection(id)
	//fishesStore.removeFishFromCollection(id)
}

</script>

<style scoped>
  @import '@/assets/css/cards/fish.css';
</style>

<style lang="scss" scoped>
  @import '@/assets/scss/cards/fish.scss';
</style>