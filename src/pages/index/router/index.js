import React from 'react';
import { Redirect } from "react-router-dom"
import Discover from "../views/discover"
import Friend from "../views/friend"
import Mine from "../views/mine"

const routes = [
  {
    path: '/',
    exact: true,
    render() {
      return <Redirect to='/discover' />
    },
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to='/discover/recommend' />
      },
      {
        path: '/discover/recommend',
        component: React.lazy(() => import('views/discover/route-views/recommend'))
      },
      {
        path: '/discover/ranking',
        component: React.lazy(() => import('views/discover/route-views/ranking'))
      },
      {
        path: '/discover/songs',
        component: React.lazy(() => import('views/discover/route-views/songs'))
      },
      {
        path: '/discover/djradio',
        component: React.lazy(() => import('views/discover/route-views/djradio'))
      },
      {
        path: '/discover/artist',
        component: React.lazy(() => import('views/discover/route-views/artist'))
      },

      {
        path: '/discover/album',
        component: React.lazy(() => import('views/discover/route-views/album'))
      },
    ]
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/friend',
    component: Friend
  },


]

export default routes