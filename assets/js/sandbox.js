const STORAGE_KEY = 'sanitrackSandboxState';

const roles = ['manager', 'supervisor', 'cleaner'];
const scenarios = [
  {
    id: 'create-work-order',
    title: 'Create Work Order',
    description: 'Start with a new sanitation work order and define the task scope.',
    role: 'manager',
    task: {
      title: 'Zone A3 Deep Cleaning',
      description: 'Create the initial work order for a deep cleaning task in Zone A3.',
      status: 'pendingAssignment'
    }
  },
  {
    id: 'assign-cleaner',
    title: 'Assign Cleaner',
    description: 'Assign the work order to the supervisor and cleaner so the task can move forward.',
    role: 'manager',
    task: {
      title: 'Zone A3 Deep Cleaning',
      description: 'Assign the work order to the supervisor and cleaner before execution begins.',
      status: 'assigned'
    }
  },
  {
    id: 'supervisor-acknowledgement',
    title: 'Supervisor Acknowledgement',
    description: 'The supervisor reviews the assigned task and accepts responsibility for the handoff.',
    role: 'supervisor',
    task: {
      title: 'Zone A3 Deep Cleaning',
      description: 'The supervisor acknowledges the assigned task and confirms the handoff.',
      status: 'supervisorAccepted'
    }
  },
  {
    id: 'cleaner-execution',
    title: 'Cleaner Execution',
    description: 'The cleaner starts the task, records notes, and uploads evidence.',
    role: 'cleaner',
    task: {
      title: 'Zone A3 Deep Cleaning',
      description: 'The cleaner begins the sanitation work and captures evidence for review.',
      status: 'inProgress'
    }
  },
  {
    id: 'evidence-review',
    title: 'Evidence Review',
    description: 'The cleaner submits evidence and the supervisor reviews it before approval.',
    role: 'supervisor',
    task: {
      title: 'Zone A3 Deep Cleaning',
      description: 'The cleaner has uploaded evidence and the supervisor is reviewing it.',
      status: 'awaitingSupervisorApproval'
    }
  },
  {
    id: 'manager-approval',
    title: 'Manager Approval',
    description: 'The supervisor has approved the task and the manager gives the final sign-off.',
    role: 'manager',
    task: {
      title: 'Zone A3 Deep Cleaning',
      description: 'The supervisor has approved the evidence and the manager is reviewing the final result.',
      status: 'approvedBySupervisor',
      supervisorDecision: 'approved'
    }
  },
  {
    id: 'rework-escalation',
    title: 'Rework Escalation',
    description: 'The supervisor disapproves the evidence and requests rework before the task can be approved.',
    role: 'supervisor',
    task: {
      title: 'Zone A3 Deep Cleaning',
      description: 'The evidence needs rework before supervisor approval can be granted.',
      status: 'disapprovedBySupervisor',
      supervisorDecision: 'disapproved'
    }
  }
];

function getDefaultState() {
  return {
    currentRole: 'manager',
    currentScenario: 'create-work-order',
    hasSeenWelcome: false,
    task: {
      title: 'Zone A3 Deep Cleaning',
      description: 'Perform deep cleaning and hygiene checks in Zone A3 before the next shift.',
      status: 'pendingAssignment',
      assignedBy: 'Manager',
      assignedTo: 'Supervisor',
      cleaner: 'Cleaner A',
      supervisorDecision: null,
      managerDecision: null,
      evidence: '',
      note: '',
      timerStartedAt: null,
      timerSeconds: 0,
      startedAt: null,
      completedAt: null
    },
    activity: ['Manager created the task for Zone A3.']
    , simulatorActive: false,
    simulatorPaused: false,
    simulationCursor: 0,
    simulatorMode: 'standard',
    simulatorDecision: null,
    simulatorMessage: 'Ready to launch'
  };
}

function getScenarioById(id) {
  return scenarios.find((entry) => entry.id === id) || scenarios[0];
}

function getNextScenarioId(currentScenarioId) {
  const currentIndex = scenarios.findIndex((entry) => entry.id === currentScenarioId);
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const nextIndex = (safeIndex + 1) % scenarios.length;
  return scenarios[nextIndex].id;
}

function clearSimulationTimer() {
  if (window.sandboxSimulatorTimer) {
    clearInterval(window.sandboxSimulatorTimer);
    window.sandboxSimulatorTimer = null;
  }
}

function startSimulator() {
  clearSimulationTimer();
  const current = readState();
  saveState({ simulatorActive: true, simulatorPaused: false, simulationCursor: current.simulationCursor || 0, simulatorMessage: 'Simulator running • autoplaying through scenarios' });
  window.sandboxSimulatorTimer = setInterval(() => {
    const activeState = readState();
    if (!activeState.simulatorActive || activeState.simulatorPaused) return;
    if (activeState.currentScenario === 'evidence-review' && activeState.simulatorMode === 'incident' && !activeState.simulatorDecision) {
      saveState({ simulatorMessage: 'Decision required: escalate the issue or continue the standard review.' });
      return;
    }
    const nextScenarioId = getNextScenarioId(activeState.currentScenario);
    const nextCursor = (activeState.simulationCursor || 0) + 1;
    loadScenario(nextScenarioId);
    saveState({ simulationCursor: nextCursor, simulatorActive: true, simulatorPaused: false, simulatorDecision: null });
  }, 3200);
}

function setSimulatorMode(mode) {
  saveState({ simulatorMode: mode, simulatorMessage: mode === 'incident' ? 'Incident response mode active' : 'Standard flow mode active' });
}

function resolveBranch(decision) {
  const state = readState();
  if (state.currentScenario !== 'evidence-review') {
    saveState({ simulatorMessage: 'This decision point is only available during the review stage.' });
    return;
  }
  const nextScenarioId = decision === 'escalate' ? 'rework-escalation' : 'manager-approval';
  saveState({ simulatorDecision: decision, simulatorMessage: decision === 'escalate' ? 'Escalation chosen: the task is routed back for rework.' : 'Standard review chosen: the workflow moves to final approval.' });
  loadScenario(nextScenarioId);
}

function getSimulatorStory(scenarioId, taskStatus) {
  const stories = {
    'create-work-order': 'The manager opens a new sanitation case and defines the task scope for the facility.',
    'assign-cleaner': 'The work order is handed over to the supervisor and cleaner so the shift can proceed.',
    'supervisor-acknowledgement': 'The supervisor accepts the assignment and confirms readiness for the handoff.',
    'cleaner-execution': 'The cleaner begins the task, logs the work, and prepares evidence for review.',
    'evidence-review': 'The supervisor reviews the uploaded evidence and evaluates whether the work is complete.',
    'manager-approval': 'The manager verifies the final handoff and gives the sign-off for closure.',
    'rework-escalation': 'The evidence needs correction, so the workflow routes back for rework before approval.'
  };

  return stories[scenarioId] || `The demo is advancing through the ${taskStatus} stage.`;
}

function getSimulatorProgressPercent(currentScenarioId) {
  const index = scenarios.findIndex((entry) => entry.id === currentScenarioId);
  if (index < 0) return 10;
  return Math.min(100, Math.round(((index + 1) / scenarios.length) * 100));
}

function getSimulatorOutcome(state) {
  if (state.currentScenario === 'rework-escalation') {
    return { text: 'Outcome: incident escalated for rework', className: 'warning' };
  }
  if (state.currentScenario === 'manager-approval' || state.task.status === 'approvedByManager' || state.task.status === 'completed') {
    return { text: 'Outcome: resolution complete', className: 'success' };
  }
  if (state.currentScenario === 'evidence-review' && state.simulatorMode === 'incident') {
    return { text: 'Outcome: review under scrutiny', className: 'warning' };
  }
  return { text: 'Awaiting handoff', className: '' };
}

function getSimulatorOperatorMessage(state) {
  const modeLabel = state.simulatorMode === 'incident' ? 'incident response' : 'standard flow';
  if (state.currentScenario === 'create-work-order') return `Operator: manager opening ${modeLabel} case.`;
  if (state.currentScenario === 'assign-cleaner') return 'Operator: handoff prepared for the shift team.';
  if (state.currentScenario === 'supervisor-acknowledgement') return 'Operator: supervisor confirmed ownership.';
  if (state.currentScenario === 'cleaner-execution') return 'Operator: cleaner has started sanitation work.';
  if (state.currentScenario === 'evidence-review') return 'Operator: review queue is active.';
  if (state.currentScenario === 'manager-approval') return 'Operator: final sign-off in progress.';
  if (state.currentScenario === 'rework-escalation') return 'Operator: rework requested and routed back.';
  return `Operator: monitoring ${modeLabel} handoff...`;
}

function pauseSimulator() {
  saveState({ simulatorPaused: true });
}

function stopSimulator() {
  clearSimulationTimer();
  saveState({ simulatorActive: false, simulatorPaused: false });
}

function resetSimulator() {
  clearSimulationTimer();
  loadScenario('create-work-order');
  saveState({ simulatorActive: false, simulatorPaused: false, simulationCursor: 0 });
}

function getStatusLabel(status) {
  const labels = {
    pendingAssignment: 'Pending assignment',
    assigned: 'Assigned',
    supervisorAccepted: 'Supervisor accepted',
    inProgress: 'In progress',
    awaitingSupervisorApproval: 'Awaiting supervisor approval',
    approvedBySupervisor: 'Approved by supervisor',
    approvedByManager: 'Approved by manager',
    completed: 'Completed',
    disapprovedBySupervisor: 'Disapproved by supervisor',
    disapprovedByManager: 'Disapproved by manager'
  };
  return labels[status] || status;
}

function loadScenario(scenarioId) {
  const scenario = getScenarioById(scenarioId);
  const current = readState();
  const nextTask = {
    ...current.task,
    ...scenario.task,
    title: scenario.task.title || current.task.title,
    description: scenario.task.description || current.task.description,
    status: scenario.task.status || current.task.status,
    supervisorDecision: scenario.task.supervisorDecision ?? current.task.supervisorDecision,
    managerDecision: scenario.task.managerDecision ?? current.task.managerDecision,
    evidence: scenario.task.evidence ?? current.task.evidence,
    note: scenario.task.note ?? current.task.note,
    timerStartedAt: scenario.task.status === 'inProgress' ? (current.task.timerStartedAt || Date.now()) : null,
    startedAt: scenario.task.status === 'inProgress' ? (current.task.startedAt || new Date().toLocaleString()) : null
  };

  saveState({
    currentRole: scenario.role,
    currentScenario: scenario.id,
    hasSeenWelcome: true,
    simulatorActive: current.simulatorActive ?? false,
    simulatorPaused: current.simulatorPaused ?? false,
    simulationCursor: current.simulationCursor ?? 0,
    task: nextTask,
    activity: [`Opened scenario: ${scenario.title}`, ...(current.activity || [])].slice(0, 6)
  });
}

function readState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!stored) return getDefaultState();
    return {
      ...getDefaultState(),
      ...stored,
      task: { ...getDefaultState().task, ...(stored.task || {}) }
    };
  } catch (error) {
    return getDefaultState();
  }
}

function saveState(update) {
  const current = readState();
  const next = {
    ...current,
    ...update,
    task: { ...current.task, ...(update.task || {}) },
    lastSaved: new Date().toLocaleString()
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  renderState(next);
  return next;
}

function addActivity(message) {
  const state = readState();
  const activity = [message, ...(state.activity || [])].slice(0, 6);
  saveState({ activity });
}

function computeProgress(task) {
  switch (task.status) {
    case 'pendingAssignment': return 10;
    case 'assigned': return 25;
    case 'supervisorAccepted': return 40;
    case 'inProgress': return 60;
    case 'awaitingSupervisorApproval': return 80;
    case 'approvedBySupervisor':
    case 'approvedByManager':
    case 'completed': return 100;
    case 'disapprovedBySupervisor':
    case 'disapprovedByManager': return 50;
    default: return 10;
  }
}

function formatTimer(task) {
  if (!task.timerStartedAt) return 'Not started';
  const elapsed = Math.floor((Date.now() - task.timerStartedAt) / 1000);
  const m = String(Math.floor(elapsed / 60)).padStart(2, '0');
  const s = String(elapsed % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function renderRoleSwitcher(state) {
  const container = document.getElementById('roleSwitcher');
  if (!container) return;
  container.innerHTML = '';
  roles.forEach((role) => {
    const button = document.createElement('button');
    button.className = `role-btn${state.currentRole === role ? ' active' : ''}`;
    button.textContent = role.charAt(0).toUpperCase() + role.slice(1);
    button.addEventListener('click', () => saveState({ currentRole: role }));
    container.appendChild(button);
  });
}

function renderScenarioList(state) {
  const container = document.getElementById('scenarioList');
  if (!container) return;

  container.innerHTML = '';
  scenarios.forEach((scenario) => {
    const button = document.createElement('button');
    button.className = `scenario-btn${state.currentScenario === scenario.id ? ' active' : ''}`;
    button.textContent = scenario.title;
    button.addEventListener('click', () => loadScenario(scenario.id));
    container.appendChild(button);
  });
}

function renderTimeline(task) {
  const container = document.getElementById('timeline');
  if (!container) return;

  const steps = [
    { label: 'Manager assigns task', done: task.status !== 'pendingAssignment' },
    { label: 'Supervisor acknowledges task', done: ['supervisorAccepted', 'inProgress', 'awaitingSupervisorApproval', 'approvedBySupervisor', 'approvedByManager', 'completed', 'disapprovedBySupervisor', 'disapprovedByManager'].includes(task.status) },
    { label: 'Cleaner starts task', done: ['inProgress', 'awaitingSupervisorApproval', 'approvedBySupervisor', 'approvedByManager', 'completed', 'disapprovedBySupervisor', 'disapprovedByManager'].includes(task.status) },
    { label: 'Evidence uploaded', done: ['awaitingSupervisorApproval', 'approvedBySupervisor', 'approvedByManager', 'completed', 'disapprovedBySupervisor', 'disapprovedByManager'].includes(task.status) },
    { label: 'Supervisor decision', done: ['approvedBySupervisor', 'approvedByManager', 'completed', 'disapprovedBySupervisor', 'disapprovedByManager'].includes(task.status) },
    { label: 'Manager final decision', done: ['approvedByManager', 'completed', 'disapprovedByManager'].includes(task.status) }
  ];

  container.innerHTML = '';
  steps.forEach((step) => {
    const item = document.createElement('div');
    item.className = `timeline-item${step.done ? ' done' : ''}`;
    item.innerHTML = `<div class="dot"></div><div><strong>${step.label}</strong></div>`;
    container.appendChild(item);
  });
}

function renderRoleActions(state) {
  const container = document.getElementById('roleActions');
  const roleLabel = document.getElementById('roleLabel');
  if (!container) return;

  const task = state.task;
  const role = state.currentRole;

  if (roleLabel) roleLabel.textContent = `${role.charAt(0).toUpperCase() + role.slice(1)} controls`;
  container.innerHTML = '';

  if (role === 'manager') {
    if (task.status === 'pendingAssignment') {
      const button = document.createElement('button');
      button.className = 'primary';
      button.textContent = 'Assign to Supervisor & Cleaner';
      button.addEventListener('click', () => {
        saveState({ task: { status: 'assigned', assignedBy: 'Manager', assignedTo: 'Supervisor', cleaner: 'Cleaner A' } });
        addActivity('Manager assigned the task to the supervisor and cleaner.');
      });
      container.appendChild(button);
    }

    if (task.supervisorDecision === 'approved' || task.supervisorDecision === 'disapproved') {
      const approve = document.createElement('button');
      approve.textContent = 'Approve Final Completion';
      approve.className = 'primary';
      approve.addEventListener('click', () => {
        saveState({ task: { status: 'completed', managerDecision: 'approved', completedAt: new Date().toLocaleString() } });
        addActivity('Manager approved the completed task.');
      });
      container.appendChild(approve);

      const disapprove = document.createElement('button');
      disapprove.textContent = 'Disapprove Final Completion';
      disapprove.addEventListener('click', () => {
        saveState({ task: { status: 'disapprovedByManager', managerDecision: 'disapproved' } });
        addActivity('Manager disapproved the completed task.');
      });
      container.appendChild(disapprove);
    }
  }

  if (role === 'supervisor') {
    if (task.status === 'assigned') {
      const button = document.createElement('button');
      button.className = 'primary';
      button.textContent = 'Acknowledge Task';
      button.addEventListener('click', () => {
        saveState({ task: { status: 'supervisorAccepted' } });
        addActivity('Supervisor acknowledged the task.');
      });
      container.appendChild(button);
    }

    if (task.status === 'awaitingSupervisorApproval') {
      const approve = document.createElement('button');
      approve.className = 'primary';
      approve.textContent = 'Approve Completion';
      approve.addEventListener('click', () => {
        saveState({ task: { status: 'approvedBySupervisor', supervisorDecision: 'approved' } });
        addActivity('Supervisor approved the cleaner’s completion.');
      });
      container.appendChild(approve);

      const disapprove = document.createElement('button');
      disapprove.textContent = 'Disapprove Completion';
      disapprove.addEventListener('click', () => {
        saveState({ task: { status: 'disapprovedBySupervisor', supervisorDecision: 'disapproved' } });
        addActivity('Supervisor disapproved the cleaner’s completion.');
      });
      container.appendChild(disapprove);
    }
  }

  if (role === 'cleaner') {
    if (task.status === 'assigned' || task.status === 'supervisorAccepted' || task.status === 'pendingAssignment') {
      const button = document.createElement('button');
      button.className = 'primary';
      button.textContent = 'Start Task';
      button.addEventListener('click', () => {
        saveState({ task: { status: 'inProgress', timerStartedAt: Date.now(), startedAt: new Date().toLocaleString() } });
        addActivity('Cleaner started the assigned task.');
      });
      container.appendChild(button);
    }

    if (task.status === 'inProgress') {
      const note = document.createElement('textarea');
      note.placeholder = 'Add a short completion note...';
      note.value = task.note || '';
      note.addEventListener('input', (event) => {
        const state = readState();
        saveState({ task: { note: event.target.value } });
      });
      container.appendChild(note);

      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*,.pdf,.doc,.docx';
      fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const state = readState();
        saveState({ task: { evidence: file ? file.name : state.task.evidence } });
      });
      container.appendChild(fileInput);

      const submit = document.createElement('button');
      submit.textContent = 'Upload Evidence';
      submit.className = 'primary';
      submit.addEventListener('click', () => {
        const state = readState();
        const noteValue = document.querySelector('.role-actions textarea')?.value || state.task.note || '';
        saveState({
          task: {
            status: 'awaitingSupervisorApproval',
            note: noteValue,
            completedAt: new Date().toLocaleString()
          }
        });
        addActivity('Cleaner uploaded evidence and completed the task.');
      });
      container.appendChild(submit);
    }
  }
}

function getNextAction(task, role) {
  if (task.status === 'pendingAssignment') return 'Assign the task to the supervisor and cleaner.';
  if (task.status === 'assigned') {
    if (role === 'supervisor') return 'Acknowledge the handoff and take ownership.';
    if (role === 'cleaner') return 'Start the task and begin the cleaning work.';
    return 'Prepare the task handoff for the next role.';
  }
  if (task.status === 'supervisorAccepted') return 'The cleaner can now start the task and log evidence.';
  if (task.status === 'inProgress') return 'Upload evidence and submit the task for review.';
  if (task.status === 'awaitingSupervisorApproval') return 'Review the evidence and approve or request rework.';
  if (task.status === 'approvedBySupervisor') return 'The manager can give the final approval.';
  if (task.status === 'disapprovedBySupervisor') return 'Fix the evidence and resubmit for review.';
  if (task.status === 'approvedByManager' || task.status === 'completed') return 'The workflow is complete and ready for handoff.';
  return 'Choose a role and continue the workflow.';
}

function getRecommendedNextRole(task, role) {
  if (task.status === 'pendingAssignment') return 'Manager';
  if (task.status === 'assigned') return role === 'supervisor' ? 'Supervisor' : role === 'cleaner' ? 'Cleaner' : 'Supervisor';
  if (task.status === 'supervisorAccepted') return 'Cleaner';
  if (task.status === 'inProgress') return 'Supervisor';
  if (task.status === 'awaitingSupervisorApproval') return 'Supervisor';
  if (task.status === 'approvedBySupervisor') return 'Manager';
  if (task.status === 'disapprovedBySupervisor') return 'Cleaner';
  if (task.status === 'approvedByManager' || task.status === 'completed') return 'Complete';
  return 'Manager';
}

function getMilestoneText(task) {
  const milestoneMap = {
    pendingAssignment: 1,
    assigned: 2,
    supervisorAccepted: 3,
    inProgress: 4,
    awaitingSupervisorApproval: 5,
    approvedBySupervisor: 6,
    approvedByManager: 7,
    completed: 8,
    disapprovedBySupervisor: 4,
    disapprovedByManager: 6
  };
  const milestone = milestoneMap[task.status] || 1;
  return `Milestone ${milestone} of 8`;
}

function renderProgressSummary(state) {
  const stageEl = document.getElementById('summaryStage');
  const roleEl = document.getElementById('summaryRole');
  const nextEl = document.getElementById('summaryNext');
  const progressEl = document.getElementById('summaryProgressChip');
  const roleHintEl = document.getElementById('summaryRoleHint');
  const streakEl = document.getElementById('summaryStreakChip');
  const updatedEl = document.getElementById('summaryUpdatedChip');

  if (!stageEl && !roleEl && !nextEl && !progressEl && !roleHintEl && !streakEl && !updatedEl) return;

  const task = state.task;
  const scenario = getScenarioById(state.currentScenario);
  const progress = computeProgress(task);
  const recommendedRole = getRecommendedNextRole(task, state.currentRole);

  if (stageEl) stageEl.textContent = scenario.title;
  if (roleEl) roleEl.textContent = `${state.currentRole.charAt(0).toUpperCase() + state.currentRole.slice(1)}`;
  if (nextEl) nextEl.textContent = getNextAction(task, state.currentRole);
  if (progressEl) progressEl.textContent = `Progress ${progress}%`;
  if (roleHintEl) roleHintEl.textContent = recommendedRole === 'Complete' ? 'Flow complete' : `Next role: ${recommendedRole}`;
  if (streakEl) streakEl.textContent = getMilestoneText(task);
  if (updatedEl) updatedEl.textContent = state.lastSaved ? `Updated ${state.lastSaved}` : 'Updated just now';
}

function renderEvidence(state) {
  const container = document.getElementById('evidenceBox');
  const label = document.getElementById('evidenceLabel');
  if (!container) return;

  const task = state.task;
  if (label) {
    if (task.status === 'awaitingSupervisorApproval') label.textContent = 'Awaiting supervisor review';
    else if (task.status === 'approvedBySupervisor' || task.status === 'approvedByManager' || task.status === 'completed') label.textContent = 'Completed and reviewed';
    else if (task.status === 'disapprovedBySupervisor' || task.status === 'disapprovedByManager') label.textContent = 'Needs rework';
    else label.textContent = 'Waiting for evidence';
  }

  container.innerHTML = '';
  const note = document.createElement('div');
  note.className = 'note';
  note.innerHTML = `<strong>Task:</strong> ${task.title}<br><strong>Status:</strong> ${task.status}<br><strong>Evidence:</strong> ${task.evidence || 'No file uploaded yet'}<br><strong>Note:</strong> ${task.note || 'No note yet'}`;
  container.appendChild(note);

  if (task.supervisorDecision) {
    const review = document.createElement('div');
    review.className = 'note';
    review.innerHTML = `<strong>Supervisor decision:</strong> ${task.supervisorDecision === 'approved' ? 'Approved' : 'Disapproved'}`;
    container.appendChild(review);
  }

  if (task.managerDecision) {
    const review = document.createElement('div');
    review.className = 'note';
    review.innerHTML = `<strong>Manager decision:</strong> ${task.managerDecision === 'approved' ? 'Approved' : 'Disapproved'}`;
    container.appendChild(review);
  }
}

function renderGuestBanner(state) {
  const banner = document.getElementById('guestBanner');
  if (!banner) return;

  const title = document.getElementById('guestBannerTitle');
  const text = document.getElementById('guestBannerText');
  const resumeBtn = document.getElementById('guestResumeBtn');

  const hasSavedState = Boolean(state.lastSaved) || (state.activity || []).length > 0;
  if (state.hasSeenWelcome) {
    banner.hidden = true;
    return;
  }

  banner.hidden = false;
  if (title) title.textContent = hasSavedState ? 'Resume your last guest walkthrough' : 'Welcome to the SaniTrack guest experience';
  if (text) text.textContent = hasSavedState ? 'You already have an in-progress demo. Resume it or start from the beginning.' : 'Start a fresh walkthrough and explore the full sanitation workflow.';
  if (resumeBtn) resumeBtn.style.display = hasSavedState ? 'inline-block' : 'none';
}

function renderState(state) {
  const progressValue = document.getElementById('progressValue');
  const taskTitle = document.getElementById('taskTitle');
  const taskStatus = document.getElementById('taskStatus');
  const taskDetails = document.getElementById('taskDetails');
  const workflowTitle = document.getElementById('workflowTitle');
  const workflowDescription = document.getElementById('workflowDescription');
  const workflowBadge = document.getElementById('workflowBadge');
  const activityFeed = document.getElementById('activityFeed');
  const liveClock = document.getElementById('liveClock');
  const simulatorStatus = document.getElementById('simulatorStatus');
  const simulatorStory = document.getElementById('simulatorStory');
  const simulatorProgressBar = document.getElementById('simulatorProgressBar');
  const simulatorOperator = document.getElementById('simulatorOperator');
  const simulatorOutcome = document.getElementById('simulatorOutcome');
  const simulatorDecisionPanel = document.getElementById('simulatorDecisionPanel');
  const simulatorDecisionCopy = document.getElementById('simulatorDecisionCopy');

  const task = state.task;
  const progress = computeProgress(task);
  const activeScenario = getScenarioById(state.currentScenario);

  if (progressValue) progressValue.textContent = `${progress}%`;
  if (taskTitle) taskTitle.textContent = task.title;
  if (taskStatus) taskStatus.textContent = getStatusLabel(task.status);
  if (taskDetails) {
    const timerText = task.status === 'inProgress' ? ` Running timer: ${formatTimer(task)}.` : '';
    taskDetails.textContent = `${task.description} ${timerText} Cleaner: ${task.cleaner}. Supervisor decision: ${task.supervisorDecision || 'Pending'}.`;
  }
  if (workflowTitle) workflowTitle.textContent = activeScenario.title;
  if (workflowDescription) workflowDescription.textContent = activeScenario.description;
  if (workflowBadge) workflowBadge.textContent = `${state.currentRole.charAt(0).toUpperCase() + state.currentRole.slice(1)} · ${activeScenario.title}`;
  if (activityFeed) {
    activityFeed.innerHTML = '';
    (state.activity || []).forEach((entry) => {
      const item = document.createElement('li');
      item.textContent = entry;
      activityFeed.appendChild(item);
    });
  }
  if (liveClock) liveClock.textContent = `🕒 ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  if (simulatorStatus) {
    if (state.simulatorActive) {
      simulatorStatus.textContent = state.simulatorPaused ? 'Simulator paused' : (state.simulatorMessage || 'Simulator running • autoplaying through scenarios');
    } else {
      simulatorStatus.textContent = state.simulatorMessage || 'Ready to launch';
    }
  }
  if (simulatorStory) {
    simulatorStory.textContent = getSimulatorStory(state.currentScenario, state.task.status);
  }
  if (simulatorProgressBar) {
    simulatorProgressBar.style.width = `${getSimulatorProgressPercent(state.currentScenario)}%`;
  }
  if (simulatorOperator) {
    simulatorOperator.textContent = getSimulatorOperatorMessage(state);
  }
  if (simulatorOutcome) {
    const outcome = getSimulatorOutcome(state);
    simulatorOutcome.textContent = outcome.text;
    simulatorOutcome.className = `simulator-outcome${outcome.className ? ` ${outcome.className}` : ''}`;
  }
  if (simulatorDecisionPanel) {
    const showDecision = state.simulatorMode === 'incident' && state.currentScenario === 'evidence-review' && state.simulatorActive;
    simulatorDecisionPanel.style.display = showDecision ? 'block' : 'none';
  }
  if (simulatorDecisionCopy) {
    simulatorDecisionCopy.textContent = state.simulatorMode === 'incident' && state.currentScenario === 'evidence-review'
      ? 'The review has uncovered a concern. Choose whether to escalate the issue back for rework or continue to final approval.'
      : 'Choose how the team should respond during review.';
  }

  renderRoleSwitcher(state);
  renderScenarioList(state);
  renderGuestBanner(state);
  renderProgressSummary(state);
  renderTimeline(task);
  renderRoleActions(state);
  renderEvidence(state);
}

function resumeSession() {
  const state = readState();
  saveState({ hasSeenWelcome: true, currentRole: state.currentRole || 'manager' });
}

function resetSession() {
  clearSimulationTimer();
  localStorage.removeItem(STORAGE_KEY);
  const fresh = getDefaultState();
  saveState({ currentRole: 'manager', currentScenario: 'create-work-order', hasSeenWelcome: true, task: fresh.task, activity: fresh.activity, simulatorActive: false, simulatorPaused: false, simulationCursor: 0 });
}

window.addEventListener('DOMContentLoaded', () => {
  const state = readState();
  renderState(state);

  setInterval(() => {
    const current = readState();
    renderState(current);
  }, 1000);

  document.getElementById('saveSessionBtn')?.remove();
  document.getElementById('resumeBtn')?.remove();
  document.getElementById('restartBtn')?.remove();

  document.getElementById('guestResumeBtn')?.addEventListener('click', () => {
    resumeSession();
  });

  document.getElementById('guestStartBtn')?.addEventListener('click', () => {
    resetSession();
  });

  document.getElementById('startSimulatorBtn')?.addEventListener('click', () => {
    startSimulator();
  });

  document.getElementById('pauseSimulatorBtn')?.addEventListener('click', () => {
    pauseSimulator();
  });

  document.getElementById('resetSimulatorBtn')?.addEventListener('click', () => {
    resetSimulator();
  });

  document.querySelectorAll('.simulator-mode-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.simulator-mode-btn').forEach((entry) => entry.classList.remove('active'));
      button.classList.add('active');
      setSimulatorMode(button.dataset.mode || 'standard');
    });
  });

  document.getElementById('branchEscalateBtn')?.addEventListener('click', () => {
    resolveBranch('escalate');
  });

  document.getElementById('branchContinueBtn')?.addEventListener('click', () => {
    resolveBranch('continue');
  });

  window.addEventListener('beforeunload', () => {
    saveState({});
  });

  window.resetSandbox = resetSession;
});