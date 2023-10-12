import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//
import Image from '../Image';
import styels from './Account.module.scss';

//
const cx = classNames.bind(styels);


//
function AccountItem({data}) {
    
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image 
                className={cx('avatar')} 
                src={data.avatar} 
                alt="Avatar" 
            />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <span className={cx('text')}>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />}
                </div>
                <div className={cx('auther')}>{data.nickname}</div>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired
}


//
export default AccountItem;
