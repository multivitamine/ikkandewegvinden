function Image(props) {
    const { image, maxHeight, height } = props;
    const { fields } = image;
    const { fileName, url } = fields.file;

    const style = {};
    style.maxHeight = maxHeight ? maxHeight : '';
    style.height = height ? height : '';

    return <img style={{ ...style }} src={url} alt={fileName} />;
}
export default Image;
