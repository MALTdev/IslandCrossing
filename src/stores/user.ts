import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import axios from "axios";

export interface User {
  id?: number;
  api_token?: string;
  username?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  description?: string;
}

interface AuthForm {
  email: string;
  password: string;
}

export const useUserStore = defineStore("userStore", () => {
  const user = ref(useLocalStorage<User>("user", {}));

  function login(form: AuthForm) {
    return new Promise(async (resolve, reject) => {
      const xsrfToken = await (await axios.get("/auth/token")).data;

      const { success } = await (
        await axios.post("/auth/login", form, {
          headers: { "XSRF-TOKEN": xsrfToken },
        })
      ).data;

      if (!success) return reject();

      const { id, api_token } = await (
        await axios.get("/auth/user_token")
      ).data;

      const userInformations = await (
        await axios.get(`/api/users/${id}?api_token=${api_token}`)
      ).data;

      user.value = {
        id,
        api_token,
        ...userInformations,
      };

      return resolve(user.value.username);
    });
  }

  async function register(form: AuthForm) {
    // TODO
  }

  async function logout() {
    return new Promise(async (resolve, reject) => {
      const xsrfToken = await (await axios.get("/auth/token")).data;

      const { success } = await (
        await axios.post(
          "/auth/logout",
          {},
          { headers: { "XSRF-TOKEN": xsrfToken } }
        )
      ).data;

      if (!success) return reject();

      user.value = {};

      return resolve(true);
    });
  }

  const getToken = computed(() => {
    return user.value.api_token;
  })

  return { user, login, register, logout, getToken };
});
