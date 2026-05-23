import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
  statSync,
} from 'node:fs'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'

const root = process.cwd()
const npmCommand = 'npm'

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: root,
    env: { ...process.env, ...options.env },
    shell: process.platform === 'win32',
    stdio: 'inherit',
  })

  if (result.error) {
    console.error(result.error.message)
    process.exit(1)
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

function copyDirectory(from, to) {
  if (!existsSync(from)) {
    throw new Error(`Missing build output: ${from}`)
  }

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

const outputDir = join(root, 'public-site')

rmSync(outputDir, { force: true, recursive: true })

run(npmCommand, ['--prefix', 'landing-next', 'run', 'build'], {
  env: { GITHUB_PAGES: 'true' },
})
run(npmCommand, ['--prefix', 'main-store', 'run', 'build:pages'])

copyDirectory(join(root, 'landing-next', 'out'), outputDir)
copyDirectory(join(root, 'main-store', 'dist'), join(outputDir, 'store'))

console.log('Combined GitHub Pages site ready in public-site/')
