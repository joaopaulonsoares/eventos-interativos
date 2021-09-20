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
                    <div>
                        <Image src={logoImg} alt="Logo" />
                    </div>

                    <LiveEventsSection eventsList={eventsLive} />

                    <ScheduleEventsSection eventsList={eventsScheduled} />

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

    return {
        props: {
            eventsLive: recentEvents ? recentEvents.filter((event: any) => event.status === 'Em andamento') : [],
            eventsScheduled: recentEvents ? recentEvents.filter((event: any) => event.status === 'Agendado') : [],
            eventsFinished: recentEvents ? recentEvents.filter((event: any) => event.status !== 'Agendado' && event.status !== 'Em andamento') : [],
        }, // will be passed to the page component as props
        revalidate: 100,
    };
}

export default Home;
