"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

import { Container } from "@/components/container";

export default function Home() {
  return (
    <Container as="main">
      <div className="space-y-16">
        <div className="space-y-16 lg:relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-4">
          <div className="relative z-10 mr-auto min-h-72">
            <TypeAnimation
              aria-label="Mission Focused Developer"
              role="marquee"
              className="text-balance font-cal text-7xl uppercase leading-tight lg:text-9xl lg:leading-snug"
              sequence={[
                `
                Mateusz
                Flisikowski

                `,
                500,
                `
                Mission
                Focused
                Developer
                `,
                1000,
              ]}
              deletionSpeed={99}
              cursor={false}
              speed={20}
              preRenderFirstString
              repeat={Infinity}
            />
          </div>

          <div className="lg:relative lg:z-0 lg:flex-grow">
            <Image
              className="aspect-[2/3] w-full object-cover"
              src="/mateusz-flisikowski.jpeg"
              alt="Mateusz Flisikowski Development"
              width="570"
              height="570"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <p className="lg:text-md qtext-zinc-800 font-mono text-base lg:leading-8">
            My name is Mateusz Flisikowski, and I am a <span>fullstack engineer</span> with a strong
            focus on
            <span>design</span> and user experience. I am constantly exploring new ways to build
            efficient and
            <span>aesthetically pleasing websites and applications</span>. As a dedicated parent of{" "}
            <span>three wonderful sons</span> and husband, I value balancing my professional and
            personal life.
          </p>

          <p className="lg:text-md font-mono text-base text-zinc-800 lg:leading-8">
            Whether I am building a simple <span>landing page</span>, a complex web application, or
            developing a fullstack solution, I am always looking for ways to push the boundaries and
            create something truly special. I am passionate about my work and dedicated to
            delivering the
            <span>highest quality products</span> to my clients. I would love to discuss how I can
            help bring your vision to life, from front-end to back-end. Please feel free to reach
            out to start the conversation.
          </p>
        </div>
      </div>
    </Container>
  );
}
