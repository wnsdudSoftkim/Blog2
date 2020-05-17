import React from 'react'
import { BrowserRouter,Switch, Route} from 'react-router-dom'
import Home from '../component/Home.js'
import Introduce from '../component/introduce/Introduce.js'
import Signin from '../component/Signin.js'
import SignUp from '../component/SignUp.js'
import AddPost from '../component/AddPost.js'
import PostPage from '../component/PostPage'
import GuestBook from '../component/GuestBook'
function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/introduce" component = {Introduce} />
                <Route path="/Signin" component={Signin} />
                <Route path="/SignUp" component={SignUp} />
                <Route path="/AddPost" component={AddPost} />
                <Route path="/PostPage/:id" component={PostPage} />
                <Route path="/GuestBook" component={GuestBook} />
            </Switch>
        </BrowserRouter>
    )
}
export default Router