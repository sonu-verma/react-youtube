const Menu = ({menuName, src}) => {
    return (
            <li className="flex gap-6 my-4">
                <img src={`../../../../assets/${src}`} alt="Icon" />
                {menuName && <span>{menuName}</span> }
            </li>
    );
}

export default Menu;