
import Logo from '../../../assets/images/logo.svg'
import DarkLogo from '../../../assets/images/icon-moon.svg'
import LightLogo from '../../../assets/images/icon-sun.svg'
interface NavbarProps {
    themeEvent : () => void;
    theme : boolean
}
const Navbar = ({themeEvent, theme}:NavbarProps) => {

    return (
        <>
            <nav className="border flex justify-between p-3 rounded-lg">
                <img src={Logo} alt="Logo Image"/>
                <button onClick={themeEvent} className="border p-2  rounded-lg" ><img className="size-5" src={theme ? LightLogo : DarkLogo} alt="image"/></button>
            </nav>
        </>
    );
};

export default Navbar;