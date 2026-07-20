// src/simulation/engine/reportEngine.ts

import { simulationState } from "./stateManager";
import { SimulationEngine } from "./scheduler";

export interface SimulationReport {

  id: string;

  generatedAt: number;

  period: "Daily" | "Weekly" | "Monthly";

  completedTasks: number;

  activeTasks: number;

  incidents: number;

  productivity: number;

  compliance: number;

  inventoryHealth: number;

}

export class ReportEngine implements SimulationEngine {

  name = "Report Engine";

  enabled = true;

  private lastReportTime = 0;

  // Generate one report every simulated hour
  private readonly REPORT_INTERVAL = 60 * 60 * 1000;

  execute() {

    const state = simulationState.snapshot();

    if (
      state.simulationTime - this.lastReportTime <
      this.REPORT_INTERVAL
    ) {
      return;
    }

    this.lastReportTime = state.simulationTime;

    const report: SimulationReport = {

      id: crypto.randomUUID(),

      generatedAt: state.simulationTime,

      period: "Daily",

      completedTasks: state.kpis.completedTasks,

      activeTasks: state.kpis.activeTasks,

      incidents: state.kpis.incidents,

      productivity: state.kpis.productivity,

      compliance: state.kpis.compliance,

      inventoryHealth: state.kpis.inventoryHealth

    };

    simulationState.addReport({

      id: report.id,

      title: `Daily Operations Report`,

      generatedAt: report.generatedAt

    });

    simulationState.addNotification({

      id: crypto.randomUUID(),

      title: "Report Generated",

      message: "Daily operational report is ready.",

      type: "success",

      createdAt: Date.now(),

      read: false

    });

    console.log("[Report Engine]", report);

  }

}

export const reportEngine =
  new ReportEngine();