//
import classNames from 'classnames/bind';

//
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import styles from './Sidebar.module.scss';
import config from '../../config';
import {HomeIcon, HomeIconActive, UserGroupIcon, UserGroupIconActive, CompassIcon, CompassIconActive, LiveIcon, LiveIconActive} from '../../icons'
import SuggestAccounts from '../../components/SuggestAccounts';


const cx = classNames.bind(styles);

const data = [
    {
        nickname: 'nickname1 dddd fffffffffdddddddddddddd',
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/92548ea79f7cd819c7b6324d042bbaaa~c5_100x100.jpeg?x-expires=1697266800&x-signature=gwSWySNPSVcqXF%2BcemUBEBWhnUc%3D',
        full_name: 'Bui Thanh Thanh Liem ',
        tick: true
    },{
        nickname: 'nickname2',
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/92548ea79f7cd819c7b6324d042bbaaa~c5_100x100.jpeg?x-expires=1697266800&x-signature=gwSWySNPSVcqXF%2BcemUBEBWhnUc%3D',
        full_name: 'full_name',
        tick: false
    },{
        nickname: 'nickname3',
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/92548ea79f7cd819c7b6324d042bbaaa~c5_100x100.jpeg?x-expires=1697266800&x-signature=gwSWySNPSVcqXF%2BcemUBEBWhnUc%3D',
        full_name: 'full_name',
        tick: true
    },
    {
        nickname: 'nickname1 dddd fffffffffdddddddddddddd',
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/92548ea79f7cd819c7b6324d042bbaaa~c5_100x100.jpeg?x-expires=1697266800&x-signature=gwSWySNPSVcqXF%2BcemUBEBWhnUc%3D',
        full_name: 'Bui Thanh Thanh Liem ',
        tick: true
    },{
        nickname: 'nickname2',
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/92548ea79f7cd819c7b6324d042bbaaa~c5_100x100.jpeg?x-expires=1697266800&x-signature=gwSWySNPSVcqXF%2BcemUBEBWhnUc%3D',
        full_name: 'full_name',
        tick: false
    },{
        nickname: 'nickname3',
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/92548ea79f7cd819c7b6324d042bbaaa~c5_100x100.jpeg?x-expires=1697266800&x-signature=gwSWySNPSVcqXF%2BcemUBEBWhnUc%3D',
        full_name: 'full_name',
        tick: true
    },
    {
        nickname: 'nickname1 dddd fffffffffdddddddddddddd',
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/92548ea79f7cd819c7b6324d042bbaaa~c5_100x100.jpeg?x-expires=1697266800&x-signature=gwSWySNPSVcqXF%2BcemUBEBWhnUc%3D',
        full_name: 'Bui Thanh Thanh Liem ',
        tick: true
    },{
        nickname: 'nickname2',
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/92548ea79f7cd819c7b6324d042bbaaa~c5_100x100.jpeg?x-expires=1697266800&x-signature=gwSWySNPSVcqXF%2BcemUBEBWhnUc%3D',
        full_name: 'full_name',
        tick: false
    },{
        nickname: 'nickname3',
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/92548ea79f7cd819c7b6324d042bbaaa~c5_100x100.jpeg?x-expires=1697266800&x-signature=gwSWySNPSVcqXF%2BcemUBEBWhnUc%3D',
        full_name: 'full_name',
        tick: true
    }
]

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem title='For You' to={config.urlPages.home} icon={<HomeIcon/>} iconActive={<HomeIconActive/>}/>
                <MenuItem title='Following' to={config.urlPages.following} icon={<UserGroupIcon/>} iconActive={<UserGroupIconActive/>}/>
                <MenuItem title='Explore' to={config.urlPages.explore} icon={<CompassIcon/>} iconActive={<CompassIconActive/>}/>
                <MenuItem title='Live' to={config.urlPages.live} icon={<LiveIcon/>} iconActive={<LiveIconActive/>}/>
            </Menu>
            <SuggestAccounts 
                label={'Following accounts'} 
                data={data}
            />
        </div>
    ) 
}

export default Sidebar;
