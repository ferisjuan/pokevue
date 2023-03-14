<template>
  <main class="container flex flex-col items-center">
    <h1 class="text-4xl font-bold">Login</h1>
    <FormKit
      :actions="false"
      :form-class="submitted ? 'hide' : 'show'"
      @submit="handleSubmit"
      submit-label="Login"
      type="form"
    >
      <FormKit
        label="Username"
        name="username"
        placeholder="ash@pokemon.com"
        type="text"
        validation="required|email"
      />
      <FormKit
        autocomplete="on"
        label="Password"
        name="password"
        placeholder="***"
        type="password"
        validation="required|length:6"
      />

      <FormKit label="Login" type="submit" />
    </FormKit>
  </main>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { FormKit } from "@formkit/vue";
import { ref } from "vue";
import { useAuthStore } from "../store";

const submitted = ref(false);

const router = useRouter();

const { login } = useAuthStore();

type Credentials = {
  username: string;
  password: string;
};
const handleSubmit = async (credentials: Credentials) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  login();

  router.push("/");
};
</script>
