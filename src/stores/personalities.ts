import { ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import axios from "axios";
import { useUserStore } from "@/stores/user"
import type { User } from "@/stores/user"

export interface Personality {
	id?: number;
  code?: string;
  name?: string;
}

export const usePersonalitiesStore = defineStore("personalitiesStore", () => {
  const {getToken} = useUserStore()

  function getPersonalities() {
    return new Promise(async (resolve, reject) => {
      const personalities = await (
        await axios.get(`/api/personalities?api_token=${getToken}`)
      ).data;

      return resolve(personalities);
    });
  }

  return { getPersonalities };
});
