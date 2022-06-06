<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Open+Sans:wght@600&family=Source+Code+Pro:wght@500&display=swap" rel="stylesheet"> 
</svelte:head>

<script lang="ts">
	export let heading: string;
	export let content: string;
	
	let isOpen: boolean = false;	
</script>

<div class="collapsible">
  <button class:active={isOpen} class="accordion" on:click={() => isOpen = !isOpen}>
    <span class="heading">{heading}</span>
    {#if isOpen}
      <span class="icon">&minus;</span>  
    {:else}
      <span class="icon">&plus;</span>
    {/if}
  </button>

  <section class:open-panel={isOpen} class="panel">
    <p>
      {content}
    </p>
  </section>
</div>



<style>
  :root {
    --left: #051622;
    --right: #E40C2B;
  }

	button.accordion {
		width: 100%;
		padding: 15px;
		margin: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: ivory;
		text-align: left;
		color: var(--left);
		/* border: 1px solid var(--left); */
		border: 0px;
    font-family: "Source Code Pro", sans-serif;
		cursor: pointer;
		transition: .3s;
	}
	
  .collapsible {
    width: 60vw;
  }

	button.accordion:hover,
	button.accordion.active {
		background-color: linear-gradient(
      to right,
      var(--left) 0%, 
      var(--left) 50%,
      var(--right) 50%,
      var(--right) 100%
    );
		/* border: 0px; */
		color: lime;
	}
	
	.heading {
		font-size: 1.5rem;
	}
	
	p {
		font-size: 1.2rem;
		text-align: justify;
		padding:10px 10px 5px;
		margin: auto 0;
    font-family: "Source Code Pro", sans-serif;
		color: var(--left);
	}
	span.icon {
		font-size: 1.8rem;
	}
	
	section.panel {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 0;
		overflow: auto;
		transition: all .5s;	
	}
	
	section.open-panel {
		height: 10vw;
    background-color: ivory;
	}
	
	section div button {
		width: 150px;
		font-weight: bold;
		color: white;
		background-color: hsl(11, 63%, 40%);
		padding: 10px 0;
		margin: 10px 10px 20px;
		cursor: pointer;
	}
	
	div button:active {
		background-color: hsl(11, 63%, 34%);
	}
</style>