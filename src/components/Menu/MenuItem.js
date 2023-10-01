import classNames from "classnames/bind";
import styles from './MenuItem.module.scss';

import Button from "../Button";


//
const cx = classNames.bind(styles);

function MenuItem({data, onClick}) {

    
    
    return (
        <Button 
            onClick={onClick}
            className={cx('item')}
            to={data.to}
        >
            <span className={cx('icon')}>{data.icon}</span>
            <span className={cx('title')}>{data.title}</span>
            {data.btnAfter && <label 
                                    className={cx('switch')}
                                >
                                    {data.btnAfter}
                                    <span className={cx('slider')}></span>
                                </label>}
        </Button>
    )
}

export default MenuItem;;