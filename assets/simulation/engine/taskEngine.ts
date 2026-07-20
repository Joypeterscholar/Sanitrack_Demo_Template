// src/simulation/engine/taskEngine.ts

import { simulationState, SimulationTask } from "./stateManager";
import { SimulationEngine } from "./scheduler";

const AREAS = [
  "Reception",
  "Lobby",
  "Office A",
  "Office B",
  "Kitchen",
  "Warehouse",
  "Restroom",
  "Conference Room",
  "Parking Lot",
  "Stairway"
];

const TASKS = [
  "Routine Cleaning",
  "Deep Cleaning",
  "Waste Collection",
  "Disinfection",
  "Floor Mopping",
  "Window Cleaning",
  "Restroom Sanitization",
  "Chemical Refill",
  "Inspection",
  "Emergency Spill Cleanup"
];

const PRIORITIES = [
  "Low",
  "Medium",
  "High",
  "Critical"
] as const;

export class TaskEngine implements SimulationEngine {

  name = "Task Engine";

  enabled = true;

  private maxTasks = 25;

  execute() {

    const state = simulationState.snapshot();

    // Don't flood the dashboard
    if (state.tasks.length >= this.maxTasks) {
      return;
    }

    // 65% chance to generate a task
    if (Math.random() > 0.65) {
      return;
    }

    const now = Date.now();

    const task: SimulationTask = {

      id: crypto.randomUUID(),

      title: TASKS[Math.floor(Math.random() * TASKS.length)],

      area: AREAS[Math.floor(Math.random() * AREAS.length)],

      priority:
        PRIORITIES[Math.floor(Math.random() * PRIORITIES.length)],

      status: "Created",

      estimatedDuration:
        Math.floor(Math.random() * 40) + 15,

      progress: 0,

      createdAt: now,

      updatedAt: now
    };

    simulationState.addTask(task);

    simulationState.addNotification({

      id: crypto.randomUUID(),

      title: "New Task Created",

      message: `${task.title} at ${task.area}`,

      type: "info",

      createdAt: now,

      read: false

    });

    console.log(
      "[Task Engine]",
      task.title,
      task.area
    );

  }

}

export const taskEngine = new TaskEngine();