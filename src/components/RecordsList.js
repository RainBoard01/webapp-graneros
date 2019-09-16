import React from 'react';
import { useGraphQL } from 'graphql-react';

import TitleBar from './TitleBar';
import Record from './Record';
import Errors from './Errors';

const RecordsList = () => {
    const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
        fetchOptionsOverride(options) {
            options.url = 'http://localhost:4000/graphql'
        },
        operation: {
            query: `{
                records {
                    id
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
}

export default RecordsList;