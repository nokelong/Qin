import noveldetail  from 'VIEWS/noveldetail'
import novelcatalog from 'VIEWS/novelcatalog'
import search       from 'VIEWS/search'
import novelindex   from 'VIEWS/novelindex' 
import reader       from 'VIEWS/reader' 
import publishComment from 'VIEWS/publishComment'

const novelRoutes = [
    {
        path:'/noveldetail',
        name:'noveldetail',
        component:noveldetail
    },{
        path:'/novelcatalog',
        name:'novelcatalog',
        component:novelcatalog
    },{
        path:'/search',
        name:'search',
        component:search
    },{
        path:'/novelindex',
        name:'novelindex',
        component:novelindex
    },{
        path: '/reader',
        name: 'reader',
        component: reader
    },{
        path: '/publishComment',
        name: 'publishComment',
        component: publishComment
    }
];
export default novelRoutes;
