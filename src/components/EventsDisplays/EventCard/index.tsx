import React from 'react';
import { useRouter } from 'next/router';
import ptBR from 'date-fns/locale/pt-BR';
import { format } from 'date-fns';
import { Card } from './styles';

interface CardPropsInterface {
  eventId: string;
  title: string;
  eventLiveId: string;
  eventType: string;
  eventScheduledHour: string;
}

export function EventCard({
  title, eventLiveId, eventType, eventScheduledHour, eventId,
}: CardPropsInterface) {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(`evento/${eventId}`);
  };

  return (
    <Card onClick={handleClick}>
      <div className="cardHeader">
        <p>
          {title.length > 30 ? `${title.substring(0, 30)} ...` : title}
        </p>
      </div>
      <div className="thumbnail">
        <img
          src={`https://img.youtube.com/vi/${eventLiveId}/default.jpg`}
          alt={`Foto representa da transmissão do evento ${title}`}
        />
      </div>
      <div className="cardFooter">
        <p>{eventType}</p>
        <p>{(`${format(new Date(eventScheduledHour), 'dd/MM/yyyy, HH:mm', { locale: ptBR })}`)}</p>
      </div>
    </Card>
  );
}
