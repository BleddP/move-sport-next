// React / Next
import { useState } from "react";

const LinkedSteps = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);
  const baseUrl =
    process.env.NODE_ENV === "production" ? "" : "http://localhost:1337";

  return (
    <div className="linked-steps">
      <div className="steps">
        {steps.map((step, i) => {
          return (
            <Step
              step={step}
              index={i}
              key={i}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              length={steps.length}
            />
          );
        })}
      </div>
      <div className="active-step">
        <div className="active-step__icon">
          <img
            src={
              baseUrl + steps[activeStep].attributes.icon.data.attributes.url
            }
            alt={steps[activeStep].attributes.title}
          />
        </div>
        <div className="active-step__content">
          <h4>{steps[activeStep].attributes.title}</h4>
          <p>{steps[activeStep].attributes.content}</p>
        </div>
      </div>
    </div>
  );
};

export default LinkedSteps;

const Step = ({ step, index, activeStep, setActiveStep, length }) => {
  const { title } = step.attributes;
  const first = index === 0;
  const last = index === length - 1;
  const active = index === activeStep;

  const classes = ["step"];
  if (first) classes.push("first");
  if (last) classes.push("last");
  if (active) classes.push("active");

  return (
    <div className={classes.join(" ")}>
      <span className="step__index" onClick={() => setActiveStep(index)}>
        {index + 1}
      </span>
      <span className="step__title">{title}</span>
    </div>
  );
};
