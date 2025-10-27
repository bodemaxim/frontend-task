<script setup lang="ts">
import { ref } from 'vue'
import InputAge from './input-age/input-age.vue'
import SimplePanel from './assets/simple-panel/simple-panel.vue'
import catImage from './assets/cat.jpg'
import type { Student } from './types'

const student = ref<Student>({
  name: 'Hugh',
  age: null,
  image: catImage,
})
</script>

<template>
  <div class="w-screen h-screen flex items-center bg-gray-200">
    <div class="flex flex-col w1/3 mx-auto">
      <SimplePanel class="w-full mb-2 px-5">
        <InputAge
          v-model:age="student.age"
          :name="student.name"
          :image="student.image"
          first-line-text="is"
          caption="years old"
        />
      </SimplePanel>
      <SimplePanel class="w-full px-5">
        <InputAge
          v-model:age="student.age"
          :name="student.name"
          :image="student.image"
          first-line-text="is"
          disabled
          caption="years old"
        />
      </SimplePanel>
    </div>
  </div>
</template>
