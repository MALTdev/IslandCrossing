import { ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import axios from "axios";
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
        await axios.get(`/api/species?api_token=${getToken}`)
      ).data;

      return resolve(species);
    });
  }

  return { getSpecies };
});
