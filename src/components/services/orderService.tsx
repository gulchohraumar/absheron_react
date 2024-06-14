import axios from "axios";
import AxiosHeaders, { environment } from "../utils";

export default function GetAllOrdersService(formData: any, callback: any) {
    axios.post(environment.orderApi + 'Order/GetAllOrders', formData, { headers: AxiosHeaders() }).then(function (response) {
        callback(response.data)
    })
        .catch(function (error) {
            console.log(error);
        });

}