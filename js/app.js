const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = (seconds/60*360)+90;
  const minutesDegrees = (minutes/60*360)+90;
  const hoursDegrees = (hours/12*360)+(minutes/60*30)+90;
      console.log(minutesDegrees);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000);

const inputs = document.querySelectorAll('.controls input');
function handleUpdate(){
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(imput => imput.addEventListener('change', handleUpdate))
inputs.forEach(imput => imput.addEventListener('mousemove', handleUpdate))
