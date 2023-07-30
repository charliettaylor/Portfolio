<script lang="ts">
  import Welcome from '../components/Welcome.svelte';
  import Map from '../components/Map.svelte';
  import Spin from '../components/Spin.svelte';
  import Clicker from '../components/Clicker.svelte';

  $: currTile = 0;
  let [up, down, right, left, space] = [38, 40, 39, 37, 32];
  let innerWidth = 0;
  let innerHeight = 0;
  $: scrollX = 0;
  $: scrollY = 0;

  function onKeyDown(e: KeyboardEvent) {
    switch (e.keyCode) {
      case up:
        updateCurrTile(-3);
        break;
      case down:
        updateCurrTile(3);
        break;
      case left:
        updateCurrTile(-1);
        break;
      case right:
        updateCurrTile(1);
        break;
      case space:
        e.preventDefault();
        break;
    }
    updateScreenPosition();
  }

  function updateScreenPosition() {
    scrollX = innerWidth * (currTile % 3);

    if (currTile > 5) {
      scrollY = innerHeight * 2;
    } else if (currTile > 2) {
      scrollY = innerHeight;
    } else {
      scrollY = 0;
    }
  }

  function updateCurrTile(change: number) {
    let newCurr = currTile + change;
    if (newCurr < 0 || newCurr > 8) {
      return;
    }
    currTile = newCurr;
  }
</script>

<svelte:window
  on:keydown|preventDefault={onKeyDown}
  bind:innerWidth
  bind:innerHeight
  bind:scrollX
  bind:scrollY
/>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Open+Sans:wght@600&family=Source+Code+Pro:wght@500&display=swap"
    rel="stylesheet"
  />
  <link rel="icon" type="image/ico" href="assets/favicon.ico" />
</svelte:head>

<body>
  <Map position={currTile} />

  <div class="row">
    <div class="tile">
      <Welcome color="crimson" />
    </div>

    <div class="tile">
      <Spin />
    </div>

    <div class="tile">
      <Clicker />
    </div>
  </div>

  <div class="row">
    <div class="tile">
      <Welcome color="cornflowerblue" />
    </div>

    <div class="tile">
      <Welcome color="pink" />
    </div>

    <div class="tile">
      <Welcome color="orange" />
    </div>
  </div>

  <div class="row">
    <div class="tile">
      <Welcome color="purple" />
    </div>

    <div class="tile">
      <Welcome color="black" />
    </div>

    <div class="tile">
      <Welcome color="salmon" />
    </div>
  </div>
</body>

<style>
  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Code Pro', sans-serif;

    /* overflow: auto; */
    -ms-overflow-style: none;
    scrollbar-color: transparent transparent; /*just hides the scrollbar for firefox */
  }

  ::-webkit-scrollbar {
    display: none;
  }

  ::-moz-scrollbar {
    display: none;
  }

  .row {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 0;
    padding: 0;
  }

  .tile {
    display: flex;
    /* flex-direction: column; */
    /* align-items: center; */
    justify-content: center;
    margin: 0;
    padding: 0;
  }
</style>
