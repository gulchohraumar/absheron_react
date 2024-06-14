import { useEffect, useState } from "react"


export default function TableSearchHeader({ columns }: any) {
    const generateForm = () => {
        let model: any = {};
        columns.map((dt: string) => {
            model[dt.replace(/ /g, '')] = '';
        })
        console.log(model)
        setFilterForm(model)
    }

    useEffect(() => {
        generateForm();
    }, []);

    const [filterForm, setFilterForm] = useState<any>({});
    const [filterTableData, setFilterTableData] = useState<any>({});

    const handleFilter = (event: any) => {
        if (event.key === 'Enter') {
            console.log(filterForm)

            let filters: any[] = []
            Object.keys(filterForm).forEach((key: string) => {
                if (String(filterForm[key]).length > 0) {
                    filters.push({ 
                        columnName: key,
                        value: filterForm[key],
                        order: 0
                    })
                    let model = { ...filterTableData, filters: filters };
                    setFilterTableData(model)
                }
            });
        }
    }

    return <tr>
        {
            columns.map((dt: any, key: number) => {
                return <th key={key}>
                    <div className="field d-flex align-items-center">
                        <svg className='absolute left-3.5' xmlns="http://www.w3.org/2000/svg" width="15" height="14"
                            viewBox="0 0 15 14" fill="none">
                            <path
                                d="M12.4 0H2.6C1.6102 0 1.1153 -4.63597e-08 0.808 0.320448C0.5 0.640896 0.5 1.15735 0.5 2.18947V2.72614C0.5 3.53271 0.5 3.93638 0.682 4.27082C0.864 4.60527 1.1951 4.81372 1.8594 5.22906L3.8985 6.50463C4.3437 6.78307 4.567 6.9223 4.7266 7.0763C5.0584 7.39597 5.2628 7.77242 5.3552 8.2352C5.4 8.45609 5.4 8.71587 5.4 9.23466V11.3113C5.4 12.0184 5.4 12.3722 5.5764 12.6476C5.7528 12.9237 6.0664 13.0598 6.6922 13.332C8.0075 13.9029 8.6648 14.1884 9.1324 13.8633C9.6 13.5389 9.6 12.7961 9.6 11.3106V9.23388C9.6 8.71587 9.6 8.45609 9.6448 8.23442C9.73271 7.7811 9.95416 7.37329 10.2741 7.07552C10.433 6.9223 10.6563 6.78307 11.1015 6.50385L13.1406 5.22828C13.8042 4.81372 14.1367 4.60605 14.318 4.2716C14.5 3.93715 14.5 3.53271 14.5 2.72536V2.18869C14.5 1.15735 14.5 0.640896 14.192 0.320448C13.8854 -4.63597e-08 13.3905 0 12.4 0Z"
                                fill="#949494" />
                        </svg>
                        <input
                            type="text"
                            name="filter"
                            id="filter"
                            placeholder={dt}
                            onKeyUp={handleFilter}
                            onChange={(event) => {
                                let newValues: any = { ...filterForm };
                                newValues[dt] = event.target.value;
                                setFilterForm(newValues);
                            }}
                        />
                    </div>
                </th>
            })
        }
    </tr>
}