<script lang="ts">
	export let heading: String;
	export let subheading: String;
	export let content: String;
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Open+Sans:wght@600&family=Source+Code+Pro:wght@500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

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
		font-family: 'Source Code Pro', sans-serif;
		border: 0.1rem;
		border-color: var(--text);
		border-style: solid;
		border-radius: 0.5rem;
		padding: 1rem;
		margin: 0.5rem;
		background-color: var(--left);
		width: 60vw;
	}

	p {
		font-size: medium;
	}
</style>
