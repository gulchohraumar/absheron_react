import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';
import ColumnDesc from './table-column-desc';
import './tables.scss'
import TableSearchHeader from './table-search-header';
import FirstPageRoundedIcon from '@mui/icons-material/FirstPageRounded';
import LastPageRoundedIcon from '@mui/icons-material/LastPageRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { styled } from '@mui/material';
import {
    TablePagination,
    tablePaginationClasses as classes,
} from '@mui/base/TablePagination';
import TablePaginationFunction from './table-pagination';
import { PaginationContext } from '../../../contextAPI/contextApi';
import { useContext, useEffect } from 'react';
import { Widgets } from '@mui/icons-material';
import TableBody from './table-body';


export default function Tables({ count, data, displayedColumns, widthOptions }: any) {

    return <div className="col-md-12 mt-3 d-block relative " style={{ height: '97%' }}>
        <div className='table-container' style={{ maxHeight: '95%' }} >
            <table>
                <thead className='sticky-header'>
                    <tr>
                        {
                            displayedColumns.columnsTranslates.map((dt: any, key: number) => {
                                return <th key={key} style={{ minWidth: widthOptions?.filter((data: any, keys: number) => data.columnName == dt)[0]?.width }}>
                                    <div className='headerColumnNames'>
                                        {dt}
                                    </div>
                                </th>
                            })
                        }
                    </tr>
                    <TableSearchHeader columns={displayedColumns.columns}></TableSearchHeader>
                </thead>
                <tbody>
                    <TableBody displayedColumns={displayedColumns} data={data} ></TableBody>
                </tbody>
            </table>
        </div>

        <table>
            <tfoot>
                <tr className='py-2'>
                    <TablePaginationFunction count={count} data={data}></TablePaginationFunction>
                </tr>
            </tfoot>
        </table>

        {/* CHECKBOXLU TABLE */}
        {/* <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                onRowSelectionModelChange={(ids) => {
                    const selectedRowData = rows.filter((row) =>
                        ids.includes(row.id)
                    );
                    console.log(rows);
                    console.log(selectedRowData);
                }}
            /> */}

    </div>
}