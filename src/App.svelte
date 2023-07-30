<script>
  import Portfolio from './routes/Portfolio.svelte';
  import Playground from './routes/Playground.svelte';
  import Slug from './routes/Slug.svelte';

  const path = location.pathname;
</script>

<main>
  {#if path === '/'}
    <Portfolio />
  {:else}
    <Slug {path} />
  {/if}
</main>
