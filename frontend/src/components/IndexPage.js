import React from "react";
import photo from './images/indexphoto.jpg'
import { Container, Typography } from '@mui/material';
import "./styles.css"
const IndexPage = () => (
    <Container>

    <div className="content-area">
        <div className="content-text">
            <Typography variant="h4" className="content-text-item">Disease detection tool</Typography>
            <Typography variant="body1" className="content-text-item">This website works as a tool healthcare professionals and so and so and so on</Typography>
        </div>
        <div className="content-photo">
            <img src={photo} alt="Frontend Picture" width="40%" height="40%" />
        </div>
    </div>
    </Container>
)

export default IndexPage;