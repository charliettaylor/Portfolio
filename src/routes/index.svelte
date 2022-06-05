<script>
  import Header from "../components/Header.svelte";
  import Nameplate from "../components/Nameplate.svelte";
</script>

<title>
  Charlie Taylor
</title>

<body style="background-color:darkgrey">
  
  <div class="wrapper">
    <section class="one">
      <Header/>
      <div class="row">
        <div class="column">
          <div class="left">
            <Nameplate/>
          </div>
        </div>
        <div class="column">
          <div class="right">
          </div>
        </div>
      </div>
    </section>

    <section class="two">
      <div class="page2">
        <Nameplate/>
      </div>
    </section>
  </div>
    
    
</body>

<style>
  body {
    padding: 0;
    margin: 0;
    background: linear-gradient(
      to right,
      black 0%, 
      black 50%,
      rgb(205, 22, 65) 50%,
      rgb(205, 22, 65) 100%
    );
  }

  section {
    width: 100%;
    min-height: 100vh;
    scroll-snap-align: start;
  }

  .wrapper {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
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
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
  }

  .right {
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
  }

  .two {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .page2 {
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  }

</style>