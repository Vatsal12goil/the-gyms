import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Classes = lazy(() => import("./pages/Classes"));
const Trainers = lazy(() => import("./pages/Trainers"));
const Membership = lazy(() => import("./pages/Membership"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));

const PageLoader = () => (
  <div className="flex items-center justify-center h-64">
    <div
      data-ocid="app.loading_state"
      className="flex flex-col items-center gap-3"
    >
      <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      <span className="text-xs text-muted-foreground tracking-widest uppercase font-display">
        Loading
      </span>
    </div>
  </div>
);

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const classesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/classes",
  component: Classes,
});
const trainersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trainers",
  component: Trainers,
});
const membershipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/membership",
  component: Membership,
});
const testimonialsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/testimonials",
  component: Testimonials,
});
const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: Blog,
});
const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$slug",
  component: BlogPost,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  classesRoute,
  trainersRoute,
  membershipRoute,
  testimonialsRoute,
  blogRoute,
  blogPostRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
