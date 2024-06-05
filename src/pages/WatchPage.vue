<script setup lang="ts">
import HighlightJs from "../components/HighlightJs.vue";
import ConceptPage from "../components/ConceptPage.vue";

</script>

<template>
  <ConceptPage>
    <template #heading> watch & watchEffect - observe changes</template>
    <template #definition-expanded>
      Using <code>watch</code> and <code>watchEffect</code>, we can tell our program when the value of a property changes, but not necessarily compute the value of another one. For example, me might want to produce a side effect every time a property changes. This is useful in a search UI or keeping track of some change in a variable value. The difference between the two is that <code>watch</code> is lazy and won't run immediately but <code>watchEffect</code> will always run eagerly because it has to find the reactive dependencies (whereas we manually define them in <code>watch</code>)
    </template>
    <template #code-example>
      <HighlightJs
        language="js"
        code="
      //with watchEffect
      import { computed, watchEffect, ref } from 'vue';

      const total = computed(() => state.price * state.quantity);
      const totalHistory = ref<Array<string>>([]);
      watchEffect(
        () => {
          totalHistory.value.push(`Total changed to ${total.value`})
        }
      )
      // with watch
      import { computed, watch, ref } from 'vue';

      const total = computed(() => state.price * state.quantity);
      const totalHistory = ref<Array<string>>([]);
      watch(
        // this is the source of the watcher
        () => total.value,
        // this is the callback called when the source changes
        (newTotal, oldTotal) => {
        totalHistory.value.push(`Total changed from ${oldTotal} to ${newTotal}`);
        },
        // a watcher with a source is lazy by default
        // whereas a watcher with just an effect and no source is not
        // but we can make it run immediately with this option
        { immediate: true }
      );

      //watch in remote-editor
      watch(() => props.editable, (value) => {
        if(!value) {
          stringToParse.value = addressForPreview.value;
          const modified = prepareAddressPoint({ ...props, pointIndex: props.pointNumber });
          mapStore.changePoint({ name: 'id', value: props.id }, { ...modified, id: props.id, type: 'home' });
        }
      }, { immediate: true });

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
