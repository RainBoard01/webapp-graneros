import React from 'react'
import { useGraphQL } from 'graphql-react';

import Errors from './Errors';

const Record = props => {
    const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
        fetchOptionsOverride(options) {
            options.url = 'http://localhost:4000/graphql'
        },
        operation: {
            query: `{
                record(id: "${props.id}") {
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

    const getTime = dateTime => dateTime.slice(11,16);

    return data ? (
        <div className='Record'>
            <span>{ getTime(data.record.dateIn) }</span>
            <span>{ data.record.person.name }</span>
            <span>{ data.record.person.rut }</span>
            <span>{ data.record.vehicle.type }</span>
            <span>{ data.record.vehicle.patente }</span>
            <span>{ data.record.parcel.number }</span>
            <span>{ data.record.observation }</span>
            <span>{ data.record.dateOut }</span>
        </div>
    ) : loading ? (
        'Loading...'
    ) : (
        <Errors { ...errors }/>
    );
}

export default Record
