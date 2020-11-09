import Grid from 'components/layout/grid';

function BannerContainer() {
    const style = {
        background: 'url(/banner.png)',
        display: 'flex',
        justifyContent: 'center',
        height: '300px',
        alignItems: 'center'
    };
    const imageStyle = {
        height: '210px'
    };
    return (
        <div style={{ ...style }}>
            <img style={{ ...imageStyle }} src={'/tekst banner.png'} />
        </div>
    );
}
export default BannerContainer;
