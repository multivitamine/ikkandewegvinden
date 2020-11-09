import { useEffect, useState } from 'react';
import Head from 'next/head';
//hooks
import { GetClientConnect } from 'hooks/connect';
//components
import TextContainer from 'components/layout/textContainer';
import VideoContainer from 'components/layout/videoContainer';

import Menu from 'components/menu';
import BannerContainer from 'components/layout/bannerContainer';

function Personas() {
    //props
    const [ client ] = GetClientConnect();
    const [ intro, setIntro ] = useState([]);
    const [ content1, setContent1 ] = useState([]);
    const [ content2, setContent2 ] = useState([]);
    const [ videoContent, setVideoContent ] = useState([]);
    const [ content3, setContent3 ] = useState([]);
    const [ video2Content, setVideo2Content ] = useState([]);
    const [ footer, setFooter ] = useState([]);

    //useEffect
    useEffect(() => {
        client.getEntry('2cRBPOkva2Na22P6ED99Jm').then((response) => {
            setIntro(response.fields);
        });
        client.getEntry('qneYPV1U8z92cfwieUQez').then((response) => {
            setContent1(response.fields);
        });
        client.getEntry('4yJScf8f9g6pJ6oqBpeZLl').then((response) => {
            setContent2(response.fields);
        });
        client.getEntry('4LnswkAVtX8XIgCJZsVsrk').then((response) => {
            setVideoContent(response.fields);
        });
        client.getEntry('6sQX8F71xIqyXtCigBTadv').then((response) => {
            setContent3(response.fields);
        });
        client.getEntry('3NH5WuwDy7snnsw24Hsl1n').then((response) => {
            setVideo2Content(response.fields);
        });
        client.getEntry('4ckOboFvO6oaA09Gnz2ixK').then((response) => {
            setFooter(response.fields);
        });
        return console.log('exit page');
    }, []);
    return (
        <div>
            <Head>
                <title>Ik kan de weg vinden | Herkennen</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Menu />
            <main>
                <BannerContainer />
                {<TextContainer theme={'dark'} fontSize='25px' item={intro} />}
                {<TextContainer theme={'light'} item={content1} />}
                {<TextContainer theme={'gray'} item={content2} />}
                {<VideoContainer theme={'light'} item={videoContent} />}
                {<TextContainer theme={'gray'} item={content3} />}
                {<VideoContainer theme={'light'} item={video2Content} />}
                {<TextContainer theme={'gray'} item={content3} />}
                {<TextContainer theme={'dark'} item={footer} />}
            </main>
        </div>
    );
}
export default Personas;
