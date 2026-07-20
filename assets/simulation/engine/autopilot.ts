// src/simulation/engine/autopilot.ts

import { simulationClock } from "./timer";
import { simulationScheduler } from "./scheduler";

import { taskEngine } from "./taskEngine";
import { workflowEngine } from "./workflowEngine";
import { inventoryEngine } from "./inventoryEngine";
import { incidentEngine } from "./incidentEngine";
import { analyticsEngine } from "./analyticsEngine";
import { notificationEngine } from "./notificationEngine";
import { reportEngine } from "./reportEngine";

class SmartAutopilot {

  private initialized = false;

  initialize() {

    if (this.initialized) return;

    simulationScheduler.register(taskEngine);

    simulationScheduler.register(workflowEngine);

    simulationScheduler.register(inventoryEngine);

    simulationScheduler.register(incidentEngine);

    simulationScheduler.register(analyticsEngine);

    simulationScheduler.register(notificationEngine);

    simulationScheduler.register(reportEngine);

    this.initialized = true;

  }

  start() {

    this.initialize();

    simulationClock.start();

    simulationScheduler.start();

    console.log("Smart Autopilot Started");

  }

  pause() {

    simulationClock.pause();

    simulationScheduler.stop();

  }

  resume() {

    simulationClock.resume();

    simulationScheduler.start();

  }

  stop() {

    simulationClock.stop();

    simulationScheduler.stop();

  }

  reset() {

    this.stop();

    simulationClock.reset();

  }

}

export const smartAutopilot =
  new SmartAutopilot();