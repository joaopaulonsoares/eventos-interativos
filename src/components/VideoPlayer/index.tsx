/* eslint-disable no-use-before-define */
import React from 'react';
import { VideoContainer } from './style';

export function VideoPlayer() {
  return (
    <VideoContainer>
      <iframe
        src="https://www.youtube.com/embed/bZVgBAurxsI"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
        width="100%"
        height="100%"
      />
    </VideoContainer>
  );
}
