const ipc = require("electron").ipcRenderer;
const myVideo = document.getElementById("myVideo");

ipc.on("play-pause-video", function (evt, message) {
    if (message.playOrPause == 'pause') {
        // myVideo.load();
        console.log('pause');
    }
    else {
        myVideo.load();
        myVideo.play();
        console.log('play');
    }
});

myVideo.addEventListener('ended', (event) => {
    myVideo.load();
    myVideo.play();
});