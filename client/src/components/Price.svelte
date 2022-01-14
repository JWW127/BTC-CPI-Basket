<script>
  //price comes in from app.svelte via a fetch to our db, then it is passed to prop below and into our component.
  export let latestPrice
  //need to add some reactive stuff here or in CPI file to calculate CPI? 
</script>

<div class="">
  <div class="temp priceBlock"><h1>${latestPrice}</h1></div>
  <h3>Price</h3>
</div>

<style>


  .priceBlock {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f2c41c;
    border: 1px solid #f2c41c;
    padding: 1rem;
    width: 400px;
    height: 200px;
    font-weight: 100;
    margin-top: 1rem;
  }

  h1 {
    color: #f2c41c;
    text-transform: uppercase;
    font-size: 6em;
    font-weight: 100;
  }
</style>
