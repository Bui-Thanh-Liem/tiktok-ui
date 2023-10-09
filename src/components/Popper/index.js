import classNames from 'classnames/bind';
import styels from './Popper.module.scss';

const cx = classNames.bind(styels);


function Popper({children, className}) {

    return (
        <div className={cx('wrapper', className)}>
            {children}
        </div>
    )
}

export default Popper;