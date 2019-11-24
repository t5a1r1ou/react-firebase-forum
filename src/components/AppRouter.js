import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppContent } from './AppContent';
import { AppHeader } from './AppHeader';
import { PageHome } from './PageHome';
import { PageNotFound } from './PageNotFound';
import { PageThread } from './PageThread';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <>
        <AppHeader />
        <AppContent>
          <Switch>
            <Route exact path='/' component={PageHome} />
            <Route exact path='/threads/:threadId' component={PageThread} />
            <Route exact path='*' component={PageNotFound} />
          </Switch>
        </AppContent>
      </>
    </BrowserRouter>
  )
}
