<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div class="text_effect"></div>

  <header>
    <img alt="Vue logo" class="logo" src="./assets/newLogoLight.png" /> 

    <nav>
    <a>Home</a>
    <a>Contact</a>
    <a class= "rainbow">My Github !</a>
  </nav>
  </header>

  <main>
    
  </main>
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

.rainbow {
  filter:none;
  background: linear-gradient(to right, #6666ff, #0099ff , #00ff00, #ff3399, #6666ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow_animation 6s ease-in-out infinite;
  background-size: 400% 100%;
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

@keyframes logoPulse {
  0% {
    filter : drop-shadow(0 0 2px white);
  }
  30% {
    filter : drop-shadow(0 0 2px white);
  }
  65% {
    filter : drop-shadow(0 0 10px white);
  }
  100% {
    filter : drop-shadow(0 0 2px white);
  }
}

@keyframes rainbow_animation {
    0%,100% {
        background-position: 0 0;
    }

    50% {
        background-position: 100% 0;
    }
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
