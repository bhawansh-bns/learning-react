import PropTypes from 'prop-types';
function Link(props){
    console.log(props); //destructuring syntax

    const {content, title, href, users} = props;
    return(
        <div>   
            <a href={href}>{title}</a>
            <p>{content}</p>
            <p>{JSON.stringify(users)}</p>
        </div>
    )
}

Link.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    users: PropTypes.array
}

Link.defaultProps = {
    users: ['CHINU']
}

export default Link;
