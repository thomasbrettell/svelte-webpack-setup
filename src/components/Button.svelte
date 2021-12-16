<script>
  let clickHandler = (e) => {
    console.log(e)
  }
</script>

<div>
  <button on:click={clickHandler}>Click me!!</button>
</div>

<style>
  div {
    text-align: center;
  }
</style>