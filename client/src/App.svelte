<script>
  import Block from "./components/Block.svelte";
  import Price from "./components/Price.svelte";
  import { onMount } from "svelte";

  let btcLatest = 2;
  let val = {};

  onMount(async () => {
     fetch("http://localhost:5555/api/latest")
      .then((response) => (response.json()))
      .then((data) => btcLatest = data.price);
  });
</script>

<main class="temp">
  <h1 class="temp">BTC Basket</h1>
  <div class="container temp">
    <Price latestPrice={Math.round(btcLatest)} />
    <Block />
  </div>
</main>

<style>
  main {
    /* display: flex;
		justify-content: space-around; */
    text-align: center;
    padding: 1em;
    max-width: 95vw;
    margin: 0 auto;
  }
  .temp {
    box-shadow: var(--shadow-elevation-high);
    border-radius: 5px;
  }

  h1 {
    background: whitesmoke;
    color: #f2c41c;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .container {
    background: white;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 1rem;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
      height: 100vh;
    }
  }
</style>
