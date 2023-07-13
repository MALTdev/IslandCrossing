import { defineStore } from "pinia";
import http from "@/plugins/axios";

import { useUserStore } from "@/stores/user";

export interface Personality {
  id?: number;
  code?: string;
  name?: string;
}

export const usePersonalitiesStore = defineStore("personalitiesStore", () => {
  const { getToken } = useUserStore();

  function getPersonalities(): Promise<Personality[]> {
    return new Promise(async (resolve, reject) => {
      const personalities = (
        await http.get(`/api/personalities?api_token=${getToken}`)
      ).data;

      return resolve(personalities);
    });
  }

  function getPersonalitiesNames(): Promise<Personality[]> {
    return new Promise(async (resolve, reject) => {
      const personalities = (
        await http.get(`/api/personalities/getnames?api_token=${getToken}`)
      ).data;

      return resolve(personalities);
    });
  }

  return { getPersonalities, getPersonalitiesNames };
});
