import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'

const root = process.cwd()
const builtSite = join(root, 'public-site')
const rootFiles = [
  '404',
  'about',
  'categories',
  'store',
  '_next',
  '_not-found',
  '404.html',
  'favicon.ico',
  'index.html',
  'index.txt',
  '.nojekyll',
  '__next._full.txt',
  '__next._head.txt',
  '__next._index.txt',
  '__next._tree.txt',
  '__next.__PAGE__.txt',
]

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: root,
    shell: process.platform === 'win32',
    stdio: 'inherit',
  })

  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

function copyDirectory(from, to) {
  mkdirSync(to, { recursive: true })

  for (const entry of readdirSync(from)) {
    const sourcePath = join(from, entry)
    const targetPath = join(to, entry)

    if (statSync(sourcePath).isDirectory()) {
      copyDirectory(sourcePath, targetPath)
    } else {
      copyFileSync(sourcePath, targetPath)
    }
  }
}

run('npm', ['run', 'build'])

if (!existsSync(builtSite)) {
  throw new Error('Missing public-site build output')
}

for (const entry of rootFiles) {
  rmSync(join(root, entry), { force: true, recursive: true })
}

copyDirectory(builtSite, root)
writeFileSync(join(root, '.nojekyll'), '')
rmSync(builtSite, { force: true, recursive: true })

console.log('GitHub Pages files copied to repository root for main/root publish.')
