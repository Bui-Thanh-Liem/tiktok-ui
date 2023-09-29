import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styels from './Account.module.scss';
import { faCheckCircle, faEllipsis, faFlag, faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import Popper from '../Popper';

//
const cx = classNames.bind(styels);

//
function Account({ img, userName, auther }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={img} alt="Avatar" />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    {userName}
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </div>
                <div className={cx('auther')}>{auther}</div>
            </div>
            <div className={cx('hide', 'option')}>
                <Tippy
                    interactive
                    placement="bottom-end"
                    render={(attrs) => (
                        <div tabIndex="-1" {...attrs}>
                            <div className={cx('option-box')}>
                                <Popper className={cx('wrapper-popper')}>
                                    <p>
                                        <FontAwesomeIcon
                                            className={cx('icon')}
                                            icon={faFlag}
                                        />
                                        <span>Báo cáo</span>
                                    </p>
                                    <hr />
                                    <p>
                                        <FontAwesomeIcon
                                            className={cx('icon')}
                                            icon={faHeartBroken}
                                        />
                                        <span>Đánh dấu là không phù hợp</span>
                                    </p>
                                </Popper>
                            </div>
                        </div>
                    )}
                >
                    <span>
                        <FontAwesomeIcon
                            className={cx('icon-option')}
                            icon={faEllipsis}
                        />
                    </span>
                </Tippy>
            </div>
        </div>
    );
}

//
export default Account;
