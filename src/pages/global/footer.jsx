import { useContext } from 'react'
import { Context } from '../../context/context';
import { styled } from 'styled-components';
import LensIcon from '@mui/icons-material/Lens';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from "../../theme";

const ContentFooter = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const FirstCircle = styled(LensIcon)`
    margin-right: 4%;
    color: #989898;
`

function Footer() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const { currentView } = useContext(Context);
    if (currentView == 0) {
        return (
            <ContentFooter>
                <IconButton>
                    <LensIcon style={{
                        color: colors.primary[500]
                    }}  ></LensIcon>
                </IconButton>
            </ContentFooter>
        )
    } else if (currentView == 1) {
        return (
            <ContentFooter>
                <IconButton>
                    <FirstCircle></FirstCircle>
                </IconButton>
                <IconButton>
                    <LensIcon style={{
                        color: colors.primary[500]
                    }}  ></LensIcon>
                </IconButton>
            </ContentFooter>
        )
    } else if (currentView == 2) {
        return (
            <ContentFooter>
                <IconButton>
                    <FirstCircle></FirstCircle>
                </IconButton>
                <IconButton>
                    <FirstCircle></FirstCircle>
                </IconButton>
                <IconButton>
                    <LensIcon style={{
                        color: colors.primary[500]
                    }}  ></LensIcon>
                </IconButton>
            </ContentFooter>
        )
    }
}

export default Footer