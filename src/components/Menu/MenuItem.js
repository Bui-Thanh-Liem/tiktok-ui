//
import PropTypes from 'prop-types';
import classNames from "classnames/bind";

//
import styles from './MenuItem.module.scss';
import Button from "../Button";


//
const cx = classNames.bind(styles);

function MenuItem({data, onClick}) {

    const classes = cx('item', {
        'separate': data.separate
    })
    
    return (

        <Button 
            onClick={onClick}
            className={classes}
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

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func
}

export default MenuItem;;