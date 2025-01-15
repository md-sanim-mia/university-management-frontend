import { Layout, Menu } from "antd";
import { sideberGenerator } from "../../utils/sideberGenerator";
import { adminPaths } from "../../Routes/admin.routes";
import { facultyPaths } from "../../Routes/faculty.route";
import { studentPaths } from "../../Routes/students.route";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/Auth/authSlice";
const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
const Sidebar = () => {
  const { Sider } = Layout;
  const user = useAppSelector(useCurrentUser);
  let sideberItems;
  switch (user!.role) {
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
      <h2 style={{ color: "white" }}>PH UIN</h2>

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
