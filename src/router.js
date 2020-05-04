/**
 * 1)
 * Since we're going to use Vue and the Router,
 * we import Vue and the Router packages.
 * We import Vue and VueRouter.
 */
import Vue from "vue";
import Router from "vue-router";
import Vue2Crumbs from "vue-2-crumbs";

/**
 * 2)
 * We then import the components of our application
 * That we want to use as pages.
 */
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import FirstAid from "./components/FirstAid";
import Emergency from "./components/Emergency";
import Data from "./components/Data";
import Adminpanel from "./components/Adminpanel";
import Preview from "./components/Media-Preview/Preview";
import News from "./components/Media-Preview/News";
import All from "./components/Sales/Stream/All";
import Addsale from "./components/Sales/Video/Addsale";
import Completed from "./components/Sales/Video/Completed";
import Pending from "./components/Sales/Video/Pending";
import Processing from "./components/Sales/Video/Processing";
import SearchSale from "./components/Sales/Video/Searchsale";
import CreateTicket from "./components/Support/CreateTicket";
import Tickets from "./components/Support/Tickets";
import ViewTickets from "./components/Support/ViewTickets";

/**
 * 3)
 * Remember to tell Vue to use the Router.
 * This is how we register plgins in Vue. :)
 */
Vue.use(Router);
Vue.use(Vue2Crumbs);

/**
 * 4)
 * Here we create our routes array.
 * for each route, we determine which path should
 * show what component
 */
const OurRoutes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: "/firstaid",
    component: FirstAid
  },
  {
    path: "/emergency",
    component: Emergency
  },
  {
    path: "/data",
    component: Data
  },
  {
    path: "/adminpanel",
    component: Adminpanel
  },
  {
    path: "/preview",
    component: Preview
  },
  {
    path: "/news",
    component: News
  },
  {
    path: "/all",
    component: All
  },
  {
    path: "/addsale",
    component: Addsale
  },
  {
    path: "/completed",
    component: Completed
  },
  {
    path: "/pending",
    component: Pending
  },
  {
    path: "/processing",
    component: Processing
  },
  {
    path: "/searchsale",
    component: SearchSale
  },
  {
    path: "/createticket",
    component: CreateTicket
  },
  {
    path: "/tickets",
    component: Tickets
  },
  {
    path: "/viewtickets",
    component: ViewTickets
  }
];

/**
 * 5)
 * We then create the router instance and pass in
 * our routes array from step 4.
 */
const router = new Router({
  routes: OurRoutes
});

/**
 * 6)
 * 🎉 Hooray! Finally we export the router instance
 * since were going to be using it in another file :)
 */
export default router;
