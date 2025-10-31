console.log("Welcome to Spotify");
//initialize the vairables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songsName: "dhundhar", filePath: "/1.mp3", coverPath: "/cover1.jpg" },
    { songsName: "ami je tomar", filePath: "/2.mp3", coverPath: "/cover1.jpg" },
    { songsName: "bhar do jholi meri", filePath: "/3.mp3", coverPath: "/cover1.jpg" },
    { songsName: "unsaid talks", filePath: "/4.mp3", coverPath: "/cover1.jpg" },
    { songsName: "dil to pagal hai", filePath: "/5.mp3", coverPath: "/cover1.jpg" },
    { songsName: "dilliwali girlfriend", filePath: "/6.mp3", coverPath: "/cover1.jpg" },
    { songsName: "emotional fool", filePath: "/7.mp3", coverPath: "/cover1.jpg" },
    { songsName: "ganga kinare", filePath: "/8.mp3", coverPath: "/cover1.jpg" },
    { songsName: "ishq hai", filePath: "/9.mp3", coverPath: "/cover1.jpg" },
    { songsName: "sajna- dharshan raval", filePath: "/10.mp3", coverPath: "/cover1.jpg" },

]
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songsName;
})


//. audio elementplay();
// handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {

    // Update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays()
        
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songsName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 10) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songsName;

    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songsName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})