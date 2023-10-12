import Home from '../pages/Home';
import Following from '../pages/Following';
import Explore from '../pages/Explore';
import Live from '../pages/Live';
import Upload from '../pages/Upload';
import Profile from '../pages/Profile';
import config from '../config';

//
export const pulicComponents = [
    {
        path: config.urlPages.home,
        element: Home,
    },
    {
        path: config.urlPages.following,
        element: Following,
    },
    {
        path: config.urlPages.explore,
        element: Explore,
    },
    {
        path: config.urlPages.live,
        element: Live,
    },
    {
        path: config.urlPages.upload,
        element: Upload,
        layout: null,
    },
    {
        path: config.urlPages.profile,
        element: Profile,
    },
];

//
export const privateComponents = [{}];
