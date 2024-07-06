import Navbar from "@/components/shared/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const HomePage = () => {
  const words = [
    {
      text: "Manage",
    },
    {
      text: "your",
    },
    {
      text: "tasks",
    },
    {
      text: "Efficiently.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const paragraphWords = `Welcome to Taskly, your ultimate companion for managing tasks and boosting productivity. With our intuitive interface, you can easily organize, prioritize, and track your to-dos, ensuring that nothing falls through the cracks. Whether you're juggling work projects or personal goals, Taskly adapts to your needs and helps you stay on top of everything. Start achieving more today with Taskly, where every task is a step closer to your success.`;

  return (
    <>
      <BackgroundBeams className="-z-10" />
      <Navbar />
      <div className="py-20 mt-10 flex flex-col justify-center items-center pt-10">
        <TypewriterEffectSmooth words={words} className="text-2xl" />
        <div className="text-center px-40">
          <TextGenerateEffect words={paragraphWords} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
