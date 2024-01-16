//Javascriptpro_
//Dont forget to follow me on github,instagram and codepen.
//Initial Reference
let container = document.querySelector('.container');
let video = document.querySelector('video');
let progressArea = document.querySelector('.container .progress-area');
let progressBar = document.querySelector('.container .progress-area .progress-bar');
let volumeIcon = document.querySelector('.container .volume-box .volume');
let volumeInput = document.querySelector('.container .volume-box input');
let curr_time = document.querySelector('.container .time-and-btns .current-time');
let ttl_time = document.querySelector('.container .time-and-btns .total-time');
let fastRewind = document.querySelector('.container .time-and-btns .fast-rewind');
let fastForward  = document.querySelector('.container .time-and-btns .fast-forward');
let playPauseBtn = document.querySelector('.container .time-and-btns .play-pause-btn');
let playPauseIcon  = document.querySelector('.container .time-and-btns .play-pause-btn i');
let settingIcon = document.querySelector('.container .others .setting');
let fullScreenBtn = document.querySelector('.container .others .full-screen');
let playBackBox = document.querySelector('.container .playback-speed');
let settingBox = document.querySelector('.container .settings');

//Toggle PlayBack Box
settingIcon.addEventListener('click',()=>{
 playBackBox.classList.toggle('show');     
});

//Play Pause Video
playPauseBtn.addEventListener('click',()=>{
 if(playPauseBtn.classList.contains('play')){
   playPauseIcon.innerHTML = 'pause';
   playPauseBtn.classList.remove('play');
   playPauseBtn.classList.add('pause');
   video.play();
 }else{
   playPauseIcon.innerHTML = 'play_arrow';
   playPauseBtn.classList.remove('pause');
   playPauseBtn.classList.add('play');
   video.pause();
 }  
});

//Fast Forward Video
fastForward.addEventListener('click',()=>{
 video.currentTime += 10;     
});

//Fast Rewind Video Video
fastRewind.addEventListener('click',()=>{
 video.currentTime -= 10;      
});

//Get Total Duratiom Of Video
video.addEventListener('loadeddata',()=>{
let d = video.duration;
let h = Math.floor(d / 3600);
let m = Math.floor((d % 3600) / 60);
let s = Math.floor((d % 3600) % 60);
if(s < 10){
  s = "0" + s;
}
ttl_time.innerHTML = `${h}:${m}:${s}`;
progressArea.addEventListener('click',(e)=>{
        let progressWidth = progressArea.clientWidth;
        let clickedoffsetX = e.offsetX;
        let videoDuration = video.duration;
        video.currentTime = (clickedoffsetX / progressWidth) * videoDuration;
        video.play();
        playPauseIcon.innerHTML = 'pause';
        playPauseBtn.classList.remove('play');
});
});

//Get Current Time Of Video
video.addEventListener('timeupdate',()=>{
 let d = video.currentTime;
 let ttl_d = video.duration;
 let h = Math.floor(d / 3600);
 let m = Math.floor((d % 3600) / 60);
 let s = Math.floor((d % 3600) % 60);
 if (s < 10) {
         s = "0" + s;
 }
 curr_time.innerHTML = `${h}:${m}:${s}`; 
 
 //Increase Progress Bar Width On Time Update
 let progressWidth = (d / ttl_d) * 100;
 progressBar.style.width = `${progressWidth}%`;
});

//Set Volume Of Video
volumeInput.addEventListener('input',()=>{
 video.volume = volumeInput.value;
 if(volumeInput.value == 0){
  volumeIcon.innerHTML = 'volume_off';     
 }else{
  volumeIcon.innerHTML = 'volume_up';     
 }
});

//On Video End
video.addEventListener('ended',()=>{
 video.currentTime = 0;
 playPauseIcon.innerHTML = 'play_arrow';
 playPauseBtn.classList.add('play');
 playPauseBtn.classList.remove('pause');
});

//Video Speed
let changeSpeed =(speed)=>{
 video.playbackRate = speed; 
 playBackBox.classList.remove('show');
};

//Full Screen Video
fullScreenBtn.addEventListener('click',()=>{
  container.classList.toggle('fullscreen');
  video.classList.toggle('fullVideo');
  if(fullScreenBtn.classList.contains('full-screen')){
     fullScreenBtn.innerHTML = 'close_fullscreen';
     fullScreenBtn.classList.remove('full-screen');
  }else{
     fullScreenBtn.innerHTML = 'fullscreen';
     fullScreenBtn.classList.add('full-screen');
  }
});

video.addEventListener('click',()=>{
 settingBox.classList.toggle('settingBox-hide-show'); 
})

volumeIcon.addEventListener('click',()=>{
  if(volumeIcon.classList.contains('vol-up')){
     volumeIcon.innerHTML = 'volume_off';
     volumeIcon.classList.remove('vol-up');
     volumeInput.value = 0;
     video.volume = 0;
  }else{
      volumeIcon.innerHTML = 'volume_up'
      volumeIcon.classList.add('vol-up');
      volumeInput.value = 0.5;
      video.volume = 0.5;
  }   
})
