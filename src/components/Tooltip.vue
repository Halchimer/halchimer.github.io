<script setup lang="ts">
import { ref, onMounted, onUnmounted, Text } from 'vue'

defineProps<{
  text: string
}>()

const tooltipElement = ref<HTMLElement | null>(null)
const visible = ref(false)

const x = ref(0)
const y = ref(0)

let parentElement: HTMLElement | null = null

const handleMouseEnter = () => {
  visible.value = true
}

const handleMouseLeave = () => {
  visible.value = false
}

const handleMouseMove = (event: MouseEvent) => {
  x.value = event.clientX
  y.value = event.clientY
}

onMounted(() => {
  parentElement = tooltipElement.value?.parentElement ?? null

  parentElement?.addEventListener('mouseenter', handleMouseEnter)
  parentElement?.addEventListener('mouseleave', handleMouseLeave)
  parentElement?.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  parentElement?.removeEventListener('mouseenter', handleMouseEnter)
  parentElement?.removeEventListener('mouseleave', handleMouseLeave)
  parentElement?.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <div ref="tooltipElement"
    class="tooltip"
    :class="{ 'is-visible': visible }"
    :style="{
      left: `${x}px`,
      top: `${y}px`
    }"
  >
    {{ text }}
  </div>
</template>

<style scoped>
    .tooltip {
        position: fixed;
        transform: translate(-102%, -102%);
        color : white;
        opacity: 0;
        pointer-events: none;
        font-family: 'VT323';
        background-color: grey;
        mix-blend-mode:difference;
        text-wrap: nowrap;
        width : fit-content;
    }

    
    .tooltip.is-visible {
        opacity: 1;
    }
</style>