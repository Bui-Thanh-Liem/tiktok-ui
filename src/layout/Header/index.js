import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import {
    faCircleXmark,
    faSpinner,
    faSearch,
    faPlus,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import styles from './Header.module.scss';
import images from '../../assets/images';
import Button from '../../components/Button';
import Popper from '../../components/Popper';
import Accounts from '../../components/AccountsSearchResult';


const cx = classNames.bind(styles);

function Header() {
    //
    const [searchResults, setSearchResults] = useState([]);

    //
    useEffect(() => {
        // setTimeout(() => {
        //     setSearchResults([
        //         {
        //             img: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/053be10c07ed24aeca9676625ecaada8.jpeg?x-expires=1695909600&x-signature=2C2BvkTAfW1Ji82s4HWnpbvQ2vc%3D',
        //             userName: 'kh0172',
        //             auther: 'Khang Huy'
        //         },
        //         {
        //             img: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/053be10c07ed24aeca9676625ecaada8.jpeg?x-expires=1695909600&x-signature=2C2BvkTAfW1Ji82s4HWnpbvQ2vc%3D',
        //             userName: 'kh0172',
        //             auther: 'Khang Huy'
        //         },
        //         {
        //             img: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/053be10c07ed24aeca9676625ecaada8.jpeg?x-expires=1695909600&x-signature=2C2BvkTAfW1Ji82s4HWnpbvQ2vc%3D',
        //             userName: 'kh0172',
        //             auther: 'Khang Huy'
        //         },
        //     ] ); 
        // }, 5000)
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
                <span>
                    <Tippy
                        interactive
                        visible={searchResults.length > 0 ? true : false}
                        render={(attrs) => (
                            <div
                                className={cx('search-result')}
                                tabIndex="-1"
                                {...attrs}
                            >
                                <Popper>
                                    <Accounts searchResults={searchResults} />
                                </Popper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input placeholder="Search find account" spellCheck={false} />
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
                </span>

                {/* Actions */}
                <div className={cx('actions')}>
                    <Button 
                        iconName={faPlus}
                        children={'Upload'}
                    />
                    
                    <Button 
                        primary
                        children={'Log In'} 
                    />
                    
                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon
                            icon={faEllipsisVertical}
                        />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
