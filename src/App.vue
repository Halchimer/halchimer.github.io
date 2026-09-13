<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

</script>

<template>
  <div class="text_effect"></div>

  <header>
    <RouterLink to="/"><img alt="Vue logo" class="logo" src="./assets/newLogoLight.png" /></RouterLink>
    <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/">About Me</RouterLink>
    <RouterLink to="/">Index</RouterLink>
    <a href="#contact">Contact</a>
    <a class= "rainbow" href="https://github.com/Halchimer">My Github !</a>
  </nav>
  </header>

  <RouterView />

  <button
    class="back-to-top"
    @click="scrollToTop"
  >
    ↑
  </button>

  <footer id="contact">
    <a class="mail" href="mailto:g.denivelle@proton.me">g.denivelle@proton.me</a>
    <a class="phone" href="tel:+33785061009">07 85 06 10 09</a>
    <a class="linkedin" href="www.linkedin.com/in/gabriel-denivelle">LinkedIn</a>
  </footer>
</template>

<style scoped>

header {
  display: flex;
  justify-content: space-around;
  width : 100vw;
}

header nav {
  display : inline-block;
  width : 100%;
  text-align : right;
  margin : 1rem;
}

header nav a {
  margin : 0 1rem 0 0;
  cursor : cell;
  user-select: none;
}

.logo {
  display : inline-block;
  height : 3rem;
  animation : logoPulse 3s infinite;
  margin : 0.5rem;
}

.text_effect {
  z-index:-1;
  position: fixed;
  width : 100vw;
  height : 100vh;
  background-image: url("./assets/portfolio_bg_txt.png");
  background-size: 10rem;
  animation : backgroundScrollDiagonal 10s infinite;
  animation-timing-function : linear;
  mix-blend-mode: lighten;
  filter : sepia();
  pointer-events: none;
}

footer {
  display : flex;
  justify-content: space-evenly;
  width : 100%;
  background-color: red;
  color : black;
}

.back-to-top {
  position : fixed;
  width : 2rem;
  height : 2rem;
  right : 2rem;
  bottom : 2rem;
  border : none;
  outline : none;
  box-shadow: none;
  font-family: "Jersey 10";
  mix-blend-mode: difference;
}

@keyframes backgroundScrollDiagonal {
  0% {
    background-position-x: 0;
    background-position-y: 0;
  }
  100% {
    background-position-x: 100vw;
    background-position-y: -100vh;
  }
}

</style>
