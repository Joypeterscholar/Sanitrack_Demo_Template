# SaniTrack Interactive Demo & Smart Facility Simulator

> An interactive product demonstration and browser-based Smart Facility Simulator for SaniTrack.

---

##  Overview

The **SaniTrack Smart Facility Simulator** transforms SaniTrack into a living, autonomous facility environment for demonstrations, onboarding, testing, and training.

Rather than relying on static sample data, the simulator continuously generates realistic facility operations including:

* Automated task creation
* Workforce assignment
* Inventory consumption
* Incident generation
* Inspections
* KPI updates
* Notifications
* Reports
* Activity feeds

The result is a self-contained demonstration environment that behaves like a real customer deployment while remaining isolated from production systems.

---

# Key Features

* 🎯 Interactive Storylane walkthrough
* 🤖 Smart Autopilot simulation
* 👨‍💼 AI Manager, Supervisor & Cleaner workflows
* 📋 Automated work order lifecycle
* 📦 Dynamic inventory management
* ⚠️ Random incident generation
* 📊 Real-time KPI dashboards
* 🔔 Notification Center
* 📰 Live Activity Feed
* 📈 Analytics & Reporting
* 🏢 Multi-industry simulation scenarios
* 💾 Session persistence and resume support

---

# Architecture

The simulator is built as a modular JavaScript application with an event-driven architecture.

```text
User
   │
   ▼
Storylane Interactive Demo
   │
   ▼
Simulation Controller
   │
   ▼
Scheduler
   │
   ▼
AI Decision Engine
   │
   ▼
Task Engine
   │
   ▼
Workflow Engine
   │
   ▼
Inventory Engine
   │
   ▼
Incident Engine
   │
   ▼
Analytics Engine
   │
   ▼
Dashboard
   │
   ▼
Reports & Notifications
```

The Event Bus coordinates communication between modules while the Simulation Store provides a single source of truth for operational data.

---

# Project Structure

```text
Sanitrack_Demo_Template/

├── assets/
├── css/
├── docs/
├── images/
├── js/
│   ├── core/
│   ├── engines/
│   ├── stores/
│   ├── services/
│   ├── ui/
│   └── scenarios/
├── .github/
├── index.html
└── README.md
```

---

# Core Simulation Modules

* Simulation Controller
* Scheduler
* Event Bus
* AI Decision Engine
* Task Engine
* Workflow Engine
* Workforce Engine
* Inventory Engine
* Incident Engine
* Inspection Engine
* Analytics Engine
* Dashboard Engine
* Reporting Engine

Each module has a clearly defined responsibility and communicates through the Event Bus rather than directly with other modules.

---

# Simulation Modes

The simulator supports multiple execution modes:

* Manual Mode
* Autopilot Mode
* Accelerated Mode
* Debug Mode

Autopilot continuously evaluates the facility, creates tasks, assigns staff, generates incidents, updates inventory, recalculates KPIs, refreshes dashboards, and produces reports without user intervention.

---

# Technology Stack

| Layer           | Technology               |
| --------------- | ------------------------ |
| Frontend        | HTML5                    |
| Styling         | CSS3                     |
| Language        | JavaScript (ES6 Modules) |
| Charts          | Chart.js                 |
| Configuration   | JSON                     |
| Version Control | Git                      |
| CI/CD           | GitHub Actions           |
| Hosting         | Vercel                   |
| Monitoring      | Sentry                   |
| Uptime          | UptimeRobot              |

The architecture is designed to evolve toward TypeScript, cloud services, REST APIs, and Digital Twin capabilities while remaining browser-first.

---

# Development Roadmap

* ✅ Interactive Demo
* ✅ Storylane Integration
* ✅ Guided Walkthrough
* ✅ Scenario Library
* 🚧 Smart Autopilot
* 🚧 AI Decision Engine
* 🚧 KPI & Reporting Engine
* 🚧 Multi-Facility Support
* 🔮 Digital Twin
* 🔮 Enterprise Deployment

The long-term roadmap progresses from a demonstration platform to a reusable enterprise simulation environment.

---

# Documentation

Detailed documentation is maintained in the `docs/` directory and includes:

* Product Requirements
* System Architecture
* Simulation Engine
* Workflow Engine
* Smart Autopilot
* AI Decision Engine
* Data Model
* Technology Stack
* Deployment
* Monitoring
* Testing
* Roadmap

---

# Deployment

The project is intended to be deployed using:

* GitHub Actions (CI/CD)
* Vercel (Hosting)
* Sentry (Error Monitoring)
* UptimeRobot (Availability Monitoring)

---

# Project Goal

The long-term objective is to evolve the simulator into a reusable platform capable of supporting:

* Interactive product demonstrations
* Customer onboarding
* Staff training
* Internal testing
* Digital Twin simulations
* Future enterprise deployments

---

# License

This project is intended for the SaniTrack Interactive Demo and Smart Facility Simulator initiative.
