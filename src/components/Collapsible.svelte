<script lang="ts">
	import { slide } from 'svelte/transition';
	export let heading: String;
	export let content: String;
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
		</span>
	{/if}
</div>

<style>
	p {
		font-family: 'Source Code Pro', sans-serif;
		color: var(--left);
		font-size: 1rem;
		padding: 0.3rem 0.5rem 0.3rem 0.5rem;
	}

	button {
		width: 60vw;
		justify-content: space-between;
		align-items: center;
		border: none;
		background: var(--text);
		display: flex;
		font-family: 'Source Code Pro', sans-serif;
		color: var(--left);
		font-size: 1.75rem;
		cursor: pointer;
		margin: 0;
		padding: 0.5em;
	}

	button:hover {
		background-color: var(--left);
		color: var(--text);
	}

	button:active {
		background-color: var(--left);
		color: var(--text);
	}

	.heading {
		padding: 0.1rem;
	}

	.inside {
		background-color: var(--text);
		width: 58.9vw;
		text-align: left;
		height: auto;
		margin: 0;
		padding-right: 0;
	}

	.accordion {
		display: block;
	}

	.accordion {
		display: flex;
		flex-direction: column;
		width: 60vw;
	}

	.accordion .inside {
		width: 100%;
	}

	.accordion button {
		width: 100%;
	}

	.active {
		background-color: var(--left);
		color: var(--text);
	}
</style>
