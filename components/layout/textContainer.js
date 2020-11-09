import Grid from 'components/layout/grid';
import Title from 'components/contentTypes/title';
import Body from 'components/contentTypes/body';
import Iframe from 'components/contentTypes/iframe';

function TextContainer(props) {
    //props
    const { item, fontSize, textAlign, theme, iframeType } = props;
    const { title, body, iframe } = item;

    return (
        <Grid theme={theme} fontSize={fontSize} justifyContent='center' paddingTop='20px' paddingBottom='20px'>
            <Grid maxWidth={'1200px'}>
                <Grid textAlign={textAlign} fontSize={fontSize} flexDirection='column'>
                    {title && <Title text={title} />}
                    {body && <Body html={body} />}
                </Grid>
                {iframe && (
                    <Grid textAlign={textAlign} fontSize={fontSize} flexDirection='column'>
                        <Iframe type={iframeType} url={iframe} />
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
}
export default TextContainer;
