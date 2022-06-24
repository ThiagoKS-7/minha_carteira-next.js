import {
    StyledImg
} from './styles';


import { Box } from '@mui/material';
import { IStyledImgProps } from './@types';

export default function StyledImage(props: IStyledImgProps ) {
    return (
        <>
            <Box component={'div'} sx={{display:{sm: 'initial', xs: 'none'}}}>
                <StyledImg src={props.src} alt={props.alt} />
            </Box>
        </>
    )
}