export function GetIframeType(url) {
    let iframeType = '';
    switch (true) {
        case url.indexOf('google') > -1:
            iframeType = 'maps';
            break;
        case url.indexOf('vimeo') > -1:
            iframeType = 'vimeo';
            break;
        case url.indexOf('youtube') > -1:
            iframeType = 'youtube';
            break;
        default:
            break;
    }
    return [ iframeType ];
}
