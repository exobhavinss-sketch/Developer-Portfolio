import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full pt-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col w-full">
          <Hero />
          <About />
        </div>
      </main>
      <Footer />
    </>
  );
}
