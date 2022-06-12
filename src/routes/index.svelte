<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Open+Sans:wght@600&family=Source+Code+Pro:wght@500&display=swap" rel="stylesheet"> 
</svelte:head>

<script>
  import Header from "../components/Header.svelte";
  import Nameplate from "../components/Nameplate.svelte";
  import Footer from "../components/Footer.svelte";
  import Collapsible from "../components/Collapsible.svelte";
  import Card from "../components/Card.svelte";

  import { projects } from "./projects";
  import { schools } from "./schools";
import { jobs } from "./jobs";
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

    <section id="two">
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
    </section>

    <section id="three">
      <div class="jobs">
        <h1>
          Work Experience
        </h1>
        <div class="page3">
          {#each jobs as job}
            <Card heading={job.heading} subheading={job.subheading} content={job.content}/>
          {/each}
        </div>
      </div>
    </section>

    <section id="four">
      <div class="education">
        <h1>
          Education
        </h1>
        <div class="page4">
          {#each schools as school}
            <Card heading={school.heading} subheading={school.subheading} content={school.content}/>
          {/each}
        </div>
      </div>
      <div class="footer" id="footer">
        <Footer />
      </div>
    </section>
  </div>
</body>

<style>
  :root {
    --left: #732D28;
    --right: #C24C43;
    --text: #FFEADB;
    --flair: #5B7B65;
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
    color: var(--text);
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

  .projects{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--text);
    position: relative;
  }

  .page2 {
    text-align: center;
    color: var(--text);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  #two {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  }

  #four {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .page4 {
    justify-content: space-evenly;
  }

  .education {
    display: flex;
    flex-direction: column;
  }

  .jobs {
    display: flex;
    flex-direction: column;
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