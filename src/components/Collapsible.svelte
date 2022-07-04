<script lang="ts">
	import { slide } from 'svelte/transition';
	export let heading: String;
	export let content: String;
	export let link: string;
	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);
</script>

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
					Link
				</a>
			</div>
		</span>
	{/if}
</div>

<style>
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

	button:hover {
		background-color: var(--left);
		color: var(--text);
	}

	button:active {
		background-color: var(--left);
		color: var(--text);
	}

	a:link {
		text-decoration: none;
		color: var(--left);
	}

	a:visited {
		text-decoration: none;
		color: var(--left);
	}

	.heading {
		padding: 0.1rem;
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
		background-color: var(--left);
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
		color: var(--left);
	}

	.link-text:hover {
		color: var(--flair);
	}
</style>
