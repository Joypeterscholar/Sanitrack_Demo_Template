const AdvancedSimulator = {

    timer: null,

    tickSpeed: 5000,

    running: false,

    startAutopilot() {

        if (this.running) return;

        this.running = true;

        this.timer = setInterval(() => {

            Scheduler.runCycle();

        }, this.tickSpeed);

        ActivityFeed.add(
            "🤖 Smart Autopilot Started"
        );

    },

    stopAutopilot() {

        clearInterval(this.timer);

        this.timer = null;

        this.running = false;

        ActivityFeed.add(
            "⏸ Autopilot Paused"
        );

    },

    resumeSimulation() {

        if (this.running) return;

        this.startAutopilot();

    },

    resetSimulation() {

        this.stopAutopilot();

        Simulator.reset();

        NotificationCenter.clear();

        ActivityFeed.clear();

        ActivityFeed.add(
            "🔄 Simulation Reset"
        );

    }

};