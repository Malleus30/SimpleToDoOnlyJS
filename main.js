"use strict"


//Чтобы сделать showlist пришлось подсматривать

const list = {
    "create a task": "Done",
    "make a bed": "Done",
    "write a post" : "To Do",
}



function addTask(feat) {

     list[feat]="To Do";
}



function deleteTask(feat) {
    delete list[feat];
}



function channgeStatus(key, feat) {
    list[key]=feat;
}




function showList() {
//счетчики
    let countProgress = 0;
    let countDO = 0;
    let countDone = 0;


//выводим задачи в работе
    console.log('In Progresss:');
    for (let key in list){
        if(list[key] === 'in Progress'){
            console.log(`    ${key}`);
            countProgress++;
        } 
        
    }

    if(countProgress===0){
        console.log('     -');
    }


//выводим задачи на очереди 
    console.log('To Do:');
    for(let key in list){
        if(list[key] === 'To Do'){
            console.log(`    ${key}`);
            countDO++;
        }
    }

    if(countDO===0){
        console.log('     -');
    }

//выводим выполненные задачи
    console.log('Done:');
    for(let key in list){
        if(list[key]==='Done'){
            console.log(`    ${key}`);
            countDone++;
        }
    }
    
    if(countDone===0){
        console.log('    -');
    }
}
addTask('sing a song');
channgeStatus('sing a song', 'in Progress');
channgeStatus('write a post', 'To Do');
channgeStatus('make a bed', 'in Progress');
channgeStatus('create a task', 'To Do');
showList();



function calc(operator, a, b){
const operations = {  'plus': a + b,
                      'minus': a - b,
                      'mult': a * b, 
                      'del': (b===0) ? 'you cannot use zero' : a / b,
                      'exp': a ** b,
                      'rem': a % b}
 const checkcalc = (typeof a != 'number' || typeof b != 'number' || !operator);
 let result;
 a=+a;
 b=+b;

 if(checkcalc){
     result = 'error';
 }else if(operator in operations){
     result = operations[operator];
 }else{
     result = 'unknown operation';
 }
    console.log(result);
}
calc('del', 2, 'f' );


const toDo = 'To Do';
const done = 'Done';
const inProgress = 'In Progress';


const list = {
    'make a bed': toDo,
    'play a footbal': inProgress,
    'play a guitar': done,
    'dream':done,
    'see the opera': inProgress,
}

function channgeStatus(key, feat) {
    if(!(key in list)) return console.log('error');
   
    list[key]=feat;
}


function addTask(feat) {

    list[feat] = toDo;
    
}



function deleteTask(feat){
    
    if(!(feat in list)) return console.log('error');
    delete  list[feat];
}



function showList(){

    let  countToDo = 0;
    let  countDone = 0;
    let  countInProgress = 0;


    console.log(toDo + ":");
    for(let key in list){
        if(list[key] === toDo){
            console.log("   "+key);
            countToDo++;
        }
        
    }
    if(!countToDo) console.log('   -');


    console.log(inProgress + ":")
    for(let key in list){
        if(list[key] === inProgress) {
            console.log("   "+key);
             countInProgress++;
        }
        
    }
    if(!countInProgress) console.log('   -');


    console.log(done + ':')
    for(let key in list){
        if(list[key] === done){
            console.log(`   ${key}`) ;
            countDone++;
        }
    }
    if(!countDone)  console.log('   -');
}





addTask('play a game');
deleteTask('dream');
channgeStatus('play a guitar', inProgress);
channgeStatus('make a bed', inProgress);
channgeStatus('play a game', inProgress);
showList();




