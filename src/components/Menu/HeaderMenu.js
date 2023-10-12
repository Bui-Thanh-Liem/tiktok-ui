//
import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

//
import styles from './HeaderMenu.module.scss'

//
const cx = classNames.bind(styles);

//
function HeaderMenu({title, onBack}) {
    return (
        <div className={cx('wrapper')}>
            <button className={cx('btn-back')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft}/>                
            </button>
            <h3 className={cx('title-header')}>{title}</h3>    
        </div>
    )
}

HeaderMenu.propTypes = {
    title: PropTypes.string,
    onBack: PropTypes.func,
}

export default HeaderMenu;