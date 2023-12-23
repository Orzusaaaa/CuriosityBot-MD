import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['56927170877', 'CuriosityBot-MD 🍧', true],
['56927170877'], ['56927170877'], ['56927170877'], ['56927170877'], ['56927170877'], ['56927170877'], ['56927170877'], ['56927170877']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['56927170877']
global.suittag = ['56927170877']
global.mods = []
global.prems = []

global.packname = '© AntitoBot-MD'
global.author = 'Created By Antito'
global.wm = '© AntitoBot-MD'
global.wm2 = 'Antito : 𝗕𝗈𝗍'
global.azami = 'Antito'
global.cb = 'AntitoBot-MD'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '© Azami ~ Zam'
global.devnum = '+52 1 729 488 8993'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
