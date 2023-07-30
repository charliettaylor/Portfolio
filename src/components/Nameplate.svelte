<script>
  let innerWidth = 0;
  let innerHeight = 0;
  $: mobile = innerWidth < 1080;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div>
  <h1 class={!mobile ? 'name' : 'name mobile'}>
    <h1>
      Hey, I'm Charlie!
      <br />
    </h1>
    <p>Aspiring Backend Developer</p>
  </h1>
</div>

<style>
  .name {
    font-size: 3rem;
    text-decoration: none;
    color: var(--text);
    text-align: left;
    margin: 1rem;
  }

  p {
    font-size: 2rem;
  }

  .mobile {
    text-align: center;
  }

  .mobile h1 {
    font-size: 2rem;
  }

  .mobile p {
    font-size: 1rem;
  }
</style>
