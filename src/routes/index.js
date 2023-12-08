import paths from "./paths";
import pages from "../pages";
import Layouts from "../components/layouts";

const publicRoutes = [
  {
    path: paths.login,
    component: pages.Login,
    layout: Layouts.layout,
  },
  {
    path: paths.signUp,
    component: pages.SignUp,
    layout: Layouts.layout,
  },
];

const privateRoutes = [
  {
    path: paths.manageInfor,
    component: pages.ManageInfor,
    layout: Layouts.defaultLayout,
  },
  {
    path: paths.inforDevice,
    component: pages.InforDevice,
    layout: Layouts.layout,
  },
  {
    path: paths.inforUser,
    component: pages.InforUser,
    layout: Layouts.layout,
  },
  {
    path: paths.listDevices,
    component: pages.ListDevice,
    layout: Layouts.defaultLayout,
  },
  {
    path: paths.listDeviceOff,
    component: pages.ListDeviceOff,
    layout: Layouts.defaultLayout,
  },
  {
    path: paths.listDeviceOn,
    component: pages.ListDeviceOnline,
    layout: Layouts.defaultLayout,
  },
  {
    path: paths.listType,
    component: pages.ListType,
    layout: Layouts.defaultLayout,
  }
];
export { publicRoutes, privateRoutes };
