import { useGraphQL } from 'graphql-react';

export function GetRecords(limit) {
    const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
        fetchOptionsOverride(options) {
            options.url = 'http://192.168.0.109:4000/graphql'
        },
        operation: {
            query: `{
                records(limit: ${ limit }) {
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

    return {
        loading,
        data,
        ...errors
    }
}

export function AddRecord(inputs) {
    const { loading, cacheValue: { data, ...errors } = {} } = useGraphQL({
        fetchOptionsOverride(options) {
            options.url = 'http://192.168.0.109:4000/graphql'
        },
        operation: {
            query: `
            mutation {
                addRecord(
                    name: ${ inputs.name },
                    rut: ${ inputs.rut },
                    type: ${ inputs.type },
                    patente: ${ inputs.patente },
                    number: ${ inputs.number },
                    observation: ${ inputs.observation },
                    guardId: "5d757465f4f3b71cd03d9ce3"){
                    id
                    dateIn
                    person{
                    rut
                    name
                    }
                    vehicle{
                    type
                    patente
                    }
                    guard{
                    name
                    }
                    parcel{
                    number
                    }
                    observation
                }
            }`
        }
    });

    return {
        loading,
        data,
        ...errors
    }
}