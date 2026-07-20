const SmartAutopilot = {

    initialized: false,

    init() {

        if (this.initialized) return;

        Scheduler.init();

        TaskEngine.init();

        WorkflowEngine.init();

        InventoryEngine.init();

        IncidentEngine.init();

        AnalyticsEngine.init();

        NotificationEngine.init();

        ReportEngine.init();

        this.initialized = true;

    },

    start() {

        Scheduler.start();

    },

    pause() {

        Scheduler.stop();

    },

    resume() {

        Scheduler.resume();

    },

    reset() {

        Scheduler.reset();

    },

    renderScenarioMenu() {

        if (ScenarioEngine.renderMenu) {

            ScenarioEngine.renderMenu();

        }

    }

};