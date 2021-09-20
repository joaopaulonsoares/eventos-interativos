import React from 'react';
import { Search2Icon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Section } from './styles';
import { StackedEventsList } from '../../ListOfEvents/StackedEventsList';

interface SectionContainerInterface {
  eventsList: any;
}

export function ScheduleEventsSection(
  { eventsList }: SectionContainerInterface,
) {
  return (
    <Section>
      <div className="sectionHeader">
        <h2>Eventos Agendados</h2>
        <InputGroup className="inputGroup">
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Pesquisar" variant="flushed" />
        </InputGroup>
      </div>

      <StackedEventsList eventsList={eventsList} />
    </Section>
  );
}
