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
const docsDir = join(root, 'docs')

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

rmSync(docsDir, { force: true, recursive: true })
copyDirectory(builtSite, docsDir)
writeFileSync(join(docsDir, '.nojekyll'), '')
rmSync(builtSite, { force: true, recursive: true })

console.log('GitHub Pages files copied to docs/ for main/docs publish.')
