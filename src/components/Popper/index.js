import classNames from 'classnames/bind';
import styels from './Popper.module.scss';

const cx = classNames.bind(styels);


function Popper({children}) {

    return (
        <div className={cx('wrapper')}>
            {children}
        </div>
    )
}

export default Popper;