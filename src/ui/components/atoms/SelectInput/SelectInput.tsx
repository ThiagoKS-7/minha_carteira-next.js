import React from 'react';
import { ISelectInputProps } from './@types';

import { Container }  from './styles';



export default function  SelectInput(props: ISelectInputProps) {
    return (
        <Container>
            <select onChange={props.onChange} defaultValue={props.defaultValue}>
            {
                props.options.map( (option:any) => (
                <option 
                key={option.value}
                value={option.value}
                >
                    {option.label}
                </option>
                ))              
            }
            </select>
      </Container>
    );

};