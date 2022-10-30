import React, { forwardRef, useState } from 'react';
import { ExpandMore } from '@mui/icons-material';
import {
  UiRoot,
  UiListWrapper,
  UiAccordion,
  UiAccordionSummary,
  UiListItemTitle,
  UiAccordionDetails,
  UiImg,
} from './Certificates.style';
import { UiGlobalTitle } from 'styles/global.style';

const TITLE = 'CERTIFICATES';
const certs = [
  {
    id: 'cert1',
    name: 'Microsoft Student Partner',
    src: 'https://drive.google.com/uc?export=view&id=1bmQG0Xb31ioorQyUoTiIa5EYECwXYQ9k',
  },
  {
    id: 'cert2',
    name: '工科技藝競賽',
    src: 'https://drive.google.com/uc?export=view&id=14hVEX7L0MsTsmMyGAE1xemxtuVBLHEDt',
  },
  {
    id: 'cert3',
    name: 'PhotoImpact X3 Professional',
    src: 'https://drive.google.com/uc?export=view&id=18NQ6QxAZ4fYgqL4A2MhO7TcJFhdFAD_L',
  },
  {
    id: 'cert4',
    name: 'Andes Certified Engineer',
    src: 'https://drive.google.com/uc?export=view&id=1xM1-VK9gKRq9sDJ2apZO09DIZaMGtkN2',
  },
  {
    id: 'cert5',
    name: 'JLPT N3',
    src: 'https://drive.google.com/uc?export=view&id=1lwDWqDmEoWvFOcoWLXDpFnGMqscyk6Im',
  },
  {
    id: 'cert6',
    name: '電腦軟體應用乙級',
    src: 'https://drive.google.com/uc?export=view&id=1IqQLWGOiIaDlbuB7J1BfNo2arP6YjLmC',
  },
  {
    id: 'cert7',
    name: '電腦軟體設計丙級',
    src: 'https://drive.google.com/uc?export=view&id=1KPkOWkdWM_dFb7dAd7IhTCWr82msHvqk',
  },
  {
    id: 'cert8',
    name: '電腦硬體裝修丙級',
    src: 'https://drive.google.com/uc?export=view&id=1sUZ0oc7xchmIk1PQQCYetYLmmYTH23Lh',
  },
  {
    id: 'cert9',
    name: '網頁設計丙級',
    src: 'https://drive.google.com/uc?export=view&id=1lawemNgWs9ZHaEujpvmoNYiCC3Cz7yz-',
  },
  {
    id: 'cert10',
    name: '工業電子丙級',
    src: 'https://drive.google.com/uc?export=view&id=1zA8LgSG674yeTByk7mtKuYdGsbg-ahwm',
  },
];

export const Certificates = forwardRef(( props, ref ) => {
  const [expandedPanel, setExpandedPanel] = useState(null);
  
  const expandAccordion = (panel) => (e, newExpanded) => {
    setExpandedPanel(newExpanded ? panel : null);
  };

  return (
    <UiRoot ref={ref}>
      <UiGlobalTitle>{TITLE}</UiGlobalTitle>
      <UiListWrapper>
        {certs.map(({ id, name, src }) => 
          <UiAccordion
            key={id}
            expanded={expandedPanel === id}
            onChange={expandAccordion(id)}
          >
            <UiAccordionSummary
              expanded={(expandedPanel === id).toString()}
              expandIcon={<ExpandMore />}
            >
              <UiListItemTitle>{name}</UiListItemTitle>
            </UiAccordionSummary>
            <UiAccordionDetails>
              <UiImg alt={name} src={src} />
            </UiAccordionDetails>
          </UiAccordion>)}
      </UiListWrapper>
    </UiRoot>
  );
});