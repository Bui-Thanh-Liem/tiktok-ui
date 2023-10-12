// 
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

// Import from myself
import styles from './Button.module.scss';

//
const cx = classNames.bind(styles);

function Button({
    className,
    to,
    href,
    children,
    iconName,
    disabled,
    primary = false,
    outline = false,
    rounded,
    small = false,
    large = false,
    onClick,
    ...restProps}) {

    //
    let Comp = 'button';
    const props = {
        onClick,
        ...restProps
    }

    // Remove event listeners
    if(disabled) {
        Object.keys(restProps).forEach(key => {
            if(key.startsWith('on') && typeof restProps[key] === 'function') {
                delete restProps[key];
            }
        })
    }

    //
    if(to) {
        props.to = to;
        Comp = Link;
    } else if(href) {
        props.href = href;
        Comp = 'a';
    }
    
    const classes = cx('wrapper', {
        [className]: className,
        primary, // 'primary': primary,
        outline,
        disabled,
        rounded,
        small,
        large
    })
    
    return (
        <Comp 
            className={classes}
            {...props}
        >   
            {
                iconName &&
                (<FontAwesomeIcon className={cx('icon')} icon={iconName}/>)
            }
            
            <span>{children}</span>
        </Comp>
    )
}

Button.prototype = {
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    iconName: PropTypes.node,
    disabled: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Button;