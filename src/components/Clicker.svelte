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
  <h1>Foot Clicker</h1>
  <img class="foot" src="assets/foot.gif" alt="Lenny" />

  <div>
    <p class="score">
      You have {score.toLocaleString()} toe{score !== 1 ? 's' : ''}!
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
  .score {
    color: #fefefe;
    font-size: 1.25rem;
  }

  p {
    font-size: 1rem;
    color: #fefefe;
  }

  h1 {
    color: #fefefe;
    font-size: 3rem;
  }

  button {
    border-radius: 2px;
    background-color: transparent;
    border: 2px solid #fefefe;
    padding: 0.5rem;
    margin: 0.2rem;
    width: auto;
    /* height: 5vh; */
    min-width: 50vw;
    font-family: 'Source Code Pro', sans-serif;
    border-radius: 0.5rem;
    font-size: 0.75rem;
  }

  button:hover {
    background-color: #2d834eb9;
    cursor: pointer;
  }

  button:active {
    transform: scale(0.95);
  }

  .foot {
    height: 10rem;
    width: 10rem;
  }

  .foot:active {
    transform: scale(0.95);
  }

  .clicker {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100vw;
    min-height: 100vh;
    flex-direction: column;
    background: #2d834eb9;
  }

  .score {
    display: flex;
    justify-content: center;
    align-items: center;
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
