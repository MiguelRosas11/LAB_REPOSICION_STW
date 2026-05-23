import { spawn } from 'node:child_process'

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm'
const landingUrl = 'http://127.0.0.1:3000/'
const storeUrl = 'http://127.0.0.1:5173/'

function startProcess(name, args, options = {}) {
  const child = spawn(npmCommand, args, {
    shell: process.platform === 'win32',
    stdio: ['inherit', 'pipe', 'pipe'],
    ...options,
  })

  child.stdout.on('data', (chunk) => {
    const text = chunk.toString()

    if (
      name === 'store' &&
      (text.includes('Local:') ||
        text.includes('Network:') ||
        text.includes('press h + enter') ||
        text.includes(storeUrl))
    ) {
      return
    }

    process.stdout.write(text)
  })

  child.stderr.on('data', (chunk) => {
    process.stderr.write(chunk)
  })

  child.on('exit', (code) => {
    if (code && code !== 0) {
      console.error(`${name} exited with code ${code}`)
      process.exit(code)
    }
  })

  return child
}

console.log('MiniMarket Web dev server')
console.log(`Open landing page: ${landingUrl}`)
console.log('Store runs in background on port 5173')

const landing = startProcess('landing', [
  '--prefix',
  'apps/landing-next',
  'run',
  'dev',
  '--',
  '--hostname',
  '127.0.0.1',
  '--port',
  '3000',
])
const store = startProcess('store', [
  '--prefix',
  'apps/main-store',
  'run',
  'dev',
  '--',
  '--host',
  '127.0.0.1',
  '--port',
  '5173',
  '--strictPort',
  '--logLevel',
  'silent',
])

function shutdown() {
  landing.kill()
  store.kill()
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
