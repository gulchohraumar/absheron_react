
const AxiosHeaders = () => {
    return {
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
        "Accept-Language": ` ${localStorage.getItem('language')}`,
        "Access-Control-Allow-Origin": `*`,
        "PageUrl": window.location.pathname,
        "Access-Control-Allow-Methods": 'GET, POST, DELETE, PUT'
    }
}

export default AxiosHeaders;

export let api = 'http://172.25.60.77:6099/ABSHERON';

export const environment = {
    production: true,
    fileBaseUrl: `${api}/Common/`,
    systemApi: `${api}/System/api/system/`, //6001
    commonApi: `${api}/Common/api/common/`, //6002
    cardOperationApi: `${api}/cardoperations/`, //6003
    requestApi: `${api}/Request/api/requests/`, //6004
    contractApi: `${api}/Option/api/options/`, //6005
    orderApi: `${api}/Order/api/orders/`, //6006
    financeApi: `${api}/Finance/api/invoice/`, //6007
    financeApiOperation: `${api}/Finance/api/operationInvoice/`, //6008
    operationApi: `${api}/ProofOfDelivery/api/ProofOfDelivery/`, //6009
    integrationApi: `${api}/Integration/api/integration/`, //6010
    reportApi: `${api}/Report/api/report/`, //6011
};


export const validateForm = (data: any) => {
    const errors: any = {};

    if (!data.username.trim()) {
        errors.username = '*Required field';
    }

    // if (!data.email.trim()) {
    //     errors.email = 'Email is required';
    // } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    //     errors.email = 'Email is invalid';
    // }

    if (!data.password) {
        errors.password = '*Required field';
    }
    // else if (data.password.length < 8) {
    //     errors.password = `Password must be at 
    //     least 8 characters long`;
    // }

    // if (data.confirmPassword !== data.password) {
    //     errors.confirmPassword = 'Passwords do not match';
    // }

    return errors;
};

