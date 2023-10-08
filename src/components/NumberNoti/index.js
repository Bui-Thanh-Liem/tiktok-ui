//
import classNames from 'classnames/bind';

//
import styles from './NumberNoti.module.scss';

const cx = classNames.bind(styles);

function NumberNoti({children, number}) {
    return (
        <div className={cx('wrapper')}>
            {children}
            <span className={cx('boxNumber')}>{number}</span>
        </div>
    )
}

export default NumberNoti;