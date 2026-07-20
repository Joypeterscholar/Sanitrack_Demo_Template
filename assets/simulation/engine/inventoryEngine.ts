// src/simulation/engine/inventoryEngine.ts

import { simulationState } from "./stateManager";
import { SimulationEngine } from "./scheduler";

interface ConsumptionRule {
  gloves: number;
  disinfectant: number;
  soap: number;
  trashBags: number;
  paperTowels: number;
}

const DEFAULT_USAGE: ConsumptionRule = {
  gloves: 2,
  disinfectant: 1,
  soap: 1,
  trashBags: 1,
  paperTowels: 2,
};

const TASK_USAGE: Record<string, ConsumptionRule> = {
  "Routine Cleaning": {
    gloves: 2,
    disinfectant: 1,
    soap: 1,
    trashBags: 1,
    paperTowels: 2,
  },

  "Deep Cleaning": {
    gloves: 6,
    disinfectant: 4,
    soap: 2,
    trashBags: 3,
    paperTowels: 5,
  },

  "Restroom Sanitization": {
    gloves: 4,
    disinfectant: 3,
    soap: 3,
    trashBags: 2,
    paperTowels: 6,
  },

  "Emergency Spill Cleanup": {
    gloves: 8,
    disinfectant: 5,
    soap: 0,
    trashBags: 4,
    paperTowels: 8,
  },
};

export class InventoryEngine implements SimulationEngine {

  name = "Inventory Engine";

  enabled = true;

  execute() {

    const state = simulationState.snapshot();

    const activeTasks = state.tasks.filter(
      task => task.status === "In Progress"
    );

    activeTasks.forEach(task => {

      const usage =
        TASK_USAGE[task.title] ?? DEFAULT_USAGE;

      consume("gloves", usage.gloves);
      consume("disinfectant", usage.disinfectant);
      consume("soap", usage.soap);
      consume("trashBags", usage.trashBags);
      consume("paperTowels", usage.paperTowels);

    });

    checkLowStock();

  }

}

function consume(id: string, amount: number) {

  simulationState.consumeInventory(id, amount);

}

function checkLowStock() {

  const state = simulationState.snapshot();

  state.inventory.forEach(item => {

    if (item.quantity > item.minimumLevel) return;

    simulationState.addNotification({

      id: crypto.randomUUID(),

      title: "Low Inventory",

      message: `${item.name} is running low`,

      type: "warning",

      createdAt: Date.now(),

      read: false

    });

  });

}

export const inventoryEngine =
  new InventoryEngine();