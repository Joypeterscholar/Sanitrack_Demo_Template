// src/simulation/engine/incidentEngine.ts

import { simulationState, Incident } from "./stateManager";
import { SimulationEngine } from "./scheduler";

interface IncidentDefinition {
  title: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  probability: number;
}

const INCIDENTS: IncidentDefinition[] = [
  {
    title: "Chemical Spill",
    severity: "Critical",
    probability: 0.02,
  },
  {
    title: "Equipment Failure",
    severity: "High",
    probability: 0.05,
  },
  {
    title: "Failed Inspection",
    severity: "High",
    probability: 0.08,
  },
  {
    title: "Cleaner Absent",
    severity: "Medium",
    probability: 0.05,
  },
  {
    title: "Water Leak",
    severity: "High",
    probability: 0.03,
  },
  {
    title: "Low Chemical Stock",
    severity: "Medium",
    probability: 0.08,
  },
  {
    title: "Biohazard Waste",
    severity: "Critical",
    probability: 0.01,
  },
];

const LOCATIONS = [
  "Reception",
  "Kitchen",
  "Warehouse",
  "Office A",
  "Office B",
  "Restroom",
  "Parking Lot",
  "Conference Room",
];

export class IncidentEngine implements SimulationEngine {
  name = "Incident Engine";

  enabled = true;

  execute() {
    const state = simulationState.snapshot();

    // Dynamic multiplier based on facility activity
    const activityMultiplier =
      Math.max(1, state.tasks.filter(t => t.status === "In Progress").length / 5);

    for (const definition of INCIDENTS) {
      if (Math.random() > definition.probability * activityMultiplier) {
        continue;
      }

      this.createIncident(definition);
    }
  }

  private createIncident(definition: IncidentDefinition) {
    const now = Date.now();

    const location =
      LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];

    const incident: Incident = {
      id: crypto.randomUUID(),
      title: definition.title,
      severity: definition.severity,
      location,
      resolved: false,
      createdAt: now,
    };

    simulationState.addIncident(incident);

    simulationState.addNotification({
      id: crypto.randomUUID(),
      title: "Incident Detected",
      message: `${definition.title} at ${location}`,
      type:
        definition.severity === "Critical" || definition.severity === "High"
          ? "error"
          : "warning",
      createdAt: now,
      read: false,
    });

    // Automatically create an emergency task
    simulationState.addTask({
      id: crypto.randomUUID(),
      title: definition.title,
      area: location,
      priority: definition.severity,
      status: "Created",
      estimatedDuration: 30,
      progress: 0,
      createdAt: now,
      updatedAt: now,
    });

    console.log(
      `[Incident] ${definition.title} generated at ${location}`
    );
  }
}

export const incidentEngine = new IncidentEngine();