const { app, BrowserWindow } = require('electron');
var prevKey = '1';
var playOrPause = 'pause';

app.whenReady().then(() => {
	const win = new BrowserWindow({
		width: 1920,
		height: 1080,
		transparent: false,
		hasShadow: false,
		frame: false,
		resizable: false,
		alwaysOnTop: false,
		minimizable: false,
		maximizable: true,
		kiosk: true,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false
		},
	})

	win.setVisibleOnAllWorkspaces(true, {
		visibleOnFullScreen: true,
		skipTransformProcessType: false,
	});

	win.webContents.on("before-input-event", (event, input) => {
		if (input.key == '2' && input.type == 'keyDown' && input.key != prevKey) {
			prevKey = input.key;
			playOrPause = 'play';
			win.webContents.send("play-pause-video", { playOrPause });
		}
		else if (input.key == '1' && input.type == 'keyDown' && input.key != prevKey) {
			prevKey = input.key;
			// playOrPause = 'pause';
			// win.webContents.send("play-pause-video", { playOrPause });
		}
	});

	win.loadFile('Assets/index.html');
})