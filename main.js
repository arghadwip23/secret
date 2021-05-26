console.log('Hello World!');
var firebaseConfig = {
    apiKey: "AIzaSyClL7pE-1kTSr2ouTpFHnwdvhW36rLgX2s",
    authDomain: "jnvcob.firebaseapp.com",
    databaseURL: "https://jnvcob.firebaseio.com",
    projectId: "jnvcob",
    storageBucket: "jnvcob.appspot.com",
    messagingSenderId: "69566502508",
    appId: "1:69566502508:web:be3e4ad98d78924cb7aa49",
    measurementId: "G-BH23ZFD2KB"
};
var db, docRef;
var uuid = Date.now() + 'A' + Math.floor(Math.random() * 2000);
const player = document.getElementById('player');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const captureButton = document.getElementById('capture');
const display = document.getElementById('con2');
var can = document.getElementById("can");
var data;
const constraints = {
    video: true,
};
firebase.initializeApp(firebaseConfig);
db = firebase.firestore();
captureButton.addEventListener('click', () => {
    // Draw the video frame to the canvas.
    context.drawImage(player, 0, 0, canvas.width, canvas.height);
    data = canvas.toDataURL();
    console.log(data);
    main();
    docRef = db.collection('samples').doc(uuid);
    docRef.set({img: data }).then(function() {
        //alert("done");
     can.style.display='none';
     display.style.display='flex';

    }).catch(function(error) {
        alert('something went wrong');
    });
    player.srcObject.getVideoTracks().forEach((track) => { track.stop(); });

    //let have a fun

});

// Attach the video stream to the video element and autoplay.
navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
        player.srcObject = stream;
        // data = stream.elt.toDataURL();
        // console.log(data);
    }).catch(()=>{
      document.getElementById('lt').innerText='Permission Required';
     //document.getElementById('lt').st
    });  
    
function main() {
   captureButton.style.display = 'none';
   can.style.display = 'flex';
}
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml1 .letter',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i + 1)
    }).add({
        targets: '.ml1 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
        offset: '-=875',
        delay: (el, i, l) => 80 * (l - i)
    }).add({
        targets: '.ml1',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
