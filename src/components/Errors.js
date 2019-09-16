import React from 'react';

const Errors = ({ fetchError, httpError, parseError, graphQLErrors }) => (
  <>
    { fetchError && (<p>{fetchError}</p>) }
    { httpError && (<p>{httpError.statusText}</p>) }
    { parseError && (<p>{parseError}</p>) }
    { graphQLErrors && (<ul>
          {graphQLErrors.map(({ message }, index) => (
            <li key={index}>{message}</li>
          ))}
    </ul>)}
  </>
);

export default Errors;