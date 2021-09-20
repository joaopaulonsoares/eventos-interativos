import React from 'react';
import { Search2Icon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Section } from './styles';

interface SectionContainerInterface {
  eventStatus: string;
  children?: React.ReactNode;
}

export function SectionContainer({ eventStatus, children }: SectionContainerInterface) {
  if (eventStatus === 'Em andamento') {
    return (
      <Section>
        <div className="sectionHeader">
          <h2>Acontecendo agora</h2>
          <span>Ao vivo</span>
        </div>
        {children}
      </Section>
    );
  }
  return (
    <Section>
      <div className="sectionHeader">
        <h2>{eventStatus}</h2>
        <InputGroup className="inputGroup">
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Pesquisar" variant="flushed" />
        </InputGroup>
      </div>
      <div>
        {children}
      </div>
    </Section>
  );
}
