<script>
  //price comes in from app.svelte via a fetch to our db, then it is passed to prop below and into our component.
  export let latestPrice
  //need to add some reactive stuff here or in CPI file to calculate CPI? 
</script>

<div>
  <div class="temp priceBlock"><h1>${latestPrice}</h1></div>
  <h3>Price</h3>
</div>

<style>
  .priceBlock {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ff3e00;
    border: 1px solid #ff3e00;
    padding: 1rem;
    width: 400px;
    height: 200px;
    font-weight: 100;
    margin-top: 1rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 6em;
    font-weight: 100;
  }
</style>
