import React from 'react';
import { EventLineCard } from '../../EventsDisplays/EventLineCard';

export function StackedEventsList(props: any) {
  const { eventsList } = props;
  return (
    <>
      {eventsList.map((event: any) => (
        <EventLineCard
          key={event.roomId}
          eventId={event.roomId}
          title={event.title}
          scheduleTimeStamp={event.scheduleTimeStamp}
          description={event.description}
        />
      ))}
    </>
  );
}
