<script>
	const titles = [
		['Projects', '#projects'],
		['Work', '#work'],
		['Education', '#education'],
		['Contact', '#contact']
	];

	let innerWidth = 0
	let innerHeight = 0
	$: mobile = innerWidth < 1080;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="header">
	{#each titles as title}
		<li>
			<a class={!mobile ? "" : "mobile"} href={title[1]}>
				{title[0]}
			</a>
		</li>
	{/each}
</div>

<style>
	.header {
		display: flex;
		padding: 2rem;
		padding-left: 5vw;
		padding-right: 5vw;
		justify-content: space-evenly;
		align-items: center;
		width: auto;
		list-style: none;
	}

	a {
		text-decoration: none;
		color: var(--text);
		padding-top: 10px;
		font-size: 1.5rem;
	}

	.mobile {
		font-size: 1rem;
	}
</style>
