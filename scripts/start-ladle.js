import { spawn } from 'child_process'
import { config } from 'dotenv'

config()

const variant = process.env.VITE_VARIANT_MAPPING

let command = ''

switch (variant) {
  case 'bootstrap':
    command = 'npm run ladle-bootstrap'
    break
  case 'tailwind':
    command = 'npm run ladle-tailwind'
    break
  case 'vanilla':
    command = 'npm run ladle-vanilla'
    break
  case undefined:
  default:
    command = 'ladle serve --port 8000'
    break
}

console.log(`▶️ Ladle gestart met variant: ${variant}`)

const [cmd, ...args] = command.split(' ')

const ladleProcess = spawn(cmd, args, { stdio: 'inherit', shell: true })

ladleProcess.on('exit', (code) => {
  process.exit(code)
})
