import { spawn } from 'child_process'
import { config } from 'dotenv'
import { writeFileSync } from 'fs'
import { join } from 'path'
config()

const variant = process.env.VITE_VARIANT_MAPPING

let command = ''

switch (variant) {
  case 'bootstrap':
    command = 'npm run ladle-bootstrap:build'
    break
  case 'tailwind':
    command = 'npm run ladle-tailwind:build'
    break
  case 'vanilla':
    command = 'npm run ladle-vanilla:build'
    break
  case undefined:
    command = 'ladle build'
    break
  default:
    console.error(`❌ Onbekende variant: ${variant}`)
    process.exit(1)
}

console.log(`📦 Ladle build gestart met variant: ${variant}`)

const [cmd, ...args] = command.split(' ')

const ladleProcess = spawn(cmd, args, { stdio: 'inherit', shell: true })

// ladleProcess.on('exit', (code) => process.exit(code))
ladleProcess.on('exit', (code) => {
  if (code === 0) {
    const outputDir = 'docs'
    const nojekyllPath = join(outputDir, '.nojekyll')
    try {
      writeFileSync(nojekyllPath, '')
      console.log(`✅ .nojekyll bestand aangemaakt in ${outputDir}`)
    } catch (err) {
      console.error(`⚠️ Fout bij aanmaken .nojekyll:`, err)
    }
  } else {
    console.error(`🚫 Build mislukt met code: ${code}`)
  }

  process.exit(code)
})
