// src/simulation/engine/stateManager.ts

/* -------------------------------------------------------------------------- */
/*                               TYPE DEFINITIONS                             */
/* -------------------------------------------------------------------------- */

export type SimulationStatus =
  | "idle"
  | "running"
  | "paused"
  | "stopped";

export type TaskPriority =
  | "Low"
  | "Medium"
  | "High"
  | "Critical";

export type TaskStatus =
  | "Created"
  | "Assigned"
  | "Accepted"
  | "Travelling"
  | "In Progress"
  | "Inspection"
  | "Completed"
  | "Archived";

export interface SimulationTask {
  id: string;
  title: string;
  area: string;
  priority: TaskPriority;
  status: TaskStatus;

  managerId?: string;
  supervisorId?: string;
  cleanerId?: string;

  estimatedDuration: number;
  progress: number;

  createdAt: number;
  updatedAt: number;
}

export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  minimumLevel: number;
  unit: string;
}

export interface Incident {
  id: string;
  title: string;
  location: string;
  severity: TaskPriority;

  resolved: boolean;

  createdAt: number;
}

export interface SimulationNotification {
  id: string;
  title: string;
  message: string;

  type: "info" | "success" | "warning" | "error";

  createdAt: number;

  read: boolean;
}

export interface KPIState {
  activeTasks: number;
  completedTasks: number;
  inspectionScore: number;
  inventoryHealth: number;
  productivity: number;
  incidents: number;
}

export interface ReportSummary {
  id: string;
  title: string;
  generatedAt: number;
}

export interface SimulationState {
  status: SimulationStatus;

  simulationTime: number;

  speedMultiplier: number;

  tasks: SimulationTask[];

  inventory: InventoryItem[];

  incidents: Incident[];

  notifications: SimulationNotification[];

  reports: ReportSummary[];

  kpis: KPIState;
}

/* -------------------------------------------------------------------------- */
/*                               INITIAL STATE                                */
/* -------------------------------------------------------------------------- */

const initialState: SimulationState = {
  status: "idle",

  simulationTime: Date.now(),

  speedMultiplier: 15,

  tasks: [],

  inventory: [],

  incidents: [],

  notifications: [],

  reports: [],

  kpis: {
    activeTasks: 0,
    completedTasks: 0,
    inspectionScore: 100,
    inventoryHealth: 100,
    productivity: 100,
    incidents: 0,
  },
};

/* -------------------------------------------------------------------------- */
/*                               STATE MANAGER                                */
/* -------------------------------------------------------------------------- */

type Subscriber = (state: SimulationState) => void;

class SimulationStateManager {
  private state: SimulationState = structuredClone(initialState);

  private subscribers = new Set<Subscriber>();

  subscribe(listener: Subscriber): () => void {
    this.subscribers.add(listener);

    listener(this.snapshot());

    return () => {
      this.subscribers.delete(listener);
    };
  }

  private emit() {
    const snapshot = this.snapshot();

    this.subscribers.forEach((subscriber) => subscriber(snapshot));
  }

  snapshot(): SimulationState {
    return structuredClone(this.state);
  }

  reset() {
    this.state = structuredClone(initialState);

    this.emit();
  }

  update(partial: Partial<SimulationState>) {
    this.state = {
      ...this.state,
      ...partial,
    };

    this.emit();
  }

  /* ---------------------------------------------------------------------- */
  /* Tasks                                                                   */
  /* ---------------------------------------------------------------------- */

  addTask(task: SimulationTask) {
    this.state.tasks.unshift(task);

    this.emit();
  }

  updateTask(id: string, changes: Partial<SimulationTask>) {
    const task = this.state.tasks.find((t) => t.id === id);

    if (!task) return;

    Object.assign(task, changes);

    task.updatedAt = Date.now();

    this.emit();
  }

  removeTask(id: string) {
    this.state.tasks = this.state.tasks.filter((t) => t.id !== id);

    this.emit();
  }

  /* ---------------------------------------------------------------------- */
  /* Inventory                                                               */
  /* ---------------------------------------------------------------------- */

  addInventory(item: InventoryItem) {
    this.state.inventory.push(item);

    this.emit();
  }

  consumeInventory(id: string, quantity: number) {
    const item = this.state.inventory.find((i) => i.id === id);

    if (!item) return;

    item.quantity = Math.max(0, item.quantity - quantity);

    this.emit();
  }

  /* ---------------------------------------------------------------------- */
  /* Incidents                                                               */
  /* ---------------------------------------------------------------------- */

  addIncident(incident: Incident) {
    this.state.incidents.unshift(incident);

    this.emit();
  }

  resolveIncident(id: string) {
    const incident = this.state.incidents.find((i) => i.id === id);

    if (!incident) return;

    incident.resolved = true;

    this.emit();
  }

  /* ---------------------------------------------------------------------- */
  /* Notifications                                                           */
  /* ---------------------------------------------------------------------- */

  addNotification(notification: SimulationNotification) {
    this.state.notifications.unshift(notification);

    this.emit();
  }

  markNotificationRead(id: string) {
    const notification = this.state.notifications.find(
      (n) => n.id === id
    );

    if (!notification) return;

    notification.read = true;

    this.emit();
  }

  /* ---------------------------------------------------------------------- */
  /* Reports                                                                 */
  /* ---------------------------------------------------------------------- */

  addReport(report: ReportSummary) {
    this.state.reports.unshift(report);

    this.emit();
  }

  /* ---------------------------------------------------------------------- */
  /* KPI                                                                      */
  /* ---------------------------------------------------------------------- */

  updateKPIs(changes: Partial<KPIState>) {
    this.state.kpis = {
      ...this.state.kpis,
      ...changes,
    };

    this.emit();
  }

  /* ---------------------------------------------------------------------- */
  /* Time                                                                     */
  /* ---------------------------------------------------------------------- */

  updateSimulationTime(timestamp: number) {
    this.state.simulationTime = timestamp;

    this.emit();
  }

  setStatus(status: SimulationStatus) {
    this.state.status = status;

    this.emit();
  }

  setSpeed(speed: number) {
    this.state.speedMultiplier = speed;

    this.emit();
  }
}

export const simulationState = new SimulationStateManager();