import React from 'react';
//components
import Grid from 'components/layout/grid';
import Image from 'components/contentTypes/image';
import Title from 'components/contentTypes/title';
import Body from 'components/contentTypes/body';

function PersonaWrapper(props) {
    const { fields } = props;
    const { title, body, image } = fields;
    return (
        <React.Fragment>
            <Grid
                paddingRight='25px'
                paddingLeft='25px'
                justifyContent='normal'
                alignItems='normal'
                flexDirection='column'
            >
                <Title text={title} />
                <Body html={body} />
            </Grid>
        </React.Fragment>
    );
}
export default PersonaWrapper;
