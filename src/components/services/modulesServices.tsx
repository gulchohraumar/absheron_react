import axios from "axios";
import AxiosHeaders, { environment } from "../utils";


export default function getModules(callback: any) {
    axios.get(environment.systemApi + 'Global/GetModules', { headers: AxiosHeaders() })
        .then(response => {
            callback(response.data.data)
        })
        .catch(err => console.log(err))
}

export function getMenus(id:number, callback: any) {
    axios.get(environment.systemApi + 'Global/GetMenus/' + id, { headers: AxiosHeaders() })
        .then(response => {
            callback(response.data.data)
        })
        .catch(err => console.log(err))
}