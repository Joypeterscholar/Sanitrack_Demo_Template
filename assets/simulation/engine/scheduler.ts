// src/simulation/engine/scheduler.ts

export interface SimulationEngine {
  name: string;
  enabled: boolean;
  execute(): void;
}

export class SimulationScheduler {
  private engines: SimulationEngine[] = [];

  private interval: ReturnType<typeof setInterval> | null = null;

  private tickRate = 5000;

  private running = false;

  register(engine: SimulationEngine) {
    this.engines.push(engine);
  }

  unregister(name: string) {
    this.engines = this.engines.filter(
      (engine) => engine.name !== name
    );
  }

  setTickRate(milliseconds: number) {
    this.tickRate = milliseconds;

    if (this.running) {
      this.stop();
      this.start();
    }
  }

  start() {
    if (this.running) return;

    this.running = true;

    this.interval = setInterval(() => {
      this.runCycle();
    }, this.tickRate);
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.interval = null;

    this.running = false;
  }

  private runCycle() {
    for (const engine of this.engines) {
      if (!engine.enabled) continue;

      try {
        engine.execute();
      } catch (error) {
        console.error(
          `[Scheduler] ${engine.name} failed`,
          error
        );
      }
    }
  }

  getRegisteredEngines() {
    return this.engines;
  }

  isRunning() {
    return this.running;
  }
}

export const simulationScheduler =
  new SimulationScheduler();