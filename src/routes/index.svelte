<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Open+Sans:wght@600&family=Source+Code+Pro:wght@500&display=swap" rel="stylesheet"> 
</svelte:head>

<script>
  import Header from "../components/Header.svelte";
  import Nameplate from "../components/Nameplate.svelte";
  import Footer from "../components/Footer.svelte";
  import Collapsible from "../components/Collapsible.svelte";

  import { projects } from "./projects";
</script>

<title>
  Charlie Taylor
</title>

<body style="background-color:darkgrey">
  
  <div class="wrapper">
    <section class="one" id="one">
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

    <section class="two" id="two">
      <div class="projects">
        <h1>
          Projects
        </h1>
      </div>
      <div class="page2">
        {#each projects as project}
          <Collapsible heading={project.heading} content={project.content}/>
        {/each}
      </div>
      <div class="footer" id="footer">
        <Footer />
      </div>
    </section>
  </div>

</body>

<style>
  :root {
    --left: #051622;
    --right: #E40C2B;
  }

  body {
    padding: 0;
    margin: 0;
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
    scroll-snap-align: start;
  }

  h1 {
    font-family: "Source Code Pro", sans-serif;
    font-size: 2.5rem;
  }

  .wrapper {
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
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

  .projects{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ivory;
    position: relative;
  }

  .page2 {
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  #two {
    position: relative;
  }

  #footer {
    position: absolute;
    bottom: 0;
    display: flex;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--left);
    /* border-radius: 20px; */
  }
</style>