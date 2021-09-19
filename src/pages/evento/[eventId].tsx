import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import { VideoPlayer } from '../../components/VideoPlayer';
import { Header } from '../../components/Header';
import { ChatContainer } from '../../components/Chat/ChatContainer';
import { QuestionContainer } from '../../components/Questions/QuestionsContainer/index';
import {
  RoomContainer,
  QuestionsSection,
  VideoSection,
  ChatSection,
} from '../../styles/pages/eventoPageStyle';
import { useRoom } from '../../hooks/useRoom';

const Room: NextPage = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const evId = eventId ? eventId.toString() : 'erro';
  const { roomInfo } = useRoom(evId);

  return (
    <div>
      <Head>
        <title>Teste</title>
      </Head>
      <Header />

      <RoomContainer>
        <QuestionsSection>
          <div className="sectionHeadDiv">
            <div className="buttonDiv">
              <button type="button">
                <FaArrowLeft className="icon" />
                Voltar para a agenda
              </button>
            </div>
          </div>

          <div className="sectionContentDiv">
            <QuestionContainer eventId={evId} />
          </div>
        </QuestionsSection>

        <VideoSection>
          <div className="sectionHeadDiv">
            <div className="sectionTitleInformation">
              {
                roomInfo?.title ? (
                  <span>{roomInfo.title}</span>
                ) : (
                  <Skeleton height="20%" width="100%" />
                )
              }

            </div>
            <div className="sectionSubTitleInformation">
              {
                roomInfo?.parsedScheduleDate ? (
                  <span>{`${roomInfo.type} - ${roomInfo.parsedScheduleDate}`}</span>
                ) : (
                  <Skeleton height="20%" width="40%" />
                )
              }
            </div>
          </div>

          <div className="videoPlayer">
            {
              roomInfo?.youtubeLiveVideoId ? (
                <VideoPlayer videoId={roomInfo.youtubeLiveVideoId} />
              ) : (
                <Skeleton height="100%" width="100%" />
              )
            }
          </div>

          <div className="eventInformation">
            {
              roomInfo?.description ? (
                <span>{roomInfo.description}</span>
              ) : (
                <Skeleton height="100%" width="100%" />
              )
            }
          </div>
        </VideoSection>

        <ChatSection>
          <div className="sectionHeadDiv">
            <div className="shareContentDiv">
              <div>
                <p>Compartilhar evento</p>
              </div>
              <div className="shareIcons" />
            </div>
          </div>

          <div className="sectionContentDiv">
            <ChatContainer eventId={evId} />
          </div>
        </ChatSection>
      </RoomContainer>
    </div>
  );
};

export default Room;
