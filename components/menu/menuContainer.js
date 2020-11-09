import Grid from 'components/layout/grid';
import MenuItems from 'components/menu/menuItems';
function MenuContainer(props) {
    return (
        <Grid flexDirection='column'>
            <MenuItems routes={props.routes} />
        </Grid>
    );
}
export default MenuContainer;
