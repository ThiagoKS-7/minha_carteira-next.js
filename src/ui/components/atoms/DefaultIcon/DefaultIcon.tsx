import {
    StyledImg
} from './styles';


import { Box } from '@mui/material';
import { IDefaultIconProps } from './@types';

export default function DefaultIcon(props: IDefaultIconProps ) {
    return (
        <>
            <Box component={'div'} sx={{display:{sm: 'initial', xs: 'none'}}}>
                <StyledImg src={props.src} alt={props.alt} width={props.width} height={props.height}/>
            </Box>
        </>
    )
}