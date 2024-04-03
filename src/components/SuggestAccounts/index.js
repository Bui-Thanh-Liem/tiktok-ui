//
import PropTypes from 'prop-types'
import classNames from 'classnames/bind';

//
import styles from './SuggestAccounts.module.scss';
import AccountItem from '../../components/AccountItem';

//
const cx = classNames.bind(styles);

function SuggestAccounts({label, data = []}) {

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((item, index) => <AccountItem key={index} data={item}/>)}
            <p className={cx('seeMore-btn')}>See more</p>
        </div>
    )
}

SuggestAccounts.propTypes = {
    label: PropTypes.string,
    data: PropTypes.array.isRequired
}

export default SuggestAccounts;