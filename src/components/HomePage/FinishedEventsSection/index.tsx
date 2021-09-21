import React, { useState, useEffect } from 'react';
import { Search2Icon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Section } from './styles';
import { CarouselCardsEventsList } from '../../ListOfEvents/CarouselCardsEventsList';
import { filterArrayOfObjects } from '../../../utils/filterArrayOfObjects';

interface SectionContainerInterface {
  eventsList: any;
}

export function FinishedEventsSection(
  { eventsList }: SectionContainerInterface,
) {
  const [filteredEvents, setFilteredEvents] = useState(eventsList);
  const [searchedText, setSearchedText] = useState('');

  useEffect(() => {
    setFilteredEvents(eventsList);
  }, [eventsList]);

  const handleSearchText = (e: any) => {
    e.preventDefault();
    // Search was cleaned or is empty => reset data to initial state
    if (e.target.value === '') {
      setFilteredEvents(eventsList);
    }

    setSearchedText(e.target.value);
    const auxFilteredEvents = filterArrayOfObjects(eventsList, e.target.value);
    setFilteredEvents(auxFilteredEvents);
  };

  return (
    <Section>
      <div className="sectionHeader">
        <h2>Eventos já encerrados</h2>
        <InputGroup className="inputGroup">
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Pesquisar" variant="flushed" value={searchedText} onChange={handleSearchText} />
        </InputGroup>
      </div>

      <CarouselCardsEventsList eventsList={filteredEvents} />

      <div className="finishedEventsSectionFooter">
        <button type="button">Ver outros eventos já encerrados</button>
      </div>
    </Section>
  );
}
