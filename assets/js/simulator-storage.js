/* ==========================================================
   SaniTrack Simulator Engine
   Part 2
==========================================================*/

/* ==========================================================
   PERSONAS
========================================================== */

const Personas = {

    manager: {

        id:1,

        name:"Michael",

        role:"Manager"

    },

    supervisor:{

        id:2,

        name:"Sam",

        role:"Supervisor"

    },

    cleaner1:{

        id:3,

        name:"Lina",

        role:"Cleaner"

    },

    cleaner2:{

        id:4,

        name:"John",

        role:"Cleaner"

    },

    compliance:{

        id:5,

        name:"Ada",

        role:"Compliance Officer"

    }

};

/* ==========================================================
   TASK STATUS
========================================================== */

const TaskStatus={

PENDING:"Pending",

ASSIGNED:"Assigned",

STARTED:"In Progress",

EVIDENCE:"Evidence Uploaded",

REVIEW:"Supervisor Review",

APPROVED:"Approved",

REWORK:"Rework Required"

};

/* ==========================================================
   TASK TYPES
========================================================== */

const TaskTypes=[

"Deep Cleaning",

"Equipment Sanitization",

"Washroom Inspection",

"Chemical Refill",

"Kitchen Cleaning",

"Hospital Ward Cleaning",

"Compliance Inspection",

"Waste Collection",

"Emergency Spill",

"Terminal Disinfection"

];

/* ==========================================================
   DATABASE
========================================================== */

let Simulator={

tasks:[],

activity:[],

counter:1,

running:false

};

/* ==========================================================
   RANDOM HELPERS
========================================================== */

function random(min,max){

return Math.floor(

Math.random()*(max-min+1)

)+min;

}

function randomTask(){

return TaskTypes[

random(

0,

TaskTypes.length-1

)

];

}

/* ==========================================================
   CREATE TASK
========================================================== */

function createTask(){

const task={

id:Simulator.counter++,

title:randomTask(),

status:TaskStatus.PENDING,

created:new Date(),

manager:Personas.manager,

supervisor:Personas.supervisor,

cleaner:

Math.random()>.5?

Personas.cleaner1:

Personas.cleaner2,

timeline:[]

};

task.timeline.push({

time:new Date(),

action:"Task Created"

});

Simulator.tasks.push(task);

logActivity(

`${task.manager.name}

created

${task.title}`

);

updateTaskList();

return task;

}

/* ==========================================================
   ACTIVITY LOG
========================================================== */

function logActivity(text){

Simulator.activity.unshift({

time:new Date(),

message:text

});

renderActivity();

}

/* ==========================================================
   ASSIGN TASK
========================================================== */

function assignTask(task){

task.status=

TaskStatus.ASSIGNED;

task.timeline.push({

time:new Date(),

action:"Assigned"

});

logActivity(

`${task.supervisor.name}

assigned

Task #${task.id}`

);

}

/* ==========================================================
   START TASK
========================================================== */

function startTask(task){

task.status=

TaskStatus.STARTED;

task.timeline.push({

time:new Date(),

action:"Started"

});

logActivity(

`${task.cleaner.name}

started

Task #${task.id}`

);

}

/* ==========================================================
   EVIDENCE
========================================================== */

function uploadEvidence(task){

task.status=

TaskStatus.EVIDENCE;

task.timeline.push({

time:new Date(),

action:"Evidence Uploaded"

});

logActivity(

`${task.cleaner.name}

uploaded evidence`

);

}

/* ==========================================================
   REVIEW
========================================================== */

function reviewTask(task){

task.status=

TaskStatus.REVIEW;

task.timeline.push({

time:new Date(),

action:"Supervisor Review"

});

logActivity(

`${task.supervisor.name}

reviewed

Task #${task.id}`

);

}

/* ==========================================================
   APPROVAL
========================================================== */

function approveTask(task){

task.status=

TaskStatus.APPROVED;

task.timeline.push({

time:new Date(),

action:"Approved"

});

logActivity(

`${task.manager.name}

approved

Task #${task.id}`

);

}

/* ==========================================================
   REWORK
========================================================== */

function sendRework(task){

task.status=

TaskStatus.REWORK;

task.timeline.push({

time:new Date(),

action:"Rework"

});

logActivity(

`${task.manager.name}

requested rework`

);

}

/* ==========================================================
   AUTO ADVANCE
========================================================== */

function advanceTask(task){

switch(task.status){

case TaskStatus.PENDING:

assignTask(task);

break;

case TaskStatus.ASSIGNED:

startTask(task);

break;

case TaskStatus.STARTED:

uploadEvidence(task);

break;

case TaskStatus.EVIDENCE:

reviewTask(task);

break;

case TaskStatus.REVIEW:

Math.random()>.2?

approveTask(task):

sendRework(task);

break;

case TaskStatus.REWORK:

startTask(task);

break;

}

updateTaskList();

}

/* ==========================================================
   TASK LIST
========================================================== */

function updateTaskList(){

const list=

document.getElementById(

"taskList"

);

if(!list) return;

list.innerHTML="";

Simulator.tasks.forEach(task=>{

const div=

document.createElement("div");

div.className="task-card";

div.innerHTML=`

<strong>#${task.id}</strong>

<br>

${task.title}

<br>

<span>${task.status}</span>

`;

list.appendChild(div);

});

}

/* ==========================================================
   ACTIVITY FEED
========================================================== */

function renderActivity(){

const feed=

document.getElementById(

"activityFeed"

);

if(!feed) return;

feed.innerHTML="";

Simulator.activity

.slice(0,15)

.forEach(item=>{

const row=

document.createElement("div");

row.className="activity-item";

row.innerHTML=`

<div>

${item.message}

</div>

<small>

${item.time.toLocaleTimeString()}

</small>

`;

feed.appendChild(row);

});

}

/* ==========================================================
   SAVE SIMULATOR
========================================================== */

function saveSimulator(){

localStorage.setItem(

"sanitrack_simulator",

JSON.stringify(Simulator)

);

}

/* ==========================================================
   LOAD SIMULATOR
========================================================== */

function loadSimulator(){

const data=

localStorage.getItem(

"sanitrack_simulator"

);

if(!data) return;

const parsed=

JSON.parse(data);

Simulator=parsed;

updateTaskList();

renderActivity();

}

/* ==========================================================
   SIMULATION LOOP
========================================================== */

function simulatorTick(){

if(!Simulator.running)

return;

if(

Simulator.tasks.length<5

){

createTask();

}

Simulator.tasks

.filter(

t=>t.status!==

TaskStatus.APPROVED

)

.forEach(task=>{

if(Math.random()>.45){

advanceTask(task);

}

});

saveSimulator();

}

/* ==========================================================
   START
========================================================== */

function startSimulation(){

Simulator.running=true;

logActivity(

"Simulation Started"

);

}

/* ==========================================================
   STOP
========================================================== */

function stopSimulation(){

Simulator.running=false;

logActivity(

"Simulation Stopped"

);

}

/* ==========================================================
   TIMER
========================================================== */

setInterval(()=>{

simulatorTick();

},5000);

/* ==========================================================
   PUBLIC API
========================================================== */

window.Simulator={

startSimulation,

stopSimulation,

createTask,

advanceTask,

loadSimulator,

saveSimulator

};