import Logo from '../../../public/images/logo.svg';
import DarkLogo from "../../../public/images/icon-moon.svg";
import LightLogo from "../../../public/images/icon-sun.svg";
interface NavbarProps {
  themeEvent: () => void;
  theme: boolean;
}
const Navbar = ({ themeEvent, theme }: NavbarProps) => {
  return (
    <>
      <nav className="bg-white shadow-md flex justify-between p-3 rounded-xl dark:bg-neutral-800">
        <img src={Logo} alt="Logo Image" />
        <button onClick={themeEvent} className="border border-neutral-400 dark:border-neutral-700 p-2  rounded-lg">
          <img
            className="size-5"
            src={theme ? LightLogo : DarkLogo}
            alt="image"
          />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
