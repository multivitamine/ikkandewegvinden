import * as contentful from 'contentful';

export function GetClientConnect() {
    const client = contentful.createClient({
        space: 'dpv91iqovvjz',
        accessToken: '1x3MIl-DfEG2efiNdPfT55qST0gq8Ss5uoR06NYZMP0'
    });

    return [ client ];
}
