import { ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import http from "@/plugins/axios";
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
        await http.get(`/api/personalities?api_token=${getToken}`)
      ).data;

      return resolve(personalities);
    });
  }

  function getPersonalitiesNames() {
    return new Promise(async (resolve, reject) => {
      const personalities = await (
        await http.get(`/api/personalities/getnames?api_token=${getToken}`)
      ).data;

      return resolve(personalities);
    });
  }

  return { getPersonalities, getPersonalitiesNames };
});
