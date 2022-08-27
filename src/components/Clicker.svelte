<script>
	let score = 0;
	let upgradesBought = 0;
	let upgradeCost = 10;
	let clickUpgrade = 1;
	let clickUpgradeCost = 10;

	function clicked() {
		score += 1 * clickUpgrade;
	}

	function buyUpgrade() {
		if (score >= upgradeCost) {
			score -= upgradeCost;
			upgradesBought += 1;
			upgradeCost = Math.floor(upgradeCost * 1.1);
		}
	}

	function buyClickUpgrade() {
		if (clickUpgradeCost < score) {
			score -= clickUpgradeCost;
			clickUpgrade += 1;
			clickUpgradeCost = Math.floor(clickUpgradeCost * 1.1);
		}
	}

	setInterval(() => {
		score += upgradesBought * Math.ceil(upgradesBought / 10);
	}, 1000);

	let [space, U, C] = [32, 85, 67];

	/**
	 * @param {{ keyCode: any; preventDefault: () => void; }} e
	 */
	function onKeyDown(e) {
		switch (e.keyCode) {
			case space:
				e.preventDefault();
				clicked();
				break;
			case U:
				buyUpgrade();
				break;
			case C:
				buyClickUpgrade();
				break;
			default:
				break;
		}
	}
</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<div class="clicker">
	<h1>Moolah Clicker</h1>
	<img class="moolah" src="assets/moolah.png" alt="Lenny" width="200" height="200" />

	<div class="score">
		<p>
			Your score is: {score.toLocaleString()}
		</p>
	</div>

	<button on:click={clicked}>
		<p>Click me! or <kbd>Space</kbd></p>
	</button>

	<button on:click={buyUpgrade}>
		<p>
			Buy auto-click for {upgradeCost.toLocaleString()}! or <kbd>U</kbd>
		</p>
	</button>

	<button on:click={buyClickUpgrade}>
		<p>
			Buy click upgrade for {clickUpgradeCost.toLocaleString()}! or <kbd>C</kbd>
		</p>
	</button>
</div>

<style>
	p {
		color: #fefefe;
	}

	h1 {
		color: #fefefe;
	}

	button {
		border-radius: 2px;
		background-color: transparent;
		border: 2px solid salmon;
		padding: 10px;
		margin: 5px;
		width: auto;
		min-width: 25vw;
		font-family: 'Source Code Pro', sans-serif;
	}

	.clicker {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 100vw;
		min-height: 100vh;
		flex-direction: column;
		background: #004e92;
		background: -webkit-linear-gradient(to bottom, #004e92, #000428);
		background: linear-gradient(to bottom, #004e92, #000428);
	}

	.score {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.moolah {
		-webkit-animation: spin 2s linear infinite;
		-moz-animation: spin 2s linear infinite;
		animation: spin 2s linear infinite;
	}

	@-moz-keyframes spin {
		100% {
			-moz-transform: rotate(360deg);
		}
	}

	@-webkit-keyframes spin {
		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes spin {
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	kbd {
		background-color: #eee;
		border-radius: 3px;
		border: 1px solid #b4b4b4;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 2px 0 0 rgba(255, 255, 255, 0.7) inset;
		color: #333;
		display: inline-block;
		font-size: 0.85em;
		font-weight: 700;
		line-height: 1;
		padding: 2px 4px;
		white-space: nowrap;
	}
</style>
