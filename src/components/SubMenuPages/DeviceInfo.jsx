import React from 'react'

const DeviceInfo = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Device Info</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Network interface status</h3>
          <div className="grid grid-cols-5 gap-4 mb-4">
            <div className="text-center">
              <img src="/icons/lan1.png" alt="LAN1" className="mx-auto" />
              <p>LAN1</p> 
            </div>
            <div className="text-center">
              <img src="/icons/lan2.png" alt="LAN2" className="mx-auto" />
              <p>LAN2</p>
            </div>
            <div className="text-center">
              <img src="/icons/lan3.png" alt="LAN3" className="mx-auto" />
              <p>LAN3</p>
            </div>
               <div className="text-center">
              <img src="/icons/lan4.png" alt="LAN4" className="mx-auto" />
              <p>LAN4</p>
            </div>
            <div className="text-center">
              <img src="/icons/wan1.png" alt="WAN1" className="mx-auto" />
              <p>WAN1</p>
            </div>
          </div>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Interface</th>
                <th className="py-2">Type</th>
                <th className="py-2">Link mode</th>
                <th className="py-2">IP address</th>
                <th className="py-2">MAC address</th>
                <th className="py-2">Receive speed</th>
                <th className="py-2">Send speed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">WAN1</td>
                <td className="py-2">WAN port Online</td>
                <td className="py-2">1000M/Full duplex</td>
                <td className="py-2">172.16.0.1</td>
                <td className="py-2">44-D1-FA-48-72-DD</td>
                <td className="py-2">1.62 KB/S</td>
                <td className="py-2">2.09 KB/S</td>
              </tr>
              {/* Add other rows as needed */}
            </tbody>
          </table>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Device basic information</h3>
          <div className="mb-2">Device ID: Y21220041958, Max Users: 128, Max AP can be managed: 128</div>
          <div className="mb-2">Uptime: 1:23:17 up 0 days</div>
          <div className="mb-2">Memory utilization: 34% (39.40MB/117.53MB)</div>
          <div className="mb-2">CPU utilization: 0%</div>
          <div className="mb-2">Connection monitoring: 0% (141/2000000)</div>
          <div className="mb-2">Online users: 1 users</div>
          <div className="mb-2">Device model: WHG-30, Firmware version: V3.11 B20240423</div>
        </div>
      </div>
    </div>
  )
}

export default DeviceInfo
