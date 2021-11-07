<script>
import App from "../App.svelte";

  // import price from page that calls api or from database store?
  
</script>

<div>
  <div class="temp priceBlock"><h1>{59999}</h1></div>
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
