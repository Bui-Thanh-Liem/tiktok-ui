import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faSearch,
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
} from '@fortawesome/free-solid-svg-icons';
import { faKeyboard, faMoon, faLightbulb, faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

import { useEffect, useState } from 'react';

import styles from './Header.module.scss';
import images from '../../assets/images';
import Button from '../../components/Button';
import Popper from '../../components/Popper';
import Accounts from '../../components/AccountsSearchResult';
import Menu from '../../components/Menu';

const cx = classNames.bind(styles);

// 
const menus_header = [
    {
        icon: <FontAwesomeIcon icon={faLightbulb}/>,
        title: 'LIVE creator Hub'
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'English'
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'Feedback and Help'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Keysboard shortcuts'
    },
    {
        icon: <FontAwesomeIcon icon={faMoon}/>,
        title: 'Dark mode',
        btnAfter: <input type='checkbox' />
    },

]
// 

function Header() {
    //
    const [searchResults, setSearchResults] = useState([]);

    //
    useEffect(() => {
        setTimeout(() => {
            setSearchResults([
                {
                    img: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/475621c1ace4a5b8cd3abade2d544c50.jpeg?x-expires=1695996000&x-signature=xOsv5k9KphoCTebDDIck8k3YmL4%3D',
                    userName: 'ttnl@gmail.com',
                    auther: 'Nha Linh'
                },
                {
                    img: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/475621c1ace4a5b8cd3abade2d544c50.jpeg?x-expires=1695996000&x-signature=xOsv5k9KphoCTebDDIck8k3YmL4%3D',
                    userName: 'ttnl@gmail.com',
                    auther: 'Nha Linh'
                },
                {
                    img: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/475621c1ace4a5b8cd3abade2d544c50.jpeg?x-expires=1695996000&x-signature=xOsv5k9KphoCTebDDIck8k3YmL4%3D',
                    userName: 'ttnl@gmail.com',
                    auther: 'Nha Linh'
                },
            ] ); 
        }, 5000)
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
                    
                    <Tippy
                        visible
                        interactive
                        placement="bottom-end"
                        render={(attrs) => (
                            <div
                                className={cx('more-btn_box')}
                                tabIndex="-1"
                                {...attrs}
                            >
                                <Popper>
                                    <Menu data={menus_header} />
                                </Popper>
                            </div>
                        )}
                    >
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon
                                icon={faEllipsisVertical}
                            />
                        </button>
                    </Tippy>
                </div>
            </div>
        </header>
    );
}

export default Header;
