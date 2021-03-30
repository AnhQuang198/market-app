import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import AdminFooter from "../components/Footers/AdminFooter";
import Sidebar from "../components/Sidebar/Sidebar";
import routes from "../routes";

const getRoutes = (routes) => {
    return routes.map((prop, key) => {
        if (prop.layout === "/admin") {
            return (
                <Route
                    path={prop.layout + prop.path}
                    component={prop.component}
                    key={key}
                />
            );
        } else {
            return null;
        }
    });
};

function Admin(props) {
    return (
        <div>
            <Sidebar
                {...props}
                routes={routes}
                logo={{
                    innerLink: "/admin/index",
                    imgSrc: require("../assets/img/brand/argon-react.png").default,
                    imgAlt: "...",
                }}
            />
            <div className="main-content">
                <Switch>
                    {getRoutes(routes)}
                    <Redirect from="*" to="/admin/index" />
                </Switch>
                <Container fluid>
                    <AdminFooter />
                </Container>
            </div>
        </div>
    );
}

export default Admin;