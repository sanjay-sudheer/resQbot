import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen w-full flex-col bg-gray-100">
      <header className="bg-blue-600 text-white flex h-16 items-center px-6 shadow-md">
        <h1 className="text-2xl font-bold flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
          resQbot
        </h1>
      </header>
      <div className="flex flex-1">
        <nav className="bg-white border-r border-gray-200 flex flex-col gap-2 p-4 w-64">
          {[
            { name: "Dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
            { name: "Problems", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
            { name: "Responders", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
            { name: "Settings", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
          ].map((item) => (
            <button
              key={item.name}
              className="inline-flex items-center whitespace-nowrap text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:bg-blue-50 text-gray-700 rounded-md px-3 py-2 justify-start gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              {item.name}
            </button>
          ))}
        </nav>
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Total Problems", count: 10, color: "bg-blue-500", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
                { title: "High Severity", count: 4, color: "bg-red-500", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" },
                { title: "Medium Severity", count: 3, color: "bg-yellow-500", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" },
                { title: "Low Severity", count: 3, color: "bg-green-500", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              ].map((stat) => (
                <div
                  key={stat.title}
                  className="rounded-lg bg-white shadow-md overflow-hidden"
                >
                  <div className={`${stat.color} p-4 flex justify-between items-center`}>
                    <h3 className="text-white font-semibold">{stat.title}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                    </svg>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl font-bold text-gray-800">{stat.count}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search problems..."
                />
                <button className="bg-blue-500 text-white p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <div className="rounded-lg bg-white shadow-md">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-2xl font-semibold text-gray-800">Problems</h3>
                </div>
                <div className="p-6">
                  <div className="relative w-full overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          {["Problem", "Severity", "Latitude", "Longitude", "View on Map"].map(
                            (heading) => (
                              <th key={heading} className="px-6 py-3">
                                {heading}
                              </th>
                            )
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            problem: "Broken street sign on Pine Road",
                            severity: "low",
                            latitude: "40.730987",
                            longitude: "-73.974321",
                          },
                          {
                            problem: "Broken streetlight on Oak Avenue",
                            severity: "medium",
                            latitude: "40.718291",
                            longitude: "-74.007846",
                          },
                          {
                            problem: "Broken traffic signal at Oak and Maple",
                            severity: "high",
                            latitude: "40.722456",
                            longitude: "-73.998741",
                          },
                          {
                            problem: "Cracked pavement on Ash Avenue",
                            severity: "high",
                            latitude: "40.741234",
                            longitude: "-73.987654",
                          },
                          {
                            problem: "Damaged fence on Cedar Street",
                            severity: "medium",
                            latitude: "40.726789",
                            longitude: "-73.962134",
                          },
                          {
                            problem: "Damaged sidewalk on Birch Road",
                            severity: "high",
                            latitude: "40.753567",
                            longitude: "-73.971234",
                          },
                        ].map((problem) => (
                          <tr key={problem.problem} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium text-gray-900">{problem.problem}</td>
                            <td className="px-6 py-4">
                              <span
                                className={`px-2 py-1 inline-flex items-center text-xs leading-5 font-semibold rounded-full ${
                                  problem.severity === "high"
                                    ? "bg-red-100 text-red-800"
                                    : problem.severity === "medium"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-green-100 text-green-800"
                                }`}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                                    problem.severity === "high"
                                      ? "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                      : problem.severity === "medium"
                                      ? "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                      : "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  } />
                                </svg>
                                {problem.severity}
                              </span>
                            </td>
                            <td className="px-6 py-4">{problem.latitude}</td>
                            <td className="px-6 py-4">{problem.longitude}</td>
                            <td className="px-6 py-4">
                              <a href="#" className="font-medium text-blue-600 hover:underline flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                                View
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;