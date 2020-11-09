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
    const [ content4, setContent4 ] = useState([]);

    //useEffect
    useEffect(() => {
        client.getEntry('4E9tPyKuKykf5XyOlkN8L8').then((response) => {
            setIntro(response.fields);
        });
        client.getEntry('6i1IZBda8Cg1U2wqLp5UAe').then((response) => {
            setContent1(response.fields);
        });
        client.getEntry('63dZ3GoujL3gX5a3lKRg9v').then((response) => {
            setContent2(response.fields);
        });
        client.getEntry('3VD5PVmCvnC7BA1VzNXteo').then((response) => {
            setContent3(response.fields);
        });
        client.getEntry('yq8uvNGJL3HNEhomaZuhU').then((response) => {
            setContent4(response.fields);
        });
        return console.log('exit page');
    }, []);
    return (
        <div>
            <Head>
                <title>Ik kan de weg vinden | Doorverwijzen</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Menu />
            <main>
                <BannerContainer />
                <TextContainer theme={'dark'} fontSize='25px' textAlign={'center'} item={intro} />
                <TextContainer theme={'light'} item={content1} />
                <TextContainer theme={'gray'} item={content2} />
                <TextContainer theme={'light'} item={content3} />
                <TextContainer theme={'gray'} item={content4} />
            </main>
        </div>
    );
}
export default Personas;
