/* ======================================================
   Notification Center
====================================================== */

const NotificationCenter={

    notifications:[],

    add(message){

        this.notifications.unshift({

            id:Date.now(),

            text:message,

            time:new Date().toLocaleTimeString()

        });

        this.render();

    },

    render(){

        const panel=document.getElementById("notificationPanel");

        if(!panel) return;

        panel.innerHTML="";

        this.notifications.slice(0,10).forEach(item=>{

            panel.innerHTML+=`

            <div class="notification">

                <strong>${item.time}</strong>

                <br>

                ${item.text}

            </div>

            `;

        });

    }

};