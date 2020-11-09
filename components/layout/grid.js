function Grid(props) {
    //props
    const { index, theme } = props;
    //styles
    const {
        display,
        flex,
        alignItems,
        justifyContent,
        flexDirection,
        paddingLeft,
        paddingRight,
        maxWidth,
        paddingBottom,
        paddingTop,
        fontSize,
        textAlign,
        alignSelf
    } = props;

    const style = {};
    style.display = display ? display : 'flex';
    style.alignItems = alignItems ? alignItems : '';
    style.justifyContent = justifyContent ? justifyContent : '';
    style.flexDirection = flexDirection ? flexDirection : '';
    style.flexDirection = flexDirection ? flexDirection : '';
    style.paddingRight = paddingRight ? paddingRight : '';
    style.paddingLeft = paddingLeft ? paddingLeft : '';
    style.maxWidth = maxWidth ? maxWidth : '';
    style.paddingBottom = paddingBottom ? paddingBottom : '';
    style.paddingTop = paddingTop ? paddingTop : '';
    style.textAlign = textAlign ? textAlign : '';
    style.fontSize = fontSize ? fontSize : '';
    style.flex = flex ? flex : 1;
    style.alignSelf = alignSelf ? alignSelf : '';

    switch (true) {
        case index !== undefined:
            const odd = index % 2 !== 0;
            style.flexDirection = odd ? 'row-reverse' : '';
            style.background = odd ? '#DDDDDD' : '#ffffff';
            break;
        case theme === 'dark':
            style.background = '#030000';
            style.color = '#d9d2d2';
            break;
        case theme === 'light':
            break;
        case theme === 'gray':
            style.background = '#DDDDDD';
            break;
        default:
            break;
    }

    return <div style={{ ...style }}>{props.children}</div>;
}
export default Grid;
