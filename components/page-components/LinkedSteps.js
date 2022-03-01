// React / Next
import { useState, Fragment } from "react";

// Animation
import { useSpring, animated } from "react-spring";

const LinkedSteps = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);
  const baseUrl =
    process.env.NODE_ENV === "production" ? "" : "http://localhost:1337";

  // Animation
  const transition = useSpring({
    from: {
      opacity: 0,
      y: 48,
    },
    to: {
      opacity: 1,
      y: 0,
    },
  });

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
      <div key={activeStep}>
        <animated.div style={transition} className="active-step">
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
        </animated.div>
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
    <Fragment>
    <div className={classes.join(" ")}>
      <span className="step__index" onClick={() => setActiveStep(index)}>
        {index + 1}
      </span>
      <span className="step__title">{title}</span>
    </div>
    <div className={last ? 'link last' : 'link'}></div>
    </Fragment>
  );
};
