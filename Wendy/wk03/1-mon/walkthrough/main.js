
var logTextAll = function(event){
//debugger
  console.log(event.target.textContent);
}
parent.addEventListener('click', logTextAll);
