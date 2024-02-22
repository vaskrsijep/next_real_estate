import Heading from "@/components/Header/Heading";
import Navbar from "@/components/Header/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="bg-[#AFD4E2] relative overflow-hidden">
        <Image 
          src="/images/house.png"
          alt="hero"
          width={600}
          height={100}
          className="absolute right-0 -bottom-54"
        />
        <div className="max-w-7xl mx-auto">
          <Navbar />
          <Heading />
        </div>
      </header>
    </>
  );
}
