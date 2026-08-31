import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  DemoPlatformCard,
  type DemoPlatformRichText,
} from "@/components/DemoPlatformCard";
import { DemoReturnButton } from "@/components/DemoReturnButton";
import { Header } from "@/components/Header";
import { LINKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Demo Platforms | Workshop on Agentic Robotics",
  description:
    "Hardware platforms, preparation details, logistics, and FAQs for the Workshop on Agentic Robotics demo track.",
};

const providedPlatformItems: ReactNode[] = [
  "We bring the robot, mounted and powered — for NERO, your choice of gripper or dexterous hand",
  <>
    <b>Compute is yours.</b> Bring a laptop or workstation and run your stack
    on it
  </>,
  "Camera: use the robot’s onboard camera, or bring your own — we recommend your own, with a mount, if your method depends on the sensor or viewpoint",
  <>
    <b>You propose the task</b> and bring the props it needs
  </>,
  "A table, mains power and a wired network drop at the station",
];

const ownHardwareItems: ReactNode[] = [
  "Tell us your venue needs — floor or table space, power, network, anything unusual",
  "Everything else is yours to plan, shipping included",
  "Same submission route; no platform slot to compete for",
];

const faqs: { answer: ReactNode; question: string }[] = [
  {
    question: "Which platforms, and which tasks?",
    answer: (
      <>
        The two platforms above, plus bring-your-own. There is no fixed task
        list — demos live within <b>tabletop manipulation, mobile manipulation
        and navigation</b>, and within that scope you propose the task and bring
        the props it needs. Tell us early if it needs anything from the venue.
      </>
    ),
  },
  {
    question: "Do we get raw camera data?",
    answer: (
      <>
        Yes — raw images from the robot’s onboard camera, with calibration. We
        <b> recommend bringing your own camera and mount</b> if your method
        depends on a specific sensor or viewpoint.
      </>
    ),
  },
  {
    question: "What does the API expose?",
    answer: (
      <>
        Robot control and raw sensor streams, nothing above them. There are
        <b> no object IDs, no pixel-to-grasp service and no manipulation
        primitives</b> — perception, grounding and skill construction are the
        demo, not the scaffolding.
      </>
    ),
  },
  {
    question: "Is there a simulator before the workshop?",
    answer: (
      <>
        The SDKs and reference simulations above are public today. A
        <b> workshop scene</b> matching the station is coming soon and will be
        linked here.
      </>
    ),
  },
  {
    question: "What compute should we plan for?",
    answer:
      "Bring your own laptop or workstation and run whatever you like on it — your models, your stack, your environment. The station provides power and a wired drop.",
  },
  {
    question: "Can the submission video be simulation-only?",
    answer: (
      <>
        Yes, with physical integration after acceptance — except for the
        provided <b>Unitree G1</b>, where physical-robot video is the eligibility
        bar.
      </>
    ),
  },
  {
    question: "Can the same project go to both the Poster and Demo tracks?",
    answer: "Yes.",
  },
  {
    question: "Are the tracks archival?",
    answer:
      "No. Contributing here does not preclude submitting the full manuscript to a journal or another archival venue later.",
  },
  {
    question: "What is the deadline?",
    answer: (
      <>
        <b>September 27, 2026</b>, 11:59 PM Anywhere on Earth, via OpenReview.
      </>
    ),
  },
];

const neroDescription: DemoPlatformRichText = [
  { text: "Two " },
  { text: "7-DoF NERO arms", style: "bold" },
  {
    text: " on a shared column — the default tabletop and bimanual station, with a ",
  },
  { text: "parallel-jaw gripper", style: "bold" },
  { text: " or a " },
  { text: "Revo2 dexterous hand", style: "bold" },
  {
    text: " per arm. Open to every accepted demo; no prior experience required.",
  },
];

const neroApiItems: readonly DemoPlatformRichText[] = [
  [
    { text: "Python SDK over CAN (" },
    { text: "pyAgxArm", style: "bold" },
    { text: ") or " },
    { text: "ROS 2", style: "bold" },
    {
      text: " with MoveIt 2: joint, Cartesian and MIT-level control, plus full state read-back. Method-by-method reference is in the SDK docs.",
    },
  ],
  [
    { text: "Simulation: Isaac Lab environments for NERO in Agilex-College; URDF in " },
    { text: "agx_arm_urdf", style: "code" },
    { text: ". A workshop scene matching the station is coming soon." },
  ],
];

const unitreeDescription: DemoPlatformRichText = [
  { text: "A humanoid for demos needing " },
  {
    text: "locomotion, whole-body motion, or reach beyond a table",
    style: "bold",
  },
  {
    text: ". We cannot teach the platform on the day, so this slot requires ",
  },
  {
    text: "video of your system running on a physical G1",
    style: "bold",
  },
  { text: "." },
];

const unitreeApiItems: readonly DemoPlatformRichText[] = [
  [
    { text: "unitree_sdk2", style: "bold" },
    { text: " / " },
    { text: "unitree_sdk2_python", style: "bold" },
    {
      text: " over DDS: high-level locomotion and arm services, low-level per-joint control. See the official developer guide.",
    },
  ],
  [
    { text: "Simulation: " },
    { text: "unitree_mujoco", style: "bold" },
    { text: " or " },
    { text: "unitree_sim_isaaclab", style: "bold" },
    { text: ", driven by the same SDK messages as the robot." },
  ],
];

function RuleList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-7 space-y-4">
      {items.map((item, index) => (
        <li className="flex gap-3" key={index}>
          <span
            aria-hidden="true"
            className="mt-[0.6em] h-px w-4 shrink-0 bg-text-soft"
          />
          <span className="rich text-lg font-light leading-[1.6] text-text-primary">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function DemoPage() {
  return (
    <>
      <Header anchorPrefix="/" homeHref="/" />
      <DemoReturnButton />
      <main id="top" className="min-h-screen bg-background text-text-primary">
        <section className="fade-in mx-auto w-full max-w-[85rem] px-6 pb-4 pt-20 md:px-10 md:pt-24">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-text-muted">
            <Link className="transition-colors hover:text-text-primary" href="/">
              Workshop on Agentic Robotics
            </Link>{" "}
            <span className="text-text-soft">/</span> Demo Track
          </p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.0] tracking-[-0.02em] text-text-primary sm:text-6xl md:text-7xl">
            Demo Platforms
          </h1>
          <p className="mt-6 max-w-[42ch] text-2xl font-light italic leading-snug text-text-primary md:text-3xl">
            We bring the robot. You bring the{" "}
            <strong className="font-bold italic">agent</strong>.
          </p>
          <p className="mt-7 max-w-[68ch] text-lg font-light leading-[1.7] text-text-primary">
            Details for the demo session. This supplements the{" "}
            <Link
              className="underline underline-offset-2 transition-colors hover:text-text-muted"
              href="/#submissions"
            >
              Call for Contributions
            </Link>{" "}
            — submission goes through OpenReview by{" "}
            <strong className="font-bold">September 27, 2026</strong>.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 border-t border-surface-border pt-8 md:grid-cols-2 md:gap-12">
            <div>
              <p className="font-display text-2xl font-semibold text-text-primary">
                Bring your own
              </p>
              <p className="rich mt-2 text-lg font-light leading-[1.6] text-text-primary">
                Your own robot or portable setup — <b>always welcome</b>, and
                independent of what we provide. The demo itself runs on
                hardware; simulation belongs in the submission, not on the
                floor.
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-text-primary">
                Use a provided platform
              </p>
              <p className="rich mt-2 text-lg font-light leading-[1.6] text-text-primary">
                Run your agent on hardware we bring to Austin. Two platforms,
                below.
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-20 overflow-x-hidden py-14">
          <section
            id="platforms"
            className="fade-in mx-auto w-full max-w-[85rem] scroll-mt-32 px-6 md:px-10"
          >
            <h2 className="font-display text-5xl font-semibold tracking-[-0.01em] text-text-primary md:text-6xl">
              Provided Platforms
            </h2>
            <div className="mt-10 flex flex-col gap-12">
              <DemoPlatformCard
                id="agilex-nero"
                eyebrow="Platform A / AgileX Robotics"
                title="Dual-arm AgileX NERO"
                description={neroDescription}
                image={{
                  src: "/images/demo/agilex-nero.jpg",
                  alt: "Two AgileX NERO 7-DoF arms on a shared torso column",
                  caption:
                    "Vendor render. Final station configuration is confirmed closer to the workshop.",
                  width: 2276,
                  height: 1280,
                }}
                specs={[
                  { label: "Arms", value: "2 × NERO, 7 DoF, 3 kg / 580 mm each" },
                  { label: "End-effector", value: "AgxGripper or Revo2 hand" },
                  { label: "Bus", value: "CAN" },
                  {
                    label: "Teleoperation",
                    value: "Optional leader–follower lead arm",
                  },
                ]}
                specsLink={{
                  label: "Full specifications→",
                  href: "https://global.agilex.ai/products/nero",
                }}
                apiItems={neroApiItems}
                docLinks={[
                  {
                    label: "pyAgxArm — SDK and NERO API reference",
                    href: "https://github.com/agilexrobotics/pyAgxArm",
                  },
                  {
                    label: "agx_arm_ros — ROS 2 driver, MoveIt 2",
                    href: "https://github.com/agilexrobotics/agx_arm_ros",
                  },
                  {
                    label: "Agilex-College — Isaac Lab NERO examples",
                    href: "https://github.com/agilexrobotics/Agilex-College",
                  },
                ]}
              />
              <DemoPlatformCard
                id="unitree-g1"
                eyebrow="Platform B / Unitree Robotics"
                title="Unitree G1 humanoid"
                description={unitreeDescription}
                image={{
                  src: "/images/demo/unitree-g1.jpg",
                  alt: "Unitree G1 humanoid standing, arms raised",
                  caption:
                    "Rendered from Unitree’s published G1 simulation model.",
                }}
                specs={[
                  { label: "Robot", value: "Unitree G1 — configuration TBD" },
                  { label: "Hands", value: "TBD" },
                  { label: "Comms", value: "DDS over Ethernet" },
                  {
                    label: "Eligibility",
                    value: "Prior physical-G1 video required",
                  },
                ]}
                specsLink={{
                  label: "G1 developer documentation→",
                  href: "https://support.unitree.com/home/en/G1_developer",
                }}
                apiItems={unitreeApiItems}
                docLinks={[
                  {
                    label: "G1 Developer Guide",
                    href: "https://support.unitree.com/home/en/G1_developer",
                  },
                  {
                    label: "unitree_sdk2_python — Python SDK",
                    href: "https://github.com/unitreerobotics/unitree_sdk2_python",
                  },
                  {
                    label: "unitree_mujoco — MuJoCo simulation",
                    href: "https://github.com/unitreerobotics/unitree_mujoco",
                  },
                ]}
              />
            </div>
          </section>

          <section
            id="kit"
            className="fade-in mx-auto w-full max-w-[85rem] scroll-mt-32 px-6 md:px-10"
          >
            <h2 className="font-display text-5xl font-semibold tracking-[-0.01em] text-text-primary md:text-6xl">
              What to Bring
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-text-muted">
                  If you use our platform
                </p>
                <RuleList items={providedPlatformItems} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-text-muted">
                  If you bring your own hardware
                </p>
                <RuleList items={ownHardwareItems} />
              </div>
            </div>
          </section>

          <section
            id="logistics"
            className="fade-in mx-auto w-full max-w-[85rem] scroll-mt-32 px-6 md:px-10"
          >
            <h2 className="font-display text-5xl font-semibold tracking-[-0.01em] text-text-primary md:text-6xl">
              Logistics
            </h2>
            <dl className="mt-8 max-w-[80ch] border-t border-surface-border">
              {[
                ["Demo session", "16:00 – 18:00, November 12, 2026"],
                ["Setup window", "TBD — updated here once the venue confirms"],
                ["Slot length", "TBD — depends on the number of accepted teams"],
              ].map(([label, value]) => (
                <div
                  className="grid grid-cols-1 gap-1 border-b border-surface-border py-4 md:grid-cols-[16rem_1fr] md:gap-8"
                  key={label}
                >
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-text-muted md:pt-1">
                    {label}
                  </dt>
                  <dd className="text-lg font-light leading-snug text-text-primary">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section
            id="faq"
            className="fade-in mx-auto w-full max-w-[85rem] scroll-mt-32 px-6 md:px-10"
          >
            <h2 className="font-display text-5xl font-semibold tracking-[-0.01em] text-text-primary md:text-6xl">
              FAQ
            </h2>
            <dl className="mt-8 max-w-[80ch] border-t border-surface-border">
              {faqs.map((faq) => (
                <div
                  className="border-b border-surface-border py-6"
                  key={faq.question}
                >
                  <dt className="font-display text-2xl font-semibold leading-tight text-text-primary">
                    {faq.question}
                  </dt>
                  <dd className="rich mt-3 text-lg font-light leading-[1.65] text-text-primary">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 max-w-[80ch] text-lg font-light leading-[1.7] text-text-primary">
              Still marked TBD and you need the answer? Ask —{" "}
              <a
                href="mailto:TBD@example.com"
                className="underline underline-offset-2 transition-colors hover:text-text-muted"
              >
                TBD — workshop contact address
              </a>
              .
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={LINKS.openReview}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#141414] px-10 py-4 text-lg font-bold tracking-[0.5px] text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02]"
              >
                Submit a demo
              </a>
              <Link
                className="rounded-full border border-black/[0.18] px-10 py-4 text-lg font-bold tracking-[0.5px] text-text-primary transition-colors hover:bg-black/[0.04]"
                href="/"
              >
                Back to the workshop
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
