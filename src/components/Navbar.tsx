import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
interface NavbarProps {
  isTop: boolean;
  selectedNav: string;
  setSelectedNav: React.Dispatch<React.SetStateAction<string>>;
}

interface NavbarItemProps {
  navItem: string;
  selectedNav: string;
  setSelectedNav: React.Dispatch<React.SetStateAction<string>>;
}
function NavLink({ navItem, selectedNav, setSelectedNav }: NavbarItemProps) {
  const lowerCaseNavItem = navItem.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedNav === lowerCaseNavItem ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCaseNavItem}`}
      onClick={() => setSelectedNav(lowerCaseNavItem)}
    >
      {navItem}
    </AnchorLink>
  );
}

function Navbar({ isTop, selectedNav, setSelectedNav }: NavbarProps) {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const isAboveMobileScreens = useMediaQuery("(min-width: 780px)");
  const navBackgroundColor = isTop ? "" : "bg-red";
  return (
    <nav className={`${navBackgroundColor} z-40 w-full top-0 py-6 fixed`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">SR</h4>

        {isAboveMobileScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <NavLink
              navItem="Home"
              selectedNav={selectedNav}
              setSelectedNav={setSelectedNav}
            />
            <NavLink
              navItem="Skills"
              selectedNav={selectedNav}
              setSelectedNav={setSelectedNav}
            />
            <NavLink
              navItem="Projects"
              selectedNav={selectedNav}
              setSelectedNav={setSelectedNav}
            />
            <NavLink
              navItem="Contact"
              selectedNav={selectedNav}
              setSelectedNav={setSelectedNav}
            />
            <NavLink
              navItem="Blog"
              selectedNav={selectedNav}
              setSelectedNav={setSelectedNav}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => {
              setIsMenuOpened(!isMenuOpened);
            }}
          >
            <img src="../assets/menu-icon.svg" alt="menu-icon" />
          </button>
        )}
        {!isAboveMobileScreens && isMenuOpened && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuOpened(!isMenuOpened)}>
                <img src="../assets/close-icon.svg" alt="close-icon" />
              </button>
            </div>
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <NavLink
                navItem="Home"
                selectedNav={selectedNav}
                setSelectedNav={setSelectedNav}
              />
              <NavLink
                navItem="Skills"
                selectedNav={selectedNav}
                setSelectedNav={setSelectedNav}
              />
              <NavLink
                navItem="Projects"
                selectedNav={selectedNav}
                setSelectedNav={setSelectedNav}
              />
              <NavLink
                navItem="Contact"
                selectedNav={selectedNav}
                setSelectedNav={setSelectedNav}
              />
              <NavLink
                navItem="Blog"
                selectedNav={selectedNav}
                setSelectedNav={setSelectedNav}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
