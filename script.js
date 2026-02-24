let alarmTimeout;
let alarmSound = document.getElementById("alarmSound");

document.body.addEventListener("click", () => {
  alarmSound.play().then(() => {
    alarmSound.pause();
    alarmSound.currentTime = 0;
  }).catch(() => {});
}, { once: true });

function updateClock(){
  const now = new Date();
  document.getElementById("clock").textContent =
  now.toLocaleTimeString();
}

setInterval(updateClock,1000);
updateClock();

function setAlarm(){
  const input = document.getElementById("alarmTime").value;
  if(!input) return;

  const now = new Date();
  const alarm = new Date(now.toDateString()+" "+input);

  if(alarm < now){
    alarm.setDate(alarm.getDate()+1);
  }

  const timeout = alarm - now;

  alarmTimeout = setTimeout(()=>{
    alarmSound.play();
    document.getElementById("status").textContent="🚨 SVEGLIA!";
  },timeout);

  document.getElementById("status").textContent="Sveglia impostata!";
}

function stopAlarm(){
  alarmSound.pause();
  alarmSound.currentTime=0;
  clearTimeout(alarmTimeout);
  document.getElementById("status").textContent="Sveglia fermata.";
}
