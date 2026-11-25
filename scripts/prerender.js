import { readFileSync, writeFileSync } from 'node:fs'
import { createServer } from 'vite'

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')
  const appHtml = render()
  const marker = '<div id="root"></div>'
  const template = readFileSync('dist/index.html', 'utf8')

  if (!template.includes(marker)) {
    throw new Error('dist/index.html is missing the root element')
  }
  if (!appHtml.includes('Zahra Mokhtari') || !appHtml.includes('Innowi')) {
    throw new Error('Prerendered HTML is missing page content')
  }

  const html = template.replace(marker, () => `<div id="root">${appHtml}</div>`)
  writeFileSync('dist/index.html', html)
} finally {
  await vite.close()
}
