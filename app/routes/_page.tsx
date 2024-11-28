import PropsChildren from "@/lib/types/props-children";
import {Outlet} from "@remix-run/react";

interface Props extends PropsChildren {
}

const PageLayout = () => (
  <Outlet />
)

export const layout = ({children}: Props) => (
  <div>
    <h1 className="bg-red-200">Penis</h1>
    {children}
  </div>
);

export default PageLayout;