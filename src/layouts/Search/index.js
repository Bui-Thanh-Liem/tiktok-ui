import {
    faCircleXmark,
    faSpinner,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import Accounts from '../../components/Accounts'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import * as SearchServices from '../../services/SearchServices'

import { useDebounce } from '../../hooks';
import styles from './Search.module.scss';
import Popper from '../../components/Popper';

const cx = classNames.bind(styles);

function Search() {

    // useState 
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(true);
    const [showLoading, setShowLoading] = useState(false);

    // useRef
    const searchRef = useRef();

    //
    const deBounced_searchValue = useDebounce(searchValue, 500);
    

    // useEffect 
    useEffect(() => {

        //
        if(!deBounced_searchValue.trim()) {
            setSearchResults([]);
            return;
        }
    

        // Gọi API thông qua thư viện Axios (dùng phương thức XMH httprequired), có sẵn encodeURLComponent
        const fetchApiSearch = async () => {
            //
            setShowLoading(true);

            //
            const res = await SearchServices.fetchAPI(deBounced_searchValue);
            setSearchResults(res.data);

            //
            setShowLoading(false);

        } 
        fetchApiSearch();
        

    }, [deBounced_searchValue]);

    

    // 
    const handleClickClear = (e) => {
        setSearchValue('');
        setSearchResults([]);
        searchRef.current.focus();
    }

    //
    const handleHideResults = (e) => {
        setShowResults(false);
    };

    //
    const handleValueSearch = (e) => {
        var Searchvalue = e.target.value
        if(!Searchvalue.startsWith(' ')) {
            setSearchValue(Searchvalue);
        }
    }
    
    
    return (
        <Tippy
            interactive
            visible={showResults && searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <Popper>
                        <h4 className={cx('heading')}>Accounts</h4>
                        <Accounts data={searchResults} />
                    </Popper>
                </div>
            )}
            onClickOutside={handleHideResults}
        >
            <div className={cx('search')}>
                <input 
                    ref={searchRef}
                    value={searchValue}
                    spellCheck={false} 
                    placeholder="Search find account" 
                    onChange={handleValueSearch}
                    onFocus={() => setShowResults(true)}
                />
                <button className={cx('clear')}>
                    {
                        !!searchValue && !showLoading
                        && 
                        <FontAwesomeIcon
                            onClick={handleClickClear}
                            className={cx('clear-icon')}
                            icon={faCircleXmark}
                        />
                    }
                    {showLoading && <FontAwesomeIcon
                        className={cx('loading-icon')}
                        icon={faSpinner}
                        spin
                    />}
                </button>
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
