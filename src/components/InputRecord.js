import React from 'react';
import useRecordForm from '../CustomHooks';
import TitleBar from './TitleBar';

const InputRecord = () => {
    const { inputs, handleSubmit, handleInputChange } = useRecordForm();

    return (
        <div className='section InputRecord'>
            <TitleBar title='Edicion' description='Vista a mas detalle de un Registro'/>
            <form onSubmit={ handleSubmit }>
                <div className='form-group'>
                    <label htmlFor="nameInput">NOMBRE</label>
                    <input type="text" id='nameInput' name='name' onChange={ handleInputChange } value={ inputs.name } required/>
                </div>
                <div className='form-group'>
                    <label htmlFor="nameInput">RUT</label>
                    <input type="text" id='rutInput' name='rut' onChange={ handleInputChange } value={ inputs.rut } required/>
                </div>
                <div className='form-group'>
                    <label htmlFor="nameInput">PATENTE</label>
                    <input type="text" id='patenteInput' name='patente' onChange={ handleInputChange } value={ inputs.patente }/>
                </div>
                <div className='form-group'>
                    <label htmlFor="nameInput">TIPO VEHICULO</label>
                    <input type="text" id='typeInput' name='type' onChange={ handleInputChange } value={ inputs.type }/>
                </div>
                <div className='form-group'>
                    <label htmlFor="nameInput">NRO PARCELA</label>
                    <input type="text" id='parcelInput' name='number' onChange={ handleInputChange } value={ inputs.number } required/>
                </div>
                <div className='form-group'>
                    <label htmlFor="nameInput">OBSERVACION</label>
                    <input type="text" id='observationInput' name='observation' onChange={ handleInputChange } value={ inputs.observation } required/>
                </div>
                <button type='submit' onChange={ handleSubmit }>Ingresar</button>
            </form>
        </div>
    )
}

export default InputRecord;
