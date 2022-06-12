<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Open+Sans:wght@600&family=Source+Code+Pro:wght@500&display=swap" rel="stylesheet"> 
</svelte:head>

<script lang="ts">
	export let heading: String;
  export let degree: String;
	export let content: String;
</script>

<div class="card">
  <h2 class="heading">
    {heading}
  </h2>
  <h3>
    {degree}
  </h3>
  <p>
    {content}
  </p>
</div>

<style>
  .card {
    color: ivory;
    font-family: "Source Code Pro", sans-serif;
    border: 0.1rem;
    border-color: ivory;
    border-style: solid;
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 0.5rem;
    background-color: var(--left);
    width: 50vw;
  }

  p {
    font-size: medium;
  }
</style>