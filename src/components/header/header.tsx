import logo from '../../assets/login/absheron-logo.png'
import user from '../../assets/img/user.svg'
import down_img from '../../assets/img/pp_dropdown.svg'
import { Link } from 'react-router-dom';
import HeaderMenuList from './menuList';
import { useContext, useEffect, useState } from 'react';
import { getMenus } from '../services/modulesServices';
import { GetMenuContext } from '../../contextAPI/contextApi';

function Header() {
    const { getMenuData, setGetMenuData } = useContext(GetMenuContext);
    const [menuList, setmenuList] = useState([])

    useEffect(() => {
        Number(localStorage.getItem('moduleId')) ? // storage-de id varsa onola request at, yoxdursa context apiden gelenle, o da yoxdursa menulari 0-la
            getMenus(Number(localStorage.getItem('moduleId')), (response: any) => setmenuList(response))
            :
            (getMenuData ? getMenus(getMenuData, (response: any) => setmenuList(response)) : setmenuList([]))
    }, [getMenuData])


    return <div className="row h-full align-items-center">
        <div className="col-md-2">
            <Link to={'../main/modules'}>
                <img role='button' src={logo} alt="" width={140} />
            </Link>
        </div>
        <div className="col-md-7 d-flex justify-content-center h-full">
            {
                menuList.map((dt: any, key: number) => {
                    return <HeaderMenuList key={key} item={dt}></HeaderMenuList>
                })
            }
        </div>
        <div className="col-md-3">
            <div className="d-flex justify-content-end gap-x-4">
                <span>
                    Uniser Group
                </span>

                <button className='d-flex align-items-center'>
                    <img src={user} alt="" />
                    <img src={down_img} alt="" className='ms-1' />
                </button>

                <span className='color-orange'>
                    03:02:38
                </span>
            </div>
        </div>
    </div>

}

export default Header;