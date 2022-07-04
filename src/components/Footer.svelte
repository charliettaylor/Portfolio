<script>
	let innerWidth = 0
	let innerHeight = 0
	$: mobile = innerWidth < 800;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<footer class={!mobile ? '' : 'mobile'}>
	<p>Made with ❤ by Charlie (●'◡'●)</p>
</footer>

<style>
	footer {
		height: 5vh;
		width: 105vw;
		position: relative;
		bottom: 0px;
		margin-top: 1rem;
		background-color: var(--flair);
		align-items: center;
		display: flex;
	}

	p {
		color: var(--text);
		padding: 0.25vh 2.5vw 0.25vh 2.5vw;
	}

	.mobile {
		justify-content: center;
	}
</style>
