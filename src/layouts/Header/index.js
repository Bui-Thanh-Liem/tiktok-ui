import 'tippy.js/dist/tippy.css';
import TippyThuong from '@tippyjs/react/';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import {
    faKeyboard,
    faMoon,
    faLightbulb,
    faCircleQuestion,
    faPaperPlane,
    faMessage,
    faUser,
    faBookmark,
} from '@fortawesome/free-regular-svg-icons';

import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '../../assets/images';
import Button from '../../components/Button';
import Menu from '../../components/Menu';
import Image from '../../components/Image';
import NumberNoti from '../../components/NumberNoti';
import Search from '../Search';
import config from '../../config';

const cx = classNames.bind(styles);

//
const menus_header = [
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'LIVE creator Hub',
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keysboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
        btnAfter: <input type="checkbox" />,
    },
];

//
const menus_header_logged = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/ttnl@gmail.com',
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Favorites',
        to: '/ttnl@gmail.com', // profile favorites
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Cois',
        to: '/cois',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },

    ...menus_header,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

//

function Header() {
    //
    const currentUser = true;

    //
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx(styles.wrapper)}>
            <div className={cx('innerHeader')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <Link to={config.urlPages.home}>
                        <img src={images.logo} alt="Tiktok"></img>
                    </Link>
                </div>

                {/* Search */}
                <span>
                    <Search />
                </span>

                {/* Actions */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            {/* btn-upload */}
                            <Button iconName={faPlus} children={'Upload'} />

                            {/*  */}
                            <NumberNoti number={5}>
                                <TippyThuong content={'Messages'}>
                                    <Link
                                        className={cx('action-btn', 'plane')}
                                        to={'/messages'}
                                    >
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </Link>
                                </TippyThuong>
                            </NumberNoti>

                            {/*  */}
                            <NumberNoti number={99}>
                                <TippyThuong content={'Inbox'}>
                                    <button className={cx('action-btn')}>
                                        <FontAwesomeIcon icon={faMessage} />
                                    </button>
                                </TippyThuong>
                            </NumberNoti>
                        </>
                    ) : (
                        <>
                            {/* btn-upload */}
                            <Button iconName={faPlus} children={'Upload'} />

                            {/*  */}
                            <Button primary to={'/login'} children={'Log In'} />
                        </>
                    )}

                    {/*  */}
                    <Menu
                        data={currentUser ? menus_header_logged : menus_header}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('avatar')}
                                // src=''
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/475621c1ace4a5b8cd3abade2d544c50.jpeg?x-expires=1695996000&x-signature=xOsv5k9KphoCTebDDIck8k3YmL4%3D"
                                alt="avrtar"
                                // fallBack={imagesAvatar.avatarDefault}
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
