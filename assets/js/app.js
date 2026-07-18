/*====================================================
 SaniTrack Experience Portal
 app.js
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    //-----------------------------------
    // ELEMENTS
    //-----------------------------------

    const role = document.getElementById("role");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const loginBtn = document.getElementById("loginBtn");

    const narratorBtn = document.getElementById("playVoice");

    const narratorAudio = document.getElementById("voice");

    const togglePassword =
        document.querySelector(".toggle-password");

    //-----------------------------------
    // DEMO ACCOUNTS
    //-----------------------------------

    const demoAccounts = {

        Manager: {

            email: "joynodesupervisor@gmail.com",
            password: "joynode"

        },

        Supervisor: {

            email: "joynodejsmanager@gmail.com",
            password: "joyNodeJs"

        },

        Cleaner: {

            email: "joynodecleaner@gmail.com",
            password: "joynode"

        },

        "Guest Demo": {

            email: "guest@sani-track.demo",
            password: "guestdemo"

        }

    };

    //-----------------------------------
    // AUTO FILL
    //-----------------------------------

    function loadRole(roleName){

        email.value =
            demoAccounts[roleName].email;

        password.value =
            demoAccounts[roleName].password;

    }

    loadRole("Manager");

    role.addEventListener("change", ()=>{

        loadRole(role.value);

    });

    //-----------------------------------
    // SHOW PASSWORD
    //-----------------------------------

    togglePassword.addEventListener("click",()=>{

        if(password.type==="password"){

            password.type="text";

            togglePassword.classList.remove("fa-eye");

            togglePassword.classList.add("fa-eye-slash");

        }else{

            password.type="password";

            togglePassword.classList.remove("fa-eye-slash");

            togglePassword.classList.add("fa-eye");

        }

    });

    //-----------------------------------
    // PLAY AI VOICE
    //-----------------------------------

    narratorBtn.addEventListener("click",()=>{

        if(narratorAudio.paused){

            narratorAudio.play();

            narratorBtn.innerHTML="⏸";

        }else{

            narratorAudio.pause();

            narratorBtn.innerHTML="▶";

        }

    });

    narratorAudio.onended=()=>{

        narratorBtn.innerHTML="▶";

    };

    //-----------------------------------
    // LOGIN
    //-----------------------------------

    loginBtn.addEventListener("click",(e)=>{

        e.preventDefault();

        if(email.value.trim()===""){

            alert("Please enter email.");

            return;

        }

        if(password.value.trim()===""){

            alert("Please enter password.");

            return;

        }

        loginBtn.disabled=true;

        loginBtn.innerHTML=

        `<i class="fa-solid fa-spinner fa-spin"></i>
         Entering Experience...`;

        setTimeout(()=>{

            if(role.value === "Guest Demo"){

                sessionStorage.setItem("saniGuestMode", "true");
                window.location.href="sandbox.html?mode=guest";
            }else{
                window.location.href="splash.html";
            }

        },1800);

    });

});