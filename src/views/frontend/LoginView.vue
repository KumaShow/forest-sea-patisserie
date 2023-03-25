<template>
  <FrontNavBar />
  <div class="bg-mask-texture">
    <div class="container">
      <main
        class="login position-relative d-flex justify-content-center align-items-center"
      >
        <div class="col col-md-5">
          <h1 class="h3 mb-6 font-weight-normal text-center">管理員登入</h1>
          <form id="form" @submit.prevent="signIn">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="username"
                v-model="user.username"
                placeholder="name@example.com"
                required
                autofocus
              />
              <label for="username">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="user.password"
                placeholder="Password"
                required
              />
              <label for="password">Password</label>
            </div>
            <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
              登入
            </button>
          </form>
          <p class="text-center mt-10">
            本網站僅供個人作品使用，無任何商業用途
          </p>
        </div>
        <TheToastMessage />
      </main>
    </div>
  </div>
</template>

<script>
import FrontNavBar from "@/components/frontend/FrontNavBar.vue";
import TheToastMessage from "@/components/TheToastMessage.vue";
import useToastMessageStore from "@/stores/ToastMessageStore";
import { mapActions } from "pinia";
const { VITE_API } = import.meta.env;

export default {
  components: {
    TheToastMessage,
    FrontNavBar,
  },
  data() {
    return {
      user: {},
    };
  },
  methods: {
    ...mapActions(useToastMessageStore, ["pushMessage"]),

    signIn() {
      this.$http
        .post(`${VITE_API}/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
          this.$router.push("/admin");
          this.pushMessage({
            title: "登入成功",
          });
        })
        .catch(() => {
          this.pushMessage({
            style: "danger",
            title: "登入失敗，請重新登入",
            content: "請確認帳號密碼是否正確",
          });
        });
    },
  },
};
</script>

<style lang="scss" scope>
.login {
  min-height: calc(100vh - 64px);
}
</style>
