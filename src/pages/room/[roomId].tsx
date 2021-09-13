import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { Header } from '../../components/Header'
import { RoomContainer, QuestionsSection, VideoSection, ChatSection } from './style';

const Room: NextPage = () => {
    const router = useRouter()
    const { roomId } = router.query;

  return (
    <div>
        <Header />

        <RoomContainer>

          <QuestionsSection>
            Teste 1
          </QuestionsSection>
  
          <VideoSection>
            Teste 2
          </VideoSection>

          <ChatSection>
            Teste 3
          </ChatSection>

        </RoomContainer>
    </div>
  )
}

export default Room
