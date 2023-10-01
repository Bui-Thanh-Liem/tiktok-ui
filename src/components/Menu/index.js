//
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

//
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Popper from '../Popper';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';

//
const cx = classNames.bind(styles);

//
const defaultFunc = () => {};

function Menu({ children, data = [], onChange = defaultFunc }) {

    //
    const [history, setHistory] = useState([{ data: data}]);

    //
    const currentData = history[history.length - 1];
    
    //
    const menuItems = currentData.data.map((item, index) => {

        const isParent = !!item.children;
        
        return <MenuItem 
                    key={index}
                    data={item}
                    onClick={() => {
                        if(isParent) {
                            setHistory( prev => [...prev, item.children])
                        } else {
                            onChange(item)
                        }
                    }}
                />
    })

    //
    const handleCloseMenu = () => {
        setHistory([history[0]]);
    }
    
    
    return (
        <div className={cx('wrapper')}>
            <Tippy
                // visible
                onHide={handleCloseMenu}
                delay={[0, 500]}
                interactive
                placement="bottom-end"
                render={(attrs) => (
                    <div 
                        className={cx('content')} 
                        tabIndex="-1" 
                        {...attrs}
                    >
                            <Popper>
                                {history.length > 1 && <HeaderMenu title={'Language'} onBack={() => {setHistory(prev => history.slice(0, history.length-1))}} />}
                                {menuItems}
                            </Popper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Menu;
