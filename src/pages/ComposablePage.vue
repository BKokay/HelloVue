<script setup lang="ts">
import HighlightJs from "../components/HighlightJs.vue";
import ConceptPage from "../components/ConceptPage.vue";

</script>

<template>
  <ConceptPage>
    <template #heading> composables - share functionality between your components </template>
    <template #definition-expanded>
     In simple terms, a composable encapsulates the logic you would want to reuse throughout your application. A good example is fetching data with different urls. You can also create multiple variables and functions to extract from your composable. You can think of them as component-scoped services that can talk to one another. The example below is taken from the vue documentation about <a href="https://vuejs.org/guide/reusability/composables.html" target="_blank" rel="noopener">composables.</a>
    </template>
    <template #code-example>
      <HighlightJs
        language="js"
        code="
      //fetch.js
      import { ref, watchEffect, toValue } from 'vue'

      export function useFetch(url) {
        const data = ref(null)
        const error = ref(null)
      
        const fetchData = () => {
          // reset state before fetching..
          data.value = null
          error.value = null
      
          fetch(toValue(url))
            .then((res) => res.json())
            .then((json) => (data.value = json))
            .catch((err) => (error.value = err))
        }
      
        watchEffect(() => {
          fetchData()
        })
      
        return { data, error }
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
