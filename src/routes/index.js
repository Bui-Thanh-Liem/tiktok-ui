import Home from "../pages/Home"
import Following from "../pages/Following"
import Upload from "../pages/Upload"
import Profile from "../pages/Profile"
import { urlPages } from "../config/routes"

//
export const pulicComponents = [
    {
        path: urlPages.home,
        element: Home
    },
    {
        path: urlPages.following,
        element: Following
    },
    {
        path: urlPages.upload,
        element: Upload,
        layout: null
    },
    {
        path: urlPages.profile,
        element: Profile
    },
]


//
export const privateComponents = [
    {
        
    }
]