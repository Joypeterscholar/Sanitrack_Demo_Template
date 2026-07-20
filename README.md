Executive Overview

Chapter 1 - Executive Summary
1.1 Introduction
SaniTrack is a digital facility management platform designed to help organizations plan, assign, execute, monitor, and report on cleaning and sanitation operations across multiple facilities. It provides visibility into workforce activities, inventory usage, inspections, incidents, compliance, and operational performance through a centralized dashboard.
While the platform offers comprehensive functionality, demonstrating its value to prospective customers currently depends on manually prepared demonstrations and static sample data. This approach does not accurately reflect the dynamic nature of real-world facility operations and can make it difficult for potential customers to appreciate the platform's full capabilities.
The SaniTrack Smart Facility Simulator is proposed as an intelligent simulation environment that transforms the application into a continuously operating virtual facility. Rather than relying on manual interactions, the simulator autonomously generates realistic operational events, including task creation, workforce assignments, inventory consumption, inspections, incidents, notifications, reports, and KPI updates. This creates a living demonstration environment that behaves like an active customer deployment while remaining isolated from production data.
The simulator is intended to support product demonstrations, customer onboarding, training, internal testing, and feature validation. It allows stakeholders to experience the platform under realistic operating conditions without requiring actual customer data or manual intervention.
1.2 Purpose
The purpose of the Smart Facility Simulator is to create a safe, repeatable, and realistic operational environment that demonstrates the full capabilities of SaniTrack.
The simulator is designed to:
Automatically generate realistic facility operations.
Demonstrate every major SaniTrack module in action.
Simulate interactions between managers, supervisors, and cleaning staff.
Produce realistic operational data for dashboards, reports, and analytics.
Support guided demonstrations and self-service customer exploration.
Provide a repeatable environment for product testing and training.
Operate independently of production customer data.
Unlike scripted demonstrations, the simulator continuously evolves during execution, allowing every demonstration session to present a unique operational scenario while maintaining realistic business rules.
1.3 Business Value
The Smart Facility Simulator provides measurable value across sales, implementation, training, and product development.
For the Sales Team, it reduces the need for manually prepared demonstrations and enables prospective customers to experience a realistic operating environment. Sales representatives can focus on explaining business outcomes rather than creating sample records before each demonstration.
For Prospective Customers, the simulator provides confidence that the platform can effectively manage real-world facility operations. Customers observe tasks being created, staff responding to incidents, inventory levels changing, reports being generated, and dashboards updating automatically, creating a more engaging and credible product experience.
For Product and Engineering Teams, the simulator serves as a controlled environment for validating new features, testing workflows, reproducing operational scenarios, and measuring system behavior without relying on production environments.
For Training and Onboarding, the simulator provides new users with an interactive environment in which they can safely explore the platform, observe realistic workflows, and understand operational processes without affecting live business data.
1.4 Expected Outcome
Upon completion, the Smart Facility Simulator will function as a fully autonomous digital facility capable of continuously generating realistic operational activities.
Users entering the simulator will experience:
A continuously operating virtual facility.
Autonomous workforce behavior.
Dynamic task creation and completion.
Real-time inventory consumption.
Random operational incidents.
Automated inspections and compliance activities.
Continuously updating dashboards and KPI metrics.
Live activity feeds and operational notifications.
Automatically generated reports.
The resulting experience will closely resemble an active customer deployment while remaining entirely self-contained and resettable.
1.5 Document Purpose
This document defines the business objectives, functional requirements, technical architecture, implementation strategy, and technology recommendations for the SaniTrack Smart Facility Simulator.
It serves as the primary reference for product stakeholders, solution architects, designers, developers, testers, and implementation teams throughout the design and development lifecycle.
 
Chapter 2 — Background & Business Problem
2.0 Background
SaniTrack is an intelligent facility management platform designed to digitize and streamline sanitation operations across commercial, healthcare, hospitality, educational, industrial, and public-sector facilities.
The platform enables organizations to manage the complete operational lifecycle of facility cleaning activities, including workforce coordination, task scheduling, inventory management, inspections, compliance monitoring, incident management, analytics, and reporting. By centralizing these operational processes within a single platform, SaniTrack improves visibility, accountability, regulatory compliance, and operational efficiency.
Although the platform provides a comprehensive set of capabilities, effectively demonstrating these capabilities to prospective customers remains a significant challenge. Most software demonstrations rely on manually prepared sample data and scripted user interactions, which only showcase isolated features rather than the continuous operational behavior of a live facility.
As a result, customers often observe the interface but fail to experience the platform operating under realistic business conditions.
The Smart Facility Simulator is proposed to address this limitation by introducing an autonomous simulation environment that continuously generates realistic operational activities, enabling the platform to behave as though it is actively managing one or more live facilities.
2.1 Current Demonstration Challenges
The current demonstration process depends heavily on manual preparation before each customer presentation.
Typical activities include:
Creating sample facilities.
Creating users and assigning roles.
Populating inventory records.
Generating cleaning schedules.
Preparing inspection data.
Creating reports.
Explaining workflows verbally.
Navigating multiple screens to illustrate business processes.
While this approach demonstrates individual features, it does not effectively communicate how the platform behaves during day-to-day operations.
Several limitations arise from this process:
Manual Data Preparation
Each demonstration requires time to create representative operational data before the session begins.
Static Demonstrations
Customer demonstrations typically show historical or manually entered information rather than continuously evolving operational data.
Limited Workflow Visibility
Many operational processes occur behind the scenes and therefore cannot easily be demonstrated during a presentation.
Examples include:
Task assignment logic
Inventory consumption
Escalation workflows
Supervisor approvals
Compliance monitoring
Automated reporting
Reduced Customer Engagement
Customers primarily observe user interfaces rather than interacting with a realistic operational environment.
This limits their ability to appreciate the platform's automation capabilities and operational intelligence.
Inconsistent Demonstrations
Because demonstration data is manually prepared, the quality and consistency of customer demonstrations may vary between sessions and presenters.
2.2 Business Problem Statement
The primary business problem is the absence of an autonomous demonstration environment capable of simulating realistic facility operations.
Without such an environment, prospective customers must rely on scripted walkthroughs that illustrate individual features without demonstrating how those features interact over time.
This creates several business risks:
Reduced customer confidence.
Longer demonstration sessions.
Increased preparation effort.
Lower product differentiation.
Limited self-service demonstrations.
Reduced training effectiveness.
Increased dependence on sales personnel.
Ultimately, the current approach does not fully communicate the operational intelligence that differentiates SaniTrack from traditional facility management software.
2.3 Opportunity
The proposed Smart Facility Simulator transforms SaniTrack from a passive software demonstration into an active digital environment capable of continuously simulating real facility operations.
Rather than asking customers to imagine how the platform behaves during daily operations, the simulator allows them to observe those operations directly.
The simulator continuously performs activities such as:
Creating work orders.
Assigning staff.
Dispatching supervisors.
Updating inventory.
Conducting inspections.
Recording incidents.
Generating reports.
Updating dashboards.
Producing notifications.
Calculating compliance metrics.
This creates a realistic operational experience that significantly enhances product demonstrations, customer onboarding, and internal training.
2.4 Why a Simulator Instead of Demo Data?
Traditional demonstration environments rely on static datasets.
For example:
Task #102
Status: Completed
 
Inventory:
Soap: 50
 
Compliance:
97%
Although these values populate the interface, they do not explain how they were generated or how they change over time.
The proposed simulator replaces static records with autonomous operational behavior.
For example:
09:05
 
Manager Michael creates a cleaning request.
 
↓
 
09:06
 
Supervisor Sarah reviews the request.
 
↓
 
09:07
 
Cleaner James accepts the assignment.
 
↓
 
09:18
 
Inventory decreases automatically.
 
↓
 
09:24
 
Inspection completed.
 
↓
 
09:26
 
Compliance score updated.
 
↓
 
09:27
 
Daily report regenerated.
This continuous chain of events provides context for every dashboard, chart, report, and KPI displayed within the application.
2.5 Strategic Benefits
Implementation of the Smart Facility Simulator is expected to deliver measurable value across multiple business functions.
Sales Enablement
Reduced demonstration preparation time.
More engaging product demonstrations.
Improved customer understanding.
Increased conversion potential.
Customer Success
Interactive onboarding environment.
Self-guided product exploration.
Faster feature adoption.
Product Engineering
Continuous workflow validation.
Easier feature testing.
Automated scenario generation.
Regression testing support.
Training
Safe operational sandbox.
Repeatable learning scenarios.
No production data required.
Marketing
Interactive product showcases.
Demonstration videos.
Trade-show presentations.
Embedded website demonstrations.
2.6 Vision Statement
The long-term vision of the Smart Facility Simulator is to establish SaniTrack as a self-demonstrating intelligent operations platform.
Rather than presenting isolated software features, the platform will continuously operate as a living digital facility, allowing prospective customers, partners, and internal teams to observe realistic operational workflows in real time.
The simulator should ultimately evolve into a digital twin capable of representing multiple industries, facility types, workforce configurations, and operational scenarios while maintaining complete separation from production customer environments.
 
Chapter 3 — Vision, Objectives, Scope & Success Criteria
3.0 Vision Statement
The SaniTrack Smart Facility Simulator aims to transform SaniTrack from a platform that demonstrates features into a platform that demonstrates operations.
Rather than requiring users to manually populate records or execute predefined workflows, the simulator will continuously emulate the daily activities of a live facility. It will generate realistic operational events, coordinate virtual personnel, consume inventory, respond to incidents, perform inspections, update analytics, and produce reports without manual intervention.
The simulator should provide an experience that closely resembles an active customer deployment while remaining fully isolated from production data and capable of being reset to a known state at any time.
The long-term vision is to establish the simulator as a digital twin of real-world facility operations that can support product demonstrations, customer onboarding, internal training, workflow validation, and future AI-assisted operational decision-making.
3.1 Product Vision
The simulator shall operate as an intelligent automation layer within the SaniTrack ecosystem.
Its primary role is not to replace users, but to generate realistic operational activity that continuously exercises the platform's features.
From the user's perspective, the simulator should create the impression that managers, supervisors, and cleaning personnel are actively working within the system. Dashboards should evolve naturally, inventory should change over time, incidents should emerge unexpectedly, and reports should reflect the current operational state.
The platform should appear alive rather than staged.
3.2 Product Objectives
The simulator is intended to achieve the following primary objectives.
Objective 1 — Demonstrate Complete Business Workflows
The simulator shall demonstrate the complete lifecycle of facility operations, including:
Task creation
Task assignment
Workforce coordination
Cleaning execution
Inspection
Compliance evaluation
Reporting
Analytics
The objective is to show not only individual features but also the relationships between them.
Objective 2 — Generate Realistic Operational Activity
The simulator shall autonomously generate realistic operational data based on configurable business rules.
Examples include:
Routine cleaning schedules
Emergency cleaning requests
Equipment failures
Inventory consumption
Compliance inspections
Supervisor approvals
Escalations
Notifications
Every simulation cycle should contribute meaningful operational events.
Objective 3 — Operate Without Manual Intervention
Once activated, the simulator shall continue operating until paused or reset.
Users should not be required to manually create tasks or update records to maintain system activity.
The simulator shall function as a continuously operating virtual facility.
Objective 4 — Support Multiple Industry Scenarios
The simulator shall support multiple facility types through configurable scenarios.
Examples include:
Hospitals
Hotels
Schools
Airports
Shopping malls
Manufacturing plants
Warehouses
Office buildings
Each scenario shall define its own workforce, inventory, cleaning schedules, risk profiles, compliance requirements, and operational characteristics.
Objective 5 — Demonstrate Every SaniTrack Module
Every major feature within SaniTrack should become observable through simulation.
Examples include:
Dashboard
Tasks
Inventory
Workforce
Notifications
Reports
Analytics
Inspections
KPIs
Activity Feed
The simulator should continuously produce activity across these modules.
Objective 6 — Create Repeatable Demonstrations
Every simulation session should produce realistic but repeatable operational behavior.
Sales teams should be able to demonstrate the same scenario multiple times while maintaining controlled variability through configurable simulation parameters.
3.3 Business Objectives
The simulator supports several strategic business goals.
Sales Enablement
Reduce the effort required to prepare demonstrations while increasing customer engagement.
Product Adoption
Accelerate customer understanding of platform capabilities through interactive exploration.
Customer Confidence
Provide a realistic representation of operational behavior that reinforces trust in the platform.
Engineering Productivity
Provide a controlled environment for validating workflows and testing new functionality.
Training
Support employee onboarding and operational training without affecting production environments.
3.4 Technical Objectives
From a technical perspective, the simulator shall satisfy the following objectives.
Modular Architecture
The simulator shall consist of independent modules with clearly defined responsibilities.
Examples include:
Task Engine
Workflow Engine
Workforce Engine
Inventory Engine
Incident Engine
Analytics Engine
Report Engine
Each module should operate independently while communicating through a shared simulation state.
Configurable Behaviour
Simulation behaviour shall be configurable without requiring code modifications.
Configuration parameters may include:
Number of employees
Facility type
Inventory levels
Incident frequency
Task frequency
Shift duration
Simulation speed
Scalable Design
The architecture shall support future expansion without major structural changes.
Future enhancements may include:
Multiple simultaneous facilities
AI-powered operational assistants
Predictive maintenance
IoT sensor simulation
External API integration
Deterministic Reset
The simulator shall support a complete reset to a predefined baseline state.
This ensures that every demonstration begins from a known operational condition.
3.5 Project Scope
The initial release of the simulator includes the following capabilities.
Included
Autonomous task generation
Workforce simulation
Manager and supervisor workflows
Inventory consumption
Incident generation
KPI calculation
Dashboard updates
Notifications
Activity feed
Reports
Configurable scenarios
Simulation controls (Start, Pause, Resume, Reset)
Excluded
The following capabilities are outside the scope of the initial release.
Integration with live customer databases
AI-generated natural language conversations
IoT device integration
Real-time GPS tracking
External ERP integrations
Multi-tenant simulation environments
Machine learning optimisation
These features may be considered in future phases.
3.6 Assumptions
The project assumes the following conditions.
The simulator operates independently of production customer data.
Simulation data may be stored locally or within a dedicated demonstration environment.
Users interact with simulated operational data only.
Demonstration users possess predefined permissions.
Facilities, employees, and inventory are generated from predefined simulation templates.
3.7 Constraints
The simulator shall operate within the following constraints.
No production customer data shall be modified.
Demonstration environments shall remain isolated.
Performance shall remain acceptable on standard desktop hardware.
The simulator shall remain operational during extended demonstration sessions.
All simulated activities shall be reversible through the reset mechanism.
3.8 Success Criteria
The project shall be considered successful when the simulator satisfies the following measurable outcomes.
Category
Success Measure
Automation
Simulator operates continuously without manual intervention after activation.
Demonstration Coverage
Every major SaniTrack module displays realistic activity during a demonstration session.
Workflow Accuracy
Manager → Supervisor → Cleaner handoffs follow defined business rules.
Dashboard Activity
KPIs, notifications, reports, and activity feeds update automatically in response to simulated events.
Scenario Support
Users can switch between supported facility scenarios without modifying source code.
Reset Capability
Simulation returns to its baseline state within a defined reset process.
Performance
The simulator maintains smooth operation during extended demonstration sessions without noticeable degradation.
Maintainability
New scenarios, workflows, and simulation rules can be added without significant architectural changes.

3.9 Definition of Success
The Smart Facility Simulator will be considered complete when a prospective customer can launch the demonstration, observe realistic facility operations without manual intervention, explore every major SaniTrack capability, and finish the session with a clear understanding of how the platform manages day-to-day facility operations.
The simulator should create confidence in the platform by demonstrating operational behavior rather than simply presenting user interfaces.
 
Chapter 4 — Product Overview & User Personas
4.0 Product Overview
The SaniTrack Smart Facility Simulator is an autonomous simulation environment designed to replicate the daily operational activities of a managed facility.
Unlike traditional software demonstrations, which require presenters to manually create sample records and explain workflows, the simulator continuously generates realistic business operations that exercise every major module within the SaniTrack platform.
The simulator functions as a digital representation of an operational facility, where virtual personnel perform routine activities, respond to incidents, consume inventory, complete inspections, generate reports, and update operational dashboards without direct user intervention.
Its primary purpose is to demonstrate how the SaniTrack platform behaves under realistic operating conditions while remaining completely isolated from production customer environments.
The simulator is intended to support multiple business functions, including sales demonstrations, customer onboarding, staff training, feature validation, and internal testing.
4.1 Product Positioning
The Smart Facility Simulator is not a replacement for SaniTrack.
Instead, it serves as an intelligent operational layer that generates realistic activity within the platform.
Conceptually, the simulator can be viewed as a virtual operations team that continuously interacts with SaniTrack in the same way real facility personnel would.
Rather than introducing new business functionality, the simulator activates and demonstrates existing platform capabilities through simulated operational behavior.
4.2 Product Principles
The simulator has been designed according to the following principles.
Autonomous
The simulator should continue operating without requiring manual interaction after activation.
Realistic
Generated activities should resemble real facility operations and follow established business rules.
Repeatable
Demonstration sessions should produce consistent and predictable outcomes while still allowing controlled variation.
Safe
No simulated activity should interact with or modify production customer environments.
Modular
Every simulation component should be independently maintainable and extensible.
Configurable
Simulation behavior should be adjustable through configuration rather than source-code modifications.
Transparent
Users should always be able to distinguish simulated activity from real operational data.
4.3 Primary Users
The simulator serves several categories of users.
Each user interacts with the simulator differently and therefore has different expectations.
Persona 1 — Sales Representative
Description
Sales representatives use the simulator during product demonstrations for prospective customers.
Goals
Demonstrate platform capabilities.
Reduce demonstration preparation time.
Increase customer engagement.
Answer operational questions.
Showcase automation.
Typical Activities
Start the simulator.
Select a facility scenario.
Explain dashboard activity.
Highlight automated workflows.
Pause or reset the simulation when required.
Success Criteria
The customer understands how SaniTrack operates without requiring extensive verbal explanation.
Persona 2 — Prospective Customer
Description
Potential customers interact with the simulator to evaluate the platform.
Goals
Understand product capabilities.
Observe realistic workflows.
Explore dashboards.
Review reports.
Build confidence in the platform.
Typical Activities
Observe simulated operations.
Navigate between modules.
Review notifications.
Inspect reports.
Monitor KPIs.
Success Criteria
The customer leaves the demonstration with a clear understanding of how SaniTrack supports day-to-day facility operations.
Persona 3 — Trainer
Description
Training personnel use the simulator to teach new users.
Goals
Demonstrate workflows.
Explain operational processes.
Create repeatable exercises.
Typical Activities
Start predefined scenarios.
Pause workflows.
Discuss incidents.
Review reports.
Reset demonstrations.
Success Criteria
New users understand platform functionality without accessing production environments.
Persona 4 — Product Team
Description
Internal product teams use the simulator to validate new features.
Goals
Test workflows.
Observe automation.
Validate business rules.
Reproduce operational scenarios.
Typical Activities
Configure scenarios.
Observe system behavior.
Validate reports.
Measure KPIs.
Identify defects.
Success Criteria
New functionality can be tested consistently under realistic operational conditions.
Persona 5 — Software Engineer
Description
Engineers use the simulator to validate platform behavior during development.
Goals
Test feature integrations.
Generate operational data.
Validate edge cases.
Support regression testing.
Typical Activities
Configure simulation parameters.
Execute workflows.
Monitor logs.
Verify module interactions.
Success Criteria
Engineering teams can validate functionality without manually creating operational records.
4.4 User Journey
The following illustrates the expected customer experience during a demonstration.
Launch Simulator
 
↓
 
Login
 
↓
 
Select Facility Scenario
 
↓
 
Simulation Starts
 
↓
 
Virtual Staff Begin Working
 
↓
 
Tasks Created Automatically
 
↓
 
Inventory Changes
 
↓
 
Inspections Occur
 
↓
 
Incidents Generated
 
↓
 
Notifications Appear
 
↓
 
Reports Generated
 
↓
 
KPIs Updated
 
↓
 
Customer Explores Modules
 
↓
 
Simulation Reset
Unlike conventional demonstrations, users are encouraged to explore the system while operational activities continue in the background.
4.5 Product Capabilities
The simulator provides several high-level capabilities.
Operational Simulation
Simulates daily facility activities.
Workforce Automation
Coordinates managers, supervisors, and cleaners.
Inventory Simulation
Tracks inventory usage and replenishment.
Incident Generation
Creates operational events requiring attention.
Reporting
Produces realistic reports from simulated operational data.
Analytics
Calculates operational KPIs continuously.
Scenario Management
Supports multiple configurable facility types.
Demonstration Management
Allows users to start, pause, resume, and reset simulations.
4.6 Product Boundaries
The simulator is designed to demonstrate operational behavior rather than replace operational decision-making.
The simulator will:
Generate realistic activities.
Demonstrate workflows.
Produce reports.
Update dashboards.
Simulate users.
Simulate facilities.
The simulator will not:
Connect to live customer facilities.
Replace production workforce management.
Perform financial transactions.
Operate industrial equipment.
Control physical IoT devices.
4.7 Product Value Proposition
The Smart Facility Simulator transforms SaniTrack from a software application into an interactive operational experience.
Instead of presenting isolated software screens, it demonstrates how an entire facility operates over time.
This allows prospective customers to experience the platform in action rather than imagining how individual features work together.
As a result, demonstrations become more engaging, onboarding becomes more effective, and product teams gain a realistic environment for validation and testing.
4.8 Key Takeaways
The Smart Facility Simulator is:
An autonomous operational simulator.
A demonstration platform.
A training environment.
A testing environment.
A workflow validation tool.
A digital representation of real-world facility operations.
It is not intended to replace production systems but to simulate them with a high degree of realism.
 
Chapter 5 — Functional Requirements Overview
5.0 Introduction
This chapter defines the functional capabilities required for the SaniTrack Smart Facility Simulator.
Each requirement describes the expected behavior of the simulator from both a business and technical perspective.
The purpose of these requirements is to establish a common understanding between product stakeholders, designers, software engineers, quality assurance teams, and future implementation teams.
Where appropriate, each functional area includes:
Business Purpose
Functional Description
User Interaction
Business Rules
Technical Considerations
Success Criteria
Future Enhancements
The requirements defined within this chapter represent the minimum functionality required for the initial release of the Smart Facility Simulator.
5.1 Functional Modules
The simulator is composed of several major functional modules.
Each module contributes a specific responsibility within the overall simulation.
Module
Purpose
Authentication
Controls access to the simulator environment.
Scenario Manager
Selects and configures facility simulation scenarios.
Simulation Controller
Starts, pauses, resumes, and resets the simulator.
Scheduler
Drives the simulation clock and execution cycle.
Task Management
Creates and manages operational tasks.
Workforce Simulation
Simulates managers, supervisors, and cleaners.
Workflow Management
Coordinates task assignment and completion.
Inventory Management
Simulates stock usage and replenishment.
Incident Management
Generates and resolves operational incidents.
Notifications
Produces alerts and operational messages.
Analytics
Calculates KPIs and operational metrics.
Reporting
Generates operational reports from simulated data.
Dashboard
Presents the current operational state to the user.

These modules work together to create the illusion of an active facility.
5.2 High-Level Operational Flow
The simulator operates as a continuous operational cycle rather than a collection of independent user actions.
The following workflow illustrates the expected execution sequence.
User Starts Simulator
 
↓
 
Scenario Loaded
 
↓
 
Virtual Facility Created
 
↓
 
Simulation Clock Started
 
↓
 
Scheduler Executes
 
↓
 
Tasks Generated
 
↓
 
Manager Reviews Tasks
 
↓
 
Supervisor Assigns Staff
 
↓
 
Cleaner Performs Work
 
↓
 
Inventory Updated
 
↓
 
Inspection Performed
 
↓
 
KPIs Updated
 
↓
 
Notifications Generated
 
↓
 
Reports Updated
 
↓
 
Dashboard Refreshed
 
↓
 
Repeat
This cycle continues until the simulation is paused or reset.
5.3 Functional Categories
To improve maintainability, functional requirements are grouped into the following categories:
Core Simulation
Responsible for controlling the overall simulation lifecycle.
Includes:
Simulation Controller
Scheduler
State Management
Operational Simulation
Responsible for generating realistic business activities.
Includes:
Tasks
Workforce
Workflow
Inventory
Incidents
Business Intelligence
Responsible for summarising operational performance.
Includes:
Analytics
Reports
KPIs
User Experience
Responsible for presenting simulation results.
Includes:
Dashboard
Activity Feed
Notifications
Charts
Facility Map
Administration
Responsible for configuring and managing simulations.
Includes:
Authentication
Scenario Selection
Settings
Reset Mechanism
5.4 Functional Requirement Format
Each feature throughout this document will use a consistent specification format.
Example Feature Template
Feature Name
Task Management
Purpose
Describe why the feature exists.
Description
Explain how the feature behaves.
Inputs
List all required inputs.
Outputs
Describe expected outputs.
Business Rules
Define operational rules.
User Interaction
Explain how users interact with the feature.
Technical Notes
Implementation considerations.
KPIs
Metrics affected by this feature.
Future Enhancements
Potential future improvements.
This standard structure ensures consistency across all functional specifications.
5.5 Functional Dependency Diagram
The following diagram illustrates the relationship between the major simulation components.
                    	Scheduler
                         	│
                         	▼
              	Simulation Controller
                         	│
     	┌───────────────────┼────────────────────┐
     	▼               	▼                	▼
	Task Engine	   Workforce Engine  	Incident Engine
     	│               	│                	│
     	└───────────────┬───┴────────────────────┘
                     	▼
              	Workflow Engine
                     	│
      	┌──────────────┼──────────────┐
      	▼          	▼          	▼
Inventory Engine   Analytics Engine  Notification Engine
      	│          	│          	│
      	└──────────────┼──────────────┘
                     	▼
               	Report Engine
                     	│
                     	▼
                 	Dashboard
This architecture ensures clear separation of responsibilities while maintaining coordinated system behaviour.
5.6 Feature Breakdown Roadmap
The remaining chapters of Part III will describe each functional module in detail.
Chapter
Feature
Chapter 6
Authentication
Chapter 7
Scenario Manager
Chapter 8
Simulation Controller
Chapter 9
Scheduler
Chapter 10
Task Management
Chapter 11
Workforce Simulation
Chapter 12
Workflow Management
Chapter 13
Inventory Management
Chapter 14
Incident Management
Chapter 15
Notifications
Chapter 16
Analytics & KPIs
Chapter 17
Reporting
Chapter 18
Dashboard
Chapter 19
Activity Feed
Chapter 20
Facility Map
Chapter 21
Settings & Configuration

Each chapter will define the complete functional specification for its respective module.
5.7 Traceability
Every functional requirement documented in this specification shall map to one or more implementation components.
For example:
Functional Requirement
Planned Implementation
Task Management
TaskEngine.js
Workforce Simulation
WorkforceEngine.js
Workflow Management
WorkflowEngine.js
Inventory Management
InventoryEngine.js
Incident Management
IncidentEngine.js
Notifications
NotificationEngine.js
Analytics
AnalyticsEngine.js
Reporting
ReportEngine.js
Simulation Controller
AdvancedSimulator.js
Scheduler
Scheduler.js
Shared Simulation State
SimulatorState.js

This traceability ensures that every documented requirement can be verified during development and testing.
 
Chapter 6 — Authentication & Access Management
6.0 Overview
Authentication and Access Management controls how users enter the Smart Facility Simulator and determines the level of interaction available during a simulation session.
Unlike the production SaniTrack platform, the simulator operates in an isolated demonstration environment. Authentication therefore focuses on controlling simulator access and assigning predefined demonstration roles rather than managing live customer identities.
The authentication subsystem ensures that demonstrations remain secure, repeatable, and independent of production environments.
6.1 Business Purpose
The Authentication module exists to:
Restrict simulator access to authorized users.
Separate demonstration data from production environments.
Assign predefined simulator roles.
Provide a consistent starting point for every demonstration.
Support guided customer demonstrations.
Enable internal testing and training.
The module ensures that every user enters the simulator with the correct permissions and predefined operational context.
6.2 Functional Requirements
SIM-FR-001
The simulator shall require authentication before granting access.
SIM-FR-002
The simulator shall authenticate users independently of production customer accounts.
SIM-FR-003
The simulator shall support predefined demonstration accounts.
SIM-FR-004
The simulator shall automatically assign the correct demonstration role after successful authentication.
SIM-FR-005
The simulator shall initialize the selected demonstration environment after login.
SIM-FR-006
The simulator shall prevent unauthorized modification of simulator configuration.
6.3 Supported Roles
The simulator supports multiple demonstration roles.
Role
Purpose
Sales Representative
Conduct customer demonstrations
Customer
Explore simulator features
Trainer
Deliver guided training sessions
Product Team
Validate workflows and scenarios
Administrator
Configure simulator behaviour

Each role receives permissions appropriate to its intended use.
6.4 Login Workflow
The following workflow illustrates the authentication process.
Launch Simulator
 
↓
 
Display Login Screen
 
↓
 
Enter Credentials
 
↓
 
Validate User
 
↓
 
Load User Profile
 
↓
 
Load Default Scenario
 
↓
 
Initialize Simulator State
 
↓
 
Display Dashboard
 
↓
 
Ready
Authentication is expected to complete before any simulation services are initialized.
6.5 Demonstration Accounts
To simplify demonstrations, predefined accounts shall be available.
Sales Demo
Username
 
demo@sanitrack.com
Password
********
Permission
Sales Representative
Customer Demo
customer@sanitrack.com
Permission
Read Only
Trainer
trainer@sanitrack.com
Permission
Training
Administrator
admin@sanitrack.com
Permission
Full Control
These accounts are isolated from production users and may be reset at any time.
6.6 Permission Matrix
Capability
Sales
Customer
Trainer
Admin
View Dashboard
✓
✓
✓
✓
Start Simulation
✓
✗
✓
✓
Pause Simulation
✓
✗
✓
✓
Resume Simulation
✓
✗
✓
✓
Reset Simulation
✓
✗
✓
✓
Change Scenario
✓
✗
✓
✓
Modify Configuration
✗
✗
✗
✓
Export Reports
✓
✓
✓
✓
View Analytics
✓
✓
✓
✓

This permission model ensures that demonstrations remain controlled while still allowing customers to explore the platform safely.
6.7 Security Considerations
The simulator shall not:
Authenticate against live customer databases.
Access production operational records.
Modify production facilities.
Store production credentials.
All authentication occurs within the isolated simulator environment.
6.8 Session Lifecycle
Each authenticated session follows the lifecycle below.
Login
 
↓
 
Session Created
 
↓
 
Scenario Loaded
 
↓
 
Simulation Started
 
↓
 
User Interaction
 
↓
 
Logout
 
↓
 
Destroy Session
 
↓
 
Reset Environment
Resetting the environment guarantees that subsequent demonstrations begin from a clean baseline.
6.9 Failure Handling
If authentication fails:
Access is denied.
The user remains on the login screen.
The failed attempt is recorded in simulator logs.
No simulation services are initialized.
If a session expires:
Simulation pauses.
User is redirected to the login screen.
Session data is cleared.
The simulator returns to a safe state.
6.10 Future Enhancements
Future releases may include:
Single Sign-On (SSO)
Microsoft Entra ID integration
Google Workspace authentication
Multi-factor authentication (MFA)
Temporary demonstration links
QR code login for exhibitions
Time-limited guest accounts
6.11 Acceptance Criteria
Authentication will be considered complete when:
Authorized users can access the simulator.
Unauthorized users are denied access.
Demonstration roles receive correct permissions.
Sessions initialize successfully.
Simulator state is created after login.
Production environments remain completely isolated.
6.12 Mapping to Implementation
Requirement
Planned Component
User Authentication
AuthenticationService.js
Session Management
SessionManager.js
Role Management
RoleService.js
Permission Control
AccessControl.js
Login Screen
login.html
Authentication UI
login.js
Authentication Styles
login.css

 
 
Chapter 7 — Scenario Manager & Facility Configuration
7.0 Overview
The Scenario Manager is responsible for creating and configuring the virtual environment in which the Smart Facility Simulator operates.
A scenario represents a complete operational model of a facility. It defines the physical environment, workforce, cleaning schedules, inventory levels, compliance requirements, operational risks, and simulation parameters that collectively determine how the simulator behaves.
Rather than creating every task or employee manually, the simulator loads a predefined scenario template that serves as the baseline for all simulated activity.
Each scenario is independent and can be started, paused, reset, or replaced without affecting other scenarios or production data.
7.1 Business Purpose
The Scenario Manager exists to enable the Smart Facility Simulator to represent multiple industries using a common simulation engine.
Instead of building separate simulators for hospitals, hotels, airports, schools, or manufacturing plants, the simulator loads different scenario configurations that adapt the behaviour of the simulation to the operational characteristics of each facility type.
This approach significantly improves maintainability, scalability, and demonstration flexibility while reducing development effort.
7.2 Functional Requirements
ID
Requirement
SIM-FR-007
The simulator shall support multiple predefined facility scenarios.
SIM-FR-008
The simulator shall load all scenario parameters before simulation begins.
SIM-FR-009
The simulator shall initialise virtual employees for the selected scenario.
SIM-FR-010
The simulator shall initialise inventory for the selected scenario.
SIM-FR-011
The simulator shall initialise facility zones and assets.
SIM-FR-012
The simulator shall initialise cleaning schedules and workflows.
SIM-FR-013
The simulator shall support custom scenario templates in future releases.

 
7.3 What is a Scenario?
A scenario is a structured configuration that describes an operational facility.
It does not contain live business logic.
Instead, it provides the data used by the simulation engines.
Think of it as the blueprint from which a virtual facility is created.
Example:
Hospital Scenario
 
Facility Name:
St. Mary's General Hospital
 
Departments:
Reception
Emergency
ICU
Operating Theatre
Ward A
Ward B
Laboratory
Pharmacy
 
Employees:
1 Manager
3 Supervisors
24 Cleaners
 
Inventory:
Gloves
Disinfectant
Soap
Mops
Waste Bags
 
Cleaning Frequency:
Every 2 Hours
 
Inspection Frequency:
Every 4 Hours
 
Incident Frequency:
Medium
 
Operating Hours:
24 Hours
Once loaded, this information becomes the initial state for the simulation.
7.4 Scenario Components
Every scenario consists of the following configuration groups.
Facility Information
Defines:
Facility name
Industry
Number of floors
Zones
Departments
Rooms
Assets
Workforce Configuration
Defines:
Managers
Supervisors
Cleaners
Shifts
Skills
Availability
Working hours
Inventory Configuration
Defines:
Products
Initial quantities
Consumption rates
Reorder thresholds
Supplier information (future)
Operational Schedule
Defines:
Opening hours
Cleaning frequency
Inspection intervals
Shift changes
Break schedules
Incident Profile
Defines:
Probability of chemical spills
Equipment failures
Water leaks
Biohazards
Missed inspections
Emergency cleaning requests
KPI Targets
Defines:
Compliance target
Productivity target
Response time target
Inventory health target
Inspection pass rate
7.5 Supported Facility Types
The simulator shall initially support the following predefined facility templates.
Facility Type
Description
Hospital
Clinical cleaning and infection control workflows
Hotel
Guest room turnover and public area maintenance
Office Building
Daily workspace cleaning and meeting room preparation
School
Classroom, cafeteria, and restroom cleaning schedules
Shopping Mall
High-traffic common area maintenance
Airport
Terminal sanitation and high-frequency inspections
Warehouse
Equipment, loading bays, and storage area cleaning
Manufacturing Plant
Production area cleaning with safety compliance

Future facility templates may be added without changing the simulation engine.
7.6 Scenario Lifecycle
The lifecycle of a scenario is illustrated below.
User Selects Scenario
 
↓
 
Configuration Loaded
 
↓
 
Facility Created
 
↓
 
Employees Generated
 
↓
 
Inventory Loaded
 
↓
 
Simulation State Created
 
↓
 
Scheduler Started
 
↓
 
Simulation Running
 
↓
 
Pause / Resume
 
↓
 
Reset
 
↓
 
Return to Initial Configuration
This ensures every demonstration begins from a predictable baseline while still allowing the simulation to evolve dynamically.
7.7 Scenario Configuration Source
Scenario definitions should be stored in external configuration files rather than being hard-coded into the application.
This allows new facilities to be introduced without modifying the simulation engine.
Recommended formats include:
JSON
YAML
Database records (future)
Spreadsheet import (future, for non-technical users)
A JSON structure is recommended for the initial implementation because it is lightweight, human-readable, and integrates naturally with the JavaScript-based simulation engine.
7.8 Example Scenario Definition
Below is a simplified conceptual representation of a hospital scenario.
{
  "facility": {
	"name": "St. Mary's General Hospital",
	"industry": "Healthcare"
  },
  "workforce": {
	"managers": 1,
	"supervisors": 3,
	"cleaners": 24
  },
  "inventory": {
	"gloves": 1000,
	"soap": 300,
	"disinfectant": 150
  },
  "operations": {
	"cleaningInterval": "2h",
	"inspectionInterval": "4h",
	"incidentFrequency": "medium"
  }
}
This example is illustrative. The final schema will be defined in the Data Architecture section of this document.
7.9 Business Rules
The Scenario Manager shall enforce the following rules:
Only one active scenario may run in a simulator session.
Scenarios shall be isolated from production data.
Resetting a scenario restores its original configuration.
Scenario templates are read-only during execution.
Runtime changes are applied to the in-memory simulation state, not the source template.
Scenario templates shall remain reusable across multiple demonstration sessions.
7.10 Acceptance Criteria
The Scenario Manager will be considered complete when:
A user can select a predefined facility scenario.
The selected scenario loads successfully.
Employees, inventory, zones, and schedules are initialized correctly.
The simulation starts with the configured baseline state.
Resetting restores the original scenario configuration.
New scenarios can be added without modifying the simulation engine.
7.11 Mapping to Implementation
Requirement
Planned Component
Scenario Loading
ScenarioManager.js
Scenario Definitions
scenarios/*.json
Facility Builder
FacilityBuilder.js
Workforce Initializer
WorkforceInitializer.js
Inventory Initializer
InventoryInitializer.js
Simulation State Initialization
SimulatorState.js

 
 
 
Chapter 8 — Simulation Controller (Smart Autopilot)
8.0 Overview
The Simulation Controller is the central orchestration component of the SaniTrack Smart Facility Simulator. It is responsible for starting, pausing, resuming, resetting, and coordinating the execution of all simulation modules.
Once activated, the Simulation Controller continuously executes simulation cycles, invoking the Scheduler and coordinating all simulation engines according to predefined business rules.
Rather than directly performing business operations, the controller acts as the conductor of an orchestra, ensuring that each engine executes at the appropriate time and in the correct sequence.
The Simulation Controller is the primary component that transforms a static demonstration environment into a continuously operating virtual facility.
8.1 Business Purpose
The purpose of the Simulation Controller is to automate facility operations without requiring manual user interaction.
During demonstrations, training sessions, or testing activities, users should observe a facility that appears to operate naturally.
The controller ensures that:
Work is continuously generated.
Employees remain active.
Inventory changes over time.
Incidents occur unexpectedly.
Reports evolve continuously.
KPIs remain dynamic.
Dashboards always display live operational information.
Without the Simulation Controller, SaniTrack would simply display static data.
8.2 Functional Requirements
ID
Requirement
SIM-FR-014
The simulator shall support Start, Pause, Resume, and Reset operations.
SIM-FR-015
The simulator shall execute continuously until paused or stopped.
SIM-FR-016
The controller shall coordinate all simulation engines.
SIM-FR-017
The controller shall execute simulation cycles using the Scheduler.
SIM-FR-018
Simulation speed shall be configurable.
SIM-FR-019
Simulation state shall persist during Pause and Resume operations.
SIM-FR-020
Reset shall restore the initial scenario configuration.

 
8.3 Responsibilities
The Simulation Controller is responsible for:
Initializing the simulation.
Starting the Scheduler.
Coordinating engine execution.
Maintaining simulation status.
Controlling execution speed.
Managing simulation lifecycle events.
Responding to user controls.
Coordinating reset operations.
Preserving shared simulation state.
It does not generate tasks, calculate KPIs, or manage inventory directly; those responsibilities remain with the specialized engines.
8.4 Simulation Lifecycle
The simulator follows a defined operational lifecycle.
Not Started
 	│
 	▼
Scenario Loaded
 	│
 	▼
Ready
 	│
 	▼
Start
 	│
 	▼
Running
 	│
 ┌───┴────┐
 ▼        ▼
Pause   Continue
 │        │
 ▼        │
Paused ───┘
 │
 ▼
Resume
 │
 ▼
Running
 │
 ▼
Reset
 │
 ▼
Ready
Only one lifecycle state may be active at any time.
8.5 Simulation Modes
The simulator shall support multiple execution modes.
Manual Mode
The user manually advances simulation events.
Typical use:
Product training
Feature explanation
Workshops
Autopilot Mode
The simulator executes continuously without user intervention.
Typical use:
Sales demonstrations
Exhibition kiosks
Customer self-guided demos
Accelerated Mode
Simulation time advances faster than real time.
Example:
1 Real Minute
 
↓
 
10 Simulated Minutes
This allows users to observe several hours of facility operations during a short demonstration.
Debug Mode
Designed for developers.
Provides:
Engine execution logs
Scheduler diagnostics
State inspection
Performance metrics
8.6 Controller Workflow
The following sequence describes a complete simulation cycle.
User Presses Start
 
↓
 
Scenario Validated
 
↓
 
Simulation State Created
 
↓
 
Scheduler Started
 
↓
 
Autopilot Activated
 
↓
 
Task Engine
 
↓
 
Workflow Engine
 
↓
 
Workforce Engine
 
↓
 
Inventory Engine
 
↓
 
Incident Engine
 
↓
 
Notification Engine
 
↓
 
Analytics Engine
 
↓
 
Report Engine
 
↓
 
Dashboard Updated
 
↓
 
Wait
 
↓
 
Repeat
This process continues until interrupted by the user or system.
8.7 Simulation Speed
Simulation speed should be configurable.
Mode
Example
Real Time
1 second = 1 second
Fast
1 second = 1 minute
Faster
1 second = 5 minutes
Demonstration
1 second = 10 minutes
Extreme
1 second = 1 hour

Changing simulation speed affects event timing but does not alter business rules.
8.8 Autopilot Logic
The Autopilot continuously evaluates the operational state of the facility.
Typical decision cycle:
Check Time
 
↓
 
Generate Scheduled Tasks
 
↓
 
Check Workforce
 
↓
 
Assign Employees
 
↓
 
Check Inventory
 
↓
 
Generate Incidents
 
↓
 
Run Inspections
 
↓
 
Calculate KPIs
 
↓
 
Generate Reports
 
↓
 
Update Dashboard
 
↓
 
Sleep
 
↓
 
Repeat
The cycle frequency is configurable through simulator settings.
8.9 Business Rules
The controller shall enforce the following operational rules.
Only one simulation instance may run within a session.
All engines execute through the Scheduler.
Engines must execute in the configured order.
Pause preserves all runtime data.
Resume continues from the preserved state.
Reset destroys the runtime state and rebuilds it from the selected scenario template.
Engine failures shall not terminate the simulation; they shall be logged and isolated where possible.
8.10 Failure Handling
The Simulation Controller shall respond gracefully to unexpected conditions.
Examples include:
Engine execution failure
Missing configuration
Invalid scenario
Scheduler interruption
State corruption
Where possible, the controller shall:
Log the error.
Continue unaffected engine execution.
Notify the user of critical failures.
Preserve diagnostic information for debugging.
8.11 Acceptance Criteria
The Simulation Controller will be considered complete when:
Users can start, pause, resume, and reset simulations.
The simulator executes continuously in Autopilot mode.
Simulation speed can be adjusted.
Engine execution follows the configured sequence.
Runtime state is preserved during pause operations.
Reset consistently restores the original scenario.
8.12 Mapping to Implementation
Requirement
Planned Component
Simulation Controller
AdvancedSimulator.js
Scheduler Coordination
Scheduler.js
Runtime State
SimulatorState.js
Autopilot Controls
controls.js
Scenario Reset
ScenarioManager.js
Simulation Timer
SimulationClock.js

 
8.13 Future Enhancements
The architecture is designed to support future capabilities without major redesign.
Potential enhancements include:
AI-driven decision-making for virtual managers and supervisors.
Multiple facilities running concurrently.
Time-travel controls (rewind and replay).
Simulation recording and playback.
Predictive operational forecasting.
Integration with IoT sensor simulators.
Cloud-hosted simulation sessions for remote demonstrations.
 
 
Chapter 9 — Simulation Scheduler & Simulation Clock
9.0 Overview
The Simulation Scheduler is the execution engine responsible for driving all time-based activities within the Smart Facility Simulator.
It acts as the heartbeat of the virtual facility by coordinating the execution of every simulation engine according to a configurable simulation clock.
Unlike traditional software timers that simply execute functions at fixed intervals, the Simulation Scheduler manages an entire virtual timeline in which simulated minutes, hours, and days progress independently of real-world time.
This enables the simulator to compress hours of facility activity into minutes while preserving realistic operational behaviour.
9.1 Business Purpose
Facility operations are inherently time-dependent.
Examples include:
Cleaning schedules
Shift changes
Inspections
Inventory consumption
Incident escalation
Report generation
Compliance monitoring
To accurately demonstrate these operational workflows, the simulator requires an independent simulation clock capable of advancing virtual time while maintaining consistent business rules.
The Scheduler provides this capability.
9.2 Functional Requirements
ID
Requirement
SIM-FR-021
The simulator shall maintain an independent simulation clock.
SIM-FR-022
The Scheduler shall execute configurable simulation cycles.
SIM-FR-023
Simulation time shall progress independently of real-world time.
SIM-FR-024
The Scheduler shall coordinate execution of all simulation engines.
SIM-FR-025
Simulation speed shall be configurable without changing business logic.
SIM-FR-026
The Scheduler shall support pausing and resuming execution.
SIM-FR-027
Scheduled events shall execute in chronological order.

9.3 Why a Simulation Clock?
Real facilities operate according to time.
Examples include:
Time
Activity
06:00
Morning shift begins
07:00
Reception cleaning
08:30
Cafeteria cleaning
09:00
Waste collection
10:00
Inspection
11:00
Inventory replenishment

A normal timer cannot accurately model these operational timelines.
Instead, the simulator maintains its own virtual clock.
Example:
Real Time
 
09:00:00
 
↓
 
Simulation Time
 
06:00 Monday
The simulation clock is therefore independent of the computer's clock.
9.4 Simulation Timeline
The simulation timeline advances continuously.
Example:
Simulation Started
 
↓
 
06:00
 
↓
 
06:10
 
↓
 
06:20
 
↓
 
06:30
 
↓
 
07:00
 
↓
 
08:00
 
↓
 
09:00
Each advancement triggers new operational opportunities.
9.5 Scheduler Architecture
The Scheduler is responsible for coordinating every engine.
                	Simulation Clock
                       	│
                       	▼
                 	Scheduler
                       	│
   	┌───────────────────┼───────────────────┐
   	▼               	▼ 	              ▼
  Time Events    	Scheduled Events 	Random Events
   	│               	│               	│
   	└───────────────┬───┴───────────────────┘
                   	▼
              	Simulation Event Bus
                  	 │
  	┌────────────────┼────────────────────┐
  	▼            	▼                	▼
Task Engine   Workforce Engine   Incident Engine
  	▼            	▼                	▼
Inventory Engine   Analytics Engine   Report Engine
This design ensures that all operational activity is synchronized through a single timing mechanism.
9.6 Execution Cycle
Each Scheduler cycle follows the same sequence.
Advance Simulation Clock
 
↓
 
Publish CLOCK_TICK Event
 
↓
 
Execute Scheduled Tasks
 
↓
 
Execute Workforce Updates
 
↓
 
Execute Inventory Updates
 
↓
 
Generate Random Incidents
 
↓
 
Calculate KPIs
 
↓
 
Generate Reports
 
↓
 
Refresh Dashboard
 
↓
 
Sleep Until Next Tick
 
↓
 
Repeat
Each cycle is deterministic and repeatable.
9.7 Time Compression
One of the Scheduler's key responsibilities is time compression.
For example:
Real Time
Simulation Time
1 second
1 minute
1 second
5 minutes
1 second
10 minutes
1 second
30 minutes
1 second
1 hour

This enables customers to observe an entire operational day during a short demonstration.
9.8 Event Categories
The Scheduler coordinates several categories of events.
Scheduled Events
Occur at predefined times.
Examples:
Shift changes
Daily cleaning
Inspections
Report generation
Conditional Events
Occur when business rules are satisfied.
Examples:
Inventory reaches reorder threshold.
Supervisor becomes available.
Task exceeds SLA.
Cleaner completes assignment.
Random Events
Occur according to configurable probabilities.
Examples:
Chemical spill
Equipment failure
Water leak
Biohazard
Emergency cleaning request
Randomness is controlled so demonstrations remain realistic rather than chaotic.
9.9 Scheduler Priorities
Not every event has equal importance.
The Scheduler should process higher-priority events first.
Priority
Examples
Critical
Fire alarm, biohazard, chemical spill
High
Inspection failure, major equipment breakdown
Medium
Routine cleaning, inventory replenishment
Low
Dashboard refresh, KPI recalculation

This prevents low-value work from delaying critical operational events.
9.10 Business Rules
The Scheduler shall enforce the following rules.
Only one Scheduler instance may run per simulation session.
Every simulation cycle begins with a clock advancement.
All engine execution is triggered by Scheduler events.
Engine execution order is configurable.
Failed engine execution shall be logged.
Failure of one engine shall not prevent remaining engines from executing where safe to continue.
The Scheduler shall stop immediately when the simulation is paused.
9.11 Acceptance Criteria
The Scheduler will be considered complete when:
Simulation time advances independently of real time.
Engine execution occurs automatically.
Scheduled events execute at the correct simulation time.
Random events respect configured probabilities.
Time compression behaves consistently.
Pause and Resume preserve simulation time.
Reset restores the initial simulation timeline.
9.12 Mapping to Implementation
Requirement
Planned Component
Simulation Clock
SimulationClock.js
Scheduler
Scheduler.js
Tick Events
EventBus.js
Time Compression
SimulationSpeed.js
Timeline Tracking
TimelineManager.js
Tick Diagnostics
SchedulerMonitor.js

 
9.13 Future Enhancements
Future versions of the Scheduler may support:
Multiple facilities sharing a global simulation clock.
Independent clocks per facility.
Business calendars with weekends and holidays.
Seasonal operating patterns.
Weather-driven operational changes.
Time-zone-aware multinational simulations.
Historical replay and fast-forward capabilities.
9.14 Reference Execution Timeline
The following example illustrates how a single simulated morning might unfold.
Simulation Time
Event
06:00
Facility opens and morning shift begins.
06:10
Reception cleaning task generated.
06:20
Supervisor assigns cleaner to Reception.
06:35
Cleaning completed; inventory updated.
07:00
Routine inspection scheduled.
07:15
Random chemical spill occurs in Laboratory.
07:18
Emergency cleaning task generated.
07:30
Incident resolved; KPI recalculated.
08:00
Interim operational report generated.

This sequence demonstrates how scheduled, conditional, and random events combine to create a realistic operational narrative.
 
Chapter 10 — Task Management Engine
10.0 Overview
The Task Management Engine is responsible for creating, scheduling, prioritizing, assigning, monitoring, and completing all operational work performed within the Smart Facility Simulator.
Every activity within the simulator originates from a task.
Whether the activity involves routine cleaning, emergency response, inspections, waste collection, inventory replenishment, equipment maintenance, or incident resolution, the Task Management Engine serves as the authoritative source for operational work.
The engine continuously generates tasks based on scenario configuration, business rules, scheduled activities, and dynamic operational events.
The resulting task lifecycle closely mirrors the behaviour of a real facility management operation.
10.1 Business Purpose
The primary purpose of the Task Management Engine is to ensure that the virtual facility remains continuously active.
Rather than displaying static records, the engine creates realistic operational workloads that demonstrate how SaniTrack manages facility operations from beginning to end.
Generated tasks become the catalyst for every other simulation component.
For example:
Workforce assignments
Inventory consumption
Supervisor inspections
Notifications
KPI updates
Reports
Dashboard changes
Without tasks, no meaningful operational activity can occur.
10.2 Functional Requirements
ID
Requirement
SIM-FR-028
The simulator shall automatically generate operational tasks.
SIM-FR-029
Tasks shall be generated from schedules, incidents, and business rules.
SIM-FR-030
Every task shall receive a unique identifier.
SIM-FR-031
Every task shall include priority, status, location, and assigned personnel.
SIM-FR-032
The simulator shall support recurring and one-time tasks.
SIM-FR-033
Task priority shall influence assignment order.
SIM-FR-034
Completed tasks shall update operational KPIs.
SIM-FR-035
Task history shall be retained for reporting and analytics.

10.3 Task Sources
Tasks originate from multiple sources.
                 	Task Engine
 
                      	▲
 
    	┌─────────────────┼─────────────────┐
 
    	│             	│             	│
 
    	│             	│             	│
 
Scheduled Jobs  	Random Incidents 	User Events
 
    	│             	│ 	            │
 
    	▼             	▼             	▼
 
Daily Cleaning 	Chemical Spill  	Manual Request
 
Routine Inspection Equipment Failure  Customer Complaint
 
Waste Collection   Water Leak      	Supervisor Request
 
Restocking     	Biohazard       	Audit Request
This multi-source approach ensures that the facility behaves realistically rather than repeating identical workflows.
10.4 Task Categories
The simulator supports several task categories.
Category
Examples
Routine Cleaning
Reception, Offices, Corridors
Deep Cleaning
Operating Theatre, Laboratories
Inspection
Hygiene Audit, Supervisor Review
Emergency
Chemical Spill, Biohazard
Waste Management
Hazardous Waste Collection
Inventory
Stock Replenishment
Equipment
Cleaning Equipment Maintenance
Compliance
Regulatory Inspection

Each category follows different business rules.
10.5 Task Lifecycle
Every task progresses through a defined lifecycle.
Task Generated
 
↓
 
Pending
 
↓
 
Assigned
 
↓
 
Accepted
 
↓
 
Travelling
 
↓
 
In Progress
 
↓
 
Supervisor Inspection
 
↓
 
Completed
 
↓
 
Closed
 
↓
 
Archived
If a task cannot be completed successfully, additional states may apply.
Pending
 
↓
 
Assigned
 
↓
 
Rejected
 
↓
 
Reassigned
 
↓
 
Accepted
or
Inspection Failed
 
↓
 
Rework Required
 
↓
 
Assigned Again
 
↓
 
Completed
The Task Engine maintains the current state of every task throughout its lifecycle.
10.6 Task Attributes
Every generated task shall contain the following information.
Attribute
Description
Task ID
Unique identifier
Task Type
Cleaning, Inspection, Emergency, etc.
Facility
Facility identifier
Zone
Department or room
Priority
Critical, High, Medium, Low
Status
Current lifecycle stage
Assigned Employee
Cleaner or Supervisor
Created Time
Simulation timestamp
Due Time
Expected completion time
Estimated Duration
Planned duration
Completion Time
Actual completion time
Inventory Required
Consumables needed
Related Incident
Optional incident reference
Notes
Additional operational information

These attributes support reporting, analytics, and future integrations.
10.7 Task Prioritisation
Not all work has equal urgency.
The engine shall assign priorities based on business impact.
Priority
Typical Examples
Critical
Biohazard, Major Spill, Fire Response
High
Failed Inspection, ICU Cleaning
Medium
Scheduled Cleaning, Waste Collection
Low
Window Cleaning, Administrative Tasks

Higher-priority tasks shall always be considered for assignment before lower-priority tasks, subject to workforce availability and required skills.
10.8 Task Generation Logic
Task creation is driven by a combination of time-based schedules, operational conditions, and random events.
Conceptually:
Simulation Tick
 
↓
 
Evaluate Schedules
 
↓
 
Evaluate Incidents
 
↓
 
Evaluate Business Rules
 
↓
 
Generate Required Tasks
 
↓
 
Validate Workforce Capacity
 
↓
 
Publish TASK_CREATED Event
This logic ensures that new work enters the system continuously without overwhelming available resources.
10.9 Business Rules
The Task Management Engine shall enforce the following rules.
Every task must belong to exactly one facility and one operational zone.
Every task must have a defined priority.
A task may only be assigned to personnel with the required role and availability.
Emergency tasks may pre-empt routine work when business rules permit.
Tasks cannot be marked as completed until required inspections have passed (where applicable).
Closed tasks are immutable and retained for reporting.
10.10 Exceptional Scenarios
The engine shall support operational exceptions such as:
Cleaner declines assignment.
Supervisor unavailable.
Required inventory unavailable.
Inspection fails.
SLA exceeded.
Incident escalates before completion.
In these situations, the engine shall generate follow-up actions such as reassignment, escalation, or rework according to configured business rules.
10.11 Acceptance Criteria
The Task Management Engine will be considered complete when:
Tasks are generated automatically according to scenario configuration.
Tasks transition correctly through their lifecycle.
Priorities influence assignment order.
Task completion updates KPIs, reports, and notifications.
Historical task data is available for analytics.
Exceptional scenarios are handled without interrupting the simulation.
10.12 Mapping to Implementation
Requirement
Planned Component
Task Generation
TaskEngine.js
Task Model
Task.js
Task Repository
TaskStore.js
Priority Handling
PriorityQueue.js
Lifecycle Management
TaskLifecycle.js
Task Rules
TaskRules.js
Task Events
EventBus.js

 
10.13 Future Enhancements
Future releases may introduce:
AI-based task optimisation.
Dynamic workload balancing.
Predictive task generation based on historical trends.
Route optimisation for cleaners.
Mobile acknowledgement of tasks.
Voice-assisted task acceptance.
Integration with IoT devices that automatically create maintenance or cleaning requests.
10.14 Example Operational Narrative
The following illustrates how the Task Management Engine behaves during a typical simulation:
Simulation Time
Event
08:00
Scheduler evaluates the morning cleaning schedule.
08:01
Five routine cleaning tasks are generated for Reception, Lobby, Offices, Restrooms, and Cafeteria.
08:02
A chemical spill is randomly generated in the Laboratory.
08:02
The Task Engine immediately creates a Critical emergency cleaning task.
08:03
The emergency task is placed ahead of routine work in the priority queue.
08:04
The Workforce Engine assigns the nearest qualified cleaner.
08:18
The incident is resolved, inventory is consumed, notifications are sent, KPIs are updated, and the task is archived.

This example demonstrates how scheduled work and unexpected incidents coexist naturally within the simulator.
 
Chapter 11 — Workforce Simulation Engine
11.0 Overview
The Workforce Simulation Engine is responsible for modelling the behaviour, availability, responsibilities, and interactions of all virtual personnel within the Smart Facility Simulator.
Rather than treating employees as static records, the Workforce Simulation Engine represents each employee as an active simulation entity capable of making decisions, accepting assignments, travelling between facility locations, consuming time, completing work, taking breaks, and responding to changing operational conditions.
The Workforce Simulation Engine creates the illusion of a continuously operating workforce by coordinating managers, supervisors, cleaners, inspectors, and other operational roles according to predefined business rules.
11.1 Business Purpose
The purpose of the Workforce Simulation Engine is to demonstrate how operational work flows through an organisation.
Instead of simply showing tasks appearing and disappearing, the simulator should illustrate how responsibilities move between different personnel.
For example:
Task Created
 
↓
 
Manager Reviews
 
↓
 
Supervisor Assigns
 
↓
 
Cleaner Accepts
 
↓
 
Cleaner Travels
 
↓
 
Cleaner Performs Work
 
↓
 
Supervisor Inspects
 
↓
 
Manager Reviews KPI
 
↓
 
Report Updated
This mirrors real operational practice and demonstrates the full value of the SaniTrack platform.
11.2 Functional Requirements
ID
Requirement
SIM-FR-036
The simulator shall create virtual employees for the selected scenario.
SIM-FR-037
Every employee shall have a defined role, shift, and skill profile.
SIM-FR-038
Employees shall transition between operational states automatically.
SIM-FR-039
Managers shall oversee task generation and operational performance.
SIM-FR-040
Supervisors shall assign, monitor, and inspect work.
SIM-FR-041
Cleaners shall execute assigned operational tasks.
SIM-FR-042
Employee availability shall affect task assignment decisions.
SIM-FR-043
Workforce activity shall update dashboards, notifications, and KPIs.

 
11.3 Workforce Hierarchy
The simulator models a realistic operational hierarchy.
             	Facility Manager
                        │
    	┌───────────────┼───────────────┐
    	▼                           	▼
Supervisor A                 	Supervisor B
    	│                           	│
   ┌────┼────┐                 	┌────┼────┐
   ▼	▼	▼                 	▼	▼	▼
Cleaner Cleaner Cleaner   	Cleaner Cleaner Cleaner
This hierarchy reflects typical facility management structures.
11.4 Supported Roles
Facility Manager
Primary responsibilities:
Monitor facility operations
Review KPIs
Approve escalations
Monitor incidents
Review reports
Manage compliance
Supervisor
Responsibilities:
Accept new tasks
Assign cleaners
Monitor execution
Perform inspections
Escalate issues
Approve completed work
Cleaner
Responsibilities:
Accept assignments
Travel to locations
Perform cleaning
Consume inventory
Report issues
Complete assigned work
Inspector (Future)
Responsibilities:
Perform independent audits
Validate compliance
Generate audit reports
Record observations
Maintenance Technician (Future)
Responsibilities:
Repair equipment
Respond to maintenance incidents
Replace damaged assets
11.5 Employee Profile
Every virtual employee contains operational attributes.
Attribute
Description
Employee ID
Unique identifier
Name
Display name
Role
Manager, Supervisor, Cleaner
Shift
Morning, Afternoon, Night
Current Location
Facility zone
Current Status
Available, Busy, On Break, Off Duty
Skills
Cleaning, Biohazard, Inspection, etc.
Assigned Tasks
Active workload
Performance Rating
Historical performance score
Experience Level
Junior, Mid, Senior

These attributes allow the simulator to make realistic assignment decisions.
11.6 Employee State Machine
Each employee transitions through operational states.
Off Duty
 
↓
 
Shift Starts
 
↓
 
Available
 
↓
 
Task Assigned
 
↓
 
Travelling
 
↓
 
Working
 
↓
 
Inspection Waiting
 
↓
 
Available
 
↓
 
Break
 
↓
 
Available
 
↓
 
Shift Ends
 
↓
 
Off Duty
This state machine prevents unrealistic behaviour, such as assigning multiple simultaneous tasks to the same employee.
11.7 Workforce Assignment Logic
When a task becomes available, the Workforce Engine evaluates eligible employees.
Selection criteria may include:
1. Correct role.
2. Required skill.
3. Current availability.
4. Current workload.
5. Proximity to the task location.
6. Shift status.
7. Priority of existing assignments.
The highest-ranked employee is assigned the task.
11.8 Operational Behaviour
Virtual personnel exhibit realistic operational behaviour.
Examples include:
Walking between facility zones.
Taking scheduled breaks.
Completing work at different speeds.
Reporting shortages of consumables.
Escalating unresolved issues.
Rejecting tasks if unavailable.
Waiting for supervisor approval.
Beginning new work after previous tasks are completed.
These behaviours contribute to a more believable simulation.
11.9 Manager → Supervisor → Cleaner Workflow
One of the simulator's core demonstrations is the delegation of work through the organisational hierarchy.
Scheduler
 
↓
 
Task Engine
 
↓
 
Manager Reviews Operational Queue
 
↓
 
Supervisor Receives Task
 
↓
 
Supervisor Selects Cleaner
 
↓
 
Cleaner Accepts Assignment
 
↓
 
Cleaner Travels
 
↓
 
Cleaner Completes Task
 
↓
 
Supervisor Inspects
 
↓
 
Manager Dashboard Updated
 
↓
 
Report Generated
This workflow showcases the collaborative nature of facility operations and aligns directly with the handoff process your boss requested.
11.10 Workforce Business Rules
The Workforce Simulation Engine shall enforce the following rules:
Employees may only work during active shifts.
Employees may perform only one task at a time unless multitasking is explicitly supported.
Supervisors cannot assign work to unavailable personnel.
Managers do not perform cleaning tasks.
Emergency tasks may interrupt routine work if configured.
Employees automatically return to the Available state after completing approved tasks.
11.11 Exceptional Scenarios
The engine shall support operational exceptions such as:
Cleaner declines a task.
Supervisor unavailable.
No qualified cleaner available.
Employee shift ends before task completion.
Employee goes on break.
Task reassignment due to escalation.
Multiple critical incidents occurring simultaneously.
In these cases, the Workforce Engine coordinates with the Task Engine and Scheduler to determine the next appropriate action.
11.12 Acceptance Criteria
The Workforce Simulation Engine will be considered complete when:
Virtual employees are created from the selected scenario.
Employees transition through operational states correctly.
Tasks are assigned according to business rules.
Manager → Supervisor → Cleaner workflows execute successfully.
Workforce activity updates dashboards, notifications, and reports.
Operational exceptions are handled without disrupting the simulation.
11.13 Mapping to Implementation
Requirement
Planned Component
Workforce Engine
WorkforceEngine.js
Employee Model
Employee.js
Workforce Store
EmployeeStore.js
Assignment Logic
AssignmentEngine.js
Shift Management
ShiftManager.js
Workforce State Machine
EmployeeStateMachine.js
Workforce Events
EventBus.js

11.14 Future Enhancements
The Workforce Simulation Engine is designed to evolve beyond rule-based behaviour.
Potential future capabilities include:
AI-driven supervisor decision-making.
Dynamic workload balancing.
Fatigue and productivity modelling.
Employee learning and skill progression.
Route optimisation within facilities.
Voice-assisted virtual staff interactions.
Integration with digital twins and IoT occupancy data.
Reinforcement learning to improve assignment strategies over time.
11.15 Example Operational Narrative
The following illustrates a realistic sequence involving the digital workforce.
Simulation Time
Event
09:00
The Scheduler triggers the morning operational cycle.
09:01
The Task Engine creates a routine cleaning task for the Reception.
09:02
The Manager dashboard reflects the new operational workload.
09:03
Supervisor Sarah receives the task and evaluates available cleaners.
09:04
Cleaner David, who is nearby and currently available, is assigned the task.
09:05
David travels to the Reception area and begins cleaning.
09:18
Cleaning is completed, and the Supervisor performs an inspection.
09:20
The inspection passes, inventory is updated, KPIs are recalculated, and the task is archived.

This sequence demonstrates how work flows naturally through the organisational hierarchy, reinforcing the simulator's role as a realistic representation of day-to-day facility operations.
Chapter 12 — Workflow Engine (Business Process Orchestration)
12.0 Overview
The Workflow Engine is the orchestration layer of the SaniTrack Smart Facility Simulator.
While the Scheduler controls when events occur, the Task Engine defines what work needs to be done, and the Workforce Engine determines who performs the work, the Workflow Engine coordinates how work progresses through the organisation.
It ensures that operational activities follow realistic business processes by controlling the movement of work between managers, supervisors, cleaners, inspectors, inventory systems, reporting modules, analytics, and notifications.
The Workflow Engine is responsible for maintaining business process integrity throughout the simulation.
12.1 Business Purpose
Real facilities do not operate through isolated actions.
Instead, work moves through structured operational workflows.
For example:
A task is created.
↓
A supervisor assigns it.
↓
A cleaner performs the work.
↓
An inspection is completed.
↓
Inventory is deducted.
↓
KPIs are recalculated.
↓
Reports are updated.
↓
Notifications are generated.
↓
The task is archived.
The Workflow Engine guarantees that every operational event follows the correct sequence.
12.2 Functional Requirements
ID
Requirement
SIM-FR-044
The Workflow Engine shall coordinate all operational processes.
SIM-FR-045
Every task shall follow a predefined workflow.
SIM-FR-046
Workflow execution shall be event-driven.
SIM-FR-047
Business rules shall determine workflow transitions.
SIM-FR-048
Failed workflow steps shall trigger recovery or escalation procedures.
SIM-FR-049
Workflow execution shall generate audit events.
SIM-FR-050
Workflow definitions shall be configurable.

12.3 Workflow Responsibilities
The Workflow Engine is responsible for:
Coordinating task progression.
Triggering assignment workflows.
Managing approvals.
Initiating inspections.
Updating inventory.
Publishing notifications.
Recalculating KPIs.
Generating reports.
Closing completed work.
Escalating failures.
It does not perform operational work itself.
Instead, it orchestrates interactions between specialised engines.
12.4 Workflow Architecture
            	Scheduler
 
                	│
 
                	▼
 
         	Workflow Engine
 
                	│
 
  	┌─────────────┼──────────────┐
 
  	▼         	▼          	▼
 
 Task Engine   Workforce Engine  Incident Engine
 
      │         	│          	│
 
  	▼         	▼          	▼
 
 Inventory    Notifications	Analytics
 
  	│         	│          	│
 
  	└─────────────┼──────────────┘
 
                	▼
 
          	Report Engine
 
         	       ▼
 
            	Dashboard
The Workflow Engine acts as the central coordinator while allowing each engine to remain independently maintainable.
12.5 Standard Cleaning Workflow
The following illustrates the default cleaning process.
Task Generated
 
↓
 
Supervisor Assignment
 
↓
 
Cleaner Accepts
 
↓
 
Travel
 
↓
 
Cleaning Starts
 
↓
 
Cleaning Completed
 
↓
 
Supervisor Inspection
 
↓
 
Inspection Passed
 
↓
 
Inventory Updated
 
↓
 
KPIs Updated
 
↓
 
Report Updated
 
↓
 
Task Closed
This represents the baseline workflow for routine operational activities.
12.6 Emergency Workflow
Emergency incidents require an alternative process.
Incident Detected
 
↓
 
Emergency Task Created
 
↓
 
Critical Priority Assigned
 
↓
 
Supervisor Alerted
 
↓
 
Nearest Qualified Cleaner Assigned
 
↓
 
Emergency Cleaning
 
↓
 
Inspection
 
↓
 
Incident Closed
 
↓
 
Compliance Updated
 
↓
 
Report Generated
Emergency workflows bypass routine scheduling to minimise response times.
12.7 Inspection Workflow
Task Completed
 
↓
 
Inspection Scheduled
 
↓
 
Supervisor Inspection
 
↓
 
Pass?
 
───────┬────────
 
Yes 	No
 
│    	│
 
▼    	▼
 
Close	Rework Required
 
│    	│
 
▼    	▼
 
Archive  Generate New Task
 
     	│
 
     	▼
 
 	Reassignment
This ensures that failed work is corrected before being marked as complete.
12.8 Inventory Workflow
Operational tasks often require consumable resources.
Task Starts
 
↓
 
Required Supplies Checked
 
↓
 
Inventory Available?
 
──────┬─────────
 
Yes	No
 
│   	│
 
▼   	▼
 
Consume  Low Stock Alert
 
│   	│
 
▼   	▼
 
Update Inventory
 
↓
 
Continue Task
Inventory shortages can trigger replenishment tasks or operational alerts.
12.9 Notification Workflow
Significant workflow events generate notifications.
Examples include:
Task assigned.
Task accepted.
Task completed.
Inspection failed.
Inventory below threshold.
Incident reported.
Incident resolved.
KPI target missed.
Notifications are delivered to the appropriate roles based on configured business rules.
12.10 KPI Update Workflow
The Workflow Engine coordinates operational metrics.
Task Closed
 
↓
 
Update Productivity
 
↓
 
Update Compliance
 
↓
 
Update Response Time
 
↓
 
Update Completion Rate
 
↓
 
Refresh Dashboard
 
↓
 
Generate Trend Data
This ensures that dashboards reflect the current operational state.
12.11 Workflow Business Rules
The Workflow Engine shall enforce the following rules:
Every workflow begins with a valid trigger.
Steps execute in the configured sequence.
Mandatory approvals cannot be skipped.
Failed inspections automatically initiate rework workflows.
Critical incidents take precedence over routine processes.
Workflow completion updates operational history and analytics.
Every transition is recorded for audit purposes.
12.12 Workflow State Machine
Each workflow progresses through controlled states.
Created
 
↓
 
Ready
 
↓
 
Executing
 
↓
 
Waiting
 
↓
 
Completed
 
↓
 
Archived
Exception paths include:
Executing
 
↓
 
Failed
 
↓
 
Retry
 
↓
 
Executing
or
Executing
 
↓
 
Escalated
 
↓
 
Manager Review
 
↓
 
Continue
These states provide resilience while preserving operational continuity.
12.13 Acceptance Criteria
The Workflow Engine will be considered complete when:
Tasks progress through defined workflows.
Workflow transitions follow business rules.
Inventory, notifications, reports, and KPIs are updated automatically.
Failed steps trigger appropriate recovery actions.
Workflow history is retained for reporting and auditing.
Workflow definitions can be modified without changing core engine logic.
12.14 Mapping to Implementation
Requirement
Planned Component
Workflow Engine
WorkflowEngine.js
Workflow Definitions
workflows/*.json
Workflow State Machine
WorkflowStateMachine.js
Approval Rules
ApprovalRules.js
Escalation Logic
EscalationEngine.js
Workflow Events
EventBus.js
Audit Logging
AuditTrail.js

12.15 Future Enhancements
The architecture supports future capabilities such as:
Graphical workflow designer for administrators.
AI-assisted workflow optimisation.
Parallel workflow execution.
Conditional branching based on live KPIs.
Cross-facility workflows.
Integration with BPMN 2.0 process definitions.
Approval chains involving multiple organisational levels.
12.16 Example Operational Narrative
The following example demonstrates how multiple engines collaborate through the Workflow Engine:
Simulation Time
Event
10:00
The Scheduler advances the simulation clock and publishes a CLOCK_TICK event.
10:01
The Task Engine creates a scheduled restroom cleaning task.
10:02
The Workflow Engine initiates the "Routine Cleaning" workflow.
10:03
The Workforce Engine assigns Supervisor Grace to oversee the task.
10:04
Supervisor Grace assigns Cleaner Musa, who is available and nearby.
10:06
Cleaner Musa travels to the location and begins work.
10:18
Cleaning is completed; the Inventory Engine deducts disinfectant and gloves used.
10:20
Supervisor Grace performs the inspection and approves the work.
10:21
The Analytics Engine recalculates productivity and compliance KPIs.
10:22
The Notification Engine informs the Manager that the task has been completed.
10:23
The Report Engine records the activity, and the Dashboard refreshes automatically.

This narrative illustrates how a single operational task propagates through multiple components while maintaining a realistic and auditable workflow.
 
Chapter 13 — Inventory Management Engine
13.0 Overview
The Inventory Management Engine is responsible for simulating the lifecycle of operational supplies, consumables, cleaning equipment, and facility resources used during simulated activities.
Rather than maintaining static inventory values, the engine continuously tracks stock movement as tasks are performed. Every cleaning activity, inspection, emergency response, and maintenance operation consumes resources according to predefined business rules.
The Inventory Management Engine ensures that operational work has realistic dependencies on available supplies and demonstrates how inventory levels influence facility operations.
13.1 Business Purpose
Inventory is a critical operational dependency in facility management.
Cleaning cannot be completed without consumables such as disinfectants, gloves, mops, soap, waste bags, or paper products.
The purpose of the Inventory Management Engine is to demonstrate how operational activities affect stock levels and how inventory shortages influence the ability to complete work.
This creates a realistic operational environment where resources are finite and require monitoring, replenishment, and reporting.
13.2 Functional Requirements
ID
Requirement
SIM-FR-051
The simulator shall maintain inventory for every facility scenario.
SIM-FR-052
Operational tasks shall consume inventory based on predefined rules.
SIM-FR-053
The simulator shall prevent tasks from consuming unavailable inventory.
SIM-FR-054
Low-stock thresholds shall generate alerts and replenishment tasks.
SIM-FR-055
Inventory levels shall update dashboards and reports in real time.
SIM-FR-056
Inventory history shall be retained for analytics and auditing.
SIM-FR-057
Inventory replenishment shall be simulated automatically or manually, depending on the scenario.

 
13.3 Inventory Categories
The simulator supports multiple inventory categories.
Category
Examples
Cleaning Chemicals
Disinfectant, Bleach, Glass Cleaner
Personal Protective Equipment
Gloves, Face Masks, Aprons
Cleaning Equipment
Mops, Buckets, Vacuum Cleaners
Disposable Supplies
Waste Bags, Paper Towels, Tissues
Hygiene Products
Hand Soap, Sanitiser
Maintenance Items
Light Bulbs, Batteries (future)

Each category may have unique consumption rules and replenishment behaviour.
13.4 Inventory Item Attributes
Every inventory item shall include the following attributes.
Attribute
Description
Item ID
Unique identifier
Name
Display name
Category
Inventory classification
Unit of Measure
Bottles, Litres, Pieces, Boxes
Current Quantity
Current available stock
Maximum Capacity
Maximum storage capacity
Reorder Threshold
Minimum quantity before replenishment
Consumption Rate
Default usage per task
Status
In Stock, Low Stock, Out of Stock
Last Updated
Simulation timestamp

These attributes support inventory tracking, reporting, and operational decision-making.
13.5 Inventory Lifecycle
Every inventory item progresses through a lifecycle.
Stock Loaded
 
↓
 
Available
 
↓
 
Reserved for Task
 
↓
 
Consumed
 
↓
 
Quantity Updated
 
↓
 
Threshold Checked
 
↓
 
Low Stock?
 
──────┬────────
 
No 	Yes
 
│   	│
 
▼   	▼
 
Continue  Generate Replenishment Task
 
      	│
 
      	▼
 
Receive Stock
 
↓
 
Restored
This lifecycle ensures that inventory behaves realistically throughout the simulation.
13.6 Consumption Logic
Inventory consumption is directly linked to task execution.
Example:
Task
Consumables
Restroom Cleaning
Soap, Disinfectant, Gloves
Office Cleaning
Waste Bags, Surface Cleaner
Chemical Spill
Spill Kit, Gloves, Hazard Bags
Deep Cleaning
Disinfectant, Mop Heads, PPE
Waste Collection
Waste Bags, Gloves

Consumption occurs only after the task reaches the In Progress state and is confirmed as completed.
13.7 Inventory Allocation Workflow
Before a task begins, required supplies are validated.
Task Ready
 
↓
 
Determine Required Supplies
 
↓
 
Check Inventory
 
↓
 
Available?
 
──────┬────────
 
Yes 	No
 
│   	│
 
▼   	▼
 
Reserve Stock   Notify Supervisor
 
│           	│
 
▼           	▼
 
Start Task   Generate Replenishment Task
This prevents unrealistic situations where tasks consume supplies that do not exist.
13.8 Low Stock & Replenishment
When inventory falls below its reorder threshold:
1. A Low Stock event is published.
2. The Notification Engine alerts the Supervisor or Manager.
3. A replenishment task may be generated automatically.
4. The Dashboard displays a warning.
5. Reports reflect the inventory status.
Example:
Item
Threshold
Current
Status
Gloves
200 pairs
180 pairs
Low Stock
Disinfectant
50 L
48 L
Low Stock
Waste Bags
500
510
In Stock

 
13.9 Inventory Business Rules
The Inventory Management Engine shall enforce the following rules:
Inventory cannot become negative.
Consumables are deducted only once per completed task.
Reserved inventory cannot be allocated to another task.
Replenishment restores stock up to the configured maximum or delivery quantity.
Emergency tasks may reserve inventory before routine tasks if supplies are limited.
Inventory updates are timestamped for audit and reporting.
13.10 Exceptional Scenarios
The engine shall support exceptional inventory conditions such as:
Item out of stock.
Delivery delayed.
Incorrect inventory count.
Damaged supplies removed from stock.
Emergency consumption exceeding expected usage.
Multiple high-priority tasks competing for the same resources.
The Workflow Engine coordinates appropriate recovery actions, including reassignment, replenishment, or task delay.
13.11 Acceptance Criteria
The Inventory Management Engine will be considered complete when:
Inventory is initialised from the selected scenario.
Tasks consume inventory according to business rules.
Low-stock alerts are generated automatically.
Replenishment restores inventory levels.
Dashboard values update in real time.
Inventory history is available for reports and analytics.
Inventory shortages influence operational workflows realistically.
13.12 Mapping to Implementation
Requirement
Planned Component
Inventory Engine
InventoryEngine.js
Inventory Model
InventoryItem.js
Inventory Store
InventoryStore.js
Consumption Rules
ConsumptionRules.js
Replenishment Service
ReplenishmentEngine.js
Inventory Events
EventBus.js
Inventory Dashboard Widget
InventoryPanel.js

13.13 Future Enhancements
The architecture supports future capabilities including:
Barcode and QR-code simulation.
Warehouse location management.
Supplier lead-time simulation.
Automatic purchase order generation.
Predictive inventory forecasting using AI.
Multi-warehouse inventory balancing.
IoT-connected smart dispensers reporting live stock usage.
13.14 Example Operational Narrative
Simulation Time
Event
11:00
A restroom cleaning task is assigned to Cleaner Amina.
11:02
The Inventory Engine reserves 250 ml of disinfectant, one pair of gloves, and one waste bag.
11:10
The cleaning task is completed successfully.
11:11
Reserved items are marked as consumed and inventory quantities decrease.
11:12
Disinfectant falls below its reorder threshold.
11:13
The Event Bus publishes an INVENTORY_LOW event.
11:14
The Notification Engine alerts the Supervisor and Manager.
11:15
The Workflow Engine creates a replenishment task.
11:30
A simulated delivery arrives and stock is replenished to the configured level.

This narrative demonstrates how inventory changes become visible operational events rather than static data.
Chapter 14 — Incident Management Engine
14.0 Overview
The Incident Management Engine is responsible for generating, managing, escalating, and resolving unexpected operational events throughout the Smart Facility Simulator.
Unlike scheduled operational activities, incidents represent unplanned disruptions that require immediate or prioritized responses.
Examples include chemical spills, equipment failures, water leaks, biohazards, failed inspections, blocked walkways, customer complaints, and emergency cleaning requests.
The Incident Management Engine continuously evaluates facility conditions and introduces realistic operational disruptions according to configurable probabilities and business rules.
These disruptions demonstrate how SaniTrack coordinates emergency response, task prioritization, workforce allocation, inventory usage, compliance monitoring, and reporting under real-world conditions.
14.1 Business Purpose
Real facilities are dynamic environments.
Unexpected events occur daily and require rapid operational responses.
The purpose of the Incident Management Engine is to simulate these events so that users can observe how SaniTrack manages operational disruption while maintaining compliance and service quality.
Rather than presenting a perfectly controlled environment, the simulator demonstrates resilience, responsiveness, and operational decision-making.
14.2 Functional Requirements
ID
Requirement
SIM-FR-058
The simulator shall generate random incidents based on configurable probabilities.
SIM-FR-059
Every incident shall have a defined type, severity, and location.
SIM-FR-060
Incidents shall automatically generate operational workflows.
SIM-FR-061
Critical incidents shall override routine operational priorities where applicable.
SIM-FR-062
Incident resolution shall update KPIs, reports, and dashboards.
SIM-FR-063
Incident history shall be retained for audit and analytics.
SIM-FR-064
Incident generation shall respect scenario-specific risk profiles.


14.3 Supported Incident Types
The simulator initially supports the following incident categories.
Category
Examples
Chemical Hazard
Chemical spill, disinfectant leak
Biological Hazard
Blood spill, infectious waste
Equipment Failure
Vacuum failure, floor scrubber malfunction
Water Incident
Flood, leaking pipe, wet floor
Safety Hazard
Blocked exit, broken glass, exposed wiring
Inspection Failure
Hygiene audit failure, missed cleaning
Customer Complaint
Dirty restroom, overflowing bin
Operational
Staff shortage, delayed cleaning

Each incident type has its own response workflow and business rules.
14.4 Incident Attributes
Every incident shall include the following information.
Attribute
Description
Incident ID
Unique identifier
Incident Type
Category of event
Severity
Critical, High, Medium, Low
Facility
Associated facility
Zone
Physical location
Time Reported
Simulation timestamp
Status
Open, Assigned, In Progress, Resolved, Closed
Related Task
Emergency task reference
Assigned Personnel
Supervisor and cleaner
Resolution Time
Time taken to resolve
Root Cause
Optional classification

These attributes support reporting, auditing, and analytics.
14.5 Incident Severity Levels
Incident severity determines operational priority.
Severity
Examples
Response
Critical
Biohazard, Major Chemical Spill, Fire Alarm
Immediate response; interrupts routine work
High
Equipment Failure, Water Leak
High-priority task; supervisor notification
Medium
Failed Inspection, Customer Complaint
Scheduled within defined SLA
Low
Minor housekeeping issue
Added to routine operational queue

Higher-severity incidents are processed before lower-priority work.
14.6 Incident Generation Workflow
The Scheduler periodically evaluates whether an incident should occur.
Simulation Tick
 
↓
 
Evaluate Risk Profile
 
↓
 
Generate Random Value
 
↓
 
Probability Threshold Reached?
 
────────┬────────
 
No   	Yes
 
│     	│
 
▼     	▼
 
Continue   Create Incident
 
       	│
 
       	▼
 
Publish INCIDENT_CREATED Event
This ensures that incidents occur naturally rather than at fixed intervals.
14.7 Incident Response Workflow
Once an incident is generated, the Workflow Engine coordinates the response.
Incident Created
 
↓
 
Determine Severity
 
↓
 
Generate Emergency Task
 
↓
 
Notify Supervisor
 
↓
 
Assign Qualified Cleaner
 
↓
 
Reserve Inventory
 
↓
 
Respond to Incident
 
↓
 
Supervisor Inspection
 
↓
 
Resolve Incident
 
↓
 
Update KPIs
 
↓
 
Generate Report
This workflow integrates multiple simulation engines into a single operational process.
14.8 Escalation Workflow
If an incident is not resolved within its Service Level Agreement (SLA), it is escalated.
Incident Open
 
↓
 
Monitor Resolution Time
 
↓
 
SLA Exceeded?
 
──────┬────────
 
No 	Yes
 
│   	│
 
▼   	▼
 
Continue Notify Manager
 
     	│
 
  	   ▼
 
Increase Priority
 
↓
 
Reassign Resources
 
↓
 
Continue Response
Escalation ensures that unresolved issues receive appropriate attention.
14.9 Scenario Risk Profiles
Different facility types present different operational risks.
Facility Type
Common Incidents
Hospital
Biohazards, blood spills, infectious waste
Hotel
Guest complaints, room turnaround delays
Airport
High-traffic spills, restroom shortages
Warehouse
Equipment failures, loading bay hazards
School
Cafeteria spills, restroom issues
Manufacturing Plant
Chemical leaks, machinery breakdowns

The Incident Management Engine adjusts incident probabilities based on the selected scenario.
14.10 Business Rules
The Incident Management Engine shall enforce the following rules:
Every incident must be associated with a facility and location.
Critical incidents pre-empt routine work where appropriate.
Incident response requires qualified personnel.
Incident resolution cannot be completed until mandatory inspections pass.
Every incident generates an audit record.
Resolved incidents remain available for historical reporting.
14.11 Exceptional Scenarios
The engine shall support complex operational situations, including:
Multiple simultaneous incidents.
Resource shortages during emergency response.
Supervisor unavailable.
Inventory unavailable for incident response.
Escalation to Facility Manager.
Reopened incidents following failed inspections.
These scenarios demonstrate how SaniTrack manages operational complexity without disrupting the simulation.
14.12 Acceptance Criteria
The Incident Management Engine will be considered complete when:
Incidents are generated according to configured probabilities.
Emergency workflows are initiated automatically.
Incident severity influences task prioritization.
Response activities update dashboards, notifications, reports, and KPIs.
Escalation rules function correctly.
Historical incident records are available for analysis.
14.13 Mapping to Implementation
Requirement
Planned Component
Incident Engine
IncidentEngine.js
Incident Model
Incident.js
Risk Profile Manager
RiskProfile.js
Incident Rules
IncidentRules.js
Escalation Manager
EscalationEngine.js
Incident Store
IncidentStore.js
Incident Events
EventBus.js

 
14.14 Future Enhancements
The Incident Management Engine is designed to support future capabilities such as:
Weather-driven incident generation.
IoT sensor-triggered incidents (for example, leak detectors or air quality monitors).
AI-based anomaly detection.
Predictive incident forecasting.
Regional compliance variations.
Multi-facility incident coordination.
External emergency service integration.
14.15 Example Operational Narrative
Simulation Time
Event
13:00
The Scheduler advances the simulation clock.
13:02
The Risk Profile Manager determines that a chemical spill event should occur in the Laboratory.
13:03
A Critical incident is created, and an INCIDENT_CREATED event is published.
13:04
The Workflow Engine creates an emergency cleaning task.
13:05
Supervisor Chinedu assigns the nearest qualified cleaner, Ada.
13:06
The Inventory Engine reserves a spill kit, gloves, and hazardous waste bags.
13:20
Ada completes the clean-up, and Supervisor Chinedu performs a successful inspection.
13:22
The incident is resolved, inventory is consumed, KPIs are recalculated, reports are updated, and the Dashboard reflects the restored operational status.

This narrative demonstrates how unexpected events ripple through the simulator while maintaining realistic operational workflows.
 
Chapter 15 — Notification & Activity Feed Engine
15.0 Overview
The Notification & Activity Feed Engine is responsible for communicating operational events to users throughout the Smart Facility Simulator.
As the simulation executes, every significant business event is transformed into user-visible notifications and activity feed entries.
These updates provide continuous visibility into facility operations and allow users to observe how tasks, incidents, inventory, workforce, inspections, and reports evolve over time.
The Notification & Activity Feed Engine serves as the communication layer between the simulation engines and the user interface.
15.1 Business Purpose
Modern facility management platforms rely heavily on real-time operational awareness.
Managers, supervisors, and operators need immediate visibility into important events without manually refreshing dashboards or searching through reports.
The purpose of this engine is to ensure that all meaningful operational changes are surfaced automatically, enabling users to follow the progression of the simulation as if they were monitoring a live facility.
15.2 Functional Requirements
ID
Requirement
SIM-FR-065
The simulator shall generate notifications for significant operational events.
SIM-FR-066
The simulator shall maintain a chronological activity feed.
SIM-FR-067
Notifications shall be role-aware where applicable.
SIM-FR-068
Activity entries shall include timestamps and event metadata.
SIM-FR-069
Notification severity shall be configurable.
SIM-FR-070
Users shall be able to filter activity by category.
SIM-FR-071
Historical notifications shall remain available during the simulation session.

 
15.3 Notification Categories
Notifications are grouped into operational categories.
Category
Examples
Task
Task created, assigned, completed
Workforce
Employee available, shift started, task accepted
Incident
Chemical spill, equipment failure, emergency response
Inventory
Low stock, replenishment completed
Inspection
Passed, failed, rework required
KPI
SLA achieved, compliance updated
Reports
Daily report generated
System
Simulation started, paused, resumed, reset

These categories help users quickly identify the nature of each event.
15.4 Notification Severity Levels
Each notification carries a severity level.
Severity
Description
Information
Routine operational updates
Success
Successful task completion or milestone
Warning
Potential operational concern
Critical
Immediate action required

Severity determines iconography, highlighting, and display priority in the user interface.
15.5 Notification Workflow
Every engine communicates through the Event Bus.
When an event is published, the Notification Engine evaluates whether user communication is required.
Simulation Event
 
↓
 
Event Bus
 
↓
 
Notification Engine
 
↓
 
Determine Event Type
 
↓
 
Determine Audience
 
↓
 
Generate Notification
 
↓
 
Display Notification
 
↓
 
Archive Notification
This event-driven approach keeps communication consistent across the platform.
15.6 Activity Feed Workflow
Unlike notifications, which emphasise important events, the Activity Feed provides a running operational history.
Simulation Event
 
↓
 
Activity Feed Engine
 
↓
 
Format Entry
 
↓
 
Attach Timestamp
 
↓
 
Append to Feed
 
↓
 
Refresh Dashboard
The feed acts as an operational timeline, allowing users to review the sequence of simulation events.
15.7 Example Activity Feed Entries
Simulation Time
Activity
08:00
Simulation started
08:02
Morning cleaning schedule generated
08:04
Supervisor Grace assigned Cleaner Musa to Reception
08:10
Cleaning in Reception started
08:18
Reception cleaning completed
08:20
Supervisor inspection passed
08:21
Inventory updated: Disinfectant -250 ml
08:23
KPI dashboard refreshed
08:25
Daily compliance report generated

These entries help users understand exactly what has occurred throughout the simulation.
15.8 Role-Based Notifications
Different users receive different notifications based on their responsibilities.
Role
Typical Notifications
Manager
KPI updates, escalations, reports, critical incidents
Supervisor
Task assignments, inspection requests, low stock alerts
Cleaner
New assignments, task reminders, completion confirmations
Administrator
System events, simulation status, configuration changes

Role-based filtering reduces information overload and mirrors real-world operational systems.
15.9 Business Rules
The Notification & Activity Feed Engine shall enforce the following rules:
Every notification must originate from a valid simulation event.
Notifications include a timestamp and source engine.
Critical notifications remain visible until acknowledged or resolved.
Duplicate notifications are suppressed where appropriate.
Activity feed entries are immutable once recorded.
Notification history is retained for the duration of the simulation session.
15.10 Exceptional Scenarios
The engine shall support situations such as:
Burst notifications during multiple simultaneous incidents.
Notification suppression for repetitive events.
Delayed delivery when the interface is paused.
Recovery after simulation resume.
Aggregation of similar notifications (e.g., multiple low-stock alerts).
These behaviours ensure the communication layer remains clear and useful during busy operational periods.
15.11 Acceptance Criteria
The Notification & Activity Feed Engine will be considered complete when:
Significant operational events generate notifications automatically.
Activity feed entries are displayed in chronological order.
Role-based filtering functions correctly.
Notification severity is reflected in the interface.
Historical events remain accessible throughout the session.
Dashboard updates occur without manual refresh.
15.12 Mapping to Implementation
Requirement
Planned Component
Notification Engine
NotificationEngine.js
Activity Feed Engine
ActivityFeedEngine.js
Notification Store
NotificationStore.js
Activity Feed Store
ActivityFeedStore.js
Notification Rules
NotificationRules.js
Event Dispatcher
EventBus.js
Dashboard Widgets
NotificationPanel.js, ActivityFeedPanel.js

15.13 Future Enhancements
The architecture supports future capabilities such as:
Email and SMS notification simulation.
Push notification previews for mobile users.
AI-generated summaries of operational activity.
Natural language explanations of incidents.
Voice announcements for critical alerts.
Multi-language notification templates.
Integration with collaboration platforms such as Microsoft Teams or Slack.
15.14 Example Operational Narrative
Simulation Time
Event
14:00
A routine corridor cleaning task is generated.
14:01
The Notification Engine sends a task assignment notification to Supervisor Grace.
14:02
The Activity Feed records that Cleaner Musa accepted the assignment.
14:10
A chemical spill occurs in the Laboratory.
14:10
A critical notification is displayed to the Manager and Supervisor.
14:11
The Activity Feed records the creation of an emergency cleaning task.
14:25
The incident is resolved and a success notification is generated.
14:26
The KPI dashboard refreshes, and the Activity Feed records completion of the emergency workflow.

This narrative demonstrates how notifications and activity feed entries provide continuous visibility into operational events.
 
Chapter 16 — KPI, Analytics & Reporting Engine
16.0 Overview
The KPI, Analytics & Reporting Engine is responsible for collecting operational data from every simulation engine, calculating business performance metrics, generating analytical insights, and producing management reports throughout the simulation.
Rather than simply recording operational events, the engine continuously evaluates the health, efficiency, compliance, and productivity of the virtual facility.
Every completed task, inventory transaction, incident, inspection, and workforce activity contributes to the facility's operational performance indicators.
The KPI, Analytics & Reporting Engine transforms operational activity into actionable management information.
16.1 Business Purpose
Facility managers require visibility into operational performance to make informed decisions.
The purpose of this engine is to demonstrate how SaniTrack converts operational events into measurable business outcomes.
Rather than requiring users to manually calculate productivity or compliance, the simulator continuously updates dashboards, trend charts, scorecards, and reports as the simulation progresses.
This allows users to observe the operational impact of workforce decisions, incident management, and inventory utilisation in real time.
16.2 Functional Requirements
ID
Requirement
SIM-FR-072
The simulator shall calculate operational KPIs continuously.
SIM-FR-073
KPI values shall update automatically after relevant events.
SIM-FR-074
Analytical trends shall be generated throughout the simulation.
SIM-FR-075
Reports shall be generated automatically according to configurable schedules.
SIM-FR-076
Reports shall include operational summaries and historical performance.
SIM-FR-077
KPI calculations shall be configurable per scenario.
SIM-FR-078
Historical KPI data shall remain available throughout the simulation session.

 
16.3 KPI Categories
The simulator supports multiple categories of Key Performance Indicators.
Category
Examples
Productivity
Tasks completed, work completed per cleaner
Compliance
Inspection pass rate, hygiene score
Workforce
Employee utilisation, shift efficiency
Incident
Number of incidents, average response time
Inventory
Consumption rate, low-stock events
SLA
Tasks completed within target time
Quality
Rework rate, failed inspections
Operational
Facility health score

Each category provides a different perspective on operational performance.
16.4 Core KPIs
The following KPIs are calculated continuously during the simulation.
KPI
Formula
Task Completion Rate
Completed Tasks ÷ Generated Tasks × 100
SLA Compliance
Tasks Within SLA ÷ Total Tasks × 100
Inspection Pass Rate
Passed Inspections ÷ Total Inspections × 100
Incident Resolution Time
Average Resolution Duration
Workforce Utilisation
Active Time ÷ Shift Time × 100
Inventory Consumption
Total Quantity Consumed
Compliance Score
Weighted Operational Score
Facility Health Score
Composite Operational Metric

These KPIs update automatically as simulation events occur.
16.5 KPI Update Workflow
Every operational event is evaluated to determine whether KPI recalculation is required.
Simulation Event
 
↓
 
Event Bus
 
↓
 
Analytics Engine
 
↓
 
Determine Affected KPIs
 
↓
 
Recalculate Metrics
 
↓
 
Store KPI History
 
↓
 
Refresh Dashboard
 
↓
 
Generate Trend Data
This event-driven workflow ensures that management information remains current.
16.6 Dashboard Analytics
The Dashboard displays real-time operational metrics.
Typical dashboard widgets include:
Widget
Description
Tasks Completed
Current completion count
Active Tasks
Tasks currently in progress
Compliance Score
Overall operational compliance
Incident Counter
Open and resolved incidents
Inventory Status
Current stock health
Workforce Status
Available vs busy personnel
SLA Performance
Percentage meeting targets
Facility Health
Overall operational score

Each widget updates automatically without user interaction.
16.7 Trend Analysis
The Analytics Engine continuously builds historical trend data.
Example metrics include:
Task completion over time.
Incident frequency by hour.
Inventory consumption by category.
Workforce productivity by shift.
Compliance trend.
Average response time.
Supervisor workload.
Cleaner performance.
Trend analysis enables users to identify operational patterns rather than isolated events.
16.8 Report Types
The simulator generates several report types.
Report
Purpose
Operational Summary
Current facility status
Shift Report
Shift performance
Incident Report
Incident history
Inventory Report
Stock movement
Workforce Report
Employee productivity
Compliance Report
Inspection results
KPI Report
Performance scorecard
Executive Dashboard
High-level management overview

Reports may be generated automatically or on demand.
16.9 Report Generation Workflow
Scheduled Time
 
↓
 
Collect Operational Data
 
↓
 
Calculate KPIs
 
↓
 
Generate Charts
 
↓
 
Build Report
 
↓
 
Publish Report
 
↓
 
Notify Manager
This workflow ensures consistent reporting throughout the simulation.
16.10 Business Rules
The KPI, Analytics & Reporting Engine shall enforce the following rules:
KPIs must be calculated from validated operational data.
Every KPI update shall include a timestamp.
Reports shall reflect the latest available data.
Historical KPI values shall not be modified retroactively.
Dashboard values shall remain synchronised with the underlying analytics.
Report generation shall not interrupt simulation execution.
16.11 Exceptional Scenarios
The engine shall support exceptional analytical situations such as:
Missing operational data.
Delayed KPI updates.
Simultaneous report generation during high activity.
KPI recalculation following incident resolution.
Dashboard recovery after simulation pause and resume.
These scenarios ensure reliable reporting under varying operational conditions.
16.12 Acceptance Criteria
The KPI, Analytics & Reporting Engine will be considered complete when:
KPIs update automatically following operational events.
Dashboard widgets reflect current operational status.
Historical trends are maintained throughout the session.
Reports are generated according to schedule.
KPI calculations remain accurate across all scenarios.
Reports include timestamps, summaries, and supporting metrics.
16.13 Mapping to Implementation
Requirement
Planned Component
Analytics Engine
AnalyticsEngine.js
KPI Calculator
KPIEngine.js
Report Generator
ReportEngine.js
Dashboard Store
DashboardStore.js
Trend Calculator
TrendEngine.js
Chart Builder
ChartService.js
Analytics Events
EventBus.js

16.14 Future Enhancements
The architecture supports future capabilities including:
AI-generated executive summaries.
Predictive KPI forecasting.
Benchmarking across multiple facilities.
Interactive drill-down dashboards.
Export to PDF, Excel, and PowerPoint.
Custom KPI builder for administrators.
Machine learning models for anomaly detection and operational optimisation.
16.15 Example Operational Narrative
Simulation Time
Event
15:00
The morning shift completes 48 cleaning tasks.
15:02
Two inspection failures trigger rework tasks.
15:05
A chemical spill is resolved within the target SLA.
15:07
The Analytics Engine recalculates compliance, productivity, and response time metrics.
15:10
The Dashboard updates to show a 96% compliance score, 92% SLA performance, and 89% workforce utilisation.
15:15
The Report Engine generates the shift summary report and notifies the Facility Manager.

This narrative demonstrates how operational activity is transformed into meaningful business intelligence.
 
Chapter 17 — AI Decision Engine (Smart Autopilot Brain)
17.0 Overview
The AI Decision Engine is the autonomous control system responsible for directing the behaviour of the Smart Facility Simulator.
Unlike the Scheduler, which determines when activities occur, or the Workflow Engine, which determines how processes execute, the AI Decision Engine determines what should happen next.
It continuously evaluates the state of the simulated facility, analyses operational conditions, and makes decisions that create the appearance of an intelligent, self-operating facility.
The engine coordinates workload balancing, task prioritisation, workforce allocation, incident response, inventory management, and scenario progression without requiring user interaction.
It functions as the virtual operations manager for the simulator.
17.1 Business Purpose
The purpose of the AI Decision Engine is to transform the simulator from a scripted demonstration into a dynamic operational environment.
Instead of replaying predefined sequences, the engine evaluates the current state of the facility and makes autonomous decisions based on configurable business rules and operational objectives.
This allows every simulation session to evolve naturally while remaining consistent with realistic facility management practices.
17.2 Functional Requirements
ID
Requirement
SIM-FR-079
The simulator shall make autonomous operational decisions.
SIM-FR-080
Decisions shall be based on the current simulation state.
SIM-FR-081
The engine shall continuously evaluate workforce, inventory, incidents, and KPIs.
SIM-FR-082
The engine shall prioritise competing operational activities.
SIM-FR-083
Decision-making shall respect configurable business rules.
SIM-FR-084
Decisions shall generate auditable events.
SIM-FR-085
The AI Decision Engine shall operate without user interaction while Autopilot is enabled.

 
17.3 Decision Responsibilities
The AI Decision Engine is responsible for:
Selecting the next operational activity.
Prioritising work.
Balancing workforce utilisation.
Responding to incidents.
Triggering replenishment workflows.
Scheduling inspections.
Adjusting simulation pace when required.
Preventing unrealistic operational behaviour.
Coordinating long-running scenarios.
The engine does not directly perform operational work; it delegates actions to the appropriate simulation engines.
17.4 AI Decision Cycle
Every simulation tick initiates a decision cycle.
Simulation Tick
 
↓
 
Collect Current State
 
↓
 
Evaluate Business Rules
 
↓
 
Calculate Priorities
 
↓
 
Select Best Action
 
↓
 
Dispatch Commands
 
↓
 
Monitor Outcome
 
↓
 
Learn Operational Context
 
↓
 
Wait for Next Tick
This loop repeats continuously while the simulation is running.
17.5 Facility State Evaluation
Before making any decision, the engine gathers information from all major components.
Scheduler
 
↓
 
Task Engine
 
↓
 
Workforce Engine
 
↓
 
Inventory Engine
 
↓
 
Incident Engine
 
↓
 
Analytics Engine
 
↓
 
Dashboard State
 
↓
 
AI Decision Engine
The result is a complete operational snapshot of the facility.
17.6 Decision Categories
The engine makes decisions across several domains.
Category
Example Decisions
Task
Create, delay, cancel, reprioritise
Workforce
Assign cleaner, rebalance workload
Incident
Escalate, dispatch emergency response
Inventory
Trigger replenishment, delay non-critical tasks
Inspection
Schedule or repeat inspections
Reporting
Generate management reports
Simulation
Increase activity, reduce activity, inject new events

 
17.7 Decision Priority Model
When multiple actions compete for attention, the engine ranks them using a weighted priority model.
Example priority order:
Priority
Example
Critical
Fire alarm, biohazard, major chemical spill
High
Equipment failure, failed inspection
Medium
Scheduled cleaning, waste collection
Low
KPI refresh, routine reports

The engine always evaluates higher-priority activities first while ensuring routine work continues whenever possible.
17.8 Workload Balancing
The AI Decision Engine continuously monitors workforce utilisation.
Example evaluation factors include:
Current workload per cleaner.
Supervisor availability.
Shift schedules.
Distance to task location.
Required skills.
Existing task priorities.
Overtime thresholds (future).
The objective is to distribute work efficiently while maintaining realistic operational behaviour.
17.9 Adaptive Behaviour
The simulator should not produce identical demonstrations every time.
The AI Decision Engine introduces controlled variability by adjusting:
Task timing.
Incident frequency.
Workforce utilisation.
Inspection scheduling.
Inventory consumption.
Operational intensity.
This creates demonstrations that remain believable while avoiding repetitive patterns.
17.10 Business Rules
The AI Decision Engine shall enforce the following rules:
Decisions must be based on the current simulation state.
Critical incidents override routine operational activities where appropriate.
No employee may be assigned conflicting work.
Inventory shortages influence task selection.
Compliance requirements cannot be bypassed.
Every decision must generate an audit event for traceability.
17.11 Exceptional Scenarios
The engine shall handle situations such as:
Multiple critical incidents occurring simultaneously.
No available qualified personnel.
Inventory shortages delaying emergency work.
Repeated inspection failures.
High workload requiring task redistribution.
Conflicting operational priorities.
The engine resolves these conflicts by applying configured business rules and priority policies.
17.12 Acceptance Criteria
The AI Decision Engine will be considered complete when:
The simulator operates autonomously while Autopilot is enabled.
Decisions are based on current operational conditions.
Workloads remain balanced across the workforce.
Incidents trigger appropriate responses.
Operational decisions update dashboards, reports, KPIs, and notifications.
Simulation sessions produce varied yet realistic outcomes.
17.13 Mapping to Implementation
Requirement
Planned Component
AI Decision Engine
DecisionEngine.js
Decision Rules
DecisionRules.js
Priority Calculator
PriorityEngine.js
Workload Balancer
WorkloadBalancer.js
State Evaluator
FacilityState.js
Decision Logger
DecisionAudit.js
Decision Events
EventBus.js

 
17.14 Future Enhancements
The architecture supports future AI capabilities such as:
Reinforcement learning for workload optimisation.
Predictive incident prevention.
AI-generated staffing recommendations.
Natural language operational summaries.
Multi-facility optimisation.
Integration with large language models to explain decisions in plain English.
Digital twin optimisation based on historical operational data.
17.15 Example Operational Narrative
Simulation Time
Event
16:00
The Scheduler advances the simulation clock.
16:01
The AI Decision Engine evaluates the facility state and identifies three pending cleaning tasks and one high-priority equipment failure.
16:02
The engine assigns the nearest qualified cleaner to the equipment failure and delays a low-priority corridor cleaning task.
16:05
Inventory levels indicate a shortage of disinfectant, so the engine generates a replenishment workflow before scheduling another deep-cleaning task.
16:08
A supervisor becomes available, and the engine immediately schedules overdue inspections.
16:15
KPIs are recalculated, notifications are issued, and the Dashboard reflects the updated operational priorities.

This example demonstrates how the AI Decision Engine continuously adapts to changing conditions while maintaining realistic operational flow.
 
 
Chapter 18 — Scenario Engine & Simulation Profiles
18.0 Overview
The Scenario Engine is responsible for configuring and initializing the Smart Facility Simulator for different industries, facility types, operational environments, and demonstration objectives.
Rather than embedding facility-specific logic throughout the application, the Scenario Engine loads a predefined Simulation Profile that determines how every subsystem behaves.
A Scenario defines the operational environment by specifying workforce composition, operating hours, inventory, facility layout, task templates, incident probabilities, KPIs, compliance rules, and business objectives.
This architecture enables a single simulator platform to support multiple industries while maintaining realistic operational behaviour.
18.1 Business Purpose
Different facilities operate under different business conditions.
A hospital operates differently from a hotel.
An airport operates differently from a warehouse.
A university operates differently from a shopping mall.
The purpose of the Scenario Engine is to configure every simulation engine so that the selected facility behaves according to its operational characteristics.
This enables SaniTrack to demonstrate industry-specific workflows without requiring multiple independent simulator implementations.
18.2 Functional Requirements
ID
Requirement
SIM-FR-086
The simulator shall support multiple facility scenarios.
SIM-FR-087
Every scenario shall load a predefined Simulation Profile.
SIM-FR-088
Scenario configuration shall initialize all simulation engines.
SIM-FR-089
Scenario-specific KPIs shall be supported.
SIM-FR-090
Incident probabilities shall vary by scenario.
SIM-FR-091
Workforce composition shall be configurable.
SIM-FR-092
Scenario configuration shall be externalised from application code.

 
18.3 Supported Scenarios
The simulator is designed to support multiple facility types.
Facility Type
Primary Operational Focus
Hospital
Hygiene, compliance, emergency response
Hotel
Guest room turnaround, housekeeping
Airport
High traffic cleaning, public safety
Office Building
Routine workplace maintenance
Shopping Mall
Public area cleaning, waste management
Warehouse
Equipment reliability, loading bay safety
School
Classroom hygiene, cafeteria operations
Manufacturing Plant
Industrial safety, hazardous material handling
Supermarket
Food safety, customer cleanliness
Government Facility
Compliance and public service continuity

Each scenario loads different operational rules while using the same simulation framework.
18.4 Simulation Profile
A Simulation Profile defines the configuration for a scenario.
Typical configuration includes:
Configuration Area
Examples
Facility Information
Name, industry, size
Operating Hours
24/7, business hours, shifts
Workforce
Managers, supervisors, cleaners
Inventory
Initial stock levels
Facility Layout
Zones, departments, floors
Task Templates
Routine cleaning schedules
Incident Profile
Probability distribution
Compliance Rules
Inspection frequency
KPI Configuration
Industry-specific metrics
Demonstration Objectives
Focus areas for presentations

The Scenario Engine loads this profile before the simulation begins.
18.5 Scenario Initialisation Workflow
User Selects Scenario
 
↓
 
Load Simulation Profile
 
↓
 
Validate Configuration
 
↓
 
Initialize Facility
 
↓
 
Create Workforce
 
↓
 
Load Inventory
 
↓
 
Generate Initial Tasks
 
↓
 
Configure Scheduler
 
↓
 
Start Simulation
This workflow ensures consistent startup behaviour across all scenarios.
18.6 Scenario Configuration Architecture
Simulation Profiles
 
    	│
 
    	├── Hospital.json
 
    	├── Hotel.json
 
    	├── Airport.json
 
    	├── Warehouse.json
 
    	├── School.json
 
    	├── Office.json
 
    	│
 
    	▼
 
Scenario Engine
 
    	│
 
    	▼
 
Simulation Engines
 
    	│
 
    	├── Scheduler
 
    	├── Workforce
 
    	├── Inventory
 
    	├── Incident
 
    	├── Analytics
 
    	└── Reporting
This architecture separates configuration from implementation, improving maintainability and extensibility.
18.7 Workforce Configuration
Different facilities require different workforce structures.
Scenario
Example Workforce
Hospital
1 Manager, 4 Supervisors, 25 Cleaners
Hotel
1 Manager, 2 Supervisors, 18 Housekeepers
Airport
2 Managers, 6 Supervisors, 40 Cleaners
School
1 Manager, 2 Supervisors, 12 Cleaners
Warehouse
1 Manager, 3 Supervisors, 15 Cleaners

These values are configurable within each Simulation Profile.
18.8 Incident Profiles
Incident probabilities vary according to the operational environment.
Facility
Common Incidents
Hospital
Biohazards, infectious waste
Hotel
Guest complaints, room delays
Airport
Public spills, restroom shortages
Warehouse
Equipment failures
Factory
Chemical leaks, machinery breakdowns
School
Cafeteria spills, classroom cleaning requests

The Risk Engine uses these profiles when generating incidents.
18.9 Business Rules
The Scenario Engine shall enforce the following rules:
Exactly one Simulation Profile shall be active during a session.
Profiles shall initialize all required simulation engines.
Missing configuration values shall fall back to default settings.
Scenario changes require simulator reset.
Configuration validation shall occur before simulation startup.
Scenario metadata shall be included in reports.
18.10 Exceptional Scenarios
The engine shall support conditions such as:
Invalid profile configuration.
Missing workforce definitions.
Empty inventory.
Unsupported facility layouts.
Corrupted scenario files.
Version mismatches between profile and simulator.
These situations shall be reported clearly and prevent the simulation from starting until resolved.
18.11 Acceptance Criteria
The Scenario Engine will be considered complete when:
Multiple facility scenarios can be selected.
Profiles correctly initialize every simulation engine.
Industry-specific behaviour is observable.
Scenario changes alter workforce, inventory, incidents, and KPIs.
Configuration errors are detected before simulation startup.
Reports identify the active simulation profile.
18.12 Mapping to Implementation
Requirement
Planned Component
Scenario Engine
ScenarioEngine.js
Profile Loader
ProfileLoader.js
Configuration Validator
ProfileValidator.js
Facility Builder
FacilityFactory.js
Profile Store
profiles/*.json
Scenario Events
EventBus.js

 
18.13 Future Enhancements
The architecture supports future capabilities including:
Custom scenario builder for administrators.
Import and export of simulation profiles.
Multi-facility simulations.
Seasonal operating profiles.
Country-specific compliance templates.
Customer-specific branded demonstration packages.
Marketplace for downloadable scenario packs.
18.14 Example Operational Narrative
Simulation Time
Event
09:00
The user selects the "Hospital" scenario.
09:01
The Scenario Engine loads the Hospital Simulation Profile.
09:02
Workforce, inventory, and facility layout are initialized according to hospital requirements.
09:03
The Scheduler begins the morning operational cycle with healthcare-specific cleaning schedules.
09:10
A simulated biohazard incident is generated with a higher probability than in other facility types.
09:20
Compliance KPIs update to include healthcare hygiene metrics, demonstrating industry-specific analytics.

This narrative illustrates how the Scenario Engine adapts the simulator to different operational environments without changing the underlying application logic.
 
Chapter 19 — Digital Twin & Facility Model Engine
19.0 Overview
The Digital Twin & Facility Model Engine provides the spatial representation of the simulated environment.
Rather than treating the facility as an abstract collection of tasks, the engine models the physical structure of buildings, floors, rooms, zones, equipment, and operational assets.
Every task, incident, inspection, inventory movement, and workforce assignment is associated with a physical location within the digital facility model.
This creates a realistic operational environment where activities occur in identifiable places, enabling location-aware simulation, navigation, reporting, and analytics.
19.1 Business Purpose
Facility management is inherently location-based.
Cleaning activities, inspections, incidents, and maintenance operations all occur within physical spaces.
The purpose of the Digital Twin & Facility Model Engine is to provide a structured representation of these spaces, allowing the simulator to reflect how work is organised in real facilities.
This enables demonstrations that accurately illustrate location-based operations, travel time, zone management, occupancy, and resource allocation.
19.2 Functional Requirements
ID
Requirement
SIM-FR-093
The simulator shall represent facilities as hierarchical spatial models.
SIM-FR-094
Every operational activity shall reference a valid location.
SIM-FR-095
Workforce movement shall be tracked between locations.
SIM-FR-096
Incidents shall occur at specific locations.
SIM-FR-097
Reports shall include location-based analytics.
SIM-FR-098
Facility layouts shall be configurable by scenario.
SIM-FR-099
Spatial models shall support future map visualisation.

 
19.3 Facility Hierarchy
The simulator models facilities using a hierarchical structure.
Facility
 
↓
 
Building
 
↓
 
Floor
 
↓
 
Zone
 
↓
 
Room
 
↓
 
Assets
Example:
City Hospital
 
├── Main Building
│ 	├── Floor 1
│ 	│      ├── Reception
│ 	│      ├── Emergency Ward
│ 	│      └── Pharmacy
│ 	│
│ 	├── Floor 2
│ 	│      ├── ICU
│ 	│      ├── Laboratory
│ 	│      └── Operating Theatre
│
└── Administration Building
This hierarchy provides the spatial foundation for all operational activities.
19.4 Facility Components
Each facility consists of multiple component types.
Component
Description
Building
Top-level structure
Floor
Physical level
Zone
Operational grouping
Room
Individual work area
Asset
Equipment or resource
Corridor
Movement pathway
Entrance
Access point
Exit
Emergency route

These components allow the simulator to model complex operational environments.
19.5 Location Attributes
Every location includes the following attributes.
Attribute
Description
Location ID
Unique identifier
Name
Display name
Parent Location
Hierarchical reference
Type
Building, Floor, Room, etc.
Capacity
Maximum occupancy
Operational Status
Active, Closed, Restricted
Cleaning Frequency
Scheduled cleaning interval
Risk Rating
Incident probability modifier

 
19.6 Workforce Navigation
The Workforce Engine references the Digital Twin when assigning tasks.
Cleaner Available
 
↓
 
Determine Current Location
 
↓
 
Determine Task Location
 
↓
 
Calculate Travel
 
↓
 
Move Cleaner
 
↓
 
Start Task
 
↓
 
Update Location
This allows travel time to become part of the simulation rather than assuming instant movement.
19.7 Location-Based Incident Generation
Incidents are tied to specific locations.
Example:
Incident
Location
Chemical Spill
Laboratory
Water Leak
Basement Plant Room
Overflowing Bin
Food Court
Biohazard
Operating Theatre
Equipment Failure
Warehouse Loading Bay

This improves realism and supports future map-based visualisation.
19.8 Asset Management
Assets are associated with locations.
Examples include:
Vacuum cleaners.
Floor scrubbers.
Chemical storage cabinets.
Waste bins.
Hand sanitiser stations.
Cleaning trolleys.
Inspection stations.
Assets may generate maintenance tasks or incidents during the simulation.
19.9 Business Rules
The Digital Twin Engine shall enforce the following rules:
Every task must reference a valid location.
Every incident must occur at a valid location.
Workforce movement updates location history.
Closed locations cannot receive routine tasks.
Restricted areas require authorised personnel.
Location metadata shall remain consistent throughout the simulation.
19.10 Exceptional Scenarios
The engine shall support conditions such as:
Temporary room closure.
Floor evacuation.
Restricted access due to incidents.
Asset relocation.
Facility expansion.
Dynamic zone reconfiguration.
These scenarios enable more advanced operational simulations.
19.11 Acceptance Criteria
The Digital Twin & Facility Model Engine will be considered complete when:
Facilities are represented hierarchically.
Tasks, incidents, and assets reference valid locations.
Workforce movement updates correctly.
Reports include location-based information.
Facility layouts can be customised through Simulation Profiles.
Spatial models support future visualisation features.
19.12 Mapping to Implementation
Requirement
Planned Component
Digital Twin Engine
FacilityEngine.js
Facility Model
FacilityModel.js
Location Manager
LocationService.js
Navigation Engine
NavigationEngine.js
Asset Registry
AssetStore.js
Spatial Events
EventBus.js

 
19.13 Future Enhancements
The architecture supports future capabilities such as:
Interactive 2D facility maps.
3D digital twin visualisation.
Indoor positioning simulation.
IoT sensor overlays.
Heat maps showing cleaning frequency.
Occupancy analytics.
AR-assisted facility walkthroughs.
19.14 Example Operational Narrative
Simulation Time
Event
10:00
Cleaner Ada begins the shift in the Ground Floor Equipment Room.
10:02
The AI Decision Engine assigns a restroom cleaning task on Floor 3.
10:03
The Navigation Engine calculates travel through the lobby and lifts.
10:06
Ada arrives at the assigned restroom and begins cleaning.
10:12
A water leak is detected in the adjacent corridor.
10:13
The Incident Management Engine creates an emergency task linked to the corridor location.
10:15
Supervisor Grace reassigns Ada to the emergency after she completes the restroom task.

This example illustrates how the Digital Twin provides spatial context for operational decision-making.
 
Chapter 20 — Event Bus & Messaging Architecture
20.0 Overview
The Event Bus & Messaging Architecture provides the communication backbone for the Smart Facility Simulator.
Rather than allowing simulation engines to communicate directly with one another, every significant operational change is published as an event to a central Event Bus.
Simulation engines subscribe only to the events relevant to their responsibilities.
This event-driven architecture promotes loose coupling, scalability, maintainability, extensibility, and traceability across the entire simulator.
The Event Bus serves as the single communication channel through which operational state changes propagate.
20.1 Business Purpose
As the Smart Facility Simulator grows in complexity, direct communication between modules becomes difficult to maintain.
A change in one engine would require modifications across multiple other engines, increasing system complexity and reducing flexibility.
The purpose of the Event Bus is to isolate simulation components from one another while ensuring that operational changes are propagated consistently and reliably throughout the system.
20.2 Functional Requirements
ID
Requirement
SIM-FR-100
The simulator shall use an Event Bus as the primary communication mechanism.
SIM-FR-101
Simulation engines shall publish domain events rather than directly invoking other modules.
SIM-FR-102
Modules shall subscribe only to events relevant to their responsibilities.
SIM-FR-103
Event processing shall be asynchronous where appropriate.
SIM-FR-104
Events shall include metadata for auditing and debugging.
SIM-FR-105
Event delivery shall preserve ordering within a simulation tick.
SIM-FR-106
The Event Bus shall support future distributed architectures.

 
20.3 Event-Driven Architecture
           	Event Bus
                	│
 ┌──────────┬────────────┬────────────┬────────────┐
 │          │        	│        	│        	│
 ▼   	   ▼            ▼        	▼        	▼
Task 	Incident    Inventory   Workforce   Scheduler
Engine	Engine      Engine  	Engine  	Engine
 │          │        	│        	│        	│
 └──────────┴────────────┴────────────┴────────────┘
                	│
                	▼
         	AI Decision Engine
                	│
                	▼
      	Notifications • Dashboard
      	Analytics • Reports
No engine communicates directly with another engine.
Everything flows through the Event Bus.
20.4 Event Lifecycle
Every operational event follows the same lifecycle.
Business Action
 
↓
 
Create Event
 
↓
 
Publish Event
 
↓
 
Event Bus
 
↓
 
Route Subscribers
 
↓
 
Process Event
 
↓
 
Update State
 
↓
 
Generate New Events
This allows complex workflows to emerge from simple event chains.
20.5 Event Structure
Every event should contain a consistent structure.
Field
Description
Event ID
Unique identifier
Event Type
Classification of event
Source Engine
Originating module
Timestamp
Simulation time
Payload
Business data
Correlation ID
Links related events
Priority
Processing importance
Version
Event schema version

This standardised format supports debugging, replay, and auditing.
20.6 Core Event Types
Examples of events published within the simulator include:
Event
Published By
TASK_CREATED
Task Engine
TASK_ASSIGNED
Workforce Engine
TASK_COMPLETED
Workflow Engine
INCIDENT_CREATED
Incident Engine
INCIDENT_RESOLVED
Incident Engine
INVENTORY_RESERVED
Inventory Engine
INVENTORY_CONSUMED
Inventory Engine
LOW_STOCK_DETECTED
Inventory Engine
INSPECTION_PASSED
Inspection Engine
INSPECTION_FAILED
Inspection Engine
SHIFT_STARTED
Workforce Engine
KPI_UPDATED
Analytics Engine
REPORT_GENERATED
Report Engine
SIMULATION_STARTED
Scheduler
SIMULATION_PAUSED
Scheduler
SIMULATION_STOPPED
Scheduler

 
20.7 Event Subscription Model
Each engine subscribes only to the events it needs.
Engine
Example Subscriptions
AI Decision Engine
Task, Incident, Inventory, KPI
Workflow Engine
Task, Incident
Notification Engine
All user-visible events
Analytics Engine
Task, Inventory, Incident, Inspection
Dashboard Engine
KPI, Workforce, Incident
Report Engine
KPI, Incident, Inventory

This reduces dependencies and improves modularity.
20.8 Event Flow Example
Task Created
  	│
  	▼
Publish TASK_CREATED
  	│
  	▼
Event Bus
  	│
  	├── Workforce Engine assigns cleaner
  	├── Notification Engine sends alert
  	├── Dashboard updates counter
  	├── Analytics updates task metrics
	  └── Activity Feed records event
A single event may trigger multiple independent reactions without direct coupling.
20.9 Business Rules
The Event Bus shall enforce the following rules:
Every published event must include mandatory metadata.
Events are immutable once published.
Subscribers process events independently.
Event ordering is preserved within each simulation tick.
Processing failures in one subscriber must not prevent other subscribers from receiving the event.
Event history is retained for debugging and replay.
20.10 Exceptional Scenarios
The Event Bus shall support situations such as:
Subscriber failure.
Duplicate event detection.
Retry of failed event processing.
Event schema version mismatches.
Temporary subscriber unavailability.
High event throughput during major incidents.
These scenarios improve resilience and operational stability.
20.11 Acceptance Criteria
The Event Bus & Messaging Architecture will be considered complete when:
All simulation engines communicate through the Event Bus.
Events are delivered to appropriate subscribers.
Event ordering is maintained.
New modules can subscribe without modifying existing publishers.
Event history is available for diagnostics.
Event processing failures are isolated and recoverable.
20.12 Mapping to Implementation
Requirement
Planned Component
Event Bus
EventBus.js
Event Registry
EventRegistry.js
Event Dispatcher
EventDispatcher.js
Event Logger
EventLogger.js
Subscriber Manager
SubscriberRegistry.js
Replay Service
EventReplay.js

 
20.13 Future Enhancements
The architecture supports future capabilities including:
Distributed event processing.
Cloud message brokers.
WebSocket-based live updates.
Event replay for debugging.
Event sourcing.
Kafka, RabbitMQ, or NATS integration.
Real-time monitoring dashboards.
20.14 Example Operational Narrative
Simulation Time
Event
11:00
The Scheduler publishes a TASK_CREATED event for a new restroom cleaning task.
11:00
The Workforce Engine subscribes to the event and assigns Cleaner Ada.
11:01
The Notification Engine publishes a task assignment notification.
11:01
The Dashboard updates the "Active Tasks" widget.
11:02
The Analytics Engine recalculates workload metrics.
11:03
The Activity Feed records the complete sequence of events, preserving the operational history.

This narrative shows how one published event coordinates multiple independent systems without direct dependencies.
 
Chapter 21 — Overall System Architecture
21.0 Overview
The Smart Facility Simulator is designed as a modular, event-driven application that emulates the behaviour of a live SaniTrack deployment.
Rather than implementing all functionality within a single application module, the simulator is decomposed into independent engines that each manage a specific operational responsibility.
These engines communicate through a central Event Bus, allowing the simulator to remain scalable, maintainable, extensible, and easy to test.
The architecture is intentionally layered so that presentation, business logic, simulation behaviour, and infrastructure concerns remain separate.
This separation allows the simulator to evolve from a browser-based demonstration into a production-ready backend-backed system without major architectural changes.
21.1 Architectural Principles
The architecture is based on the following principles:
Modularity: Each engine has a single, well-defined responsibility.
Loose Coupling: Modules communicate through events rather than direct dependencies.
High Cohesion: Related logic is grouped into dedicated components.
Configuration over Code: Facility behaviour is driven by scenario profiles.
Deterministic Simulation: The same seed and profile can reproduce identical simulation runs when needed.
Extensibility: New industries, workflows, and integrations can be added without redesigning the core.
21.2 High-Level Architecture
                	User Interface
                       	│
 	┌─────────────────────┼─────────────────────┐
 	│                 	│                 	│
Dashboard 	    Notifications     	Reports & Charts
 	│                 	│                 	│
 	└─────────────────────┼─────────────────────┘
                       	│
                  	Event Bus
                       	│
┌────────────┬────────────┬────────────┬────────────┐
│        	│        	│        	│        	│
▼        	▼        	▼        	▼        	▼
Scheduler  AI Decision  Workflow   Scenario   Analytics
Engine  	Engine  	Engine  	Engine  	Engine
│        	│        	│        	│        	│
├────────────┼────────────┼────────────┼────────────┤
▼        	▼        	▼        	▼        	▼
Task  	Workforce   Inventory   Incident   Digital Twin
Engine  	Engine  	Engine      Engine  	Engine
                       	│
                       	▼
                	Persistence Layer
                       	│
           	Local Storage / APIs / Backend
This layered structure clearly separates user-facing components from simulation logic and infrastructure.
21.3 Architectural Layers
The system is divided into four primary layers.
Layer
Responsibility
Presentation Layer
User interface, dashboards, reports, controls
Application Layer
Simulation orchestration and workflow management
Domain Layer
Business logic and operational engines
Infrastructure Layer
Storage, APIs, logging, configuration

Each layer depends only on the layer directly below it, reducing complexity and improving maintainability.
21.4 Presentation Layer
The Presentation Layer is responsible for rendering the simulator to users.
Key components include:
Dashboard
KPI widgets
Activity feed
Notifications
Reports
Charts
Scenario selector
Simulation controls (Start, Pause, Resume, Reset)
This layer contains minimal business logic and reacts to events emitted by the underlying simulation engines.
21.5 Application Layer
The Application Layer coordinates the overall simulation.
Core responsibilities include:
Starting and stopping the simulator.
Scheduling simulation ticks.
Making autonomous decisions.
Managing workflows.
Loading scenarios.
Dispatching events.
Coordinating communication between engines.
This layer acts as the operational controller of the simulator.
21.6 Domain Layer
The Domain Layer contains the core business logic.
Primary engines include:
Engine
Responsibility
Scheduler
Advances simulation time
Task Engine
Generates and manages tasks
Workforce Engine
Assigns personnel
Workflow Engine
Manages task lifecycle
Inventory Engine
Tracks consumables
Incident Engine
Generates operational disruptions
Analytics Engine
Calculates KPIs
Digital Twin Engine
Models facility locations

Each engine is independent and communicates exclusively through the Event Bus.
21.7 Infrastructure Layer
The Infrastructure Layer provides supporting services.
These include:
Local storage for browser persistence.
Scenario configuration files.
Logging services.
API connectors.
Future backend services.
Import/export utilities.
The infrastructure is intentionally abstracted so that browser storage can later be replaced with cloud services or databases.
21.8 Technology Stack
The initial implementation uses technologies that align with the existing SaniTrack web application.
Layer
Technology
Frontend
HTML5
Styling
CSS3
Programming Language
JavaScript (ES6 Modules)
UI Components
Vanilla JavaScript
Charts
Chart.js (recommended)
State Management
Central Simulation Store
Persistence
Local Storage
Configuration
JSON
Version Control
Git
Build Tool
Optional (Vite/Webpack in future)

Future Evolution
Component
Future Technology
Backend
Node.js + Express or NestJS
Database
PostgreSQL
ORM
Prisma
Real-Time Updates
WebSockets
Authentication
JWT / OAuth 2.0
Cloud Deployment
Docker + Kubernetes
Messaging
Kafka, RabbitMQ, or NATS

This roadmap allows the simulator to mature without redesigning its architecture.
21.9 Module Dependency Rules
To preserve maintainability, the following dependency rules apply:
Presentation components must not directly manipulate domain data.
Domain engines must not access UI components.
Infrastructure services must not contain business rules.
Communication between engines must occur through the Event Bus.
Shared utilities should be placed in a dedicated core module.
These rules reduce coupling and simplify testing.
21.10 Security Considerations
Although the simulator is primarily a demonstration environment, the architecture anticipates production requirements:
Role-based access control for Manager, Supervisor, Cleaner, and Administrator.
Audit logging for critical actions.
Configuration validation before scenario loading.
Isolation of simulation data from production data.
API authentication for future integrations.
21.11 Non-Functional Requirements
Requirement
Target
Startup Time
< 5 seconds
Simulation Tick
Configurable (1–10 seconds)
UI Responsiveness
< 100 ms for dashboard updates
Event Throughput
Support hundreds of events per minute
Availability
Continuous during demo sessions
Extensibility
New scenarios without core code changes

These targets define the expected quality attributes of the simulator.
21.12 Acceptance Criteria
The overall architecture will be considered complete when:
All simulation engines are modular.
Communication occurs through the Event Bus.
The layered architecture is enforced.
Scenario configuration remains external to business logic.
New engines can be added without modifying existing ones.
The architecture supports migration to a backend-backed deployment.
 
 
Chapter 22 — Module Interaction & Sequence Diagrams
22.0 Overview
The Smart Facility Simulator is composed of multiple independent engines that collaborate to simulate realistic facility operations.
Although each engine has a distinct responsibility, meaningful simulation behaviour emerges only through coordinated interaction.
This chapter documents the principal interaction patterns between modules and illustrates the sequence of operations during common simulation scenarios.
These interaction models provide implementation guidance and establish a common understanding of how simulation engines cooperate.
22.1 Design Principles
Module interactions follow several architectural principles:
Every interaction begins with a business event.
Engines communicate through the Event Bus.
Business logic remains inside domain engines.
User interface components observe state rather than control simulation behaviour.
Every completed workflow generates auditable events.
22.2 Simulation Startup Sequence
When the user starts the simulator, multiple components are initialised in a defined order.
User
│
▼
Start Simulation
│
▼
Scenario Engine
│
▼
Load Simulation Profile
│
▼
Initialize Facility
│
▼
Initialize Workforce
│
▼
Initialize Inventory
│
▼
Initialize Scheduler
│
▼
Initialize AI Decision Engine
│
▼
Publish SIMULATION_STARTED
│
▼
Dashboard Refresh
Expected Outcome
Facility loaded.
Workforce available.
Inventory populated.
Scheduler active.
Dashboard visible.
Autopilot ready.
22.3 Automatic Task Creation Sequence
Scheduler Tick
   	│
   	▼
Task Engine
   	│
Generate Task
   	│
Publish TASK_CREATED
   	│
   	▼
Event Bus
   	│
├───────────────┐
▼           	▼
Workflow  	Notification
Engine      	Engine
│           	│
▼           	▼
Assign Flow   Show Notification
│
▼
Workforce Engine
│
▼
Assign Cleaner
│
▼
Publish TASK_ASSIGNED
Result:
New task appears.
Cleaner receives assignment.
Dashboard updates automatically.
22.4 Manager → Supervisor → Cleaner Workflow
This is one of the most important workflows in the simulator.
AI Decision Engine
    	│
    	▼
Create Cleaning Task
    	│
    	▼
Manager Approval
    	│
    	▼
Supervisor Assignment
    	│
    	▼
Cleaner Accepts Task
    	│
    	▼
Task Starts
        │
    	▼
Task Completed
    	│
    	▼
Supervisor Inspection
    	│
    	▼
Task Closed
This mirrors the operational chain used in real facility management.
22.5 Incident Response Sequence
Risk Engine
  	│
  	▼
Generate Incident
      │
Publish INCIDENT_CREATED
  	│
  	▼
Event Bus
  	│
├───────────────┬──────────────┐
▼           	▼          	▼
Notification  Workflow  	Dashboard
Engine     	Engine     	Engine
              	│
              	▼
Create Emergency Task
              	│
              	▼
Workforce Assignment
              	│
              	▼
Inventory Reservation
              	│
              	▼
Incident Resolution
              	│
              	▼
Publish INCIDENT_RESOLVED
Result:
Emergency handled.
Notifications sent.
Inventory updated.
KPIs recalculated.
22.6 Inventory Consumption Sequence
Cleaner Starts Task
    	│
    	▼
Inventory Engine
    	│
Reserve Supplies
    	│
    	▼
Task Completed
 	   │
    	▼
Consume Inventory
    	│
    	▼
Check Threshold
    	│
   ┌────┴─────┐
   ▼      	▼
Enough 	Low Stock
   │      	│
   ▼      	▼
Continue   Create Restock Task
Result:
Inventory decreases realistically.
Low-stock alerts generated automatically.
22.7 KPI Update Sequence
Task Completed
   	│
Publish TASK_COMPLETED
   	│
   	▼
Analytics Engine
   	│
Recalculate KPIs
   	│
   	▼
Dashboard Engine
   	│
Refresh Widgets
   	│
   	▼
Report Engine
KPIs remain synchronized with operational activity.
22.8 Notification Flow
Business Event
  	│
  	▼
Event Bus
  	│
  	▼
Notification Engine
  	│
Determine Severity
  	│
Determine Audience
  	│
Display Notification
  	│
Archive
Every operational event becomes visible to users without direct integration between modules.
22.9 Dashboard Refresh Sequence
Simulation Event
    	│
    	▼
Analytics Engine
    	│
Update Store
    	│
    	▼
Dashboard Engine
    	│
Refresh Components
    	│
    	▼
Charts
KPIs
Activity Feed
Notifications
No manual refresh is required.
22.10 Report Generation Sequence
Scheduled Time
    	│
    	▼
Report Engine
    	│
Collect Data
    	│
Calculate KPIs
    	│
Build Report
    	│
Publish REPORT_GENERATED
    	│
    	▼
Notification Engine
Managers receive reports automatically during the simulation.
22.11 Full Simulation Interaction
This diagram illustrates the interaction of every major module.
User
│
▼
Scenario Engine
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
Workforce Engine
│
▼
Inventory Engine
│
▼
Inspection Engine
│
▼
Analytics Engine
│
▼
Dashboard
│
▼
Reports
│
▼
Notifications
│
▼
Activity Feed
This represents the complete operational lifecycle of the simulator.
22.12 Error Recovery Sequence
The simulator must recover gracefully from operational issues.
Module Error
  	│
  	▼
Event Bus
  	│
  	▼
Error Handler
  	│
  	▼
Retry?
┌────┴────┐
▼         ▼
Yes    	No
│      	│
▼      	▼
Retry 	Log Error
│      	│
▼      	▼
Continue Notify Admin
This ensures that isolated failures do not halt the entire simulation.
22.13 Acceptance Criteria
This chapter is complete when:
Startup sequence is documented.
Core workflows are illustrated.
Inter-module communication is clearly defined.
Event-driven interactions are demonstrated.
Error recovery is documented.
Developers can implement workflows directly from these sequence diagrams.
 
Chapter 23 — Data Model & State Management Architecture
23.0 Overview
The Data Model & State Management Architecture defines how information is represented, stored, updated, and shared throughout the Smart Facility Simulator.
Every simulation engine operates on a common application state that represents the current condition of the virtual facility.
Rather than allowing each module to maintain independent copies of operational data, the simulator adopts a single source of truth architecture.
The Simulation Store acts as the authoritative repository for all operational entities, including tasks, workforce, inventory, incidents, facilities, KPIs, notifications, reports, and simulation settings.
This approach ensures consistency, predictable behaviour, and simplified debugging while enabling real-time updates across all user interface components.
23.1 Business Purpose
A facility simulator continuously changes state.
New tasks are created.
Inventory decreases.
Workers move between locations.
Incidents occur.
KPIs change.
Reports are generated.
Without a central state management strategy, different modules could operate on inconsistent information, leading to incorrect dashboards, duplicated work, or inaccurate reports.
The purpose of the Simulation Store is to ensure that every module references the same operational data at all times.
23.2 Functional Requirements
ID
Requirement
SIM-FR-107
The simulator shall maintain a single application state.
SIM-FR-108
All engines shall read from the Simulation Store.
SIM-FR-109
State updates shall be immutable where practical.
SIM-FR-110
UI components shall react automatically to state changes.
SIM-FR-111
Simulation state shall be persistable and restorable.
SIM-FR-112
Historical operational data shall be retained during a simulation session.

 
23.3 High-Level State Architecture
            	Simulation Store
                   	│
 ┌───────────────┬───────────────┬───────────────┐
 │               │           	│           	│
 ▼               ▼           	▼               ▼
Tasks   	Workforce  	Inventory  	Incidents
 │               │           	│           	│
 ├───────────────┼───────────────┼───────────────┤
 ▼               ▼           	▼           	▼
Facility  	Analytics  	Reports  	Notifications
                   	│
                   	▼
              	Dashboard
The Simulation Store is the central repository accessed by every engine.
23.4 Core State Objects
The Simulation Store is composed of several domain-specific collections.
Store
Purpose
Facility Store
Buildings, floors, rooms, assets
Workforce Store
Managers, supervisors, cleaners
Task Store
Cleaning tasks and workflow state
Inventory Store
Consumables and equipment
Incident Store
Active and historical incidents
Inspection Store
Compliance inspections
KPI Store
Calculated performance metrics
Notification Store
User notifications
Activity Store
Chronological event history
Report Store
Generated reports
Settings Store
Simulation configuration

 
23.5 Task Data Model
Every task contains a consistent set of attributes.
Field
Description
Task ID
Unique identifier
Title
Task name
Category
Cleaning, Inspection, Emergency
Priority
Low, Medium, High, Critical
Status
Pending, Assigned, In Progress, Completed, Cancelled
Assigned To
Workforce member
Location
Facility reference
Estimated Duration
Planned completion time
Actual Duration
Recorded completion time
Required Supplies
Inventory references
Created At
Simulation timestamp
Completed At
Simulation timestamp

 
23.6 Workforce Data Model
Each workforce member includes:
Field
Description
Employee ID
Unique identifier
Name
Display name
Role
Manager, Supervisor, Cleaner
Current Location
Facility reference
Shift Status
On Duty, Off Duty, Break
Current Task
Active assignment
Skill Set
Cleaning, Inspection, Hazmat, etc.
Availability
Available / Busy
Productivity Score
Calculated KPI

 
23.7 Inventory Data Model
Inventory records include:
Field
Description
Item ID
Unique identifier
Name
Product name
Category
Chemical, PPE, Equipment
Quantity
Current stock
Unit
Bottles, Litres, Units
Minimum Level
Reorder threshold
Maximum Level
Capacity
Storage Location
Facility reference
Expiry Date
Optional
Last Updated
Timestamp

 
23.8 Incident Data Model
Incident records contain:
Field
Description
Incident ID
Unique identifier
Type
Spill, Equipment Failure, Biohazard
Severity
Low, Medium, High, Critical
Status
Open, Assigned, Resolved
Location
Facility reference
Assigned Team
Workforce reference
Response Time
Duration
Resolution Time
Duration
Root Cause
Optional
Created At
Timestamp
Resolved At
Timestamp

 
23.9 KPI Data Model
Each KPI contains:
Field
Description
KPI ID
Unique identifier
Name
KPI title
Current Value
Latest value
Target
Goal
Trend
Improving, Stable, Declining
Unit
%, Minutes, Count
Last Updated
Timestamp

 
23.10 State Update Lifecycle
Every change to operational data follows the same lifecycle.
Simulation Event
 
↓
 
Event Bus
 
↓
 
Simulation Store
 
↓
 
Update State
 
↓
 
Notify Subscribers
 
↓
 
Refresh Dashboard
 
↓
 
Persist Changes
This ensures consistent propagation of changes across the simulator.
23.11 Persistence Strategy
The simulator supports session persistence.
Current implementation:
Local Storage.
Automatic save after significant events.
Automatic restore on browser refresh.
Reset option for clean demonstrations.
Future implementation:
PostgreSQL.
REST API.
Cloud storage.
Multi-user persistence.
Audit database.
23.12 State Management Rules
The Simulation Store shall enforce the following rules:
Every entity shall have a unique identifier.
State updates shall be validated before persistence.
Historical records shall not be modified after completion.
Related entities shall remain consistent.
Deleted records shall be archived rather than permanently removed where appropriate.
23.13 Acceptance Criteria
The Data Model & State Management Architecture will be considered complete when:
All simulation data is stored centrally.
Every engine reads from the Simulation Store.
State updates propagate automatically to subscribers.
Sessions can be saved and restored.
Dashboards remain synchronised with operational data.
Entity relationships remain consistent throughout the simulation.
23.14 Mapping to Implementation
Requirement
Planned Component
Simulation Store
SimulationStore.js
Task Store
TaskStore.js
Workforce Store
WorkforceStore.js
Inventory Store
InventoryStore.js
Incident Store
IncidentStore.js
KPI Store
KPIStore.js
Report Store
ReportStore.js
Activity Store
ActivityStore.js
Persistence Service
StorageService.js

 
Chapter 24 — JavaScript Module Architecture & Project Folder Structure
24.0 Overview
The Smart Facility Simulator is implemented as a modular JavaScript application in which each functional area is isolated into a dedicated module.
The project structure follows a feature-oriented architecture, where related functionality is grouped together rather than organised solely by file type. This approach improves maintainability, supports incremental development, and allows new capabilities to be added with minimal impact on existing code.
Each module exposes a clear public interface while hiding its internal implementation details.
24.1 Architectural Goals
The project structure has been designed to achieve the following objectives:
Clear separation of concerns.
High cohesion within modules.
Loose coupling through the Event Bus.
Easy navigation for developers.
Scalability for future enhancements.
Support for testing and documentation.
Compatibility with browser-based deployment today and backend integration in future.
24.2 High-Level Project Structure
smart-facility-simulator/
│
├── index.html
├── package.json              	(future)
├── README.md
├── LICENSE
├── .gitignore
│
├── assets/
│   ├── css/
│   │   ├── app.css
│   │   ├── dashboard.css
│   │   ├── workflow.css
│   │   ├── notifications.css
│   │   ├── reports.css
│   │   ├── animations.css
│   │   └── themes.css
│   │
│   ├── js/
│   │
│   ├── images/
│   ├── icons/
│   ├── audio/
│   └── fonts/
│
├── docs/
│
├── scenarios/
│
├── data/
│
├── exports/
│
├── tests/
│
└── tools/
This top-level layout separates application code, configuration, assets, documentation, and supporting resources.
24.3 JavaScript Architecture
The assets/js directory is divided into logical modules.
assets/js/
│
├── core/
├── engines/
├── services/
├── stores/
├── ui/
├── scenarios/
├── models/
├── utils/
├── config/
├── workers/
└── app.js
Each folder has a clearly defined responsibility.
24.4 Core Modules
The core directory contains the foundation of the simulator.
core/
│
├── EventBus.js
├── SimulationClock.js
├── SimulationStore.js
├── StateManager.js
├── ModuleLoader.js
├── Logger.js
├── ErrorHandler.js
└── Constants.js
These modules are shared across the entire application.
24.5 Simulation Engines
The engines directory contains the operational logic.
engines/
│
├── SchedulerEngine.js
├── DecisionEngine.js
├── WorkflowEngine.js
├── TaskEngine.js
├── WorkforceEngine.js
├── InventoryEngine.js
├── IncidentEngine.js
├── InspectionEngine.js
├── AnalyticsEngine.js
├── ReportEngine.js
├── NotificationEngine.js
├── ActivityEngine.js
├── ScenarioEngine.js
├── FacilityEngine.js
└── NavigationEngine.js
Each engine owns one business capability and communicates via the Event Bus.
24.6 Services
Services provide reusable functionality.
services/
│
├── StorageService.js
├── ReportExportService.js
├── NotificationService.js
├── ChartService.js
├── RandomGenerator.js
├── ScenarioLoader.js
├── APIClient.js
└── TimeService.js
Services are stateless where possible and are consumed by engines rather than containing business workflows.
24.7 State Stores
Domain data is maintained in dedicated stores.
stores/
│
├── TaskStore.js
├── WorkforceStore.js
├── InventoryStore.js
├── IncidentStore.js
├── FacilityStore.js
├── KPIStore.js
├── ReportStore.js
├── NotificationStore.js
├── ActivityStore.js
└── SettingsStore.js
Each store manages one category of state and exposes CRUD-style operations.
24.8 UI Components
The UI layer is organised by feature.
ui/
│
├── dashboard/
│   ├── Dashboard.js
│   ├── KPIWidgets.js
│   ├── Charts.js
│   └── StatusCards.js
│
├── activity/
│   └── ActivityFeed.js
│
├── notifications/
│   └── NotificationPanel.js
│
├── reports/
│   └── ReportsPage.js
│
├── controls/
│   ├── SimulationControls.js
│   └── ScenarioSelector.js
│
└── shared/
	├── Modal.js
	├── Table.js
	└── Toast.js
This structure allows UI features to evolve independently of simulation logic.
24.9 Scenario Packages
Each scenario is self-contained.
scenarios/
│
├── hospital/
│   ├── scenario.json
│   ├── workforce.json
│   ├── inventory.json
│   ├── tasks.json
│   ├── incidents.json
│   └── layout.json
│
├── hotel/
├── airport/
├── warehouse/
├── office/
└── school/
This supports rapid onboarding of new industries without code changes.
24.10 Data Directory
Static datasets and seed information are stored separately.
data/
│
├── cleaners.json
├── supervisors.json
├── managers.json
├── inventory.json
├── taskTemplates.json
├── incidentTemplates.json
└── facilityTemplates.json
Separating data from logic simplifies maintenance and localisation.
24.11 Documentation Structure
The documentation is organised alongside the codebase.
docs/
│
├── PRD/
│
├── Architecture/
│
├── API/
│
├── UserGuide/
│
├── DeveloperGuide/
│
├── Scenarios/
│
├── Images/
│
└── ADR/
Suggested contents:
PRD/ – Product Requirements Document.
Architecture/ – System diagrams and technical design.
API/ – Integration specifications.
UserGuide/ – End-user instructions.
DeveloperGuide/ – Setup and coding standards.
Scenarios/ – Industry-specific documentation.
Images/ – Diagrams and screenshots.
ADR/ – Architecture Decision Records.
24.12 Testing Structure
tests/
│
├── unit/
├── integration/
├── scenarios/
├── performance/
└── fixtures/
This layout supports comprehensive testing at multiple levels.
24.13 Module Dependency Rules
To maintain architectural integrity:
Engines must not manipulate the DOM directly.
UI components must not contain business logic.
Stores must not call UI components.
Services must not depend on presentation modules.
Shared utilities belong in core or utils.
Cross-module communication must occur through the Event Bus.
24.14 Mapping to Implementation
Folder
Primary Responsibility
core/
Shared infrastructure and framework
engines/
Business logic and simulation
stores/
Central application state
services/
Reusable utilities
ui/
Presentation components
scenarios/
Simulation packages
data/
Seed and reference data
docs/
Project documentation
tests/
Automated testing
tools/
Build and maintenance scripts

 
24.15 Acceptance Criteria
This architectural layout is considered complete when:
Every engine has a dedicated module.
UI code is isolated from business logic.
Scenario configuration is externalised.
Stores provide a single source of truth.
Documentation mirrors the implementation.
New features can be added without restructuring the project.
 
Chapter 25 — Technology Stack, Development Roadmap & Implementation Strategy
25.0 Overview
The Smart Facility Simulator is designed as a browser-first, modular simulation platform that demonstrates the operational capabilities of SaniTrack without requiring access to a live production environment.
The technology strategy prioritises simplicity, maintainability, portability, and extensibility. The initial implementation uses lightweight web technologies to accelerate development while providing a clear migration path to a scalable enterprise architecture.
This phased approach allows the simulator to evolve from an interactive demonstration into a production-grade digital twin platform without requiring a complete redesign.
25.1 Technology Selection Principles
The technology stack has been selected using the following principles:
Low barrier to entry for developers.
Fast iteration and prototyping.
Modular architecture.
Strong browser compatibility.
Minimal runtime dependencies.
Easy integration with existing SaniTrack technologies.
Clear upgrade path to cloud-native deployment.
25.2 Recommended Technology Stack
Layer
Technology
Rationale
Frontend
HTML5
Standards-based structure
Styling
CSS3
Lightweight, responsive styling
Programming Language
JavaScript (ES6 Modules)
Aligns with existing simulator prototype
Optional Migration
TypeScript
Adds static typing as the codebase grows
UI Rendering
Vanilla JavaScript
Minimal dependencies for the MVP
Charts
Chart.js
Mature, lightweight charting library
Icons
Font Awesome or SVG
Flexible iconography
Configuration
JSON
Human-readable and version-controlled
Version Control
Git
Industry standard
Package Manager
npm
Dependency management
Build Tool (Future)
Vite
Fast development and builds

 
25.3 Why JavaScript First?
The initial version should be implemented in JavaScript because:
It matches the current implementation.
It runs directly in modern browsers.
It requires no compilation step.
It enables rapid prototyping.
It lowers the onboarding effort for contributors.
As the simulator matures, TypeScript can be introduced incrementally to improve type safety, refactoring confidence, and developer tooling.
25.4 Optional Python Integration
The core simulator does not require Python.
However, Python is well suited for advanced capabilities that may be added later.
Potential Python use cases include:
Capability
Why Python?
Predictive analytics
Mature data science ecosystem
Machine learning
Libraries such as scikit-learn and TensorFlow
AI optimisation
Workforce and scheduling optimisation
Synthetic data generation
Realistic scenario creation
Report automation
PDF and spreadsheet generation
Simulation experimentation
Batch execution of multiple scenarios

These capabilities can operate as external services communicating with the simulator via APIs rather than being embedded in the browser application.
25.5 Existing Technologies Worth Considering
Rather than reinventing every capability, the simulator can adopt proven architectural ideas from established technologies.
Technology
Relevant Capability
BPMN Workflow Engines (e.g. Camunda, Flowable)
Workflow orchestration concepts
SimPy (Python)
Discrete-event simulation ideas
AnyLogic
Simulation modelling patterns
Node-RED
Event-driven flow design
Apache Kafka
Event streaming concepts
RabbitMQ
Messaging architecture
Chart.js
Dashboard visualisation
Mermaid / PlantUML
Technical diagrams
draw.io
Architecture documentation

These tools provide inspiration and patterns rather than being mandatory runtime dependencies.
25.6 Development Phases
Phase 1 – Foundation
Objectives:
Project setup.
Event Bus.
Simulation Store.
Scheduler.
Dashboard shell.
Scenario loader.
Deliverables:
Basic project structure.
Initial simulation loop.
Manual controls.
Phase 2 – Core Simulation
Objectives:
Task generation.
Workforce management.
Inventory tracking.
Incident generation.
Workflow engine.
Deliverables:
Autonomous task lifecycle.
Realistic operational events.
Phase 3 – Smart Autopilot
Objectives:
AI Decision Engine.
Workload balancing.
Dynamic priorities.
Autonomous facility behaviour.
Deliverables:
Hands-free demonstration mode.
Phase 4 – Analytics & Reporting
Objectives:
KPI engine.
Dashboards.
Charts.
Scheduled reports.
Deliverables:
Executive-level operational insights.
Phase 5 – Enterprise Enhancements
Objectives:
Multi-facility support.
Digital Twin visualisation.
REST APIs.
Authentication.
Cloud deployment.
Deliverables:
Production-ready architecture.
25.7 Development Milestones
Milestone
Description
M1
Project foundation complete
M2
Core engines operational
M3
Smart Autopilot functional
M4
Analytics and reporting complete
M5
Scenario engine supports multiple industries
M6
Digital Twin operational
M7
Enterprise deployment ready

 
25.8 Risks and Mitigations
Risk
Mitigation
Excessive coupling between modules
Enforce Event Bus communication
Performance degradation as scenarios grow
Optimise state updates and event processing
Inconsistent simulation behaviour
Centralise business rules in the AI Decision Engine
Configuration errors
Validate scenario profiles before loading
Feature creep
Prioritise roadmap milestones and maintain Architecture Decision Records (ADRs)

 
25.9 Assumptions
The proposed architecture assumes:
Modern browser support.
ES6 module compatibility.
Moderate simulation scale (single facility) for the MVP.
Offline operation using Local Storage.
Future backend services available for enterprise deployments.
25.10 Success Criteria
The implementation will be considered successful when:
The simulator demonstrates realistic facility operations without manual intervention.
Users can switch between multiple facility scenarios.
KPIs, dashboards, and reports update automatically.
The architecture supports incremental enhancement without major refactoring.
The simulator serves as both a sales demonstration tool and a training environment.
25.11 Implementation Roadmap
Foundation
  	│
  	▼
Core Engines
  	│
  	▼
Workflow Automation
  	│
  	▼
Smart Autopilot
  	│
  	▼
Analytics & Reporting
  	│
  	▼
Scenario Expansion
  	│
  	▼
Digital Twin
  	│
  	▼
Enterprise Platform
This roadmap provides a clear progression from the current prototype to a mature simulation platform.
25.12 Acceptance Criteria
This chapter is complete when:
The technology stack is documented.
Development phases are defined.
Milestones are established.
Risks and assumptions are identified.
The implementation roadmap aligns with the architectural vision.
The proposed technologies support future enterprise evolution.
 
Recommendation
The proposed architecture positions the Smart Facility Simulator as more than a demonstration tool.
It becomes a reusable simulation platform capable of supporting:
Interactive product demonstrations.
Customer onboarding.
Staff training.
Workflow validation.
Feature prototyping.
Digital twin experimentation.
Operational analytics.
Future AI-assisted optimisation.
By following the phased roadmap and modular architecture described in this document, SaniTrack can incrementally expand the simulator from its current browser-based implementation into a scalable enterprise solution while maintaining a consistent architectural foundation.

