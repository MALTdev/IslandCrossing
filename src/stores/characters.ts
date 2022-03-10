import { ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import axios from "axios";
import { useUserStore } from "@/stores/user"
import type { User } from "@/stores/user"

export interface Character {
	id?: number;
}

export const useCharactersStore = defineStore("charactersStore", () => {
  const {getToken} = useUserStore()

  function getCharacters() {
    return new Promise(async (resolve, reject) => {
      const characters = await (
        await axios.get(`/api/characters?api_token=${getToken}`)
      ).data;

      return resolve(characters);
    });
  }

  function getCharacter(id: number) {
    return new Promise(async (resolve, reject) => {
      const character = await (
        await axios.get(`/api/characters/${id}?api_token=${getToken}`)
      ).data;

      return resolve(character);
    });
  }

  return { getCharacters, getCharacter };
});
