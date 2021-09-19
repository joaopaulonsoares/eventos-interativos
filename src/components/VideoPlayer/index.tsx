/* eslint-disable no-use-before-define */
import React from 'react';
import { VideoContainer } from './style';

interface VideoPlayerProps {
  videoId: string;
}

export function VideoPlayer({ videoId }: VideoPlayerProps) {
  return (
    <VideoContainer>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
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
