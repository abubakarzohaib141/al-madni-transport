const steps = [
  {
    number: "01",
    title: "Share your plans",
    text: "Tell us your dates, locations, group size and preferred vehicle.",
  },
  {
    number: "02",
    title: "Confirm the details",
    text: "Our team checks availability and provides a clear quote.",
  },
  {
    number: "03",
    title: "Prepare for pickup",
    text: "Once confirmed, your trip details and pickup arrangements are shared.",
  },
  {
    number: "04",
    title: "Travel with clarity",
    text: "Know the agreed journey details before your travel begins.",
  },
];

export default function JourneySteps() {
  return (
    <section className="promise-section">
      <div className="section-inner promise-grid">
        <div className="promise-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            A simpler way to arrange travel
          </div>

          <h2>
            Good journeys
            <br />
            begin with clarity.
          </h2>

          <p>
            We want every booking to feel straightforward.
            Share what you need, review the details with our
            team, and travel with an agreed plan.
          </p>
        </div>

        <div className="promise-steps">
          {steps.map((step) => (
            <article
              className="promise-step"
              key={step.number}
            >
              <span className="promise-number">
                {step.number}
              </span>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}