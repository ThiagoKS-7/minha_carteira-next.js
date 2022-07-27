import { Grid } from '@mui/material';
import { IInputProps } from './@types';
import {
    TextFieldWrapper,
    StyledInput,
} from './styles';


export default function Input(props: IInputProps ) {
    return (
            <TextFieldWrapper>
                <h3>{props.label}</h3>
                <Grid item xs={12}>
                    <StyledInput type={props.type} placeholder={props.placeholder}/>
                </Grid>
            </TextFieldWrapper>
    )
}