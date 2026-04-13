import React, { useMemo, useState } from "react";

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

  const progress = useMemo(() => {
    return Math.round(((currentStep + 1) / steps.length) * 100);
  }, [currentStep, steps.length]);

  const handleWorkflowChange = (event) => {
    setSelectedWorkflow(event.target.value);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const resetSteps = () => {
    setCurrentStep(0);
  };

  const isLastStep = currentStep === steps.length - 1;

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
          style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "bold",
          }}
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

      <div style={{ maxWidth: "820px", marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
            color: "#cbd5e1",
            fontSize: "14px",
          }}
        >
          <span>
            Step {currentStep + 1} of {steps.length}
          </span>
          <span>{progress}% complete</span>
        </div>

        <div
          style={{
            width: "100%",
            height: "12px",
            backgroundColor: "#1f2937",
            borderRadius: "999px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "#2563eb",
              transition: "width 0.3s ease",
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "24px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={previousStep}
          disabled={currentStep === 0}
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: currentStep === 0 ? "#475569" : "#334155",
            color: "white",
            cursor: currentStep === 0 ? "not-allowed" : "pointer",
            fontWeight: "bold",
          }}
        >
          Previous
        </button>

        <button
          onClick={nextStep}
          disabled={isLastStep}
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: isLastStep ? "#475569" : "#2563eb",
            color: "white",
            cursor: isLastStep ? "not-allowed" : "pointer",
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
          maxWidth: "820px",
        }}
      >
        <h2 style={{ marginTop: 0 }}>{selectedWorkflow} Workflow</h2>

        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div
              key={step}
              style={{
                padding: "16px",
                marginBottom: "12px",
                borderRadius: "12px",
                backgroundColor: isCurrent
                  ? "#2563eb"
                  : isCompleted
                  ? "#16a34a"
                  : "#1f2937",
                color: "white",
                transition: "0.3s ease",
              }}
            >
              <strong>Step {index + 1}:</strong> {step}
              {isCurrent && (
                <div
                  style={{
                    marginTop: "6px",
                    fontSize: "14px",
                    opacity: 0.9,
                  }}
                >
                  Current active step
                </div>
              )}
            </div>
          );
        })}

        {isLastStep && (
          <div
            style={{
              marginTop: "16px",
              padding: "16px",
              borderRadius: "12px",
              backgroundColor: "#14532d",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Workflow completed successfully.
          </div>
        )}
      </div>
    </div>
  );
}

export default App;