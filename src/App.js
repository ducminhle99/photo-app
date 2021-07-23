import React, { Suspense } from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";


// lazy load - code splitting
const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>loading...</div>}>
        <BrowserRouter>
          <ul>
            <li><Link to="/photo">go to photo page</Link></li>
            <li><Link to="/photo/add">go to add new photo page</Link></li>
            <li><Link to="/photo/123">go to edit photo page</Link></li>
          </ul>

          <Switch>
            <Redirect exact from="/" to="/photo" />

            <Route path="/photo" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>

      </Suspense>
    </div>
  );
}

export default App;
