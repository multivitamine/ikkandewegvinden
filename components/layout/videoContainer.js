import Grid from 'components/layout/grid';
import Title from 'components/contentTypes/title';
import Body from 'components/contentTypes/body';

function VideoContainer(props) {
    //props
    const { item, fontSize, textAlign, theme, videoWidth, frameborder, allow, videoHeigth } = props;
    const { title, body, video, body2 } = item;

    return (
        <Grid theme={theme} fontSize={fontSize} justifyContent='center' paddingTop='20px' paddingBottom='20px'>
            <Grid textAlign={textAlign} fontSize={fontSize} flexDirection='column' maxWidth='900px'>
                {title && <Title text={title} />}
                {body && <Body html={body} />}
                {video && (
                    <iframe
                        src={video}
                        width={videoWidth ? videoWidth : '640'}
                        height={videoHeigth ? videoHeigth : '1138'}
                        frameBorder={frameborder ? frameborder : '0'}
                        allow={allow ? allow : 'autoplay; fullscreen'}
                        allowFullScreen
                    />
                )}
                {body2 && <Body html={body2} />}
            </Grid>
        </Grid>
    );
}
export default VideoContainer;
