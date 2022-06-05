<script>
  const titles = ['Home', 'Projects', 'Contact', 'About'];
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Open+Sans:wght@600&family=Source+Code+Pro:wght@500&display=swap" rel="stylesheet"> 
</svelte:head>

<div class="header" style="margin-top: -3em;">
  {#each titles as title}
    <li><a href="{title}.asp">
      {title}
    </a></li>
  {/each}
</div>

<style>
  .header {
    display: flex;
    padding: 80px;
    padding-left: 5vw;
    padding-right: 5vw;
    justify-content: space-evenly;
    align-items: center;
    width: auto;
    list-style: none;
  }

  a {
    font-family: "Source Code Pro", sans-serif;
    font-size:calc(8px + 1vw);
    text-decoration: none;
    color: white;
    padding-top: 10px;
  }
</style>
