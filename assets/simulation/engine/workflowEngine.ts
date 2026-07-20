// src/simulation/engine/workflowEngine.ts

import { simulationState } from "./stateManager";
import { SimulationEngine } from "./scheduler";

const MANAGERS = [
  "Manager Michael",
  "Manager David"
];

const SUPERVISORS = [
  "Supervisor Sarah",
  "Supervisor Daniel",
  "Supervisor Grace"
];

const CLEANERS = [
  "Cleaner James",
  "Cleaner Anita",
  "Cleaner John",
  "Cleaner Esther",
  "Cleaner Musa"
];

const NEXT_STATUS = {
  Created: "Assigned",
  Assigned: "Accepted",
  Accepted: "Travelling",
  Travelling: "In Progress",
  "In Progress": "Inspection",
  Inspection: "Completed",
  Completed: "Archived"
} as const;

export class WorkflowEngine implements SimulationEngine {

  name = "Workflow Engine";

  enabled = true;

  execute() {

    const state = simulationState.snapshot();

    state.tasks.forEach(task => {

      // Don't touch archived tasks
      if (task.status === "Archived") return;

      // Progress about 70% of tasks each cycle
      if (Math.random() > 0.70) return;

      const updates: any = {};

      switch (task.status) {

        case "Created":

          updates.managerId =
            random(MANAGERS);

          updates.supervisorId =
            random(SUPERVISORS);

          break;

        case "Assigned":

          updates.cleanerId =
            random(CLEANERS);

          break;

        case "Travelling":

          updates.progress = 10;

          break;

        case "In Progress":

          updates.progress =
            Math.min(
              90,
              task.progress +
              randomNumber(15,35)
            );

          break;

        case "Inspection":

          updates.progress = 100;

          break;
      }

      updates.status =
        NEXT_STATUS[task.status];

      simulationState.updateTask(
        task.id,
        updates
      );

      simulationState.addNotification({

        id: crypto.randomUUID(),

        title: "Workflow Update",

        message:
          `${task.title} → ${updates.status}`,

        type: "info",

        createdAt: Date.now(),

        read: false

      });

    });

  }

}

function random<T>(items:T[]):T{

  return items[
    Math.floor(Math.random()*items.length)
  ];

}

function randomNumber(min:number,max:number){

  return Math.floor(
    Math.random()*(max-min+1)
  )+min;

}

export const workflowEngine =
  new WorkflowEngine();