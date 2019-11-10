<template>
  <div id="app">
    <b-navbar toggleable="lg" fixed="top" type="dark" v-b-scrollspy="72">
      <b-container>
        <b-navbar-brand href="#">
          <h2 class="logo">
            <i class="icon ion-md-planet text-primary" />xy.gen
          </h2>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto d-flex align-items-center">
            <b-nav-item href="#home" v-scroll-to="'#home'">Home</b-nav-item>
            <b-nav-item href="#recent-posts" v-scroll-to="'#recent-posts'"
              >Posts</b-nav-item
            >
            <b-nav-item href="#best-features" v-scroll-to="'#best-features'"
              >Features</b-nav-item
            >
            <b-nav-item href="#pricing-cards" v-scroll-to="'#pricing-cards'"
              >Pricing</b-nav-item
            >
            <b-nav-item href="#testimonials" v-scroll-to="'#testimonials'"
              >Testimonials</b-nav-item
            >
            <b-nav-item href="#buy-it" v-scroll-to="'#buy-it'"
              >Purchase</b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view />
    <footer class="p-4 text-light">
      <b-container class="d-flex align-items-center">
        <div class="d-flex flex-fill align-items-center">
          <i class="icon ion-md-planet text-primary h2 m-0" />
          <h6 class="mb-0 ml-4 text-muted">
            Copyright 2019
            <a class="font-weight-bold text-muted" href="#">Company Name</a>.
            All rights reserved.
          </h6>
        </div>
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {
  mounted() {
    let navbar = document.getElementsByClassName("navbar")[0]
    if (window.innerWidth < 991) {
      navbar.classList.add("bg-dark")
    }
    window.onscroll = () => checkOffSet()
    window.onresize = () => checkOffSet()

    let checkOffSet = () => {
      if (window.innerWidth >= 991) {
        if (window.pageYOffset > window.innerHeight - 300) {
          navbar.classList.add("bg-dark")
        } else {
          navbar.classList.remove("bg-dark")
        }
      } else {
        navbar.classList.add("bg-dark")
      }
    }
  }
}
</script>
