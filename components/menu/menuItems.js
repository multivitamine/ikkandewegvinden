import { hover } from 'hooks/hover';
function MenuItems(props) {
    const renderItems = () => {
        const { routes } = props;
        return routes.map((route, index) => {
            const [ hoverRef, isHovered ] = hover();
            const hovering = isHovered ? { color: '#AAAAAA', textDecoration: 'underline' } : '';
            return (
                <li
                    ref={hoverRef}
                    key={index}
                    style={{
                        paddingTop: '10px',
                        paddingLeft: '20px',
                        paddingBottom: '10px',
                        fontSize: 24,
                        ...hovering
                    }}
                >
                    <a href={route.url}>{route.title}</a>
                </li>
            );
        });
    };
    return <ul style={{ listStyle: 'none', padding: '0px 0px 0px 0px', margin: 0 }}>{renderItems()}</ul>;
}
export default MenuItems;
