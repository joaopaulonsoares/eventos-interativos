import React, { useState, useEffect } from 'react';
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
  const [filteredEvents, setFilteredEvents] = useState(eventsList);
  const [searchedText, setSearchedText] = useState('');

  useEffect(() => {
    setFilteredEvents(eventsList);
  }, [eventsList]);

  function handleEventsFilter(filterTerm: string) {
    return eventsList.filter((event : any) => Object.values(event).some((value: any) => (`${value}`).toLowerCase().includes(filterTerm)));

    /*
    return eventsList.filter(
      (event: any) => JSON.stringify(event).toLowerCase().includes(filterTerm.toLowerCase()),
    );
    */
  }

  const handleSearchText = (e: any) => {
    e.preventDefault();
    // Search was cleaned or is empty => reset data to initial state
    if (e.target.value === '') {
      setFilteredEvents(eventsList);
    }

    setSearchedText(e.target.value);
    const auxFilteredEvents = handleEventsFilter(e.target.value);
    console.log(auxFilteredEvents);
    setFilteredEvents(auxFilteredEvents);
  };

  return (
    <Section>
      <div className="sectionHeader">
        <h2>Eventos Agendados</h2>
        <InputGroup className="inputGroup">
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Pesquisar" variant="flushed" value={searchedText} onChange={handleSearchText} />
        </InputGroup>
      </div>

      <StackedEventsList eventsList={filteredEvents} />
    </Section>
  );
}
