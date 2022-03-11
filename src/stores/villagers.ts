import { ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import http from "@/plugins/axios";
import { useUserStore } from "@/stores/user"
import type { User } from "@/stores/user"

export interface Villager {
	id?: number;
	birthday_day?: number;
	birthday_montyh?: string;
	catchphrase?: string;
	clothing?: string;
  	code?: string;
	created_at?: string;
	gender_id?: number;
	icon_url?: string;
	image_url?: string;
	lang_id?: number;
	name?: string;
	personality_id?: number;
	phrase?: string;
	sign_id?: number;
	species_id?: number;
	updated_at?: string;
	url?: string;
}

export const useVillagersStore = defineStore("villagersStore", () => {
  const {getToken} = useUserStore()

  function getVillagers() {
    return new Promise(async (resolve, reject) => {
      const villagers = await (
        await http.get(`/api/villagers?api_token=${getToken}`)
      ).data;

      return resolve(villagers);
    });
  }

  function getNamesAndCodeVillagers() {
    return new Promise(async (resolve, reject) => {
      const namesVillagers = await (
        await http.get(`/api/villagers/getnames?api_token=${getToken}`)
      ).data;

      return resolve(namesVillagers);
    });
  }

  //function getVillagersFiltered(param: string, value: string) {
  function getVillagersFiltered(params: string) {
	return new Promise(async (resolve, reject) => {
		const villagers = await (
		  await http.get(`/api/villagers/search?api_token=${getToken}${params}`)
		).data;
  
		return resolve(villagers);
	  });
  }

  function getVillager(id: number) {
    return new Promise(async (resolve, reject) => {
      const villager = await (
        await http.get(`/api/villagers/${id}?api_token=${getToken}`)
      ).data;

      return resolve(villager);
    });
  }

  function getVillagersBirthdays() {
    return new Promise(async (resolve, reject) => {
      const villager = await (
        await http.get(`/api/villagers-anniversary-today?api_token=${getToken}`)
      ).data;

      return resolve(villager);
    });
  }

  return { getVillagers, getNamesAndCodeVillagers, getVillagersFiltered, getVillager,getVillagersBirthdays };
});
