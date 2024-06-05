<script setup lang="ts">
import HighlightJs from "../components/HighlightJs.vue";
import ConceptPage from "../components/ConceptPage.vue";
</script>

<template>
  <ConceptPage>
    <template #heading> v-bind - add property attributes to your HTML </template>
    <template #definition-expanded>
      This vue directive allows you to modify the DOM properties with dynamic data from your component. This is often used to add classes and styles to an element. More powerfully though, it allows you to set properties from a nested component directly in the component instance.
    </template>
    <template #code-example>
      <HighlightJs
        language="js"
        code="
      //AddressListItem.vue
      import { AddressSearch } from '@/components/inputs';

      <AddressSearch
      :country-options='{ on: false }'
      :limit='MAX_RESULTS'
      :previous-value='stringToParse'
      class='address-edit-search'
      @select='onChangeAddress'
      />

      //AddressSearch.vue
      const props = withDefaults(defineProps<{
        limit?: number,
        previousValue?: string,
        countryOptions?: CountryOptions,
      }>(), {
        //these are the defaults
        cleared: false,
        limit: MAX_RESULTS,
        iconType: PointType.start,
        highlight: false,
        countryOptions: () => ({
          on: true,
          icon: true,
          classes: NULL_STRING,
          preselected: 'deu',
          countryItemClasses: ''
        })
      });
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
