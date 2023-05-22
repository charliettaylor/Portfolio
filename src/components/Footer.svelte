<script>
	let innerWidth = 0
	let innerHeight = 0
	$: mobile = innerWidth < 1080;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<footer class={!mobile ? '' : 'mobile'}>
	<webring-element src="https://raw.githubusercontent.com/diamondburned/acmfriends-webring/%3C3-spring-2023/webring.json" name="peekoe" />
	<!-- <p>Made with ❤ by Charlie (●'◡'●)</p> -->
</footer>

<style>
	footer {
		height: 5vh;
		width: 100vw;
		position: relative;
		bottom: 0px;
		margin-top: 1rem;
		background-color: var(--flair);
		align-items: center;
		justify-content: center;
		display: flex;
		color: var(--text);
	}

	.mobile {
		justify-content: center;
	}
</style>
