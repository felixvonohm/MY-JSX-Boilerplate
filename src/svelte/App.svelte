<script>
  let count = 0

  function increment() {
    count += 1
  }
</script>

<div class="app">
  <header class="app-header">
    <h1>📚 EPUB Viewer - Svelte</h1>
    <p>Built with Electron, Vite, and Svelte</p>
  </header>
  <main class="app-main">
    <div class="card">
      <button on:click={increment}>
        count is {count}
      </button>
      <p>
        Edit <code>src/svelte/App.svelte</code> and save to test HMR
      </p>
    </div>
  </main>
</div>

<style global>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(135deg, #ff3e00 0%, #ffed4b 100%);
    min-height: 100vh;
  }

  #root {
    width: 100%;
    height: 100vh;
  }
</style>

<style scoped>
  .app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: white;
  }

  .app-header {
    background: linear-gradient(135deg, #ff3e00 0%, #ffed4b 100%);
    color: white;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .app-header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .app-header p {
    font-size: 1rem;
    opacity: 0.9;
  }

  .app-main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  .card {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 500px;
  }

  .card button {
    background: linear-gradient(135deg, #ff3e00 0%, #ffed4b 100%);
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    margin-bottom: 1rem;
  }

  .card button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(255, 62, 0, 0.4);
  }

  .card button:active {
    transform: translateY(0);
  }

  .card p {
    color: #666;
    margin-top: 1rem;
    line-height: 1.6;
  }

  .card code {
    background: #f5f5f5;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    color: #ff3e00;
  }
</style>
