<template>
  <q-page padding>
    <div class="row justify-center">
      <q-card class="text-center col-4">
        <q-card-section>
          <div class="text-h5 text-grey-8">Connexion</div>
        </q-card-section>
        <q-card-section>
          <q-form @submit="login" class="q-gutter-md">
            <q-input
              v-model="form.username"
              type="text"
              label="Nom d'utilisateur"
            />
            <q-input
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              label="Mot de passe"
            >
              <template v-slot:append>
                <q-icon
                  :name="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
                  class="cursor-pointer"
                  @click="togglePassword"
                />
              </template>
            </q-input>
            <div>
              <q-btn
                type="submit"
                label="Confirmer"
                color="primary"
                class="full-width"
              />
            </div>
            <div>
              <RouterLink to="/">Mot de passe oublié ?</RouterLink>
            </div>
            <div>
              Pas de compte ?
              <RouterLink to="/register">S'inscrire</RouterLink>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { RouterLink } from "vue-router";
import router from "@/router";

import { useQuasar } from "quasar";
import { useUserStore } from "@/stores/user";

const $q = useQuasar();
const userStore = useUserStore();

const form = reactive({
  username: "",
  password: "",
});

async function login() {
  const { username, password } = form;

  try {
    await userStore.login({ email: username, password });
    router.push({ name: "profile" });

    $q.notify({
      message: `Bon retour parmi nous ${userStore.user.username} !`,
      type: "positive",
    });
  } catch (error) {
    $q.notify({
      message: "Une erreur est survenu lors de la connexion.",
      type: "negative",
    });
  }
}

const showPassword = ref(false);
function togglePassword() {
  showPassword.value = !showPassword.value;
}
</script>
