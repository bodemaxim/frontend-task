<script setup lang="ts">
import { computed } from 'vue'
import Avatar from 'primevue/avatar'
import InputText from 'primevue/inputtext'
import type { InputAgeProps } from './input-age.types'

const age = defineModel<number | null>('age', { default: null })

const props = withDefaults(defineProps<InputAgeProps>(), {
  name: '',
  disabled: false,
  firstLineText: '',
  caption: '',
  image: undefined,
})

const ageValue = computed<string>({
  get: () => {
    if (!age.value) return ''

    return age.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  },
  set: (val: string) => {
    const cleaned = val.replace(/\D/g, '')
    age.value = cleaned ? parseInt(cleaned, 10) : null
  },
})

const calculateInputWidth = (value: string): number => {
  const minWidth = 72

  if (!value) return minWidth

  const digitWidth = 9.5
  const spaceWidth = 4
  const padding = 24

  const spacesCount = (value.match(/\s/g) || []).length

  const digitsWidth = (value.length - spacesCount) * digitWidth
  const spacesWidth = spacesCount * spaceWidth
  const totalContentWidth = digitsWidth + spacesWidth + padding

  const buffer = value.length > 5 ? 12 : 0

  return Math.max(minWidth, totalContentWidth + buffer)
}

const inputWidth = computed<number>(() => {
  return calculateInputWidth(ageValue.value)
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target.value

  const cleaned = value.replace(/\D/g, '')
  const formatted = cleaned.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  age.value = cleaned ? parseInt(cleaned, 10) : null
  target.value = formatted
}
</script>

<template>
  <div class="flex items-center gap-3">
    <Avatar
      shape="circle"
      size="xlarge"
      :image="image"
      :label="image ? undefined : name?.charAt(0) || ''"
      :class="[
        'bg-gray-300',
        { 'ring-1 ring-[var(--color-primary)] ring-offset-1': !props.disabled },
      ]"
    />
    <div>
      <label for="input-number" :class="['font-koulen', disabled ? 'text-black' : 'text-primary']"
        >{{ name }} {{ firstLineText }}</label
      >
      <div class="flex gap-2 items-center">
        <InputText
          :value="ageValue"
          placeholder="0"
          name="input-number"
          :disabled="disabled"
          id="input-number"
          :style="{ width: `${inputWidth}px` }"
          class="transition-all duration-200 font-inter"
          @input="handleInput"
        />
        <div class="text font-inter">{{ caption }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
