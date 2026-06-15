import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SupportedBy } from "@/components/SupportedBy";
import { Intro } from "@/components/Intro";
import { Problems } from "@/components/Problems";
import { Format } from "@/components/Format";
import { Speakers } from "@/components/Speakers";
import { CallForContributions } from "@/components/CallForContributions";
import { Organizers } from "@/components/Organizers";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="min-h-screen bg-background text-text-primary">
        <Hero />
        <div className="flex flex-col gap-24 overflow-x-hidden py-20">
          <SupportedBy />
          <Intro />
          <Problems />
          <Format />
          <Speakers />
          <CallForContributions />
          <Organizers />
        </div>
      </main>
    </>
  );
}
