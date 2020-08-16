import React from "react";
import { Link, withRouter } from "react-router-dom";

// This component renders the top navigation bar
function Navbar(props) {
    return (
        <nav className="navbar fixed-top navbar-dark bg-primary" >
            <Link to="/" className="navbar-brand">Tree View Generator</Link>
            <div className="navbar-nav d-flex flex-row ml-auto">
                <div className="custom-control custom-radio pr-3 py-2">
                    <input type="radio"
                        className="custom-control-input"
                        id="smallSample"
                        name="smallSample"
                        onChange={props.handleSizeChange}
                        checked={props.sampleSizeSmall} />
                    <label className="custom-control-label" htmlFor="smallSample">Small Sample</label>
                </div>
                <div className="custom-control custom-radio pr-3 py-2">
                    <input type="radio"
                        className="custom-control-input"
                        id="largeSample"
                        name="largeSample"
                        onChange={props.handleSizeChange}
                        checked={!props.sampleSizeSmall} />
                    <label className="custom-control-label" htmlFor="largeSample">Large Sample</label>
                </div>
                <Link to="/vertical"
                    className={getActiveClass("/vertical")}
                    title="Vertical Tree View"
                    role="button">
                    <i className="fa fa-sitemap px-1 fa-lg" aria-hidden="true"></i></Link>
                <Link to="/horizontal"
                    className={getActiveClass("/horizontal")}
                    title="Horizontal Tree View"
                    role="button">
                    <i className="fa fa-share-alt px-1 fa-lg" aria-hidden="true"></i></Link>
                <Link to="/"
                    className={getActiveClass("/")}
                    title="List View"
                    role="button">
                    <i className="fa fa-list px-1 fa-lg" aria-hidden="true"></i></Link>
            </div>
        </nav >
    )
    function getActiveClass(value) {
        return (props.location.pathname === value) ? "nav-link active px-2" : "nav-link px-2";
    }
}

export default withRouter(Navbar);