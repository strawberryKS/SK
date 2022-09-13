function getRandomInt(max){
  return Math.floor(Math.random() * max);
}
var links = ['https://forms.gle/MHkGxqQgd7sTXmNa6','https://forms.gle/XrY17RaizVokjtTcA'];
window.location.href = links[getRandomInt(links.length)];
