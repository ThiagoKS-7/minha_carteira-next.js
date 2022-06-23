import {
    StyledImg
} from './styles';


import { Box } from '@mui/material';
import { IIconProps } from './@types/IIconProps';

export default function Icon(props: IIconProps ) {
    return (
        <>
            <Box component={'div'} sx={{display:{sm: 'initial', xs: 'none'}}}>
                <StyledImg src={props.src} alt={props.alt} width={props.width} height={props.height}/>
            </Box>
        </>
    )
}