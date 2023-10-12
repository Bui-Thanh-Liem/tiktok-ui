//
import { forwardRef, useState } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

// 
import styles from './Image.module.scss';
import images from '../../assets/images';


const Image = forwardRef((
    {
        src,
        className,
        fallBack = images.noImage,
        alt,
        ...restProps
    }, 
    ref
) => {

    const [_fallBack, setFallBack] = useState('');
    
    //
    const handleError = () => {
        setFallBack(fallBack);
    }
    
    return (
        <img 
            className={classNames(styles.wrapper, className)}
            ref={ref}   // Function Component không có ref nên ta phải dùng forwardRef truyền ra ngoài
            src={_fallBack || src}
            alt={alt} 
            {...restProps}
            onError={handleError}
        />
    )
})

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string,
}

export default Image;