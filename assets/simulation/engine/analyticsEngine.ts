// src/simulation/engine/analyticsEngine.ts

import { simulationState } from "./stateManager";
import { SimulationEngine } from "./scheduler";

export class AnalyticsEngine implements SimulationEngine {
  name = "Analytics Engine";

  enabled = true;

  execute() {
    const state = simulationState.snapshot();

    const completedTasks = state.tasks.filter(
      task => task.status === "Completed" || task.status === "Archived"
    ).length;

    const activeTasks = state.tasks.filter(
      task =>
        task.status !== "Completed" &&
        task.status !== "Archived"
    ).length;

    const unresolvedIncidents = state.incidents.filter(
      incident => !incident.resolved
    ).length;

    const totalInventory = state.inventory.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    const minimumInventory = state.inventory.reduce(
      (sum, item) => sum + item.minimumLevel,
      0
    );

    const inventoryHealth =
      totalInventory === 0
        ? 0
        : Math.min(
            100,
            Math.round(
              ((totalInventory - minimumInventory) /
                totalInventory) *
                100
            )
          );

    const totalTasks =
      completedTasks + activeTasks;

    const productivity =
      totalTasks === 0
        ? 100
        : Math.round(
            (completedTasks / totalTasks) * 100
          );

    const compliance = Math.max(
      0,
      100 - unresolvedIncidents * 5
    );

    const inspectionScore = Math.max(
      60,
      compliance - Math.floor(unresolvedIncidents / 2)
    );

    simulationState.updateKPIs({
      activeTasks,
      completedTasks,
      incidents: unresolvedIncidents,
      productivity,
      compliance,
      inventoryHealth,
      inspectionScore,
    });
  }
}

export const analyticsEngine =
  new AnalyticsEngine();