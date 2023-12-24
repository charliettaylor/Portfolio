<script lang="ts">
  import { slide } from 'svelte/transition';
  import { getAssetUrl } from '../lib/utils';
  export let heading: String;
  export let content: String;
  export let link: string;
  let isOpen = false;
  const toggle = () => (isOpen = !isOpen);
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Open+Sans:wght@600&family=Source+Code+Pro:wght@500&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="accordion">
  <button class={isOpen ? 'active' : ''} on:click={toggle} aria-expanded={isOpen}>
    <span class="heading">{heading}</span>
    {#if isOpen}
      <span class="icon">&minus;</span>
    {:else}
      <span class="icon">&plus;</span>
    {/if}
  </button>

  {#if isOpen}
    <span class="inside" transition:slide={{ duration: 300 }}>
      <p>
        {content}
      </p>
      <div class="link">
        <a href={link} class="link-text" target="_blank" rel="noopener noreferrer">
          <img src={getAssetUrl('/github.svg')} alt="" />
        </a>
      </div>
    </span>
  {/if}
</div>

<style>
  /* @keyframes background-pan {
    from {
      background-position: 50% center;
    }

    to {
      background-position: -150% center;
    }
  } */

  p {
    color: var(--left);
    padding: 0.3rem 1.5rem;
  }

  button {
    justify-content: space-between;
    align-items: center;
    border: none;
    background: var(--text);
    display: flex;
    color: var(--left);
    font-size: 1.75rem;
    cursor: pointer;
    margin: 0;
    padding: 0.5em;
  }

  button:hover,
  button:active,
  .active {
    background: var(--split);
    background-size: 200%;
    animation: background-pan 5s linear infinite;
    color: var(--text);
  }

  a {
    background-color: var(--right);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  a:link {
    text-decoration: none;
    color: var(--left);
  }

  a:visited {
    text-decoration: none;
    color: var(--left);
  }

  img {
    height: 2rem;
  }

  .heading {
    padding: 0.1rem;
    /* Heading will not inherit body font for some reason, investigate later */
    font-family: 'Source Code Pro', sans-serif;
  }

  .inside {
    background-color: var(--text);
    text-align: left;
    height: auto;
    margin: 0;
    padding-right: 0;
  }

  .accordion {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .accordion .inside {
    width: 100%;
  }

  .accordion button {
    width: 100%;
  }

  .active {
    background-color: var(--split);
    color: var(--text);
  }

  .link {
    background-color: var(--text);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--left);
    font-size: 1.5rem;
    margin: 0;
    padding: 0.5em;
  }

  .link-text {
    border-radius: 0.25rem;
    padding: 0.25rem;
  }

  .link-text:hover {
    background-color: var(--left);
    color: var(--text);
  }
</style>
