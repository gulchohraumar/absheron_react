import { useContext } from "react";
import { MenuContext } from "../../contextAPI/contextApi";


export default function MenuTitle() {
    const { menuData, setMenuData } = useContext(MenuContext);
    return <span className="font-medium text-black">{menuData.name}</span>
}