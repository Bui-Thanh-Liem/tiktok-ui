//
import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";

// className={(navData) => cx('menu-item', {
//     'active': navData.isActive,
// })}

//
import styles from './Menu.module.scss';

//
const cx = classNames.bind(styles);

function MenuItem({ title, icon, iconActive,to}) {

    return (
        <NavLink 
            className={({isActive}) => cx('menu-item', {
                'active': isActive,
            })}
            to={to}
        >
            {({isActive}) => {
                return <>
                            {isActive ? iconActive : icon}
                            <span className={cx('title')}>{title}</span>
                        </>
            }}
        </NavLink>
    )
}


// prop-types
MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
}


export default MenuItem;