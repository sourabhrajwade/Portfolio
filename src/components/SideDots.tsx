import AnchorLink from "react-anchor-link-smooth-scroll";
interface SideDotsProps {
  selectedNav: string;
  setSelectedNav: React.Dispatch<React.SetStateAction<string>>;
}
//{ selectedNav, setSelectedNav }: SideDotsProps

function SideDots({ selectedNav, setSelectedNav }: SideDotsProps) {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        className={`${
          selectedNav === "home" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        href={`#home`}
        onClick={() => setSelectedNav("home")}
      />
      <AnchorLink
        className={`${
          selectedNav === "skills" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        href={`#skills`}
        onClick={() => setSelectedNav("skills")}
      />
      <AnchorLink
        className={`${
          selectedNav === "projects" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        href={`#projects`}
        onClick={() => setSelectedNav("projects")}
      />
      <AnchorLink
        className={`${
          selectedNav === "contact" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        href={`#contact`}
        onClick={() => setSelectedNav("contact")}
      />
      <AnchorLink
        className={`${
          selectedNav === "blog" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        href={`#blog`}
        onClick={() => setSelectedNav("blog")}
      />
    </div>
  );
}

export default SideDots;
