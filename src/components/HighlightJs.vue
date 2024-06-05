<template>
  <highlightjs :language="language" :code="code" />
</template>

<script>
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";

export default {
  name: "HighlightJs",
  props: {
    language: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  },
  components: {
    highlightjs: hljsVuePlugin.component,
  },
};
</script>
