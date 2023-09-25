import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../assets/images';
import {
    faCircleXmark,
    faSpinner,
    faSearch,
    faPlus,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    //
    const [searchResults, setSearchResults] = useState([]);

    //
    useEffect(() => {
        setInterval(() => {
            setSearchResults([1, 2, 3]);
        }, 3000)
    }, [])
    
    return (
        <header className={cx(styles.wrapper)}>
            <div className={cx('innerHeader')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <a href="/">
                        <img src={images.logo} alt="Tiktok"></img>
                    </a>
                </div>
                

                {/* Search */}
                <Tippy
                    visible={searchResults > 0 ? 'true' : 'false'}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <ul>
                                {searchResults.map((result, index) => <li key={index}>{result}</li>)}
                            </ul>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon
                                className={cx('clear-icon')}
                                icon={faCircleXmark}
                            />
                            <FontAwesomeIcon
                                className={cx('loading-icon', 'hide')}
                                icon={faSpinner}
                                spin
                            />
                        </button>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </Tippy>

                {/* Actions */}
                <div className={cx('actions')}>
                    <button className={cx('upLoad')}>
                        <FontAwesomeIcon icon={faPlus} />
                        <span>Upload</span>
                    </button>
                    <button className={cx('logIn')}>Log in</button>
                    <FontAwesomeIcon
                        className={cx('bar')}
                        icon={faEllipsisVertical}
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
