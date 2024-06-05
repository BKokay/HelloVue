<script setup lang="ts">
import HighlightJs from "../components/HighlightJs.vue";
import ConceptPage from "../components/ConceptPage.vue";
</script>

<template>
  <ConceptPage>
    <template #heading> ref - keep your primitives reactive</template>
    <template #definition-expanded>
      This is a way to keep your content dynamic and use the special sauce that Vue has for reactivity. <code>ref</code> is best used for primitive types or arrays that you want to rewrite. 
    </template>
    <template #code-example>
      <HighlightJs
        language="js"
        code="
      import { ref } from 'vue';

      const selected = ref();
      
      function select(value: string) {
          const item = tours.find(el => el.id === value);
          if (item) selected.value = value;
          emit('select', item);
      }
    "
    />
    </template>
  </ConceptPage>
</template>

<style scoped>
code {
  color: aliceblue;
}
</style>
