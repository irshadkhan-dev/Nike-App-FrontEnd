import { headerLogo } from "../assets/images";

export function NavComp() {
  return (
    <header className="w-full padding-x py-8 absolute z-10">
      <nav className="flex justify-between items-center max-w-[1440px] mx-auto">
        <a href="">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex gap-16 justify-center items-center text-lg text-gray-500 max-lg:hidden">
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </header>
  );
}
