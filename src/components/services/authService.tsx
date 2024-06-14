import axios from "axios";
import { environment } from "../utils";
import { useNavigate } from "react-router-dom";


export default function loginService(formData: any, callback: any) {
    axios.post(environment.systemApi + 'Auth/login', formData).then(function (response) {
        callback(response.data)
    })
        .catch(function (error) {
            console.log(error);
        });

}

export function setCurrentUser(user: any) {
    if (user.data) {
        localStorage.clear();
        localStorage.setItem('token', user.data.accessToken.token);
        localStorage.setItem('refreshToken', JSON.stringify(user.data.accessToken.refreshToken));
        localStorage.setItem('fullname', user.data.firstName + ' ' + user.data.lastName);
        localStorage.setItem('subType', user.data.subType);
    }
}



