import React, { useState } from 'react';

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
        <ul>
          <li>
            <button onClick={() => toggleDropdown('systemStatus')} className="w-full text-left">
              System Status
            </button>
            {dropdownOpen.systemStatus && <ul className="pl-4">/* System Status Submenu */</ul>}
          </li>
          <li>
            <button onClick={() => toggleDropdown('networkConfigure')} className="w-full text-left">
              Network Configure
            </button>
            {dropdownOpen.networkConfigure && <ul className="pl-4">/* Network Configure Submenu */</ul>}
          </li>
          <li>
            <button onClick={() => toggleDropdown('flowControlPolicy')} className="w-full text-left">
              Flow Control Policy
            </button>
            {dropdownOpen.flowControlPolicy && <ul className="pl-4">/* Flow Control Policy Submenu */</ul>}
          </li>
          <li>
            <button onClick={() => toggleDropdown('acManagement')} className="w-full text-left">
              AC Management
            </button>
            {dropdownOpen.acManagement && <ul className="pl-4">/* AC Management Submenu */</ul>}
          </li>
          <li>
            <button onClick={() => toggleDropdown('authInternetAccess')} className="w-full text-left">
              Auth Internet Access
            </button>
            {dropdownOpen.authInternetAccess && <ul className="pl-4">/* Auth Internet Access Submenu */</ul>}
          </li>
          <li>
            <button onClick={() => toggleDropdown('behaviorControl')} className="w-full text-left">
              Behavior Control
            </button>
            {dropdownOpen.behaviorControl && <ul className="pl-4">/* Behavior Control Submenu */</ul>}
          </li>
          <li>
            <button onClick={() => toggleDropdown('objectManagement')} className="w-full text-left">
              Object Management
            </button>
            {dropdownOpen.objectManagement && <ul className="pl-4">/* Object Management Submenu */</ul>}
          </li>
          <li>
            <button onClick={() => toggleDropdown('safetyProtection')} className="w-full text-left">
              Safety Protection
            </button>
            {dropdownOpen.safetyProtection && <ul className="pl-4">/* Safety Protection Submenu */</ul>}
          </li>
          <li>
            <button onClick={() => toggleDropdown('logRecord')} className="w-full text-left">
              Log Record
            </button>
            {dropdownOpen.logRecord && <ul className="pl-4">
              <li>User Auth Log</li>
              <li>Online User Log</li>
              <li>Interface Flow Log</li>
              <li>System Log</li>
              <li>AC Operation Log</li>
              <li>AP Event Log</li>
            </ul>}
          </li>
          <li>
            <button onClick={() => toggleDropdown('vpn')} className="w-full text-left">
              VPN
            </button>
            {dropdownOpen.vpn && <ul className="pl-4">/* VPN Submenu */</ul>}
          </li>
          <li>
            <button onClick={() => toggleDropdown('deviceMaintenance')} className="w-full text-left">
              Device Maintenance
            </button>
            {dropdownOpen.deviceMaintenance && <ul className="pl-4">/* Device Maintenance Submenu */</ul>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
