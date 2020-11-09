import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from 'styles/Home.module.css';
//hooks
import { GetClientConnect } from 'hooks/connect';
//components
import RowContainer from 'components/layout/rowContainer';
import TextContainer from 'components/layout/textContainer';

import WetgevingWrapper from 'components/wrappers/wetgevingWrapper';
import Menu from 'components/menu';
import BannerContainer from 'components/layout/bannerContainer';

function Personas() {
    //props
    const [ client ] = GetClientConnect();
    const [ wetgevingen, setWetgeving ] = useState([]);
    const [ intro, setIntro ] = useState([]);
    //useEffect
    useEffect(() => {
        client
            .getEntries({
                content_type: 'wetgeving'
            })
            .then((response) => {
                setWetgeving(response.items);
            });
        client.getEntry('7iz1DyFNkWYJ1jdffet4Qb').then((response) => {
            setIntro(response.fields);
        });

        return console.log('exit page');
    }, []);
    return (
        <div>
            <Head>
                <title>Ik kan de weg vinden | Wetgeving</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Menu />
            <main>
                <BannerContainer />
                {<TextContainer theme={'dark'} fontSize='25px' item={intro} />}
                {wetgevingen.length && <RowContainer wrapper={WetgevingWrapper} items={wetgevingen} />}
            </main>
        </div>
    );
}
export default Personas;
