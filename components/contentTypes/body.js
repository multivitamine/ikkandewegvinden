import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
function Body(props) {
    const { html } = props;
    return <div>{documentToReactComponents(html)}</div>;
}
export default Body;
