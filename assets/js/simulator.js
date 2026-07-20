const Simulator = {

    running: false,

    currentStep: 0,

    speed: 1,

    scenario: "daily-cleaning",

    role: "Manager",

    interval: null,

    progress: 0,

    inventory: {
        sanitizer: 100,
        gloves: 250,
        masks: 120
    },

    task: {

        title: "Zone A3 Deep Cleaning",

        status: "Pending",

        assignedTo: "",

        evidence: [],

        approved: false

    },

    notifications: [],

    activities: []

};

const workflow = [

{

title:"Assign Task",

role:"Manager",

progress:10

},

{

title:"Supervisor Review",

role:"Supervisor",

progress:25

},

{

title:"Cleaning Started",

role:"Cleaner",

progress:45

},

{

title:"Evidence Uploaded",

role:"Cleaner",

progress:60

},

{

title:"Supervisor Approval",

role:"Supervisor",

progress:80

},

{

title:"Completed",

role:"Manager",

progress:100

}

];

Simulator.start=function(){

    if(this.running) return;

    this.running=true;

    this.interval=setInterval(()=>{

        this.nextStep();

    },4000);

}

Simulator.pause=function(){

    this.running=false;

    clearInterval(this.interval);

}

Simulator.reset=function(){

    this.pause();

    this.currentStep=0;

    this.progress=0;

    this.render();

}

Simulator.nextStep=function(){

    if(this.currentStep>=workflow.length){

        this.pause();

        return;

    }

    const step=workflow[this.currentStep];

    this.role=step.role;

    this.progress=step.progress;

    this.task.status=step.title;

    this.currentStep++;

    this.render();

}

Simulator.renderProgress=function(){

const bar=document.getElementById("simulatorProgressBar");

bar.style.width=this.progress+"%";

document.getElementById("progressValue").innerHTML=this.progress+"%";

}

Simulator.renderTask=function(){

document.getElementById("taskStatus").innerHTML=this.task.status;

document.getElementById("workflowTitle").innerHTML=this.task.status;

document.getElementById("workflowBadge").innerHTML=this.role+" View";

}

Simulator.renderSummary=function(){

document.getElementById("summaryStage").innerHTML=this.task.status;

document.getElementById("summaryRole").innerHTML=this.role;

document.getElementById("summaryProgressChip").innerHTML="Progress "+this.progress+"%";

}

Simulator.addActivity=function(text){

this.activities.unshift({

time:new Date().toLocaleTimeString(),

message:text

});

ActivityFeed.render();

}

Simulator.notify=function(message){

this.notifications.unshift({

time:new Date(),

message

});

NotificationCenter.render();

}

Simulator.render=function(){

this.renderProgress();

this.renderTask();

this.renderSummary();

NotificationCenter.render();

ActivityFeed.render();

ScenarioEngine.render();

}