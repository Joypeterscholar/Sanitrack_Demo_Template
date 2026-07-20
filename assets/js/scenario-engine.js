/* ===========================================================
   SANITRACK DEMO
   Scenario Engine
=========================================================== */

const ScenarioEngine = {

    scenarios: [

        {
            id:1,
            title:"Create Work Order",
            role:"Manager",
            description:"Manager creates sanitation task."
        },

        {
            id:2,
            title:"Assign Cleaner",
            role:"Supervisor",
            description:"Assign task to Cleaner."
        },

        {
            id:3,
            title:"Start Cleaning",
            role:"Cleaner",
            description:"Cleaner starts task."
        },

        {
            id:4,
            title:"Upload Evidence",
            role:"Cleaner",
            description:"Photos uploaded."
        },

        {
            id:5,
            title:"Supervisor Review",
            role:"Supervisor",
            description:"Inspection performed."
        },

        {
            id:6,
            title:"Manager Approval",
            role:"Manager",
            description:"Approve completed work."
        },

        {
            id:7,
            title:"Rework",
            role:"Supervisor",
            description:"Send back for correction."
        },

        {
            id:8,
            title:"Compliance Audit",
            role:"Compliance",
            description:"Audit completed."
        }

    ],

    init(){

        this.renderScenarioButtons();

    },

    renderScenarioButtons(){

        const panel=document.getElementById("scenarioList");

        if(!panel) return;

        panel.innerHTML="";

        this.scenarios.forEach(s=>{

            const btn=document.createElement("button");

            btn.className="scenario-button";

            btn.innerHTML=s.title;

            btn.onclick=()=>{

                this.startScenario(s.id);

            };

            panel.appendChild(btn);

        });

    },

    startScenario(id){

        const scenario=this.scenarios.find(s=>s.id===id);

        if(!scenario) return;

        NotificationCenter.add(

            scenario.role+" started scenario: "+scenario.title

        );

        ActivityFeed.log({

            actor:scenario.role,

            action:scenario.title,

            status:"Running"

        });

        Simulator.createTask({

            title:scenario.title,

            assignedTo:scenario.role

        });

    }

};