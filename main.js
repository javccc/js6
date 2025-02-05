let list = [];

for (let i = 0; i < Infinity; i++) {
    let command = prompt('Введите команду');
    
    if (command === null) {
      
        break;
    }
    
    let parts = command.split(',');
    
    if (parts[0] == 'add') {
        list.push(parts[1]);
    } else if (parts[0] == 'del') {
        for (let index = 0; index < list.length; index++) {
          
            list[index] == command[1] ? list.splice(index, 1) : '';
        }
    } else if (parts[0] == 'stop') {
        break;
    } 
    console.log(list);
}

console.log( list);



let array = [1,2,3,4,5,6,7,8,9,10,11]
let even = []
let odd = []

for(let i = 0;i < array.length;i++){
    if(array[i] % 2 === 0){
        even.push(array[i])
    }else{
        odd.push(array[i])
        
    }
}
console.log('Четные числа ' + even);
console.log('Нечетные числа ' + odd);
