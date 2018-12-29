import React , { Component } from 'react';
import { Switch , Route } from 'react-router-dom'
import Home from './view/home'

const NotFoundPage = () => <div>
    <section className="main-block">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <center><font color="red" size="20">ไม่พบหน้า 404</font></center>
                </div>  
            </div>
        </div>
    </section>
</div>


class Router extends Component{

    render(){
        return(
        <Switch>
                <Route exact path="/" component={ Home } />
                <Route component={NotFoundPage} />
          </Switch>

        )
    }

}

export default Router