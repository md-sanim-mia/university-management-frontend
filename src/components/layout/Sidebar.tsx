import { Layout, Menu } from "antd";
import { sideberGenerator } from "../../utils/sideberGenerator";
import { adminPaths } from "../../Routes/admin.routes";
import { facultyPaths } from "../../Routes/faculty.route";
import { studentPaths } from "../../Routes/students.route";
const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
const Sidebar = () => {
  const { Sider } = Layout;
  const role = "faculty";
  let sideberItems;
  switch (role) {
    case userRole.ADMIN:
      sideberItems = sideberGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sideberItems = sideberGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sideberItems = sideberGenerator(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideberItems}
      />
    </Sider>
  );
};

export default Sidebar;
