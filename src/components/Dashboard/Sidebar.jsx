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
            <ListItem><ListItemText primary="Device info" /></ListItem>
              <ListItem><ListItemText primary="Interface Status" /></ListItem>
              <ListItem><ListItemText primary="LAN IP Flow" /></ListItem>
              <ListItem><ListItemText primary="Application Flow" /></ListItem>
              
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("networkConfigure")}>
            <ListItemIcon><SettingsEthernet /></ListItemIcon>
            <ListItemText primary="Network Configure" />
            {dropdownOpen.networkConfigure ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.networkConfigure} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem><ListItemText primary="WAN Configure" /></ListItem>
              <ListItem><ListItemText primary="LANDHCP" /></ListItem>
              <ListItem><ListItemText primary="Physical Port Definition" /></ListItem>
              <ListItem><ListItemText primary="Static Route" /></ListItem>
              <ListItem><ListItemText primary="DDNS" /></ListItem>
              <ListItem><ListItemText primary="NAT/Port Forwarding" /></ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("flowControlPolicy")}>
            <ListItemIcon><Policy /></ListItemIcon>
            <ListItemText primary="Flow Control Policy" />
            {dropdownOpen.flowControlPolicy ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.flowControlPolicy} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem><ListItemText primary="Smart Flow Control" /></ListItem>
              <ListItem><ListItemText primary="Band Width Control" /></ListItem>
              <ListItem><ListItemText primary="Free flow Control" /></ListItem>
              
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("acManagement")}>
            <ListItemIcon><AccountTree /></ListItemIcon>
            <ListItemText primary="AC Management" />
            {dropdownOpen.acManagement ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.acManagement} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem><ListItemText primary="AP List" /></ListItem>
              <ListItem><ListItemText primary="Ap Configure Template" /></ListItem>
              <ListItem><ListItemText primary="AP Group Definition" /></ListItem>
              <ListItem><ListItemText primary="AP Upgrade" /></ListItem>
              <ListItem><ListItemText primary="Black and White List" /></ListItem>
              <ListItem><ListItemText primary="Seamless Roaming" /></ListItem>
              <ListItem><ListItemText primary="Auto Channel" /></ListItem>
              <ListItem><ListItemText primary="Audit Configuration" /></ListItem>
              <ListItem><ListItemText primary="Locating Server" /></ListItem>
              
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("authInternetAccess")}>
            <ListItemIcon><Public /></ListItemIcon>
            <ListItemText primary="Auth Internet Access" />
            {dropdownOpen.authInternetAccess ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.authInternetAccess} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem><ListItemText primary="Auth Configure" /></ListItem>
              <ListItem><ListItemText primary="PPPOE Auth" /></ListItem>
              <ListItem><ListItemText primary="Portal Auth" /></ListItem>
              <ListItem><ListItemText primary="Radius Billing" /></ListItem>
              <ListItem><ListItemText primary="Auth User" /></ListItem>
              <ListItem><ListItemText primary="Auth User Status" /></ListItem>
              <ListItem><ListItemText primary="Department Level Definition" /></ListItem>
              
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("behaviorControl")}>
            <ListItemIcon><Security /></ListItemIcon>
            <ListItemText primary="Behavior Control" />
            {dropdownOpen.behaviorControl ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.behaviorControl} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem><ListItemText primary="Application Firewall" /></ListItem>
              <ListItem><ListItemText primary="URL Redirect" /></ListItem>
              <ListItem><ListItemText primary="Domain Redirect" /></ListItem>
              
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("objectManagement")}>
            <ListItemIcon><Category /></ListItemIcon>
            <ListItemText primary="Object Management" />
            {dropdownOpen.objectManagement ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.objectManagement} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem><ListItemText primary="Time Object" /></ListItem>
              <ListItem><ListItemText primary="Source IP Object" /></ListItem>
              <ListItem><ListItemText primary="Port Object" /></ListItem>
              <ListItem><ListItemText primary="Destination IP Object" /></ListItem>
              <ListItem><ListItemText primary="Build-in Application Object" /></ListItem>
              <ListItem><ListItemText primary="Custom Application Object" /></ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("safetyProtection")}>
            <ListItemIcon><Security /></ListItemIcon>
            <ListItemText primary="Safety Protection" />
            {dropdownOpen.safetyProtection ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.safetyProtection} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem><ListItemText primary="IP-MAC Binding" /></ListItem>
              <ListItem><ListItemText primary="Connection Quantity Limit" /></ListItem>
              <ListItem><ListItemText primary="LAN Abnormal Detection" /></ListItem>
              <ListItem><ListItemText primary="LAN Attack Protection" /></ListItem>
              <ListItem><ListItemText primary="WAN Ping Forbid/WAN Login" /></ListItem>
              
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
            <ListItem><ListItemText primary="PPTP" /></ListItem>
              <ListItem><ListItemText primary="L2TP" /></ListItem>
              <ListItem><ListItemText primary="VTNUS Configure" /></ListItem>
              <ListItem><ListItemText primary="VTNUS Status" /></ListItem>
             
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("deviceMaintenance")}>
            <ListItemIcon><Build /></ListItemIcon>
            <ListItemText primary="Device Maintenance" />
            {dropdownOpen.deviceMaintenance ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.deviceMaintenance} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem><ListItemText primary="Firmware Upgrade" /></ListItem>
              <ListItem><ListItemText primary="Modify Password" /></ListItem>
              <ListItem><ListItemText primary="Ping Detection" /></ListItem>
              <ListItem><ListItemText primary="Configure File Maintenance" /></ListItem>
              <ListItem><ListItemText primary="Restart Device" /></ListItem>
              <ListItem><ListItemText primary="Timed Task" /></ListItem>
              <ListItem><ListItemText primary="Time Synchroniztion" /></ListItem>
              <ListItem><ListItemText primary="Cloud Configure" /></ListItem>
               
            </List>
          </Collapse>
        </List>
      </div>
    </div>
  );
};

export default Sidebar;
