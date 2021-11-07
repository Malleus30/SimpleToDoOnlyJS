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










