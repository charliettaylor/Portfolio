<script lang="ts">
  export let heading: String;
  export let subheading: String;
  export let content: String;
</script>

<div class="card">
  <h2 class="heading">
    {heading}
  </h2>
  <h3>
    {subheading}
  </h3>
  <p>
    {content}
  </p>
</div>

<style>
  .card {
    color: var(--text);
    border: 0.1rem;
    border-color: var(--text);
    border-style: solid;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin: 0.5rem;
    background-color: var(--left);
  }
</style>
