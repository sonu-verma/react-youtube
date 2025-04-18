import { Link } from "react-router-dom";

const Menu = ({menuName, src, route = "/"}) => {
    return (
            <Link to={route}><li className="flex gap-6 my-4">
                <img src={`../../../../assets/${src}`} alt="Icon" />
                {menuName && <span>{menuName}</span> }
            </li></Link>
    );
}

export default Menu;