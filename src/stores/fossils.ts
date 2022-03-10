import { ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import axios from "axios";
import { useUserStore } from "@/stores/user"
import type { User } from "@/stores/user"

export interface Fossil {
	id?: number;
}

export const useFossilsStore = defineStore("fossilsStore", () => {
  const {getToken} = useUserStore()

  function getFossils() {
    return new Promise(async (resolve, reject) => {
      const fossils = await (
        await axios.get(`/api/fossils?api_token=${getToken}`)
      ).data;

      return resolve(fossils);
    });
  }

  function getFossil(id: number) {
    return new Promise(async (resolve, reject) => {
      const fossil = await (
        await axios.get(`/api/fossils/${id}?api_token=${getToken}`)
      ).data;

      return resolve(fossil);
    });
  }

  return { getFossils, getFossil };
});
