<script lang="ts">
	export let heading: String;
	export let subheading: String;
  export let date: String;
	export let content: String;
</script>

<div class="row">
  <div class="column">
    <div class="left">
      <h2>
        {heading}
      </h2>
      <h3>
        {subheading}
      </h3>
    </div>
  </div>
  <div class="column">
    <div class="right">
      <h4 class="date">
        {date}
      </h4>
      <p>
        {content}
      </p>
    </div>
  </div>
</div>

<style>
  p {
    text-align: left;
    padding: 2rem;
  }

  .row {
		display: flex;
		flex-direction: row;
	}

	.column {
		display: flex;
		flex-direction: column;
		flex-basis: auto;
    width: 50%;
	}

	.left {
		color: var(--text);
		display: flex;
    flex-direction: column;
		align-items: flex-start;
	}

	.right {
		text-align: center;
		color: var(--text);
		display: flex;
    flex-direction: column;
		justify-content: center;
		align-items: center;
	}

  .right .date {
    align-self: flex-end;
  }
</style>