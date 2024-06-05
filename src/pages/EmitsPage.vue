<script setup lang="ts">
import HighlightJs from "../components/HighlightJs.vue";
import ConceptPage from "../components/ConceptPage.vue";
</script>

<template>
  <ConceptPage>
    <template #heading> Emits - send data upwards to the parent </template>
    <template #definition-expanded>
      Parent components use props to send data to a child. However, sometimes
      the child needs to send data upwards to the parent as is the case with
      form inputs. We can accomplish this using <code>emits</code> which are
      like custom event listeners. The emit function has two arguments: the
      event name, and the payload object with the data you want to send to the
      parent. The syntax is: <code>emit(eventName, payload)</code>.
      Alternatively, you can make an inline emit directly on your template using
      the same syntax.
    </template>
    <template #code-example>
      <HighlightJs
        language="js"
        code="
      //inline emit in Composition API
      //ChildComponent.vue
      <template>
        <div>
          <p> Custom Text Input <p>
            <input
              type='text'
              placeholder='Custom Text'
              //in-line emit event
              @change='$emit('customChange', $event.target.value)'
            />
        </div>
      </template>

      //ParentComponent.vue
      <template>
        <ChildComponent @customChange='logChange' />
      </template>
      <script setup>
        import ChildComponent from './ChildComponent.vue'
          const logChange = (event) => {
            console.log(event)
          }
      </script>

      //Composition API using defineEmits. Parent stays the same
      //ChildComponent.vue
      <template>
        <div>
          <p> Custom Text Input <p>
            <input
              type='text'
              placeholder='Custom Text'
              @change='handleChange'
            />
        </div>
      </template>
      <script setup>
      const emit = defineEmits(['customChange'])

      const handleChange = (event) => {
        emit('customChange', event.target.value)
      }
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
