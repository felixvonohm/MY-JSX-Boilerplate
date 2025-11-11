import { useState } from 'react'
import './FrameworkShowcase.css'

function FrameworkShowcase() {
  const [activeFramework, setActiveFramework] = useState('react')
  const [counts, setCounts] = useState({ react: 0, vue: 0, svelte: 0 })

  const incrementCount = (framework) => {
    setCounts(prev => ({
      ...prev,
      [framework]: prev[framework] + 1
    }))
  }

  const frameworks = [
    {
      id: 'react',
      name: 'React',
      icon: '⚛️',
      color: '#667eea',
      description: 'Built with Electron, Vite, and React',
      code: 'src/App.jsx'
    },
    {
      id: 'vue',
      name: 'Vue',
      icon: '💚',
      color: '#42b983',
      description: 'Built with Electron, Vite, and Vue 3',
      code: 'src/vue/App.vue'
    },
    {
      id: 'svelte',
      name: 'Svelte',
      icon: '🔥',
      color: '#ff3e00',
      description: 'Built with Electron, Vite, and Svelte',
      code: 'src/svelte/App.svelte'
    }
  ]

  const active = frameworks.find(f => f.id === activeFramework)

  return (
    <div className="showcase">
      <header className="showcase-header">
        <h1>📚 EPUB Viewer - Framework Showcase</h1>
        <p>Switch between React, Vue, and Svelte</p>
      </header>

      <div className="framework-tabs">
        {frameworks.map(fw => (
          <button
            key={fw.id}
            className={`tab ${activeFramework === fw.id ? 'active' : ''}`}
            onClick={() => setActiveFramework(fw.id)}
            style={{
              borderBottomColor: activeFramework === fw.id ? fw.color : 'transparent'
            }}
          >
            <span className="tab-icon">{fw.icon}</span>
            <span className="tab-name">{fw.name}</span>
          </button>
        ))}
      </div>

      <main className="showcase-main">
        <div className="framework-card" style={{ borderTopColor: active.color }}>
          <div className="card-header" style={{ backgroundColor: active.color }}>
            <h2>{active.name}</h2>
            <p>{active.description}</p>
          </div>

          <div className="card-content">
            <div className="demo-section">
              <h3>Interactive Counter</h3>
              <button
                className="counter-button"
                onClick={() => incrementCount(activeFramework)}
                style={{
                  background: `linear-gradient(135deg, ${active.color} 0%, ${active.color}dd 100%)`
                }}
              >
                Count is {counts[activeFramework]}
              </button>
            </div>

            <div className="info-section">
              <h3>Component Location</h3>
              <code>{active.code}</code>
            </div>

            <div className="info-section">
              <h3>How to Use</h3>
              <ul>
                <li>Click the tabs above to switch frameworks</li>
                <li>Each framework maintains its own state</li>
                <li>Edit the component files to see HMR in action</li>
                <li>All frameworks work with Electron and Vite</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="showcase-footer">
        <p>All three frameworks are running simultaneously in this React component</p>
      </footer>
    </div>
  )
}

export default FrameworkShowcase
