import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from 'styles/Home.module.css';
//hooks
import { GetClientConnect } from 'hooks/connect';
//components
import RowContainer from 'components/layout/rowContainer';
import TextContainer from 'components/layout/textContainer';

import PersonaWrapper from 'components/wrappers/personaWrapper';
import Menu from 'components/menu';
import BannerContainer from '../../components/layout/bannerContainer';

function Personas() {
    //props
    const [ client ] = GetClientConnect();
    const [ personas, setPersonas ] = useState([]);
    const [ intro, setIntro ] = useState([]);
    const [ footer, setFooter ] = useState([]);
    const [ footer2, setFooter2 ] = useState([]);
    //useEffect
    useEffect(() => {
        client
            .getEntries({
                content_type: 'persona'
            })
            .then((response) => {
                setPersonas(response.items);
            });
        client.getEntry('34rGF25o0nkyHzPg0YAMvM').then((response) => {
            setIntro(response.fields);
        });
        client.getEntry('7BM75QUCWdFVAFRoxUdH17').then((response) => {
            setFooter(response.fields);
        });
        client.getEntry('1n0IFmzWLglaMVbNzNfvGt').then((response) => {
            setFooter2(response.fields);
        });

        return console.log('exit page');
    }, []);
    return (
        <div>
            <Head>
                <title>Ik kan de weg vinden | Personas</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Menu />
            <main>
                <BannerContainer />
                {personas.length && <TextContainer theme={'dark'} fontSize='25px' textAlign={'center'} item={intro} />}
                {personas.length && <RowContainer wrapper={PersonaWrapper} items={personas} />}
                {personas.length && <TextContainer theme={'light'} item={footer} />}
                {personas.length && <TextContainer theme={'dark'} item={footer2} />}
            </main>
        </div>
    );
}
export default Personas;
