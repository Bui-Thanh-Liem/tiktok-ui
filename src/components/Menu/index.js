//
import classNames from "classnames/bind";

//
import styles from './Menu.module.scss';


//


//
const cx = classNames.bind(styles);

function Menu({data}) {
    
    return(
        <div className={cx('wrapper')}>
            <ul>
                {data.map((item, index) => <li 
                                                key={index}
                                                className={cx('item')}>
                                                    <span className={cx('icon')}>
                                                        {item.icon}
                                                    </span>
                                                    <span className={cx('title')}>
                                                        {item.title}
                                                    </span>
                                                    {item.btnAfter && <span>{item.btnAfter}</span>}
                                            </li>
                        )
                }
            </ul>
        </div>
    )
}

export default Menu;