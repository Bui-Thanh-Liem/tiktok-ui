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
            {data.map((item) => <AccountItem data={item}/>)}
        </div>
    )
}

SuggestAccounts.propTypes = {
    label: PropTypes.string,
    daat: PropTypes.array.isRequired
}

export default SuggestAccounts;