import { useContext } from "react";
import { PaginationContext } from "../../../contextAPI/contextApi";


export default function TableBody({ displayedColumns, data }: any) {
    const { paginationData, setPaginationData } = useContext(PaginationContext);
    return <>
        {
            data.length ?
                (paginationData.rowsPerPage > 0
                    ? data.slice(paginationData.page * paginationData.rowsPerPage, paginationData.page * paginationData.rowsPerPage + paginationData.rowsPerPage)
                    : data
                ).map((dt: any, key: number) => {
                    return <tr key={key}>
                        {
                            displayedColumns.columns.map((column: any, columnKey: number) => {
                                return <td key={columnKey}>
                                    {
                                        (displayedColumns.columnsTranslates[columnKey] == 'Fayl' && dt.fileUrl) ?
                                            <div className="text-center">
                                                <a className="text-blue-500" href={`${column.fileUrl}`}
                                                    target="_blank">
                                                    <i className="fa-solid fa-eye"></i>
                                                </a>
                                            </div>
                                            : <span>
                                                {displayedColumns.columnsTranslates[columnKey] == 'Status' && dt.colorCode ? <span className="statusIcon me-2" style={{ background: dt.colorCode }}> </span> : ''}
                                                {dt[column]}
                                            </span>
                                    }
                                </td>
                            })
                        }
                    </tr>
                })
                : <tr>
                    <td colSpan={6} className='col-lg-12 text-center fw-bold'>No data found </td>
                </tr>
        }
    </>
}