import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

//
import Image from '../Image';
import styels from './Account.module.scss';
import Popper from '../Popper';
import Button from '../Button';

//
const cx = classNames.bind(styels);

//
function AccountItem({ data }) {
    const boxPreview = (data) => {
        return (
            <Popper>
                <div className={cx('boxPreview')}>
                    <div className={cx('boxPreview_header')}>
                        {/*  */}
                        <Image
                            className={cx('boxPreview_avatar')}
                            src={data.avatar}
                            alt="Avatar"
                        />

                        {/*  */}
                        <Button
                            primary
                            small
                            children={'Following'}
                        />
                    </div>
                    <div className={cx('boxPreview_body')}>
                        <div className={cx('info')}>
                            <div className={cx('name')}>
                                <span className={cx('text')}>
                                    {data.full_name}
                                </span>
                                {data.tick && (
                                    <FontAwesomeIcon
                                        className={cx('check')}
                                        icon={faCheckCircle}
                                    />
                                )}
                            </div>
                            <div className={cx('auther')}>{data.nickname}</div>
                        </div>
                    </div>
                    <div className={cx('boxPreview_footer')}>
                        <strong className={cx('value')}>8.2M </strong>
                        <span className={cx('label')}>Followers</span>
                        <strong className={cx('value')}>3.0M </strong>
                        <span className={cx('label')}>Likes</span>
                    </div>
                </div>
            </Popper>
        );
    };

    return (
        <Tippy
            // visible
            interactive
            delay={[800, 0]}
            placement="bottom"
            offset={[16, 0]}
            render={(attrs) => boxPreview(data)}
        >
            <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
                <Image
                    className={cx('avatar')}
                    src={data.avatar}
                    alt="Avatar"
                />
                <div className={cx('info')}>
                    <div className={cx('name')}>
                        <span className={cx('text')}>{data.full_name}</span>
                        {data.tick && (
                            <FontAwesomeIcon
                                className={cx('check')}
                                icon={faCheckCircle}
                            />
                        )}
                    </div>
                    <div className={cx('auther')}>{data.nickname}</div>
                </div>
            </Link>
        </Tippy>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

//
export default AccountItem;
