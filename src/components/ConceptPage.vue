<script setup lang="ts">

</script>

<template>
  <div class="card">
    <h3>
      <slot name="heading"></slot>
    </h3>
    <p>
      <slot name="definition-expanded"> </slot>
    </p>
    <div>
      <slot name="code-example">
      </slot>
    </div>
  </div>
</template>
<style scoped>
.card {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  margin-left: 1rem;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

p {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  .card {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  .card:before {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .card:after {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }
}
</style>
