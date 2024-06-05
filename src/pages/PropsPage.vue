<script setup lang="ts">
import HighlightJs from "../components/HighlightJs.vue";
import ConceptPage from "../components/ConceptPage.vue";
</script>

<template>
  <ConceptPage>
    <template #heading> Props - how the parent communicates to the child</template>
    <template #definition-expanded>
      Props are custom attributes that are passed to a component which become properties on the component instance. Thinking of it in terms of ES5 classes, <code>props</code> are like instance variables that are initialized via the constructor of a class, ie. const john = new Person('John', 'Doe', 42). 
    </template>
    <template #code-example>
      <HighlightJs
        language="js"
        code="
        // PersonComponent.vue
        <template>
          <div>
            <p>Hello, my name is {{ name }} and I am {{ age }} years old.</p>
          </div>
        </template>

        <script setup>
        import { defineProps } from 'vue'

        const props = defineProps({
          name: String,
          age: Number
        })
        </script>
        
        // ParentComponent.vue
        <template>
          <PersonComponent name='John' age='30' />
        </template>

        <script setup>
        import PersonComponent from './PersonComponent.vue'
        </script>

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
