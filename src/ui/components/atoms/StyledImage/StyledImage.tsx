import {
    StyledImg
} from './StyledImage.styles';

interface IStyledImgProps {
    src:any;
    alt:string;
}
import { Box } from '@mui/material';

export default function StyledImage(props: IStyledImgProps ) {
    return (
        <>
            <Box component={'div'} sx={{display:{sm: 'initial', xs: 'none'}}}>
                <StyledImg src={props.src} alt={props.alt} />
            </Box>
        </>
    )
}