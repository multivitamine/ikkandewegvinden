import Grid from 'components/layout/grid';

import { CreateFieldsArray } from 'hooks/createFieldsArray';

function RowContainer(props) {
    //props
    const { items, wrapper } = props;
    //hooks
    const [ fieldsArray ] = CreateFieldsArray(items);

    const renderRows = () => {
        const WrapperComponent = wrapper;

        return fieldsArray.map((fields, index) => {
            return (
                <Grid index={index} key={index} justifyContent='center'>
                    <Grid index={index} alignItems='center' maxWidth='1200px'>
                        <WrapperComponent fields={fields} />
                    </Grid>
                </Grid>
            );
        });
    };
    return renderRows();
}
export default RowContainer;
