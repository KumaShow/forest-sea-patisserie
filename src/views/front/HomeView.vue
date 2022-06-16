<template>
  <nav class="navbar nav-bg-color mx-auto mx-5">
    <router-link to="/">
      <h1 class="logo">
        <img src="@/assets/images/logo.jpg" width="50" height="50" class="d-inline-block align-top"  alt="logo">
      </h1>
    </router-link>
    <div class="navbar-nav">
        <ul class="d-flex center justify-content-between">
          <li class="nav-item me-3"><router-link to="/about">關於我們</router-link></li>
          <li class="nav-item me-3"><router-link to="/news">最新消息</router-link></li>
          <li class="nav-item me-3"><router-link to="/login">登入</router-link></li>
          <li class="nav-item me-3"><router-link to="/dashboard">登入後台</router-link></li>
        </ul>
    </div>

  </nav>
  <router-view />
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
  .navbar{
    background:#195d71;
    li{
      list-style: none;
      a{
        color: lighten(#195d71,30%);
      }
    }
  }

</style>
