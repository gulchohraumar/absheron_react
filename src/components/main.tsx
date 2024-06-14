import { Outlet } from 'react-router-dom';
import Header from './header/header';
import './main.scss'
import Modules from './modules';
import { GetMenuContext, MenuContext, ModuleContext, PaginationContext } from '../contextAPI/contextApi';
import { useState } from 'react';
import Footer from './header/footer';


function Main() {

    const [moduleData, setModuleData] = useState({});
    const [menuData, setMenuData] = useState(0);
    const [getMenuData, setGetMenuData] = useState({});
    const [paginationData, setPaginationData] = useState({ page: 0, rowsPerPage: 10 });

    return <>
        <ModuleContext.Provider value={{ moduleData, setModuleData }}>
            <MenuContext.Provider value={{ menuData, setMenuData }}>
                <GetMenuContext.Provider value={{ getMenuData, setGetMenuData }}>
                    <PaginationContext.Provider value={{ paginationData, setPaginationData }}>
                        <div className="header">
                            <Header></Header>
                        </div>

                        <div className="main p-4">
                            <Outlet></Outlet>
                        </div>

                        <div className="border-t border-gray-300 footer row align-items-center">
                            <Footer></Footer>
                        </div>
                    </PaginationContext.Provider>
                </GetMenuContext.Provider>
            </MenuContext.Provider>
        </ModuleContext.Provider>
    </>
}

export default Main;