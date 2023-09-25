import classNames from 'classnames/bind';
import styles from './Header.module.scss'

const cx = classNames.bind(styles);

console.log(styles);


function Header() {
    return (
        <header className={cx(styles.wrapper)}>
            Header
        </header>
    )
}

export default Header;