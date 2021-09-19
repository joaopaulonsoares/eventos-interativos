/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import {
    BadgeEventHappening, BadgeEventScheduled, BadgeEventFinished, BadgeEventCanceled,
} from './style';

interface BadgeProps {
    type: 'Agendado' | 'Em andamento' | 'Encerrado' | 'Cancelado';
}

export function BadgeComponent({ type }: BadgeProps) {
    switch (type) {
        case ('Agendado'):
            return (
                <BadgeEventScheduled className="eventHappening">
                    <span>Evento agendado</span>
                </BadgeEventScheduled>
            );
        case ('Em andamento'):
            return (
                <BadgeEventHappening className="eventHappening">
                    <div className="dot-flashing" />
                    <span>Em andamento</span>
                </BadgeEventHappening>
            );
        case ('Encerrado'):
            return (
                <BadgeEventFinished className="eventHappening">
                    <div className="dot-flashing" />
                    <span>Evento encerrado</span>
                </BadgeEventFinished>
            );
        case ('Cancelado'):
            return (
                <BadgeEventCanceled className="eventHappening">
                    <span>Evento cancelado</span>
                </BadgeEventCanceled>
            );
        default:
            return (
                <BadgeEventHappening className="eventHappening">
                    <div className="dot-flashing" />
                    <span>Em andamento</span>
                </BadgeEventHappening>
            );
    }
}
