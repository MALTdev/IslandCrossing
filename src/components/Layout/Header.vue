<template>
  <q-header class="bg-primary">
    <q-toolbar>
      <q-avatar>
        <img
          src="https://cdn.pixabay.com/photo/2020/07/27/10/33/animal-crossing-leaf-5442035_1280.png"
        />
      </q-avatar>
      <RouterLink to="/" custom v-slot="{ navigate }">
        <q-toolbar-title @click="navigate" class="cursor-pointer">Island Crossing</q-toolbar-title>
      </RouterLink>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>