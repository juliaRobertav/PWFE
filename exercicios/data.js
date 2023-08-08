/* Data e Hora -> formato de Brasília
var data = Date();
console.log(data);
*/
const data = new Date();
const dias = new Array('domingo','segunda','terça','quarta','quinta','sexta','sábado');
alert('Data-> ' + dias[data.getDay()]);

var hora = data.getHours(); 
var min  = data.getMinutes();    
var seg  = data.getSeconds(); 
alert(`Horas-> ${hora}:${min}:${seg}`)

