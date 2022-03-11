import { ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import http from "@/plugins/axios";
import { useUserStore } from "@/stores/user"
import type { User } from "@/stores/user"

export interface Specie {
	id?: number;
  code?: string;
  name?: string;
}

export const useSpeciesStore = defineStore("speciesStore", () => {
  const {getToken} = useUserStore()

  function getSpecies() {
    return new Promise(async (resolve, reject) => {
      const species = await (
        await http.get(`/api/species?api_token=${getToken}`)
      ).data;

      return resolve(species);
    });
  }

  function getSpeciesNames() {
    return new Promise(async (resolve, reject) => {
      const species = await (
        await http.get(`/api/species/getnames?api_token=${getToken}`)
      ).data;

      return resolve(species);
    });
  }

  return { getSpecies, getSpeciesNames };
});
