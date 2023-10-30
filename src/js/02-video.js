import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerEl = document.getElementById('vimeo-player');

const player = new Player(playerEl);

let savedTime = 0;

const savePlaybackTime = throttle(currentTime => {
    localStorage.setItem("videoplayer-current-time", currentTime);
    savedTime = currentTime;
}, 1000);

player.on('timeupdate', (data)=>{
    const currentTime = data.seconds;
    if (currentTime - savedTime >= 1){
        savePlaybackTime(currentTime)
    }
})

player.ready().then(() => {
    const startTime = localStorage.getItem("videoplayer-current-time");
    if (startTime !== null){
        player.setCurrentTime(startTime)
    }
})