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
    const [ intro, setIntro ] = useState([]);
    const [ content1, setContent1 ] = useState([]);
    const [ content2, setContent2 ] = useState([]);
    const [ content3, setContent3 ] = useState([]);

    //useEffect
    useEffect(() => {
        // client
        //     .getEntries({
        //         content_type: 'persona'
        //     })
        //     .then((response) => {
        //         setPersonas(response.items);
        //     });
        client.getEntry('5EmUI8YITaSIXa0zW3X2fR').then((response) => {
            setIntro(response.fields);
        });
        client.getEntry('54x45FB6CRDMAJZkMnOlPl').then((response) => {
            setContent1(response.fields);
        });
        client.getEntry('54x45FB6CRDMAJZkMnOlPl').then((response) => {
            setContent2(response.fields);
        });
        client.getEntry('3ZYWY5CJM9UPdKAvjcMVdQ').then((response) => {
            setContent3(response.fields);
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
                <TextContainer theme={'dark'} fontSize='25px' textAlign={'center'} item={intro} />
                <TextContainer theme={'light'} item={content1} />
                <TextContainer theme={'gray'} item={content2} />
                <TextContainer theme={'light'} item={content3} />
            </main>
        </div>
    );
}
export default Personas;
