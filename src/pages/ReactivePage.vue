<script setup lang="ts">
import HighlightJs from "../components/HighlightJs.vue";
import ConceptPage from "../components/ConceptPage.vue";
</script>

<template>
  <ConceptPage>
    <template #heading> reactive - keep your objects just that: reactive</template>
    <template #definition-expanded>
      Reactive is used for objects to keep their properties reactive. You can access all of the nested properties of an object using reactive. As a general rule, objects use reactive while primitives use ref.
    </template>
    <template #code-example>
      <HighlightJs
        language="js"
        code="
      import { reactive } from 'vue';

      const coords = reactive({
        x: 0,
        y: 0
      });
      const geocoded = reactive({});

      function init() {
        try {
          const { IWGeocoderClient, IWEventManager } = window;
          coder = new IWGeocoderClient();
      
          IWEventManager.addListener(coder, MAP_ACTIONS.geocod, (event) => {
            let result = {};
            if (event.results[0]) {
              result = event.results[0];
              nextTick(() => {
                Object.assign(geocoded, result.address);
                store.setGeocoded(geocoded);
              });
            }
          });
          window.IWA_MapCoder = coder;
          setEvents();
          return true;
        } catch (err) {
          attempts++;
          setTimeout(() => {
            init();
          }, MODULE_TIMEOUT);
        }
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
