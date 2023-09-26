import styles from './Report.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faHeartBroken } from '@fortawesome/free-solid-svg-icons';



const cx = classNames.bind(styles);

function ReportBox() {
    return (
        <div className={cx('wrapper')}>
            <p>
                <FontAwesomeIcon className={cx('icon')}  icon={faFlag} />
                <span>Báo cáo</span>
            </p>
            <hr/>
            <p>
                <FontAwesomeIcon className={cx('icon')} icon={faHeartBroken} />
                <span>Đánh dấu là không phù hợp</span>
            </p>
        </div>
    )
}

export default ReportBox; 