import { ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import axios from "axios";
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
        await axios.get(`/api/villagers?api_token=${getToken}`)
      ).data;

      return resolve(villagers);
    });
  }

  function getVillager(id: number) {
    return new Promise(async (resolve, reject) => {
      const villager = await (
        await axios.get(`/api/villagers/${id}?api_token=${getToken}`)
      ).data;

      return resolve(villager);
    });
  }

  return { getVillagers, getVillager };
});
