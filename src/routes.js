// Import the components you want to define routes for.
import NewListing from "./components/NewListing.vue";
import Login from "./components/Login.vue";
import SignUp from "./components/SignUp.vue";
import Sales from "./components/Sales.vue";
import Home from "./components/Home.vue";
import Chat from "./components/chatComponent/Chat.vue";
import UserListings from "./components/UserListings.vue";
import Profile from "./components/Profile.vue";
import EditListing from "./components/EditListing.vue"; 

export default [
  { path: "/", component: Login },
  { path: "/login", component: Login },
  { path: "/home", component: Home },
  {
    path: "/newListing",
    name: "newListing",
    component: NewListing,
    meta: { requiresAuth: true },
  },
  {
    path: "/myListings",
    name: "myListings",
    component: UserListings,
    meta: { requiresAuth: true },
  },
  { path: "/Signup", name: "signUp", component: SignUp },
  { path: "/sales", name: "sales", component: Sales },
  { path: '/edit', component: EditListing, 
    name:'edit', 
    meta: { requiresAuth: true }, 
    props:true }, 
  {
    path: "/chat",
    name: "chat",
    component: Chat,
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: { requiresAuth: true },
    props: true,
  },
];
