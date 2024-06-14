import { useContext, useEffect, useState } from "react";
import OperationBtn from "../../buttons/operation_btn";
import MenuTitle from "../../utils-components.tsx/menuTitle";
import Tables from "../../utils-components.tsx/table/browse-tables";
import { MenuContext, PaginationContext } from "../../../contextAPI/contextApi";
import generateFilterModel from "../../utils-components.tsx/browseFilterData";
import GetAllOrdersService from "../../services/orderService";


function OrderBrowse() {
    const [rows, setRows] = useState([]);
    const [count, setCount] = useState(0);

    const displayedColumns = {
        columns: [
            'orderStatus',
            'orderNo',
            'orderDate',
            'client',
            'regime',
            'dispatchStation',
            'destinationStation',
            'cargoName',
            'wagonCount',
        ],
        columnsTranslates: [
            'Status',
            'Sifariş №',
            'tarix',
            'Müştəri',
            'rejim',
            'Göndərmə stansiyası',
            'Təyinat stansiyası',
            'Yük',
            'Vaqon sayı',
        ]
    };

    const widthOptions: any[] = [
        {
            columnName: 'Yük',
            width: '550px'
        },
        {
            columnName: 'Müştəri',
            width: '300px'
        },
        {
            columnName: 'Təyinat stansiyası',
            width: '300px'
        },
        {
            columnName: 'Göndərmə stansiyası',
            width: '300px'
        },
    ]

    const { menuData, setMenuData } = useContext(MenuContext);
    const { paginationData, setPaginationData } = useContext(PaginationContext);

    useEffect(() => {
        console.log(paginationData)
        console.log(menuData.id)
        GetAllOrdersService(generateFilterModel(paginationData.page+1, paginationData.rowsPerPage), (response: any) => {
            console.log(response)
            setCount(response.data.count)
            setRows(response.data.result)
        })
        // Number(localStorage.getItem('menuId')) ? '': ''
    }, [paginationData]);

    return <>
        <div className="row align-items-center">
            <div className="col-md-3">
                <MenuTitle></MenuTitle>
            </div>
            <div className="col-md-9 text-end">
                <OperationBtn></OperationBtn>
            </div>
        </div>

        <div className="row" style={{ height: '93%' }}>
            <Tables count={count} data={rows} displayedColumns={displayedColumns} widthOptions={widthOptions} ></Tables>
        </div>
    </>
}

export default OrderBrowse;