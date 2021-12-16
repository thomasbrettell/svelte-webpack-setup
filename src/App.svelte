<script>
  import Button from './components/Button.svelte'
	export let url;
</script>

<main>
	<h1>This is a my bare bones webpack setup for Svelte</h1>
	<p>You can see the repo here <a href={url} target="_blank">{url}</a></p>
  <Button />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>