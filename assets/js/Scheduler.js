const Scheduler = {

    runCycle() {

        TaskEngine.run();

        WorkflowEngine.run();

        InventoryEngine.run();

        IncidentEngine.run();

        AnalyticsEngine.run();

        NotificationEngine.run();

        ReportEngine.run();

        Dashboard.render();

    }

};