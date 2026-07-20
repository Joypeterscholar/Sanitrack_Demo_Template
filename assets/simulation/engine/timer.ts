// src/simulation/engine/timer.ts

import { simulationState } from "./stateManager";

export type ClockSpeed =
  | 1     // Real time
  | 15    // 1 sec = 15 mins
  | 30    // 1 sec = 30 mins
  | 60;   // 1 sec = 1 hour

export class SimulationClock {
  private interval: ReturnType<typeof setInterval> | null = null;

  private speed: ClockSpeed = 15;

  private running = false;

  private simulatedTime = Date.now();

  start() {
    if (this.running) return;

    this.running = true;

    simulationState.setStatus("running");

    this.interval = setInterval(() => {

      // Advance simulated time
      this.simulatedTime += this.speed * 60 * 1000;

      simulationState.updateSimulationTime(this.simulatedTime);

    }, 1000);
  }

  pause() {
    if (!this.interval) return;

    clearInterval(this.interval);

    this.interval = null;

    this.running = false;

    simulationState.setStatus("paused");
  }

  resume() {
    if (this.running) return;

    this.start();
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.interval = null;

    this.running = false;

    this.simulatedTime = Date.now();

    simulationState.updateSimulationTime(this.simulatedTime);

    simulationState.setStatus("stopped");
  }

  reset() {
    this.stop();

    this.simulatedTime = Date.now();

    simulationState.reset();
  }

  setSpeed(speed: ClockSpeed) {
    this.speed = speed;

    simulationState.setSpeed(speed);
  }

  getCurrentTime() {
    return this.simulatedTime;
  }

  isRunning() {
    return this.running;
  }
}

export const simulationClock = new SimulationClock();