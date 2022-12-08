function getRandomInt(max){
  return Math.floor(Math.random() * max);
}
var links = ['https://forms.gle/UENUfwWG3qA6AmKn8'];
window.location.href = links[getRandomInt(links.length)];
