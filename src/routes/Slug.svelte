<script lang="ts">
  export let path: string;
  import { LINKS } from '../lib/data/links';
  path = path.replaceAll('/', '').toLowerCase();
</script>

{#if path in LINKS}
  <meta http-equiv="refresh" content="0; url={LINKS[path]}" />
{:else}
  <title> 🌎 Not Found </title>
  <body>
    <div>
      <h1>404, where are you going?</h1>
    </div>
  </body>
{/if}

<style>
  body {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    font-family: 'Source Code Pro', sans-serif;
    background: linear-gradient(
      to right,
      var(--left) 0%,
      var(--left) 50%,
      var(--right) 50%,
      var(--right) 100%
    );

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  div {
    display: flex;
    justify-content: center;
    width: 50vw;
  }

  h1 {
    color: whitesmoke;
    font-size: 72px;
  }
</style>
