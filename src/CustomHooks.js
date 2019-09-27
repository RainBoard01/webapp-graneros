import { useState } from 'react';
import { GraphQL } from 'graphql-react';

const graphql = new GraphQL();

const useRecordForm = callback => {
    const [inputs, setInputs] = useState({
      name: '',
      rut: '',
      type: '',
      patente: '',
      number: '',
      observation: ''
    });

    const handleInputChange = e => {
      e.persist();
      setInputs(inputs => ({ ...inputs, [e.target.name]:e.target.value }));
    };

    const handleSubmit = e => {
      if(e){
        graphql.operate({
          fetchOptionsOverride(options) {
            options.url = 'http://192.168.0.109:4000/graphql'
          },
          operation: {
            query: `
            mutation {
              addRecord(
                name: "${ inputs.name }",
                rut: "${ inputs.rut }",
                type: "${ inputs.type }",
                patente: "${ inputs.patente }",
                number: ${ inputs.number },
                observation: "${ inputs.observation }",
                guardId: "5d757465f4f3b71cd03d9ce3"){
                id
              }
            }`
          }
        });
        e.preventDefault();
    }
  };

    return {
        handleInputChange,
        handleSubmit,
        inputs
    };
};

export default useRecordForm;