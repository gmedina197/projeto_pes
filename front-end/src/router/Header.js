import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu, Avatar } from "antd";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";

const Wrapper = styled.div`
  background-color: #001529;
  height: 50px;
  padding-bottom: 1px;
  margin-bottom: 10px;
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0 4px 9px -3px rgba(102, 136, 153, 0.15);

  .ant-menu-dark.ant-menu-horizontal .ant-menu-item:hover {
    background-color: #001529;
  }

  .ant-menu.ant-menu-dark .ant-menu-item-selected {
    background-color: #001529;
  }
`;

const HeaderMenu = styled(Menu)`
  background-color: #001529;
  border: 0 !important;
  display: flex;
  font-size: 18px;
  position: relative;
  justify-content: center;
`;

const HeaderLogoImg = styled.img`
  height: 35px;
  margin-left: 10px;
`;

const NavLink = styled(Link)`
  text-decoration: none !important;
`;

const DesktopNavbar = () => {
  const { currentUser } = useAuth();

  return (
    <Wrapper>
      <HeaderMenu theme="dark" mode="horizontal">
        <Menu.Item
          key="home"
          style={{
            textAlign: "center",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <NavLink className="navbar-link" to="/home">
            <HeaderLogoImg src="/logo192.png" alt="Pes2" />
          </NavLink>
        </Menu.Item>
        <Menu.Item key="products">
          <NavLink className="navbar-link" to="/products">
            Products
          </NavLink>
        </Menu.Item>

        <Menu.Item
          key="account"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
        >
          <HeaderMenu mode="horizontal" selectable={false}>
            <Menu.Item key="profile">
              <Dropdown
                overlayStyle={{ minWidth: 200 }}
                placement="bottomRight"
                trigger={["click"]}
                overlay={
                  <Menu>
                    <Menu.Item key="profile">
                      <NavLink to="/account/profile">Profile</NavLink>
                    </Menu.Item>

                    <Menu.Divider />

                    <Menu.Item key="logout">
                      <NavLink to="/logout">Log out</NavLink>
                    </Menu.Item>
                  </Menu>
                }
              >
                <Avatar
                  style={{ color: "#E6A102", backgroundColor: "#fde3cf" }}
                  size={30}
                >
                  {currentUser.name.charAt(0).toUpperCase()}
                </Avatar>
              </Dropdown>
            </Menu.Item>
          </HeaderMenu>
        </Menu.Item>
      </HeaderMenu>
    </Wrapper>
  );
};

export default DesktopNavbar;
