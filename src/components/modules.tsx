import { Link } from 'react-router-dom'
import './modules.scss'
import { useContext, useEffect, useState } from 'react';
import { GetMenuContext, ModuleContext } from '../contextAPI/contextApi';
import getModules from './services/modulesServices';

function Modules() {
    const { setModuleData } = useContext(ModuleContext);
    const { setGetMenuData } = useContext(GetMenuContext);
    const [modules, setModules] = useState([]);

    useEffect(() => {
        localStorage.removeItem('moduleId');
        localStorage.removeItem('menuId');
        setGetMenuData(0);
        getModules((response: any) => setModules(response))
    }, []);

    const handleClickModule = (data: any) => {
        setModuleData(data);
        setGetMenuData(data.id)
        localStorage.setItem('moduleId', data.id);
    }

    return <div className="px-4 h-full">
        <div className="row">
            {
                modules.map((dt: any, key: number) => {
                    return <div className="col-lg-3 mt-3" key={key} onClick={() => handleClickModule(dt)}>
                        <Link to={`../${dt.url}`} >
                            <div className="card-container row">
                                <div className="col-sm-5 ps-4 d-flex flex-column align-self-center ">
                                    <span className="module-title mt-2">
                                        {dt.value}
                                    </span>
                                    <span className="module-view-link mt-2 font-hairline">
                                        Daxil ol
                                    </span>
                                </div>
                                <div className="col-sm-7 p-0 card-logo-container">
                                    <img src={require(`../assets/modules/${dt.icon}`)} alt="" />
                                </div>
                            </div>
                        </Link>
                    </div>
                })
            }
        </div>
    </div >
}

export default Modules;