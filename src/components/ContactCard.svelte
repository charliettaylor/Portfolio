<script lang="ts">
	export let name: string;
	export let link: string;
	export let image: string;
	export let alt: string;
</script>

<a href={link}>
	<div class="btn">
		<img src={image} {alt} />
		<span class="title">
			<h2 class="heading">
				{name}
			</h2>
		</span>
	</div>
</a>

<style>
	.btn {
		color: var(--text);
		border: 0.1rem;
		border-color: var(--text);
		border-style: solid;
		border-radius: 0.5rem;
		padding: 1rem;
		margin: 0.5rem;
		background-color: var(--left);
		width: 15vw;
		display: flex;
		align-items: center;
	}

	a {
		text-decoration: none;
	}

	h2 {
		font-size: 1.75rem;
	}

	span {
		display: table;
		margin: 0 auto;
	}

	img {
		width: 4rem;
	}
</style>
