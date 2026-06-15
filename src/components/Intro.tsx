export function Intro() {
  return (
    <section className="fade-in mx-auto w-full max-w-[85rem] px-6 md:px-10">
      <div className="space-y-7 text-justify text-xl font-light leading-[1.7] text-text-primary">
        <p>
          Across the broader AI field, agents increasingly operate by{" "}
          <strong className="font-bold">decomposing tasks, generating code, calling tools, managing memory, and revising plans</strong>{" "}
          based on intermediate feedback. This pattern is spreading to robotics,
          where reasoning, skills, and verification are composed at inference time
          on top of learned policies. Bringing the paradigm onto physical robots,
          however, surfaces challenges absent from digital settings:{" "}
          <em className="italic">actions are continuous and irreversible</em>,
          observations are noisy and partial, and decisions must be made in real
          time. We call this emerging area the{" "}
          <strong className="font-bold">study of agentic robotics</strong>.
        </p>
        <p>
          Research on agentic robotics is currently distributed across several
          communities — foundation-model and{" "}
          <strong className="font-bold">VLA</strong> researchers building reasoning
          loops on learned policies, planning researchers using language models as
          abstractions, control and policy-learning researchers studying
          long-horizon execution, and software-agent researchers extending their
          methods to embodied tasks. These efforts share substantial common ground
          but <em className="italic">rarely meet in the same session</em>. This
          workshop creates that forum, with the explicit aim of surfacing shared
          open problems and points of disagreement across these communities.
        </p>
      </div>
    </section>
  );
}
