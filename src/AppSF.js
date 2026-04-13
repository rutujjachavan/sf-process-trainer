import React, { useState } from "react";

const workflows = {
  Onboarding: [
    "Candidate selected",
    "Offer letter sent",
    "Offer accepted",
    "Employee record created",
    "System access assigned",
    "Onboarding completed",
  ],
  Promotion: [
    "Manager submits request",
    "HR reviews request",
    "Compensation approval",
    "Role updated in system",
    "Employee notified",
  ],
  Transfer: [
    "Transfer request raised",
    "Manager approvals",
    "HR validation",
    "Department change updated",
    "Transfer completed",
  ],
};

function App() {
  const [selectedWorkflow, setSelectedWorkflow] = useState("Onboarding");
  const [currentStep, setCurrentStep] = useState(0);

  const steps = workflows[selectedWorkflow];

  const handleWorkflowChange = (event) => {
    setSelectedWorkflow(event.target.value);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const resetSteps = () => {
    setCurrentStep(0);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "32px",
      }}
    >
      <h1 style={{ marginBottom: "8px", fontSize: "46px" }}>
        SF Process Trainer
      </h1>
      <p style={{ color: "#cbd5e1", marginBottom: "24px" }}>
        Practice common HR workflows step by step
      </p>

      <div style={{ marginBottom: "24px" }}>
        <label
          htmlFor="workflow"
          style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
        >
          Select Workflow
        </label>
        <select
          id="workflow"
          value={selectedWorkflow}
          onChange={handleWorkflowChange}
          style={{
            padding: "10px 12px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
            minWidth: "250px",
          }}
        >
          {Object.keys(workflows).map((workflow) => (
            <option key={workflow} value={workflow}>
              {workflow}
            </option>
          ))}
        </select>
      </div>

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        <button
          onClick={nextStep}
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#2563eb",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Next Step
        </button>

        <button
          onClick={resetSteps}
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#334155",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Reset
        </button>
      </div>

      <div
        style={{
          backgroundColor: "#111827",
          padding: "24px",
          borderRadius: "16px",
          maxWidth: "800px",
        }}
      >
        <h2 style={{ marginTop: 0 }}>{selectedWorkflow} Workflow</h2>

        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
  <div style={{ padding: "20px" }}>
    <h1>SF Process Trainer</h1>

    {Object.keys(workflows).map((process) => (
      <div key={process} style={{ marginBottom: "20px" }}>
        <h2>{process}</h2>
        <ul>
          {workflows[process].map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);