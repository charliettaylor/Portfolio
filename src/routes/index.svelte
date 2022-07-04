<script>
	import Header from '../components/Header.svelte';
	import Nameplate from '../components/Nameplate.svelte';
	import Footer from '../components/Footer.svelte';
	import Collapsible from '../components/Collapsible.svelte';
	import Card from '../components/Card.svelte';
	import ContactCard from '../components/ContactCard.svelte';
	import Experience from '../components/Experience.svelte';

	import { projects } from './projects';
	import { schools } from './schools';
	import { jobs } from './jobs';
	import { contacts } from './contacts';


	let innerWidth = 0
	let innerHeight = 0
	$: mobile = innerWidth < 800;
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Open+Sans:wght@600&family=Source+Code+Pro:wght@500&display=swap"
		rel="stylesheet"
	/>
	<link rel="icon" type="image/ico" href="assets/favicon.ico" />
</svelte:head>

<svelte:window bind:innerWidth bind:innerHeight />

<title> Charlie Taylor </title>

<body>
	<div class="wrapper">
		<section class="one" id="one">
			<Header />
			<div class="row">
				<div class="column">
					<div class="left">
						<Nameplate />
					</div>
				</div>
				<div class="column">
					<div class="right" />
				</div>
			</div>
		</section>

		<section id="two">
			<div class="projects">
				<h1 class="header">Projects</h1>
				<div class={!mobile ? "page2" : "page2 mobile"}>
					{#each projects as project}
						<Collapsible heading={project.heading} content={project.content} link={project.link}/>
					{/each}
				</div>
			</div>
		</section>

		<section id="three">
			<div class="jobs">
				<h1 class="header">Work Experience</h1>
				<div class={!mobile ? "page3" : "page3 mobile"}>
					{#if !mobile}
						{#each jobs as job}
							<Experience heading={job.heading} subheading={job.subheading} content={job.content} date={job.date}/>
						{/each}
					{:else}
						{#each jobs as job}
							<Card heading={job.heading} subheading={job.subheading} content={job.content} />
						{/each}
					{/if}
				</div>
			</div>
		</section>

		<section id="four">
			<div class="education">
				<h1 class="header">Education</h1>
				<div class={!mobile ? "page4" : "page4 mobile"}>
					{#each schools as school}
						<Card
							heading={school.heading}
							subheading={school.subheading}
							content={school.content}
						/>
					{/each}
				</div>
			</div>
		</section>

		<section id="five">
			<div class="contact">
				<h1 id="contactTitle" class="header">Contact</h1>
				<div class={!mobile ? "page5" : "page5 mobile"}>
					{#each contacts as contact}
						<ContactCard
							name={contact.name}
							link={contact.link}
							image={contact.image}
							alt={contact.alt}
						/>
					{/each}
				</div>
			</div>
			<div id="footer">
				<Footer />
			</div>
		</section>
	</div>
</body>

<style>
	:root {
		--left: #732d28;
		--right: #c24c43;
		--text: #ffeadb;
		--flair: #5b7b65;
	}

	body {
		padding: 0;
		margin: 0;
		font-family: "Source Code Pro", sans-serif;
		background: linear-gradient(
			to right,
			var(--left) 0%,
			var(--left) 50%,
			var(--right) 50%,
			var(--right) 100%
		);
	}

	section {
		width: 100vw;
		min-height: 100vh;
		height: auto;
	}

	h1 {
		font-size: 2.5em;
		color: var(--text);
	}

	.wrapper {
		width: 100vw;
		height: 100vh;
		overflow-x: hidden;
	}

	.row {
		display: flex;
		flex-direction: row;
	}

	.column {
		display: flex;
		flex-direction: column;
		flex-basis: 100%;
		flex: 1;
	}

	.left {
		text-align: center;
		color: var(--text);
		display: flex;
		justify-content: center;
		align-items: center;
		height: 75vh;
	}

	.right {
		text-align: center;
		color: var(--text);
		display: flex;
		justify-content: center;
		align-items: center;
		height: 75vh;
	}

	.projects {
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.page2 {
		text-align: center;
		color: var(--text);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 60vw;
	}

	#two {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#footer {
		position: absolute;
		bottom: 0;
		display: flex;
		padding-left: 2vw;
	}

	#three {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.page3 {
		justify-content: space-evenly;
		width: 60vw;
	}

	.header {
		padding-bottom: 2rem;
		border-bottom: 0.5rem solid var(--text);
	}

	.education {
		display: flex;
		flex-direction: column;
	}

	#four {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.page4 {
		justify-content: space-evenly;
		width: 60vw;
	}

	.jobs {
		display: flex;
		flex-direction: column;
	}

	#five {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.contact {
		display: flex;
		align-items: center;
		align-content: center;
		flex-direction: column;
	}

	.page5 {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: 50vw;
	}

	/* width */
	::-webkit-scrollbar {
		width: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: var(--left);
	}

	.mobile {
		width: 90vw;
	}
</style>
