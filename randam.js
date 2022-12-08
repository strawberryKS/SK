function getRandomInt(max){
  return Math.floor(Math.random() * max);
}
var links = ['https://forms.gle/81d6mJvEM7E6yFMq7'];
window.location.href = links[getRandomInt(links.length)];
