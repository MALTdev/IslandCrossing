import { defineStore } from "pinia";
import http from "@/plugins/axios";

import { useUserStore } from "@/stores/user";

export interface Specie {
  id?: number;
  code?: string;
  name?: string;
}

export const useSpeciesStore = defineStore("speciesStore", () => {
  const { getToken } = useUserStore();

  function getSpecies(): Promise<Specie[]> {
    return new Promise(async (resolve, reject) => {
      const species = (await http.get(`/api/species?api_token=${getToken}`))
        .data;

      return resolve(species);
    });
  }

  function getSpeciesNames(): Promise<Specie[]> {
    return new Promise(async (resolve, reject) => {
      const species = (
        await http.get(`/api/species/getnames?api_token=${getToken}`)
      ).data;

      return resolve(species);
    });
  }

  return { getSpecies, getSpeciesNames };
});
