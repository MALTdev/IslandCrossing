<template>
  <q-page padding class="text-center" v-if="fossil">
    <h1>Fossile : {{ fossil.name }}</h1>

    <section id="section-fossil-detail">
      Prix de vente : {{ fossil.price }} clochettes
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

import { useQuasar } from "quasar";
import { useFossilsStore, type Fossil } from "@/stores/fossils";

const route = useRoute();

const $q = useQuasar();
const fossilsStore = useFossilsStore();

const fossil = ref<Fossil>({});

onBeforeMount(async () => {
  try {
    const id = parseInt(route.params.id as string);
    fossil.value = await fossilsStore.getFossil(id);
  } catch (error) {
    $q.notify({
      message: "Une erreur est survenu. Veuillez conctacter un administrateur.",
      type: "negative",
    });
  }
});
</script>

<style scoped>
@import "@/assets/css/wiki/fossil.css";
</style>

<style lang="scss" scoped>
@import "@/assets/scss/wiki/fossil.scss";
</style>
