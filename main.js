const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		autoHideMenuBar: true
	})
  
	win.loadFile(`${__dirname}/public/index.html`)

	const { spawn } = require('child_process')
	const serverProcess = spawn('node', [path.join(__dirname, 'app', 'index.js')])

	serverProcess.stdout.on('data', (data) => {
		console.log(`Servidor: ${data}`)
	})

	serverProcess.stderr.on('data', (data) => {
		console.error(`Erro no servidor: ${data}`)
	})

	serverProcess.on('close', (code) => {
		console.log(`Servidor encerrado com codigo ${code}`)
	})
}
 
app.whenReady().then(() => {
	createWindow()

	app.on('window-all-closed', () => {
		if (process.platform !== 'darwin') app.quit()
	})

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})