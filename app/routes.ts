import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about-me", "routes/about-me/about-me.tsx"),
  route("business", "routes/business/business.tsx"),
  route("contact", "routes/contact/contact.tsx"),
  route("*", "routes/page-not-found.tsx"),
] satisfies RouteConfig;
