/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Container } from '../styles/pages/homePageStyle';
import { Header } from '../components/Header';
import logoImg from '../assets/images/logo_banner.png';
import { database } from '../services/firebase';

import { LiveEventsSection } from '../components/HomePage/LiveEventsSection/index';
import { ScheduleEventsSection } from '../components/HomePage/ScheduledEventsSection/index';

const Home: NextPage = (props: any) => {
    const { eventsScheduled, eventsLive, eventsFinished } = props;

    return (
        <div>
            <Head>
                <title>Eventos Interativos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main>
                <Container>
                        <Image src={logoImg} alt="Logo" />

                    <LiveEventsSection eventsList={eventsLive} />

                    <ScheduleEventsSection eventsList={eventsScheduled} />

                    <ScheduleEventsSection eventsList={eventsFinished} />

                </Container>
            </main>

        </div>
    );
};

export async function getStaticProps() {
    let values: any;

    const roomInfoRef = database.ref('events');
    await roomInfoRef.once('value', (events) => {
        const listOfEvents = events.val();
        const parsedEvents = Object.entries(listOfEvents).map(([key, value]: any) => {
            const info: any = Object.values(value.info ? value.info : [])[0];
            const chat: any = Object.values(value.chat ? value.chat : [])[0];
            const questions: any = Object.values(value.questions ? value.questions : [])[0];

            return {
                roomId: key,
                title: info.title,
                eventOwner: info.authorID,
                youtubeLiveVideoId: info.youtubeLiveVideoId,
                scheduleTimeStamp: info.scheduleDate,
                type: info.type,
                description: info.description,
                status: info.status,
                chatMessagesCount: Object.values(chat ?? {}).length,
                questionsCount: Object.values(questions ?? {}).length,
            };
        });
        values = parsedEvents;
    });

    const recentEvents = values.sort((x:any, y:any) => x.scheduleTimeStamp - y.scheduleTimeStamp);

    const eventsLiveAux: any[] = [];
    const eventsScheduledAux: any[] = [];
    const eventsFinishedAux: any[] = [];

    recentEvents.forEach((event: any) => {
        switch (event.status) {
            case 'Em andamento':
                eventsLiveAux.push(event);
                break;
            case 'Agendado':
                eventsScheduledAux.push(event);
                break;
            default:
                eventsFinishedAux.push(event);
                break;
        }
    });

    return {
        props: {
            eventsLive: eventsLiveAux,
            eventsScheduled: eventsScheduledAux,
            eventsFinished: eventsFinishedAux,
        },
        revalidate: 100,
    };
}

export default Home;
