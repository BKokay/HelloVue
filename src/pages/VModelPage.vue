<script setup lang="ts">
import HighlightJs from "../components/HighlightJs.vue";
import ConceptPage from "../components/ConceptPage.vue";
</script>

<template>
  <ConceptPage>
    <template #heading> v-model - create forms </template>
    <template #definition-expanded>
      You can apply the <code>v-model</code> directive to an <code>input</code>, a <code>textarea</code>, or a <code>select</code>. You give the element a property to update and vue will keep sync between the code and the form field using two-way binding. If the property value changes in the code, the value displayed in the template is updated. If the user enters a new value, the property value is updated in the code. Magically get the <code>event.target.value</code>!
    </template>
    <template #code-example>
      <HighlightJs
        language="js"
        code="
      import { ref } from 'vue';
      import { BaseCheckBox } from '@/components/base';
      
      const props = defineProps<{
        isCheckedItem?: boolean,
      }>();

      const isAddressChecked = ref(props.isCheckedItem);

      <div>
        <BaseCheckBox
				v-if='isSelect'
        //if the checkbox is checkes, will update the props.isCheckedItem to true
				v-model='isAddressChecked'
				class='address-checkbox'
				@click.stop
			/>
      </div>
  

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
