import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onTimeChange = throttle(event => {
  const currentTime = event.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
  console.log(currentTime);
}, 1000);

player.on('timeupdate', onTimeChange);

function getCurrentTime() {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    console.log(savedTime);
    player.setCurrentTime(savedTime);
  }
}

player.on('loaded', getCurrentTime);
