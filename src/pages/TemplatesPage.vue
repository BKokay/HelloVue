<script setup lang="ts">
import HighlightJs from "../components/HighlightJs.vue";
import ConceptPage from "../components/ConceptPage.vue";
</script>

<template>
  <ConceptPage>
    <template #heading> templates - it's just HTML</template>
    <template #definition-expanded>
      In simple terms, a template allows us to render HTML with some dynamic
      parts depending on our data. Creating a template with slots allows us to
      build reusable components. See the base accordion example below. 
    </template>
    <template #code-example>
      <HighlightJs
        language="js"
        code="
        <template>
          <div
            :class='['accordion', color && `text-${color}`, {
              'colored': color,
              'opened': open,
              'closed': !open
            }]'
          >
            <div
              :class='['accordion__header', color && open ? `text-${color}` : 'text-heading', {
                'cursor-pointer': !alwaysOpened
              }]'
              @click='!alwaysOpened ? toggle() : _'
            >
            //This is a named slot accesses like <template #head>...</template>
              <slot name='head' />
            </div>
            <div
              :class='['accordion__body', {
                'before:opacity-100 opacity-100': open,
                'before:opacity-0 opacity-0 overflow-hidden': !open
              }, bodyClasses]''
              :style='{ height: open ? `${height}px` : '0' }'
            >
              <div ref='content'>
                //this is a default slot accessed like <template #default>...</template>
                <slot />
              </div>
            </div>
          </div>
        </template>"
      />
    </template>
  </ConceptPage>
</template>

<style scoped>
code {
  color: aliceblue;
}
</style>
