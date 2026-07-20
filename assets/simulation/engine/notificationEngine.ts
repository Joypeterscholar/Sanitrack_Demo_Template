// src/simulation/engine/notificationEngine.ts

import { simulationState } from "./stateManager";
import { SimulationEngine } from "./scheduler";

export class NotificationEngine implements SimulationEngine {
  name = "Notification Engine";

  enabled = true;

  private processedTasks = new Set<string>();
  private processedIncidents = new Set<string>();
  private lowInventoryAlerts = new Set<string>();

  execute() {
    const state = simulationState.snapshot();

    this.processTasks(state);
    this.processIncidents(state);
    this.processInventory(state);
  }

  private processTasks(state: ReturnType<typeof simulationState.snapshot>) {
    for (const task of state.tasks) {
      const key = `${task.id}:${task.status}`;

      if (this.processedTasks.has(key)) continue;

      this.processedTasks.add(key);

      simulationState.addNotification({
        id: crypto.randomUUID(),
        title: "Task Update",
        message: `${task.title} is now ${task.status}`,
        type: "info",
        createdAt: Date.now(),
        read: false,
      });
    }
  }

  private processIncidents(state: ReturnType<typeof simulationState.snapshot>) {
    for (const incident of state.incidents) {
      if (this.processedIncidents.has(incident.id)) continue;

      this.processedIncidents.add(incident.id);

      simulationState.addNotification({
        id: crypto.randomUUID(),
        title: "Incident Reported",
        message: `${incident.title} at ${incident.location}`,
        type:
          incident.severity === "Critical" || incident.severity === "High"
            ? "error"
            : "warning",
        createdAt: Date.now(),
        read: false,
      });
    }
  }

  private processInventory(state: ReturnType<typeof simulationState.snapshot>) {
    for (const item of state.inventory) {
      if (item.quantity > item.minimumLevel) {
        this.lowInventoryAlerts.delete(item.id);
        continue;
      }

      if (this.lowInventoryAlerts.has(item.id)) continue;

      this.lowInventoryAlerts.add(item.id);

      simulationState.addNotification({
        id: crypto.randomUUID(),
        title: "Low Inventory",
        message: `${item.name} has reached the minimum stock level.`,
        type: "warning",
        createdAt: Date.now(),
        read: false,
      });
    }
  }
}

export const notificationEngine = new NotificationEngine();