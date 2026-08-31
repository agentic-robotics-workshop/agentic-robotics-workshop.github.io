"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";

export interface DemoPlatformTextPart {
  text: string;
  style?: "bold" | "code";
}

export type DemoPlatformRichText =
  | string
  | readonly DemoPlatformTextPart[];

export interface DemoPlatformCardProps {
  id: string;
  eyebrow: string;
  title: string;
  description: DemoPlatformRichText;
  image: {
    src: string;
    alt: string;
    caption: string;
  };
  specs: readonly {
    label: string;
    value: string;
  }[];
  specsLink: {
    label: string;
    href: string;
  };
  apiItems: readonly DemoPlatformRichText[];
  docLinks: readonly {
    label: string;
    href: string;
  }[];
}

const TABS = [
  { key: "specs", label: "Specs" },
  { key: "api", label: "API & sim" },
  { key: "docs", label: "Links" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

function RichText({ content }: { content: DemoPlatformRichText }) {
  if (typeof content === "string") {
    return content;
  }

  return content.map((part, index) => {
    const key = `${index}-${part.text}`;

    if (part.style === "bold") {
      return <b key={key}>{part.text}</b>;
    }

    if (part.style === "code") {
      return <code key={key}>{part.text}</code>;
    }

    return <span key={key}>{part.text}</span>;
  });
}

function Eyebrow({ children }: { children: string }) {
  const separator = " / ";
  const separatorIndex = children.indexOf(separator);

  if (separatorIndex === -1) {
    return children;
  }

  return (
    <>
      {children.slice(0, separatorIndex)}
      <span className="text-text-soft">{separator}</span>
      {children.slice(separatorIndex + separator.length)}
    </>
  );
}

export function DemoPlatformCard({
  id,
  eyebrow,
  title,
  description,
  image,
  specs,
  specsLink,
  apiItems,
  docLinks,
}: DemoPlatformCardProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("specs");
  const tabRefs = useRef<Record<TabKey, HTMLButtonElement | null>>({
    specs: null,
    api: null,
    docs: null,
  });

  function selectTab(tab: TabKey) {
    setActiveTab(tab);
    tabRefs.current[tab]?.focus();
  }

  function handleTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    currentTab: TabKey,
  ) {
    const currentIndex = TABS.findIndex((tab) => tab.key === currentTab);
    let nextIndex: number | undefined;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % TABS.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + TABS.length) % TABS.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = TABS.length - 1;
    }

    if (nextIndex === undefined) {
      return;
    }

    event.preventDefault();
    selectTab(TABS[nextIndex].key);
  }

  return (
    <article
      id={id}
      className="scroll-mt-32 border border-black/[0.08] bg-black/[0.02] p-8 md:p-10"
    >
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-text-muted">
        <Eyebrow>{eyebrow}</Eyebrow>
      </p>
      <h3 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.01em] text-text-primary md:text-5xl">
        {title}
      </h3>
      <p className="rich mt-5 max-w-[62ch] text-lg font-light leading-[1.65] text-text-primary">
        <RichText content={description} />
      </p>

      <figure className="mt-8">
        <Image
          src={image.src}
          alt={image.alt}
          width={1280}
          height={700}
          className="h-auto w-full border border-surface-border-soft bg-white object-cover"
        />
        <figcaption className="mt-2 text-sm font-light text-text-muted">
          {image.caption}
        </figcaption>
      </figure>

      <div className="mt-9">
        <div
          role="tablist"
          aria-label={`${title} details`}
          className="flex flex-wrap gap-x-7 gap-y-2 border-b border-surface-border"
        >
          {TABS.map((tab) => {
            const isActive = tab.key === activeTab;

            return (
              <button
                key={tab.key}
                ref={(element) => {
                  tabRefs.current[tab.key] = element;
                }}
                id={`${id}-tab-${tab.key}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${id}-panel-${tab.key}`}
                tabIndex={isActive ? 0 : -1}
                className={`-mb-px border-b-2 pb-3 text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
                  isActive
                    ? "border-text-primary text-text-primary"
                    : "border-transparent text-text-soft hover:text-text-secondary"
                }`}
                onClick={() => setActiveTab(tab.key)}
                onKeyDown={(event) => handleTabKeyDown(event, tab.key)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          id={`${id}-panel-specs`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-specs`}
          hidden={activeTab !== "specs"}
          tabIndex={activeTab === "specs" ? 0 : -1}
          className="pt-7"
        >
          <dl className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
            {specs.map((spec) => (
              <div
                key={`${spec.label}-${spec.value}`}
                className="flex justify-between gap-6 border-b border-surface-border-soft pb-3"
              >
                <dt className="text-sm font-light uppercase tracking-[0.08em] text-text-muted">
                  {spec.label}
                </dt>
                <dd className="text-right text-lg font-light leading-snug text-text-primary">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
          <a
            href={specsLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-lg font-light text-text-primary underline underline-offset-4 transition-colors hover:text-text-muted"
          >
            {specsLink.label}
          </a>
        </div>

        <div
          id={`${id}-panel-api`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-api`}
          hidden={activeTab !== "api"}
          tabIndex={activeTab === "api" ? 0 : -1}
          className="pt-7"
        >
          <ul className="space-y-3">
            {apiItems.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[0.6em] h-px w-4 shrink-0 bg-text-soft"
                />
                <span className="rich text-lg font-light leading-[1.6] text-text-primary">
                  <RichText content={item} />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          id={`${id}-panel-docs`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-docs`}
          hidden={activeTab !== "docs"}
          tabIndex={activeTab === "docs" ? 0 : -1}
          className="pt-7"
        >
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {docLinks.map((link) => (
              <li key={`${link.label}-${link.href}`}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-light text-text-primary underline underline-offset-4 transition-colors hover:text-text-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
