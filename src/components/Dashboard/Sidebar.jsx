import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from '@mui/material';
import {
  SystemUpdateAlt,
  SettingsEthernet,
  Policy,
  AccountTree,
  Public,
  Security,
  Category,
  ReceiptLong,
  VerifiedUser,
  Group,
  SwapHoriz,
  LibraryBooks,
  Description,
  EventNote,
  VpnLock,
  Build,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';

const Sidebar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    systemStatus: false,
    networkConfigure: false,
    flowControlPolicy: false,
    acManagement: false,
    authInternetAccess: false,
    behaviorControl: false,
    objectManagement: false,
    safetyProtection: false,
    logRecord: false,
    vpn: false,
    deviceMaintenance: false,
  });

  const toggleDropdown = (key) => {
    setDropdownOpen({ ...dropdownOpen, [key]: !dropdownOpen[key] });
  };

  return (
    <div className="w-64 h-full bg-white border-r">
      <div className="p-4">
        <List>
          <ListItem button onClick={() => toggleDropdown("systemStatus")}>
            <ListItemIcon><SystemUpdateAlt /></ListItemIcon>
            <ListItemText primary="System Status" />
            {dropdownOpen.systemStatus ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.systemStatus} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* System Status Submenu */}
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("networkConfigure")}>
            <ListItemIcon><SettingsEthernet /></ListItemIcon>
            <ListItemText primary="Network Configure" />
            {dropdownOpen.networkConfigure ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.networkConfigure} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Network Configure Submenu */}
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("flowControlPolicy")}>
            <ListItemIcon><Policy /></ListItemIcon>
            <ListItemText primary="Flow Control Policy" />
            {dropdownOpen.flowControlPolicy ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.flowControlPolicy} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Flow Control Policy Submenu */}
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("acManagement")}>
            <ListItemIcon><AccountTree /></ListItemIcon>
            <ListItemText primary="AC Management" />
            {dropdownOpen.acManagement ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.acManagement} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* AC Management Submenu */}
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("authInternetAccess")}>
            <ListItemIcon><Public /></ListItemIcon>
            <ListItemText primary="Auth Internet Access" />
            {dropdownOpen.authInternetAccess ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.authInternetAccess} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Auth Internet Access Submenu */}
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("behaviorControl")}>
            <ListItemIcon><Security /></ListItemIcon>
            <ListItemText primary="Behavior Control" />
            {dropdownOpen.behaviorControl ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.behaviorControl} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Behavior Control Submenu */}
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("objectManagement")}>
            <ListItemIcon><Category /></ListItemIcon>
            <ListItemText primary="Object Management" />
            {dropdownOpen.objectManagement ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.objectManagement} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Object Management Submenu */}
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("safetyProtection")}>
            <ListItemIcon><Security /></ListItemIcon>
            <ListItemText primary="Safety Protection" />
            {dropdownOpen.safetyProtection ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.safetyProtection} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Safety Protection Submenu */}
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("logRecord")}>
            <ListItemIcon><ReceiptLong /></ListItemIcon>
            <ListItemText primary="Log Record" />
            {dropdownOpen.logRecord ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.logRecord} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem><ListItemText primary="User Auth Log" /></ListItem>
              <ListItem><ListItemText primary="Online User Log" /></ListItem>
              <ListItem><ListItemText primary="Interface Flow Log" /></ListItem>
              <ListItem><ListItemText primary="System Log" /></ListItem>
              <ListItem><ListItemText primary="AC Operation Log" /></ListItem>
              <ListItem><ListItemText primary="AP Event Log" /></ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("vpn")}>
            <ListItemIcon><VpnLock /></ListItemIcon>
            <ListItemText primary="VPN" />
            {dropdownOpen.vpn ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.vpn} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* VPN Submenu */}
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("deviceMaintenance")}>
            <ListItemIcon><Build /></ListItemIcon>
            <ListItemText primary="Device Maintenance" />
            {dropdownOpen.deviceMaintenance ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.deviceMaintenance} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Device Maintenance Submenu */}
            </List>
          </Collapse>
        </List>
      </div>
    </div>
  );
};

export default Sidebar;
