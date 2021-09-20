import React from 'react';
import { useRouter } from 'next/router';
import ptBR from 'date-fns/locale/pt-BR';
import { format } from 'date-fns';
import { TimeIcon } from '@chakra-ui/icons';
import { LineCard } from './styles';

interface CardPropsInterface {
  eventId: string;
  title: string;
  description:string;
  scheduleTimeStamp: string;
}

export function EventLineCard({
  title, scheduleTimeStamp, eventId, description,
}: CardPropsInterface) {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(`evento/${eventId}`);
  };

  return (
    <LineCard>
      <div className="lineCardHeader">
        <div className="calendar">
          <span className="weekDay">
            {(`${format(new Date(scheduleTimeStamp), 'EEE', { locale: ptBR })}`)}
          </span>
          <span className="dayNumber">
            {(`${format(new Date(scheduleTimeStamp), 'dd', { locale: ptBR })}`)}
          </span>
          <span className="monthAbbr">
            {(`${format(new Date(scheduleTimeStamp), 'MMM', { locale: ptBR })}`)}
          </span>
          <span className="hour">
            <TimeIcon />
            {(`${format(new Date(scheduleTimeStamp), 'HH:MM', { locale: ptBR })}`)}
          </span>
        </div>
      </div>

      <div className="contentContainer">
        <div className="lineCardContent">
          <div className="info">
            <p className="title">{title}</p>
            <p>{description}</p>
          </div>
        </div>

        <div className="lineCardContentFooter">
          <button type="button" onClick={handleClick}><span>Ir para o evento</span></button>
        </div>
      </div>

    </LineCard>
  );
}
