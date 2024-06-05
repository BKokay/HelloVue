<script setup lang="ts">
import { ref, reactive } from 'vue';
import { RouterLink } from 'vue-router';
import ConceptItem from './ConceptItem.vue'

const reactivitySystem = reactive([
  { name: 'reactive', path: '/reactive' },
  { name: 'ref', path: '/ref' },
  { name: 'computed', path: '/computed' },
  { name: 'watch & watchEffect', path: '/watch' },
]);

const dataBinding = ref([
    {name: 'v-bind', path: '/v-bind'},
    {name: 'v-model', path: '/v-model'},
])

const componentInteractions = ref([
    {name: 'props', path: '/props'},
    {name: 'emits', path: '/emits'},
    {name: 'templates', path: '/templates'},
    {name: 'slots', path: '/slots'},
])

const composables = ref([
    {name: 'composables', path: '/composables'}
])

// const directives = ref([
//     {name: 'v-on', path: '/v-on'},
//     {name: 'v-show', path: '/v-show'},
//     {name: 'v-for', path: '/v-for'},
//     {name: 'v-if', path: '/v-if'},
//     {name: 'v-else', path: '/v-else'},
//     {name: 'v-else-if', path: '/v-else-if'},
// ])
</script>

<template>
    <ConceptItem>
        <template #icon>
            1
        </template>
        <template #heading>Reactivity System</template>
        <template #definition>
            Vue's core feature which allows the framework to <i>automagically </i>track changes to data and update the DOM accordingly. Reactive properties can signal to Vue that they've been updated and it should update the DOM when and where necessary. 
        </template>
        <template #conceptLink>
            <ul class="concept-links">
                <li v-for="link in reactivitySystem" :key="link.name">
                    <router-link :to="link.path">{{ link.name }}</router-link>
                </li>
            </ul>
        </template>
    </ConceptItem>
    <ConceptItem>
        <template #icon>
            2
        </template>
        <template #heading>Data Binding</template>
        <template #definition>
           Vue's ability to sync data between the JS model and the UI, ensuring that changes in the model are reflected in the UI and vice versa. Vue's syntax includes one-way (v-bind) and two-way (v-model) data binding..
        </template>
        <template #conceptLink>
            <ul class="concept-links">
                <li v-for="link in dataBinding" :key="link.name">
                    <router-link :to="link.path">{{ link.name }}</router-link>
                </li>
            </ul>
        </template>
    </ConceptItem>
    <ConceptItem>
        <template #icon>
            3
        </template>
        <template #heading>Component Interaction</template>
        <template #definition>
            Vue creates a seemless UI using components. Parent and children components communicate using props, emits, slots, and <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">state management tools</a>. A quick way to remember the interaction is that parents can give their children property (props) and in turn the kids emit unique, joyful (or stressful) interactions to their parents. 
        </template>
        <template #conceptLink>
            <ul class="concept-links">
                <li v-for="link in componentInteractions" :key="link.name">
                    <router-link :to="link.path">{{ link.name }}</router-link>
                </li>
            </ul>
        </template>
    </ConceptItem>
    <ConceptItem>
        <template #icon>
            4
        </template>
        <template #heading>Composables</template>
        <template #definition>
            Composables allow you to separate the logic out of your components and to reuse the logic across a large application. There are also community created composables that can be found in <a href="https://vueuse.org/" target="_blank" rel="noopener">VueUse</a>
        </template>
        <template #conceptLink>
            <ul class="concept-links">
                <li v-for="link in composables" :key="link.name">
                    <router-link :to="link.path">{{ link.name }}</router-link>
                </li>
            </ul>
        </template>
    </ConceptItem>
    <ConceptItem>
        <template #icon>
            5
        </template>
        <template #heading>Vue Directives</template>
        <template #definition>
            Directives allow you to perform various tasks directly in the component template. These include conditional rendering, event handling, list rendering, and more. They are straight forward and can be easily understood from the <a href="https://vuejs.org/api/built-in-directives.html#built-in-directives" target="_blank" rel="noopener">documentation</a>.
        </template>
        <!-- <template #conceptLink>
            <ul class="concept-links">
                <li v-for="link in directives" :key="link.name">
                    <router-link :to="link.path">{{ link.name }}</router-link>
                </li>
            </ul>
        </template> -->
    </ConceptItem>
    
</template>

<style scoped>
.concept-links {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.concept-links li {
  display: inline;
}

.concept-links li {
  display: inline-block;
  padding: 0 1rem;
  text-decoration: none;
  border-left: 1px solid var(--color-border);
}

.concept-links li:first-of-type {
  border-left: 0;
}
</style>