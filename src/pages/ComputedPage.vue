<script setup lang="ts">
import HighlightJs from "../components/HighlightJs.vue";
import ConceptPage from "../components/ConceptPage.vue";
</script>

<template>
  <ConceptPage>
    <template #heading> computed - keep your values up to date</template>
    <template #definition-expanded>
      Computed is used when you need to recompute a value every time another one changes. For example, formatting a coordinate from an input in order to make an api call. The value is computed right away after a dependency updates. It is important to note that is only works with reactive properties (declared using ref, reactive, or defineProps)
    </template>
    <template #code-example>
      <HighlightJs
        language="js"
        code="
      import { computed } from 'vue';
      import { useReadableAddressFull } from '@/composables/country';

      const props = defineProps<{
        id: string,
        name: string,
        tags?: string,
        latitude: number,
        longitude: number,
        country: string,
        city: string,
        part: string,
        zipcode: number,
        street: string,
        houseNumber: number,
        selected: boolean,
        editable: boolean,
        createdAt?: string,
        forceUpdate?: boolean,
        isSelect?: boolean,
        isCheckedItem?: boolean,
        pointNumber: number
      }>();

      //any time one of the props changes, the addressForPreview varible will be updated. 
      const addressForPreview = computed(() => useReadableAddressFull(props));

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
