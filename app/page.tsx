"use client";

import { FirstScreen } from "@/components/Pages/Home/FirstScreen/FirstScreen";
import { SecondScreen } from "@/components/Pages/Home/SecondScreen/SecondScreen";
import { Section } from "@/components/Section/Section";
import { PageContextProvider } from "@/context/usePageContext";
import { useDeviceSize } from "@/hooks/useDeviceSize";

export default function Main() {
  const { size } = useDeviceSize();

  return (
    size && (
      <PageContextProvider>
        <Section>
          <FirstScreen />
          <SecondScreen />
        </Section>
      </PageContextProvider>
    )
  );
}
