function getRandomInt(max){
  return Math.floor(Math.random() * max);
}
var links = ['https://forms.gle/YCSHifmA5SMyUraQA'];
window.location.href = links[getRandomInt(links.length)];
