<script>
	const titles = [
		['Home', '#one'],
		['Projects', '#two'],
		['Contact', '#two'],
		['About', '#two']
	];
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Open+Sans:wght@600&family=Source+Code+Pro:wght@500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="header">
	{#each titles as title}
		<li>
			<a href={title[1]}>
				{title[0]}
			</a>
		</li>
	{/each}
</div>

<style>
	.header {
		display: flex;
		padding: 80px;
		padding-left: 5vw;
		padding-right: 5vw;
		margin-top: -3em;
		justify-content: space-evenly;
		align-items: center;
		width: auto;
		list-style: none;
	}

	a {
		font-family: 'Source Code Pro', sans-serif;
		font-size: calc(8px + 0.75vw);
		text-decoration: none;
		color: var(--text);
		padding-top: 10px;
	}
</style>
