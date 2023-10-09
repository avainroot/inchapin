"use client";

import { FirstScreen } from "@/components/Pages/Home/FirstScreen/FirstScreen";
import { SecondScreen } from "@/components/Pages/Home/SecondScreen/SecondScreen";
import { Section } from "@/components/Section/Section";
import { PageContextProvider } from "@/context/usePageContext";

export default function Main() {
  return (
    <PageContextProvider>
      <Section>
        <FirstScreen />
        <SecondScreen />
      </Section>
    </PageContextProvider>
  );
}
