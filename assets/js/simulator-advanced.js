/* ==========================================================
   SaniTrack Advanced Simulator
   Part 3
==========================================================*/

/* ==========================================================
   KPI MODEL
========================================================== */

const KPI = {

    open:0,

    assigned:0,

    progress:0,

    review:0,

    approved:0,

    rework:0

};

/* ==========================================================
   SPEED
========================================================== */

let simulatorSpeed = 1;

function setSimulationSpeed(speed){

    simulatorSpeed = speed;

    logActivity(`Simulation speed changed to ${speed}x`);

}

/* ==========================================================
   KPI UPDATE
========================================================== */

function calculateKPIs(){

    KPI.open = Simulator.tasks.filter(
        t=>t.status===TaskStatus.PENDING
    ).length;

    KPI.assigned = Simulator.tasks.filter(
        t=>t.status===TaskStatus.ASSIGNED
    ).length;

    KPI.progress = Simulator.tasks.filter(
        t=>t.status===TaskStatus.STARTED
    ).length;

    KPI.review = Simulator.tasks.filter(
        t=>t.status===TaskStatus.REVIEW
    ).length;

    KPI.approved = Simulator.tasks.filter(
        t=>t.status===TaskStatus.APPROVED
    ).length;

    KPI.rework = Simulator.tasks.filter(
        t=>t.status===TaskStatus.REWORK
    ).length;

    renderKPIs();

}

/* ==========================================================
   KPI RENDER
========================================================== */

function renderKPIs(){

    const ids={

        open:"kpiOpen",

        assigned:"kpiAssigned",

        progress:"kpiProgress",

        review:"kpiReview",

        approved:"kpiApproved",

        rework:"kpiRework"

    };

    Object.keys(ids).forEach(key=>{

        const el=document.getElementById(ids[key]);

        if(el){

            el.innerHTML=KPI[key];

        }

    });

}

/* ==========================================================
   NOTIFICATION CENTER
========================================================== */

const Notifications=[];

function notify(message){

    Notifications.unshift({

        id:Date.now(),

        message,

        time:new Date()

    });

    renderNotifications();

}

function renderNotifications(){

    const panel=document.getElementById("notificationPanel");

    if(!panel) return;

    panel.innerHTML="";

    Notifications.slice(0,10).forEach(item=>{

        panel.innerHTML+=`

        <div class="notification">

            <strong>${item.message}</strong>

            <br>

            <small>${item.time.toLocaleTimeString()}</small>

        </div>

        `;

    });

}

/* ==========================================================
   STORYLANE EVENTS
========================================================== */

function syncStorylane(task){

    console.log("Storylane Event",{

        id:task.id,

        status:task.status,

        role:task.cleaner.name

    });

}

/* ==========================================================
   OVERRIDE ADVANCE
========================================================== */

const originalAdvance = advanceTask;

advanceTask=function(task){

    originalAdvance(task);

    calculateKPIs();

    notify(`${task.title} → ${task.status}`);

    syncStorylane(task);

};

/* ==========================================================
   AUTOPILOT
========================================================== */

let autopilot=false;

function startAutopilot(){

    autopilot=true;

    notify("Autopilot Enabled");

}

function stopAutopilot(){

    autopilot=false;

    notify("Autopilot Disabled");

}

/* ==========================================================
   AUTOPILOT LOOP
========================================================== */

setInterval(()=>{

    if(!autopilot) return;

    if(Math.random()>.55){

        createTask();

    }

    Simulator.tasks

    .filter(t=>t.status!==TaskStatus.APPROVED)

    .forEach(task=>{

        if(Math.random()>.3){

            advanceTask(task);

        }

    });

},4000);

/* ==========================================================
   SCENARIOS
========================================================== */

const Scenarios=[

{

name:"Create Work Order",

run(){

createTask();

}

},

{

name:"Supervisor Review",

run(){

const task=Simulator.tasks.find(

t=>t.status===TaskStatus.EVIDENCE

);

if(task){

reviewTask(task);

}

}

},

{

name:"Manager Approval",

run(){

const task=Simulator.tasks.find(

t=>t.status===TaskStatus.REVIEW

);

if(task){

approveTask(task);

}

}

},

{

name:"Rework",

run(){

const task=Simulator.tasks.find(

t=>t.status===TaskStatus.REVIEW

);

if(task){

sendRework(task);

}

}

}

];

function renderScenarioMenu(){

    const menu=document.getElementById("scenarioList");

    if(!menu) return;

    menu.innerHTML="";

    Scenarios.forEach(s=>{

        const btn=document.createElement("button");

        btn.className="scenario-button";

        btn.innerHTML=s.name;

        btn.onclick=s.run;

        menu.appendChild(btn);

    });

}

/* ==========================================================
   RESET
========================================================== */

function resetSimulation(){

    Simulator.tasks=[];

    Simulator.activity=[];

    Notifications.length=0;

    Simulator.counter=1;

    updateTaskList();

    renderActivity();

    renderNotifications();

    calculateKPIs();

    localStorage.removeItem("sanitrack_simulator");

}

/* ==========================================================
   REPLAY
========================================================== */

function replaySimulation(){

    resetSimulation();

    startAutopilot();

}

/* ==========================================================
   RESUME
========================================================== */

function resumeSimulation(){

    loadSimulator();

    calculateKPIs();

    renderNotifications();

}

/* ==========================================================
   EXPORT
========================================================== */

window.AdvancedSimulator={

    startAutopilot,

    stopAutopilot,

    replaySimulation,

    resetSimulation,

    resumeSimulation,

    setSimulationSpeed,

    renderScenarioMenu

};