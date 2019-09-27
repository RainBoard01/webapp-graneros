import React from 'react';
import { useTable } from 'react-table';
import { GetRecords } from '../graphql';

import TitleBar from './TitleBar';
import Errors from './Errors';

const getHour = dateTime => dateTime ? dateTime.slice(11,16) : '';

const Table = ({ columns, data }) => {
    const { getTableProps, headers, rows, prepareRow } = useTable({
        columns,
        data
    });

    return (
        <table {...getTableProps()} className='records-table'>
            <thead>
                <tr>
                    {headers.map(header => (
                        <th { ...header.getHeaderProps() }>{ header.render('Header') }</th>
                    ))}
                </tr>   
            </thead>
            <tbody>
                {rows.map((row, i) => prepareRow(row) || (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            switch (cell.column.id) {
                                case "dateIn":
                                    cell.value = getHour(cell.value);
                                    return <td { ...cell.getCellProps() } className='hour'>{cell.render('Cell')}</td>;
                                case "dateOut":
                                    cell.value = getHour(cell.value);
                                    return <td { ...cell.getCellProps() } className='hour'>{cell.render('Cell')}</td>
                                case "person.rut":
                                    return <td { ...cell.getCellProps() } className='rut'>{cell.render('Cell')}</td>
                                case "vehicle.type":
                                    return <td { ...cell.getCellProps() } className='type'>{cell.render('Cell')}</td>
                                case "vehicle.patente":
                                    return <td { ...cell.getCellProps() } className='patente'>{cell.render('Cell')}</td>
                                case "parcel.number":
                                    return <td { ...cell.getCellProps() } className='parcel'>{cell.render('Cell')}</td>
                                default:
                                    return <td { ...cell.getCellProps() }>{cell.render('Cell')}</td>
                            }
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

const RecordsList = () => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'INGRESO',
                accessor: 'dateIn',
            },
            {
                Header: 'NOMBRE',
                accessor: 'person.name',
            },
            {
                Header: 'RUT',
                accessor: 'person.rut',
            },
            {
                Header: 'VEHICULO',
                accessor: 'vehicle.type',
            },
            {
                Header: 'PATENTE',
                accessor: 'vehicle.patente',
            },
            {
                Header: 'PARCELA',
                accessor: 'parcel.number',
            },
            {
                Header: 'OBSERVACION',
                accessor: 'observation',
            },
            {
                Header: 'SALIDA',
                accessor: 'dateOut',
            }
        ],
        []
    );

    const { loading, data, ...errors } = GetRecords(6);

    return (
        <div className='section RecordsList'>
            <TitleBar title='Registros' description='Mostrando los ultimos 10 ingresos al condominio'/>
            {
                data ? (
                    <Table columns={columns} data={data.records} />
                ) : loading ? (
                    'Loading...'
                ) : (
                    <Errors { ...errors }/>
                )
            }
        </div>
    )
}

export default RecordsList;