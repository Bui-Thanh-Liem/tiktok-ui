//
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faCheckCircle, faEllipsis, faFlag, faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//
import Popper from '../Popper';
import Image from '../../components/Image';
import styels from './Account.module.scss';

//
const cx = classNames.bind(styels);


//
function Account({data}) {
    
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image 
                className={cx('avatar')} 
                src={data.avatar} 
                alt="Avatar" 
            />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    {data.full_name}
                    {data.tick && <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />}
                </div>
                <div className={cx('auther')}>{data.nickname}</div>
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
        </Link>
    );
}

Account.propTypes = {
    data: PropTypes.object.isRequired
}


//
export default Account;
