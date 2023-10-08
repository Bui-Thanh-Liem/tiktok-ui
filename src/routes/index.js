import Home from "../pages/Home"
import Following from "../pages/Following"
import Upload from "../pages/Upload"
import Profile from "../pages/Profile"

//
export const pulicComponents = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/following',
        element: Following
    },
    {
        path: '/upload',
        element: Upload,
        layout: null
    },
    {
        path: '/:nickname',
        element: Profile
    },
]


//
export const privateComponents = [
    {
        
    }
]