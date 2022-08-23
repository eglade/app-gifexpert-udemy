import PropTypes from "prop-types";

export const GiftCardItem = ({title, url}) => {
    return (
        <div aria-label="dfgh" className="card">
            <p>{title}</p>
            <img src={url} alt={title} />
        </div>        
    ) 
}

/**
 * VALIDACIONES
 */
GiftCardItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}   