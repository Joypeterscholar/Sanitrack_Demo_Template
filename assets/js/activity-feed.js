/* ======================================================
   Activity Feed
====================================================== */

const ActivityFeed={

    logs:[],

    log(entry){

        this.logs.unshift({

            time:new Date().toLocaleTimeString(),

            actor:entry.actor,

            action:entry.action,

            status:entry.status

        });

        this.render();

    },

    render(){

        const panel=document.getElementById("activityFeed");

        if(!panel) return;

        panel.innerHTML="";

        this.logs.slice(0,20).forEach(item=>{

            panel.innerHTML+=`

            <div class="task-card">

                <strong>${item.actor}</strong>

                <br>

                ${item.action}

                <br>

                Status:

                <strong>${item.status}</strong>

                <br>

                <small>${item.time}</small>

            </div>

            `;

        });

    }

};