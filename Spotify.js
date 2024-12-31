console.log("Welcome to Spotify ");
//intialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let SongItem = Array.from(document.getElementsByClassName('SongItem'));
let songs =[
  {SongName:"Let me love you", filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
  {SongName:"Baarish ke aane se tere bheeg jaane se", filePath: "songs/2.mp3", coverPath:"covers/21.jpg"},
  {SongName:"Saanware", filePath: "songs/3.mp3", coverPath:"covers/3.jpg"},
  {SongName:"Gulabi saadi ", filePath: "songs/4.mp3", coverPath:"covers/4.jpg"},
  {SongName:"Badi baat chit", filePath: "songs/5.mp3", coverPath:"covers/5.jpg"},
  {SongName:"Aaiye na hamara Bihar me", filePath: "songs/6.mp3", coverPath:"covers/6.jpg"},
  {SongName:"Golden Bangles", filePath: "songs/7.mp3", coverPath:"covers/7.jpg"},
  {SongName:"Pathar hai vo-Pushpa", filePath: "songs/8.mp3", coverPath:"covers/8.jpg"},
  {SongName:"saandese aate hai hame Bulate hai", filePath: "songs/9.mp3", coverPath:"covers/9.jpg"},
  {SongName:"Lollypop", filePath: "songs/10.mp3", coverPath:"covers/10.jpg"}
]
SongItem.forEach((element, i)=>{
  //console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].SongName;
})
//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    // gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity = 0;

  }
})

//listen to Events
audioElement.addEventListener('timeupdate', ()=>{
  console.log('timeupdate');
  // Update seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
  //console.log(progress);
  myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
  audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.classList.remove('fa-circle-pause'); 
   element.classList.add('fa-circle-play');
  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{
    //console.log(e.target);
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  })
})

document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=10){
    songIndex = 0;
  }else{
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex}.mp3`;
  masterSongName.innerText = songs[songIndex-1].SongName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
    songIndex = 0;
  }else{
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex}.mp3`;
  masterSongName.innerText = songs[songIndex-1].SongName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
})
