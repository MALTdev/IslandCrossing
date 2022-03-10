<template>
  	<div
	  class="insect"
      @click="goToDetailInsect(id)"
	>
		<div class="insect-section-image">  
			<q-img :src="image" class="insect-image" fit="scale-down"/>
			<div
				v-if="showItemCollection"
				class="insect-leaf insect-not-in-collection"
				@click.stop="addOrRemoveFromCollection(id)">
			</div>
	 	</div>
		<div class="insect-name">
			<span class="text-white">{{ name }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import router from "@/router";
import { useInsectsStore } from "@/stores/insects";

const insectsStore = useInsectsStore();

const props = defineProps({
  id: Number,
  name: String,
  image: String,
  showItemCollection: Boolean,
})

async function goToDetailInsect(id: Number) {
  router.push({ name: "insect", params: { id: id } });
}

function addOrRemoveFromCollection (id: Number) {
	insectsStore.addInsectInCollection(id)
	//insectsStore.removeInsectFromCollection(id)
}

</script>

<style scoped>
  @import '@/assets/css/cards/insect.css';
</style>

<style lang="scss" scoped>
  @import '@/assets/scss/cards/insect.scss';
</style>