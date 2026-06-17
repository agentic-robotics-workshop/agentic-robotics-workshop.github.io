import type { KeyDate, NumberedItem, Person } from "@/types";

export const NAV_LINKS = [
  { label: "Problems", href: "#problems" },
  { label: "Format", href: "#format" },
  { label: "Speakers", href: "#speakers" },
  { label: "Submissions", href: "#submissions" },
  { label: "Organizers", href: "#organizers" },
];

export const SPEAKERS: Person[] = [
  { name: "Ran Zhang", affiliation: "Tencent Video AI Center", image: "/people/ran_zhang.jpg" },
  { name: "Guanya Shi", affiliation: "Carnegie Mellon University", image: "/people/guanya_shi.png" },
  { name: "Ken Goldberg", affiliation: "UC Berkeley", image: "/people/ken_goldberg.jpg" },
  { name: "Jonathan Tremblay", affiliation: "NVIDIA", image: "/people/jonathan_tremblay.jpg" },
];

export const ORGANIZERS: Person[] = [
  { name: "Tianyu Shi", affiliation: "McGill University", image: "/people/tianyu_shi.jpg", website: "https://tianyushi.org/" },
  { name: "Gaotian Wang", affiliation: "Rice University", image: "/people/gaotian_wang.jpg", website: "https://vector-wangel.github.io/" },
  { name: "Haoru Xue", affiliation: "UC Berkeley", image: "/people/haoru_xue.png", website: "https://haoruxue.github.io/" },
  { name: "Max Fu", affiliation: "UC Berkeley", image: "/people/max_fu.jpg", website: "https://max-fu.github.io/" },
  { name: "Wenli Xiao", affiliation: "Carnegie Mellon University", image: "/people/wenli_xiao.jpg", website: "https://wenlixiao.com/" },
  { name: "Lingfeng Sun", affiliation: "Avant Robotics", image: "/people/lingfeng_sun.jpg", website: "https://lingfeng.moe/" },
  { name: "Yifei Shao", affiliation: "University of Pennsylvania", image: "/people/yifei_shao.webp", website: "https://shaoyifei96.github.io/" },
  { name: "Tianyu Li", affiliation: "University of Pennsylvania", image: "/people/tianyu_li.jpg", website: "https://imtianyuli.com/" },
  { name: "Jiayuan Mao", affiliation: "Amazon FAR", image: "/people/jiayuan_mao.jpg", website: "https://jiayuanm.com/" },
  { name: "Utkarsh Mishra", affiliation: "Georgia Tech", image: "/people/utkarsh_mishra.jpeg", website: "https://umishra.me/" },
  { name: "Siyi Chen", affiliation: "University of Michigan", image: "/people/siyi_chen.jpeg", website: "https://chicychen.github.io/" },
];

export const PROBLEMS: NumberedItem[] = [
  {
    number: "1",
    title: "The agent–policy seam",
    descHtml:
      "Where should the boundary fall between the <b>reasoning layer</b> and the <b>motor layer</b> — downloadable code libraries, fixed primitives, learned skills, or monolithic vision-language-action models? Is a factored agent–policy split a <i>durable architecture</i> for robotics, or a temporary scaffold that scaling will absorb?",
  },
  {
    number: "2",
    title: "Real-world self-improvement",
    descHtml:
      "Closed-loop agentic systems can drive <b>real-world self-improvement pipelines</b> such as real-world RL and physical auto-research. How do we build an agent system that manages this <i>without human intervention</i>?",
  },
  {
    number: "3",
    title: "Abstraction-aware guiding",
    descHtml:
      "Feedback can be injected mid-trajectory at many levels of abstraction. How should a system <b>route corrections to the level where they generalize best</b> — <i>language feedback</i> to the agent for task logic, <i>kinesthetic feedback</i> to the policy for motor primitives — rather than smearing supervision across a monolithic model?",
  },
  {
    number: "4",
    title: "Simulation as the data multiplier",
    descHtml:
      "With controlled environments and <b>verifiable rewards</b>, how can we best leverage agentic systems to <i>hill-climb research</i> and generate data in simulation?",
  },
  {
    number: "5",
    title: "Zero-shot composition",
    descHtml:
      "Novel task structure is currently most accessible through an agent layer riding the foundation-model flywheel. Can <b>monolithic VLA models</b> absorb compositional capability through scaling, or is <i>architectural factoring</i> the only known route to zero-shot task composition?",
  },
  {
    number: "6",
    title: "Evaluating agentic robotic systems",
    descHtml:
      "What does an <b>honest benchmark</b> look like for systems that are multi-turn, multi-abstraction, and evaluated across <i>simulation and reality</i>? If &ldquo;the agent decided to try again&rdquo; is itself a behavior under test, how do we measure recovery without rewarding benchmark gaming?",
  },
];

export const FORMAT_MODES: NumberedItem[] = [
  {
    number: "1",
    title: "Standardized workshop tasks",
    descHtml:
      "A small suite of diagnostic tasks on shared robot platforms — pick-and-place, sorting, re-arrangement, tool-use, and short-horizon sequences — chosen to expose the seams between <b>perception, reasoning, skill selection, control, and recovery</b>.",
  },
  {
    number: "2",
    title: "Open call for demos on provided platforms",
    descHtml:
      "Submit agentic systems to run on platforms supplied by the organizers and partners. Planning, VLA, memory, verification, and tool-use agents can participate <i>without shipping their own hardware</i>.",
  },
  {
    number: "3",
    title: "Bring-your-own demos",
    descHtml:
      "Bring your own robots or portable setups to broaden the session beyond any single embodiment. The organizers help with <b>shipping and logistics</b>.",
  },
];

export const KEY_DATES: KeyDate[] = [
  { label: "Call for submissions", date: "July 2026" },
  { label: "Submission deadline", date: "Mid-September 2026" },
  { label: "Author notifications", date: "Early October 2026" },
  { label: "Camera-ready", date: "Late October 2026" },
];

export const LINKS = {
  openReview: "https://openreview.net",
};
