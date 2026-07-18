# SaniTrack Storylane Upgrade PRD

## 1. Objective

Upgrade the current Storylane-style sandbox into a more realistic, structured, and scalable demo experience for SaniTrack. The goal is to move from a simple interactive page to a guided operational simulation that can be used for product demos, stakeholder walkthroughs, and training.

## 2. Core Upgrade Areas

### 2.1 Improve the Storylane content itself

The current story should be upgraded from a basic workflow into a richer operational journey with more realistic steps and clearer business logic.

#### Proposed improvements
- Increase the number of steps in the workflow from a short path to a realistic end-to-end process.
- Make the flow reflect actual sanitation operations more closely.
- Introduce clear milestones such as:
  - task creation
  - assignment
  - acknowledgment
  - task start
  - evidence capture
  - supervisor review
  - manager approval
  - rework or escalation
- Add realistic task types such as:
  - deep cleaning
  - equipment sanitation
  - chemical usage logging
  - incident response
  - compliance inspection
- Include more authentic actions such as comments, attachments, alerts, and status updates.

### 2.2 Add scenario-based navigation

The demo should support a list of scenarios that a user can click to jump directly to a relevant Storylane segment.

#### Example scenarios
- Create Work Order
- Assign Cleaner
- Start Cleaning Task
- Upload Evidence
- Supervisor Review
- Manager Approval
- Escalate Issue
- Complete Rework

#### Expected behavior
- Clicking a scenario opens the relevant view or step in the workflow.
- The UI highlights the current step, the role involved, and the expected action.
- The user can move forward or backward through the process.

### 2.3 Embed the Storylane experience into the main SaniTrack product experience

The Storylane demo should not feel like a disconnected page; it should become part of the overall product experience.

#### Suggested integration model
- Add a Guest Demo mode inside the SaniTrack web app.
- When a guest user logs in, they are directed into a Demo Dashboard.
- This demo dashboard hosts the Storylane experience with a dedicated section called “SaniTrack Guest Demo”.
- The guest mode should use the same branding, layout, and visual language as the main app.

#### Recommended architecture
- Keep the current public sandbox page as a standalone demo entry point.
- Add a route or section in the main app for the demo experience.
- Use shared components and state logic so the workflow behaves consistently across both environments.

### 2.4 Add progress persistence and resume capability

The demo should allow a user to save progress and continue later.

#### Recommended capabilities
- Save the current workflow progress to browser storage or a backend service.
- Allow the user to return later and resume from the same step.
- Show a “Resume Demo” option on login or on the demo landing page.
- Track the last completed step and the current role view.

#### Technical approach options
- Option A: Browser localStorage for a lightweight demo.
- Option B: Backend-based persistence for a more production-like experience.
- Option C: Hybrid approach where guest sessions are stored in local storage first and synced later.

#### Recommendation
- Start with localStorage for speed and simplicity.
- Prepare the data model so that it can later be moved to a backend with minimal rework.

### 2.5 Define the Mini SaniTrack product

The mini version should be a simplified but realistic version of the main product that loads faster and has a reduced feature footprint.

## 3. Mini SaniTrack PRD

### 3.1 Purpose

Create a lightweight SaniTrack experience optimized for demos, onboarding, stakeholder presentations, and training.

### 3.2 Goals
- Reduce load time and visual complexity.
- Focus on the core job-to-be-done.
- Make the experience easier to explain and easier to navigate.
- Preserve the essential workflow of task assignment, execution, review, and approval.

### 3.3 Core user journeys
- Guest user enters the demo and sees the current task pipeline.
- Manager creates or assigns a task.
- Supervisor reviews and approves or disapproves.
- Cleaner completes the task and uploads evidence.
- Admin or stakeholder views the current state and progress.

### 3.4 Functional requirements

#### Core workflow
- Users can switch between manager, supervisor, and cleaner roles.
- The system shows a task card with the current status.
- The user can advance the task through the lifecycle.
- Evidence and comments can be attached to the task.
- Progress is displayed visually.

#### Dashboard requirements
- Summary cards for open tasks, completed tasks, and review pending items.
- Current activity feed.
- Current task timeline.
- Role-based UI state.

#### Navigation requirements
- Scenario list panel.
- Quick jump to specific workflow stage.
- Clear return-to-home action.

#### Persistence requirements
- Save progress across reloads.
- Resume from stored state.
- Optional reset button.

#### Accessibility requirements
- Keyboard-friendly controls.
- Clear contrast and readable typography.
- Simple, non-cluttered layout.

### 3.5 Developer-facing feature checklist

- Lightweight static or hybrid frontend architecture.
- Single-page flow with role-based state.
- LocalStorage-backed persistence model.
- Modular component structure for workflow steps.
- Reusable task card, timeline, evidence panel, and activity feed components.
- Clear separation of business logic from UI rendering.
- Configurable scenario definitions.
- Event logging for demo actions.
- Easy reset and replay functions.
- Fast load time with minimal third-party dependencies.
- Mobile-friendly responsive layout.
- Support for future backend sync.

### 3.6 Utility / product-facing feature checklist

- Faster onboarding experience.
- Better storytelling for operations teams.
- Simpler navigation than the full product.
- Clear role-based demonstration path.
- Realistic process simulation without full operational complexity.
- Better demo continuity for presentations.
- Easy to explain to prospects and partners.

## 4. Simulator Script PRD

### 4.1 Purpose

Create an automated simulator that behaves like a virtual operations team performing activities inside the demo environment. The simulator should create a realistic stream of events over time so the demo feels alive even when no human is interacting with it.

### 4.2 Goals
- Simulate the normal rhythm of operations.
- Create believable task activity without manual intervention.
- Provide a living demo experience for stakeholders.
- Enable a “simulation facility” inside the product or demo environment.

### 4.3 Core concept

The simulator should run a scripted set of events such as:
- create work orders
- assign tasks to supervisors and cleaners
- start cleaning operations
- capture evidence
- send tasks for approval
- produce status updates
- trigger rework or escalation events

### 4.4 Example simulated personas
- Sam – Supervisor
- Michael – Manager
- Lina – Cleaner
- Ada – Compliance Officer

### 4.5 Simulation behaviors
- The simulator runs on a timer.
- New tasks appear over time.
- Some tasks advance automatically.
- Some require human interaction to continue.
- The simulation can run in a “continuous” or “step-by-step” mode.

### 4.6 Technical architecture

#### Frontend
- A simulation controller in the web app.
- A timeline engine that schedules steps.
- An event dispatcher that updates the task state.
- A role-based activity feed that renders simulated actions.

#### State model
- Task state: pending, assigned, in progress, awaiting review, approved, disapproved.
- User/role model: manager, supervisor, cleaner, guest.
- Event log: timestamps, actions, actors, and outcomes.

#### Data storage
- Initial version: localStorage or in-memory state.
- Future version: backend API with a simulation table or event log store.

#### Scheduling model
- Use a lightweight event scheduler such as:
  - setInterval
  - requestAnimationFrame for UI refresh
  - or a simple queue-driven engine for deterministic behavior

### 4.7 Suggested simulator modes

#### Mode 1: Demo autopilot
- The system automatically plays one scenario for the user.
- Good for live product demos.

#### Mode 2: Continuous simulation
- The system keeps generating activity over time.
- Good for a monitoring-style demo.

#### Mode 3: Scenario replay
- A user selects a scenario and watches it play out step by step.
- Good for training and onboarding.

### 4.8 Recommended functional features
- Start / stop simulation.
- Speed control for simulation playback.
- Pause and resume.
- Reset simulation state.
- View generated activity feed.
- Toggle between simulated and real user interaction.

## 5. Recommended Implementation Phases

### Phase 1: Content and workflow upgrade
- Expand the workflow from 3–4 steps to 8–10 realistic steps.
- Improve task descriptions, role actions, and evidence handling.
- Add stronger visual clarity around each stage.

### Phase 2: Scenario navigation
- Create a scenario list panel.
- Add deep-linking to specific workflow stages.
- Ensure each scenario opens the correct state and view.

### Phase 3: Demo mode and guest experience
- Build a guest demo landing page and bind it to the same workflow engine.
- Add a role-based entry page for guest users.

### Phase 4: Persistence and resume
- Add localStorage-based progress saving.
- Add a resume option.
- Add a reset option for replay.

### Phase 5: Mini SaniTrack experience
- Reduce visual complexity.
- Simplify navigation and remove nonessential modules.
- Optimize the experience for speed and demo use.

### Phase 6: Simulator engine
- Add scripted automated events.
- Introduce event timelines and activity generation.
- Add simulation controls and dashboards.

## 6. Technical Recommendations

- Use a modular frontend structure with reusable workflow components.
- Make the workflow data-driven so scenarios are easy to add and edit.
- Separate scenario definitions from UI logic.
- Keep the initial version lightweight and local-first.
- Build for future extension into a backend-powered simulation environment.

## 7. Proposed Next Step

Implement Phase 1 and Phase 2 first: upgrade the content and add scenario-based navigation. Once those are stable, add guest demo mode and persistence. After that, the simulator engine can be introduced as a second layer.
