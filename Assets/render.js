const ipc = require("electron").ipcRenderer;
const myVideo = document.getElementById("myVideo");

ipc.on("play-pause-video", function (evt, message) {
    if (message.playOrPause == 'pause') {
        myVideo.load();
        console.log('pause');
    }
    else {
        myVideo.play();
        console.log('play');
    }
});