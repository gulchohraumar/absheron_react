import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GetMenuContext, MenuContext } from "../../contextAPI/contextApi";

function HeaderMenuList({ item }: any) {
    const [menuUrl, setMenuUrl] = useState('');
    // const [menus, setMenus] = useState({});
    let location = useLocation();

    useEffect(() => {
        setMenuUrl(location.pathname)
    }, [location]);

    const { menuData, setMenuData } = useContext(MenuContext);

    return <Link to={item.link} onClick={() => {
        setMenuData(item);
        localStorage.setItem('menuId', item.id);
    }}>
        <div className={"w-fit d-flex align-items-center h-full px-1 mx-1 font-normal " + (menuUrl.includes(item.link) ? ' active-menu-item' : '')} >
            {item.value}
        </div>
    </Link>
}

export default HeaderMenuList;