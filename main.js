const STATUSES = ['To Do',
                  'In Progress',
                  'Done'
];


const PRIORITIES = ['high',
                    'middle',
                    'low'
];


let list = [];

function addTask(taskName) {

    let maxId = list[list.length-1];

    if(maxId === undefined){
        maxId = 1;
    }else{
        maxId = list[list.length-1].id+1;
    };

    let obj = {id:maxId, name:taskName, priority:PRIORITIES[0], status:STATUSES[0]};
    list.push(obj);
}

function deletTask(taskId) {

    let foundObjIndex = list.findIndex(item => item.id === taskId);
    list.splice(foundObjIndex,1);
}

function changeStatus(taskId,newStatus) {

    let foundObj = list.find(item => item.id === taskId);
    foundObj.status = newStatus;

    if(newStatus===STATUSES[0]) foundObj.priority = PRIORITIES[0];
    if(newStatus===STATUSES[1]) foundObj.priority = PRIORITIES[1];
    if(newStatus===STATUSES[2]) foundObj.priority = PRIORITIES[2];
}

function showByStatus(checkStatus) {

  console.log(checkStatus);

  let count = 0;

  for(let i = 0; i<list.length; i++){
      if(list[i].status === checkStatus){
          console.log('     '+list[i].name);
          count++;
      }
  }
  if(!count) console.log('     -');
}

function showByPriority(checkPriority) {

    console.log(checkPriority);
  
    let count = 0;
  
    for(let i = 0; i<list.length; i++){
        if(list[i].priority === checkPriority){
            console.log('     '+list[i].name);
            count++;
        }
    }
    if(!count) console.log('     -');
  }

  function showList() {
      
      showByStatus(STATUSES[0]);

      
      showByStatus(STATUSES[1]);

 
      showByStatus(STATUSES[2]);
  }

addTask('drink a beer');
addTask('fuck a cunt');
addTask('sleep in the bed')
deletTask(2);
addTask('bear the nightshift');
changeStatus(3,'In Progress');


showList();




