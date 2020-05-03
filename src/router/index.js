import Index from '../views/Index'
import Home from '../views/Home'
import TheatreList from '../views/TheatreList'
import Eticket from '../views/Eticket'
import Myjuooo from '../views/Myjuooo'

import ActivityGroup from '../views/noNav/cards/ActivityGroup'
import CardproductCardhappy from '../views/noNav/cards/CardproductCardhappy'
import CardproductIndex from '../views/noNav/cards/CardproductIndex'
import Passport from '../views/noNav/login/Passport'
import PlusIndex from '../views/noNav/cards/PlusIndex'
import PointsMall from '../views/noNav/cards/PointsMall'
import Search from '../views/noNav/search/Search'
import ShowList from '../views/noNav/show/ShowList'
import TheaterDetail from '../views/noNav/theaterDetail/TheaterDetail'
import TicketDetail from '../views/noNav/show/TicketDetail'
import TouringList from '../views/noNav/tour/TouringList'
import TourShowinfo from '../views/noNav/tour/TourShowInfo'
import VipIndex from '../views/noNav/cards/VipIndex'


import Error from '../views/Error'
export default [
    {
        path: '/activity/group',
        component: ActivityGroup,
    },
    {
        path: '/Cardproduct/cardhappy',
        component: CardproductCardhappy,
    },
    {
        path: '/Cardproduct/index',
        component: CardproductIndex,
    },
    {
        path: '/passport/login',
        component: Passport,
    },
    {
        path: '/plus/index',
        component: PlusIndex,
    },
    {
        path: '/points/mall',
        component: PointsMall,
    },
    {
        path: '/search/index',
        component: Search,
    },
    {
        path: '/show/showsLibrary',
        component: ShowList,
    },
    {
        path: '/theater/detail',
        component: TheaterDetail,
    },
    {
        path: '/ticket',
        component: TicketDetail,
    },
    {
        path: '/touring',
        component: TouringList,
    },
    {
        path: '/tour/tourShowInfo',
        component: TourShowinfo,
    },
    {
        path: '/vip/index',
        component: VipIndex,
    },
   
    {
        path: '/',
        component: Index,
        childrens: [
            {
                path: '/',
                component: Home,
                exact:true,
            },
            {
                path: '/theatre/theatreList',
                component: TheatreList,
            },
            {
                path: '/eticket/list',
                component: Eticket,
            },
            {
                path: '/myjuooo/myjuooo',
                component: Myjuooo,
            },
        ]
    },
   
    











]
