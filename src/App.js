import logo from "./logo.svg";
import React from "react";
import "./App.css";
import {
  Layout,
  Menu,
  Breadcrumb,
  Message,
  Form,
} from "@arco-design/web-react";
import { IconHome, IconCalendar } from "@arco-design/web-react/icon";
import "@arco-design/web-react/dist/css/arco.css";
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

function BaseMenu(props) {
  return (
    <Menu defaultOpenKeys={["1"]} defaultSelectedKeys={["0_2"]} {...props}>
      <MenuItem key="0_1" disabled>
        <IconHome />
        Menu 1
      </MenuItem>
      <MenuItem key="0_2">
        <IconCalendar />
        1
      </MenuItem>
      <MenuItem key="0_3">
        <IconCalendar />
      2
      </MenuItem>
      <MenuItem key="0_4">
        <IconCalendar />
        3
      </MenuItem>
      {/* <SubMenu
        key="1"
        title={
          <span>
            <IconCalendar />
            Navigation 1
          </span>
        }
      >
        <MenuItem key="1_1">Menu 1</MenuItem>
        <MenuItem key="1_2">Menu 2</MenuItem>
        <SubMenu key="2" title="Navigation 2">
          <MenuItem key="2_1">Menu 1</MenuItem>
          <MenuItem key="2_2">Menu 2</MenuItem>
        </SubMenu>
        <SubMenu key="3" title="Navigation 3">
          <MenuItem key="3_1">Menu 1</MenuItem>
          <MenuItem key="3_2">Menu 2</MenuItem>
          <MenuItem key="3_3">Menu 3</MenuItem>
        </SubMenu>
      </SubMenu>
      <SubMenu
        key="4"
        title={
          <span>
            <IconCalendar />
            Navigation 4
          </span>
        }
      >
        <MenuItem key="4_1">Menu 1</MenuItem>
        <MenuItem key="4_2">Menu 2</MenuItem>
        <MenuItem key="4_3">Menu 3</MenuItem>
      </SubMenu> */}
    </Menu>
  );
}

function App() {
  const [menuKey, setMenuKey] = React.useState("0_2");
  const [collapsed, setCollapsed] = React.useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
    // setSiderWidth(collapsed ? collapsedWidth : normalWidth);
  };
  return (
    <Layout
      className="layout-collapse-demo"
      style={{ height: "100vh", width: "100vw", background: "white" }}
    >
      <Sider
        theme="dark"
        breakpoint="lg"
        onCollapse={onCollapse}
        collapsed={collapsed}
        width={220}
        collapsible
      >
        <div className="logo" />
        <BaseMenu
          onClickMenuItem={(key) => {
            console.log(key, "key");
            setMenuKey(key);
            // Message.info({
            //   content: `You select ${key}`,
            //   showIcon: true,
            // });
          }}
          theme="dark"
          style={{ width: "100%" }}
        />
      </Sider>
      <Layout>
        <Header>
          <BaseMenu mode="horizontal" />
        </Header>
        <Layout style={{ padding: "0 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item> */}
          </Breadcrumb>
          <Content>
            {/* {menuKey === "0_2" && <ArcoMenu></ArcoMenu>}
            {menuKey === "0_3" && <FromDir></FromDir>}
            {menuKey === "0_4" && <AutoMBD></AutoMBD>} */}
          </Content>
          {/* <Footer>Footer</Footer> */}
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
