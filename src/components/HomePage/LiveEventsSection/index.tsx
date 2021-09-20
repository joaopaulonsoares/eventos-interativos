import React from 'react';
import { Section } from './styles';
import { CarouselCardsEventsList } from '../../ListOfEvents/CarouselCardsEventsList/index';

export function LiveEventsSection({ eventsList }: any) {
  return (
    <Section>
      <div className="sectionHeader">
        <h2>Acontecendo agora</h2>
        <span>Ao vivo</span>
      </div>
      <CarouselCardsEventsList eventsList={eventsList} />
    </Section>
  );
}
