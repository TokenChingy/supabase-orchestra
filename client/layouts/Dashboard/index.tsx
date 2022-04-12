import React from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

interface IDashboardProps {
  children: React.ReactNode;
}

export default function Dashboard(props: IDashboardProps): JSX.Element {
  return (
    <main
      className={"w-full flex flex-col flex-1 overflow-y-auto"}
      style={{ backgroundColor: "#1C1C1C" }}
    >
      <div className={"flex"}>
        <Sidebar />
        <div className={"flex-1 flex flex-col h-screen"}>
          <Topbar />
          <div className={"flex-grow flex-1 overflow-auto"}>
            <div className={"px-6 py-7"}>{props.children}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
