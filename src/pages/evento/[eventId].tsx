import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
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

const Room: NextPage = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const evId = eventId ? eventId.toString() : 'erro';
  // const [eventInfo, setEventInfo] = useState({});

  return (
    <div>
      <Head>
        <title>Importância do cuidador das alguma coisa</title>
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
            <div className="sectionTitleInformation">Importância do cuidador das alguma coisa</div>
            <div className="sectionSubTitleInformation">
              Audiência Pública - 13 de Setembro de 2021 às 09:00
            </div>
          </div>

          <div className="videoPlayer">
            <VideoPlayer />
          </div>

          <div className="eventInformation">oi</div>
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
            <ChatContainer />
          </div>
        </ChatSection>
      </RoomContainer>
    </div>
  );
};

export default Room;
