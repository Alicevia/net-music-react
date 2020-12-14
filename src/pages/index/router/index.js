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
    }
  },
  {
    path: '/discover',
    component: Discover
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