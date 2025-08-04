<script setup>
import { computed } from 'vue'
import { createArrowPathString } from './arrowPath.js'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  points: {
    type: Array,
    required: true
  },
  strokeWidth: {
    type: Number,
    default: 8
  },
  color: {
    type: String,
    default: '#6E92A3'
  },
  radius: {
    type: Number,
    default: 5
  },
  glass: {
    type: Boolean,
    default: false
  }
})

const arrowLength = computed(() => props.strokeWidth * 2)
const arrowWidth = computed(() => props.strokeWidth * 2.5)

const markerId = computed(() => `arrowHead-${props.id}`)
const filterId = computed(() => `glassEffect-${props.id}`)

const path = computed(() =>
  createArrowPathString(props.points, props.radius, arrowLength.value)
)
</script>

<template>
  <svg
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;"
    :viewBox="'0 0 800 600'"
  >
    <defs>
      <filter :id="filterId" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
        <feSpecularLighting in="blur" surfaceScale="5" specularConstant="0.75"
                            specularExponent="20" lighting-color="#ffffff" result="specLight">
          <fePointLight x="50" y="50" z="50" />
        </feSpecularLighting>
        <feComposite in="specLight" in2="SourceGraphic" operator="in" result="specComposite"/>
        <feBlend in="SourceGraphic" in2="specComposite" mode="screen" />
      </filter>

      <marker
        :id="markerId"
        :markerWidth="arrowLength"
        :markerHeight="arrowWidth"
        :refX="0"
        :refY="arrowWidth / 2"
        orient="auto"
        markerUnits="userSpaceOnUse"
      >
        <path
          :d="`M 0 0 L ${arrowLength} ${arrowWidth / 2} L 0 ${arrowWidth} Z`"
          :fill="color"
        />
      </marker>
    </defs>

    <path
      :d="path"
      :stroke="color"
      :stroke-width="strokeWidth"
      fill="none"
      :marker-end="`url(#${markerId})`"
      stroke-dasharray="4"
      stroke-dashoffset="0"
      :filter="glass ? `url(#${filterId})` : null"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="-40"
        dur="1s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
</template>
