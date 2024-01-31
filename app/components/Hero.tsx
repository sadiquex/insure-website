import Image from "next/image";
import desktopHeroImage from "./../../public/images/image-intro-desktop.jpg";
import {
  DesktopHeroPatternLeft,
  DesktopHeroPatternRight,
  MobileHeroPatternLeft,
} from "./Assets";
import mobileHeroImage from "./../../public/images/image-intro-mobile.jpg";

export default function Hero() {
  return (
    <section className="bg-dark-violet text-white md:max-h-[80vh] md:py-20 relative">
      <div className="flex flex-col-reverse md:flex-row justify-between gap-2 mx-auto max-w-[1440px] md:w-[85vw]">
        {/* left side */}
        <div className="z-20 gap-8 py-10 md:py-0 flex-1 flex flex-col items-center justify-center md:flex md:justify-start md:items-start">
          <hr className="h-[2px] w-[140px] border-0 bg-white hidden md:block" />
          <p className="text-[54px] w-full md:w-[70%] font-bold text-center md:text-left tracking-wide font-dm-serif-display">
            Humanizing your insurance.
          </p>
          <p className="leading-6 w-[90%] text-sm text-center md:text-left very-light-gray">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that&apos;s right
            for you. Ensure you and your loved ones are protected.
          </p>
          <button className="border border-white uppercase py-3 px-8 hover:text-black hover:bg-white">
            View Plans
          </button>
        </div>
        {/* right side */}
        <Image
          src={desktopHeroImage}
          alt="hero"
          priority
          className="flex-1 hidden sm:block"
        />
        <Image
          src={mobileHeroImage}
          alt="hero"
          priority
          className="flex-1 block md:hidden w-full"
        />
        {/* desktop patterns */}
        <div className="absolute right-0 top-0 z-100 hidden md:block">
          <DesktopHeroPatternRight />
        </div>
        <div className="absolute left-0 bottom-0 translate-y-[50%] z-100 hidden md:block">
          <DesktopHeroPatternLeft />
        </div>

        {/* mobile patterns */}
        <div className="absolute left-0 top-[50%] z-100 block md:hidden">
          <MobileHeroPatternLeft />
        </div>
        <div className="absolute right-0 bottom-0 z-100 block md:hidden rotate-180">
          <MobileHeroPatternLeft />
        </div>
      </div>
    </section>
  );
}
