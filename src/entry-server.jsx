import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import App from './App.jsx'

export function render() {
  return renderToString(
    <StrictMode>
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    </StrictMode>,
  )
}
