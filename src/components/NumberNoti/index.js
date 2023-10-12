//
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

//
import styles from './NumberNoti.module.scss';

//
const cx = classNames.bind(styles);


//
function NumberNoti({children, number}) {
    return (
        <div className={cx('wrapper')}>
            {children}
            <span className={cx('boxNumber')}>{number}</span>
        </div>
    )
}

//
NumberNoti.propTypes = {
    children: PropTypes.node.isRequired,
    number: PropTypes.number.isRequired,
}

export default NumberNoti;