<template>
  	<div
	  class="fish"
      @click="goToDetailFish(id)"
	>
		<div class="fish-section-image">  
			<q-img :src="image" class="fish-image" fit="scale-down"/>
	 	</div>
		<div class="fish-name">
			<span class="text-white">{{ name }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import router from "@/router";

const props = defineProps({
  id: Number,
  name: String,
  image: String,
})

async function goToDetailFish(id: Number) {
  router.push({ name: "fish", params: { id: id } });
}

</script>

<style scoped>
  @import '@/assets/css/cards/fish.css';
</style>

<style lang="scss" scoped>
  @import '@/assets/scss/cards/fish.scss';
</style>