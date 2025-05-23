import React from "react";
import {Stack, Box} from '@mui/material';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import {MOCK_TOPICS, MOCK_ACHIVES_CIRCLES} from "./mocks";

import "./index.css";

type AchivementSummaryBlockType = {
    title: string,
    result: number,
}
const AchivementBlock = ({title, result}: AchivementSummaryBlockType) => {

    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <h1>{title}</h1> <progress max="10" value={result}>10%</progress>
        </Stack>
    )
}

const AchievementsPage = () => {
    const screenWidth = window.innerWidth;
    const achivesColumnsNumber = Math.floor(screenWidth / 100);
    const achivesGalleryWidth = 100 * achivesColumnsNumber;
    const logosBaseUrl = process.env.PUBLIC_URL;

    return (
        <Stack direction="row" justifyContent="space-between">
            {/** Постоянные увлечения **/}
            <Box>
                {MOCK_TOPICS.map(({title, result}) =>  (
                    <AchivementBlock title={title} result={result} />
                ))}
            </Box>

            {/** Разовые достижения **/}
            <Box maxWidth="60%">
                <h1>memory moments</h1>
                <ImageList sx={{ width: achivesGalleryWidth}} cols={achivesColumnsNumber} rowHeight={96}>
                    {MOCK_ACHIVES_CIRCLES.map(({path, label}) => (
                        <ImageListItem key={path}>
                                <img
                                    srcSet={`${logosBaseUrl}/assets/achivesCircles/${path}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${logosBaseUrl}/assets/achivesCircles/${path}?w=164&h=164&fit=crop&auto=format`}
                                    alt={label}
                                    loading="lazy"
                                    className='achiveImage'
                                />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Stack>
    )
}

export default AchievementsPage;