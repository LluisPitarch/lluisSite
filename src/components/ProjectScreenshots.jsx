import React from 'react';
import Title from './Title';

import styled from 'styled-components';
import { useResponsive } from '../hooks/useResponsive';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ProjectScreenshots = (props) => {
  const { isTabletOrPhone } = useResponsive();

  const ScreenshotsContainer = styled.section`
    margin: ${isTabletOrPhone ? '30px 0' : '100px 0'};
  `;

  const ImgContainer = styled.div`
    margin: 40px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  `;

  const Img = styled.img`
    width: 100%;
    border: solid #d9d9d9 3px;
    border-radius: 10px;
    margin: 10px 0px;
  `;

  return props.screenshots ? (
    <ScreenshotsContainer>
      <Title>Screenshots</Title>
      <ImgContainer>
        {props.screenshots.map((img) => {
          return (
            <Zoom>
              <Img key={img.id} src={img.src} alt="img" />
            </Zoom>
          );
        })}
      </ImgContainer>
    </ScreenshotsContainer>
  ) : (
    ''
  );
};

export default ProjectScreenshots;
