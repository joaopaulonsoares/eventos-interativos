import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import { AiOutlineWhatsApp, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';
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
import { BadgeComponent } from '../../components/Badges';

const Room: NextPage = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const evId = eventId ? eventId.toString() : 'erro';
  const { roomInfo } = useRoom(evId);

  return (
    <div>
      <Head>
        <title>{(roomInfo) ? roomInfo.title : 'Evento'}</title>
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
            <QuestionContainer eventId={evId} eventStatus={roomInfo ? roomInfo.status : 'Loading'} />
          </div>
        </QuestionsSection>

        <VideoSection>
          <div className="sectionHeadDiv">
            <div className="sectionTitleInformation">
              {
                roomInfo?.title ? (
                  <h1>{roomInfo.title}</h1>
                ) : (
                  <Skeleton height="20%" width="100%" />
                )
              }

            </div>
            <div className="sectionSubTitleInformation">
              {
                roomInfo?.parsedScheduleDate ? (
                  <h2>{`${roomInfo.type} - ${roomInfo.parsedScheduleDate}`}</h2>
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

          <div className="sectionFooter">
            <div className="eventStatus">
              {
                roomInfo?.status ? (
                  <>
                    <span>Descrição</span>
                    <BadgeComponent type={roomInfo.status} />
                  </>
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
          </div>

        </VideoSection>

        <ChatSection>
          <div className="sectionHeadDiv">
            <div className="shareContentDiv">
              <div>
                <p>Compartilhar evento</p>
              </div>
              <div className="shareIcons">
                <button type="button" aria-label="Compartilhar no Whatsapp"><AiOutlineWhatsApp size={30} /></button>
                <button type="button" aria-label="Compartilhar no Twitter"><AiOutlineTwitter size={30} /></button>
                <button type="button" aria-label="Compartilhar no Facebook"><AiFillFacebook size={30} /></button>
              </div>
            </div>
          </div>

          <div className="sectionContentDiv">
            <ChatContainer eventId={evId} eventStatus={roomInfo ? roomInfo.status : 'Loading'} />
          </div>
        </ChatSection>
      </RoomContainer>
    </div>
  );
};

export default Room;
