import { GetIframeType } from 'hooks/getIframeType';

function Iframe(props) {
    const { url, maxHeight, height } = props;
    const [ iframeStyle ] = GetIframeType(url);
    debugger;
    let Component = '';
    switch (iframeStyle) {
        case 'maps':
            return <Maps url={url} />;
        default:
            return <div>iframe not set</div>;
    }
}
export default Iframe;

// function Vimeo() {
//     return (
//         <iframe
//             src={video}
//             width={videoWidth ? videoWidth : '640'}
//             height={videoHeigth ? videoHeigth : '1138'}
//             frameBorder={frameborder ? frameborder : '0'}
//             allow={allow ? allow : 'autoplay; fullscreen'}
//             allowFullScreen
//         />
//     );
// }

function Maps({ url }) {
    debugger;
    return <iframe src={url} width='640' height='480' />;
}
