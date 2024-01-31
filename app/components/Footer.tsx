import {
  DesktopFooterPattern,
  Facebook,
  Instagram,
  Logo,
  MobileFooterPattern,
  Pinterest,
  Twitter,
} from "./Assets";

export default function Footer() {
  return (
    <footer className="bg-very-light-gray pt-8 pb-10 relative">
      <div className="absolute left-0 top-0 block md:hidden z-0">
        <MobileFooterPattern />
      </div>

      <div className="absolute left-0 top-0 hidden md:block z-10">
        <DesktopFooterPattern />
      </div>

      <div className="mx-auto items-start w-[85vw] max-w-[1440px] ">
        {/* logo and social media icons */}
        <div className="flex flex-col gap-6 md:flex-row md:gap-0 justify-between items-center">
          <Logo />
          <span className="flex items-center gap-3">
            <Facebook />
            <Twitter />
            <Pinterest />
            <Instagram />
          </span>
        </div>
        <hr className="h-px my-8 border-0 bg-dark-grayish-violet" />

        {/* table */}
        <div className="text-center md:text-left grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-4 z-50 cursor-pointer">
          {/* row 1 */}
          <div>
            <h2 className="mb-6 font-semibold text-dark-grayish-violet">
              OUR COMPANY
            </h2>
            <ul className="text-dark-violet font-semibold text-sm">
              <li className="mb-2 hover:underline">HOW WE WORK</li>
              <li className="mb-2 hover:underline">WHY INSURE</li>
              <li className="mb-2 hover:underline">VIEW PLANS</li>
              <li className="mb-2 hover:underline">REVIEWS</li>
            </ul>
          </div>
          {/* row 2 */}
          <div>
            <h2 className="mb-6 font-semibold text-dark-grayish-violet">
              HELP ME
            </h2>
            <ul className="text-dark-violet font-semibold text-sm">
              <li className="mb-2 hover:underline">HOW WE WORK</li>
              <li className="mb-2 hover:underline">WHY INSURE</li>
              <li className="mb-2 hover:underline">VIEW PLANS</li>
              <li className="mb-2 hover:underline">REVIEWS</li>
            </ul>
          </div>

          {/* row 3 */}
          <div>
            <h2 className="mb-6 font-semibold text-dark-grayish-violet">
              CONTACT
            </h2>
            <ul className="text-dark-violet font-semibold text-sm">
              <li className="mb-2 hover:underline">SALES</li>
              <li className="mb-2 hover:underline">SUPPORT</li>
              <li className="mb-2 hover:underline">LIVE CHAT</li>
            </ul>
          </div>

          {/* row 4 */}
          <div>
            <h2 className="mb-6 font-semibold text-dark-grayish-violet">
              OTHERS
            </h2>
            <ul className="text-dark-violet font-semibold text-sm">
              <li className="mb-2 hover:underline">CAREERS</li>
              <li className="mb-2 hover:underline">PRESS</li>
              <li className="mb-2 hover:underline">LICENCES</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
