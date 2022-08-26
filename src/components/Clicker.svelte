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
			clickUpgradeCost = Math.floor(upgradeCost * 1.05);
		}
	}

	setInterval(() => {
		score += upgradesBought * (Math.ceil(upgradesBought / 10));
	}, 1000);

	function onKeyDown(e) {
		switch (e.keyCode) {
			case 32:
				clicked();
				break;
			case 85:
				buyUpgrade();
				break;
			case 67:
				buyClickUpgrade();
				break;
			default:
				break;
		}
	}
</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<div class="clicker">
  <h1>
    Moolah Clicker
  </h1>
	<img class="moolah" src="assets/moolah.png" alt="Lenny" width="200" height="200" />

	<div class="score">
		<p>
			Your score is: {score}
		</p>
	</div>

	<button on:click={clicked}>
		<p>Click me! <kbd>Space</kbd></p>
	</button>

	<button on:click={buyUpgrade}>
		<p>
			Buy auto-click for {upgradeCost} <kbd>U</kbd>!
		</p>
	</button>

	<button on:click={buyClickUpgrade}>
		<p>
			Buy click upgrade for {clickUpgradeCost} <kbd>C</kbd>!
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
</style>
