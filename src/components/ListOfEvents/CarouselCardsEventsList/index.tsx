import React from 'react';
import { CarouselComponent } from '../../Carousel';
import { EventCard } from '../../EventsDisplays/EventCard';

export function CarouselCardsEventsList(props: any) {
  const { eventsList } = props;

  return (

    <CarouselComponent>
      {eventsList.map((event: any) => (
        <EventCard
          key={event.roomId}
          title={event.title}
          eventType={event.type}
          eventId={event.roomId}
          eventLiveId={event.youtubeLiveVideoId}
          eventScheduledHour={event.scheduleTimeStamp}
        />
      ))}
    </CarouselComponent>

  );
}
