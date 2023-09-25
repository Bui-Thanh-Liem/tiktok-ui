import Home from "../pages/Home"
import Following from "../pages/Following"
import Upload from "../pages/Upload"

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
]

export const privateComponents = [
    {
        
    }
]