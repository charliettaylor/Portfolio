<script>
	const titles = [
		['Home', '#one'],
		['Projects', '#two'],
		['Work', '#three'],
		['Contact', '#five']
	];
</script>

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
		text-decoration: none;
		color: var(--text);
		padding-top: 10px;
	}
</style>
