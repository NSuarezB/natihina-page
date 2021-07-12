<template>
  <div id="app" class="natihina">
    <header>
      <Header />
    </header>
    <section class="section natihina__body">
      <!--<router-view />-->
      <Home />
    </section>
    <footer>
      <div class="footer natihina__footer">
        <div class="content has-text-centered">This is my footer</div>
      </div>
    </footer>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import Header from "./components/Header.vue";


export default {
  name: "App",
  components: {
    Home,
    Header,
  },
};
</script>

<style lang="scss">
.natihina {
  &__header {
  }
  &__body {
    min-height: 20rem;
  background-image: url("assets/backgroundImage.png");
  background-repeat: no-repeat;
  background-size: cover;
  }
  &__footer {
  }


}


</style>
