<script>
</script>

<div class="rotation">
	<img class="image" src="assets/lenny.png" alt="Spinning Lenny Face :)" />
</div>

<style>
  .rotation {
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
  }

	.image {
		-webkit-animation: spin 4s linear infinite;
		-moz-animation: spin 4s linear infinite;
		animation: spin 4s linear infinite;
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
