import React from 'react';
import { useGraphQL } from 'graphql-react';
import { useTable } from 'react-table';

import TitleBar from './TitleBar';
/*import Record from './Record';*/
import Errors from './Errors';

/*const RecordsList = () => {
    const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
        fetchOptionsOverride(options) {
            options.url = 'http://192.168.0.109:4000/graphql'
        },
        operation: {
            query: `{
                records(limit: 0) {
                    dateIn
                    person {
                        name
                        rut
                    }
                    vehicle {
                        type
                        patente
                    }
                    parcel {
                        number
                    }
                    observation
                    dateOut
                }
            }`
        }
    });

    return (
        <div className='RecordsList'>
            <TitleBar title='Registros' description='Mostrando los ultimos 12 ingresos al condominio'/>
            <div className='columns'>
                <span>INGRESO</span>
                <span>NOMBRE</span>
                <span>RUT</span>
                <span>VEHICULO</span>
                <span>PATENTE</span>
                <span>PARCELA</span>
                <span>OBSERVACION</span>
                <span>SALIDA</span>
            </div>
            {
                data ? (
                    data.records.map(record => (
                        <Record key={ data.records.indexOf(record) } id={ record.id }/>
                    ))
                ) : loading ? (
                    'Loading...'
                ) : (
                    <Errors { ...errors }/>
                )
            }
        </div>
    );
}*/

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

    const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
        fetchOptionsOverride(options) {
            options.url = 'http://192.168.0.109:4000/graphql'
        },
        operation: {
            query: `{
                records(limit: 0) {
                    dateIn
                    person {
                        name
                        rut
                    }
                    vehicle {
                        type
                        patente
                    }
                    parcel {
                        number
                    }
                    observation
                    dateOut
                }
            }`
        }
    });

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