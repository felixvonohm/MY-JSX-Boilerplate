<template>
  <div class="app">
    <header class="app-header">
      <h1>📚 EPUB Viewer - Vue</h1>
      <p>Built with Electron, Vite, and Vue 3</p>
    </header>
    <main class="app-main">
      <div class="card">
        <button @click="count++">
          count is {{ count }}
        </button>
        <p>
          Edit <code>src/vue/App.vue</code> and save to test HMR
        </p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<style scoped>
.app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: white;
}

.app-header {
  background: linear-gradient(135deg, #42b983 0%, #2c3e50 100%);
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
  background: linear-gradient(135deg, #42b983 0%, #2c3e50 100%);
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
  box-shadow: 0 8px 16px rgba(66, 185, 131, 0.4);
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
  color: #42b983;
}
</style>
