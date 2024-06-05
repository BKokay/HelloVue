<script setup lang="ts">
import HighlightJs from "../components/HighlightJs.vue";
import ConceptPage from "../components/ConceptPage.vue";
</script>

<template>
  <ConceptPage>
    <template #heading> slots - make your templates customizable</template>
    <template #definition-expanded>
      The secret sauce to making UI components with <i>dynamic</i> content. It is a special tag you can use in your templates to include a piece of template provided by a parent to the child. The slot with no name is the default one. To provide the title and the content to the Card
      component, you wrap them into <code>template</code> elements, and name these templates as the slot that they
      must fill. A template is just an invisible wrapper. To specify a name, you can use <code>#name</code>.
    </template>
    <template #code-example>
      <HighlightJs
        language="js"
        code="
        //Card.vue
        <template>
          <div class='card'>
          <div class='card-body'>
          <h4 class='card-title'>
            //a named slot with some fallback default content
          <slot name='title'>Deafult Content</slot>
          </h4>
          <p class='card-text'>
            //a default slot **there can only be one per template
          <slot></slot>
          </p>
          </div>
          </div>
        </template>
        
        //ExampleCard.vue
        <Card>
          <template #title>My Fancy Card Title</template>
          <template #default>Some quick <strong>example</strong> text</template>
        </Card>
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
