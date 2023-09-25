import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from '../../assets/images';
import { faCircleXmark, faSpinner, faSearch } from '@fortawesome/free-solid-svg-icons';



const cx = classNames.bind(styles);


function Header() {
    return (
        <header className={cx(styles.wrapper)}>
            <div className={cx('innerHeader')}>

                {/* Logo */}
                <div className={cx('logo')}>
                    <a href='/'>
                        <img src={images.logo} alt='Tiktok'></img>
                    </a>
                </div>

                {/* Search */}
                <div className={cx('search')}>
                    <input placeholder='Search' spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon className={cx('clear-icon')} icon={faCircleXmark} />
                        <FontAwesomeIcon className={cx('loading-icon', 'hide')} icon={faSpinner} spin />
                    </button>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>

                {/* Actions */}
                <div className={cx('actions')}>
                    
                </div>
            </div>
        </header>
    )
}

export default Header;