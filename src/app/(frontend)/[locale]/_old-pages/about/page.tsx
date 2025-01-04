import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { Container } from "@/components/(frontend)/container";

import { Hero } from "./_components/hero";

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");

  return (
    <>
      <Hero />

      <Container>
        <div className="grid grid-cols-3 gap-x-4 gap-y-4 text-center font-mono">
          <div className="order-3 col-span-3 lg:order-none lg:mx-auto lg:-mt-8 lg:mb-24 lg:mr-1">
            <Image
              className="relative z-0 aspect-video h-full w-full object-cover object-center filter transition-all duration-300 hover:brightness-110"
              height={1110}
              width={570}
              alt="about"
              src="/mateusz-flisikowski-1110x570.jpg"
            />
          </div>

          <div className="order-1 col-span-3 lg:order-none lg:col-span-1 lg:-mt-80 lg:mb-24">
            <Image
              className="relative z-10 aspect-video h-full w-full object-cover object-center filter transition-all duration-300 hover:brightness-110 lg:aspect-[2/3]"
              height={570}
              width={570}
              alt="about"
              src="/mateusz-flisikowski-570x570.jpeg"
            />
          </div>

          <div className="col-span-3 lg:col-span-2 lg:translate-x-4 xl:translate-x-16">
            <div className="font-col space-y-8 text-balance text-left text-xl md:col-span-3 md:text-2xl lg:text-3xl">
              {t("description")
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index} className={index === 0 ? "font-medium" : "font-light"}>
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
        </div>
        Jestem ambitnym i samodzielnym programistą front-end z doświadczeniem w tworzeniu
        nowoczesnych, wysokiej jakości aplikacji webowych. Szybko przyswajam nowe technologie i z
        pasją podejmuję wyzwania związane z tworzeniem innowacyjnych rozwiązań. Moim celem jest
        rozwijanie umiejętności, by dostarczać jeszcze bardziej kompleksowe i dopracowane
        rozwiązania, które spełniają najwyższe oczekiwania użytkowników i klientów.
      </Container>
    </>
  );
}
