import { Link } from "react-router-dom";

const NavBarList = ({ links }) => {

    const removeBlack = () => {
        document.querySelector("#images").classList.remove("scale");
        document.querySelector('#body').classList.remove('black')
        document.querySelector("#profile").classList.remove("opacity")
    }

    const link = links.map((link, index) => {
        return <li key={index}><Link to={`/${link === 'Home' ? '' : link.toLowerCase()}`} onClick={removeBlack}>{link}</Link></li>
    })

    return (
        <>
            {link}
        </>
    );
}
 
export default NavBarList;

