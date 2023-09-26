import Account from '../Account';
import styles from './AccountsSearchResult.module.module.scss'
import classNames from 'classnames/bind';


//
const cx = classNames.bind(styles);


//
function Accounts({searchResults}) {
    
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('heading')}>Accounts</h4>
            {
                searchResults.map((user, index) => 
                    <Account
                        key={index} 
                        img={user.img} 
                        userName={user.userName}
                        auther={user.auther}
                    />
                )
            }
        </div>
    )
}

//
export default Accounts;