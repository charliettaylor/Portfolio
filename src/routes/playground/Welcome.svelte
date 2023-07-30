<script>
  export let color = '';
</script>

<div class="container" style="background-color: {color};">
  <div class="title">
    <h1>Welcome to the Playground!</h1>
    <h3>Jump around the tiles with the arrow keys</h3>
  </div>
</div>

<style>
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  }

  .title {
    color: white;
    text-align: left;
    font-size: 3vh;
  }
</style>
