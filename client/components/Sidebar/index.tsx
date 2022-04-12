import { Link } from "react-router-dom";
import React from "react";

export default function Sidebar(): JSX.Element {
  return (
    <div
      className={"w-64 h-screen overflow-auto hide-scrollbar border-r"}
      style={{
        backgroundColor: "#1C1C1C",
        borderColor: "#282828",
      }}
    >
      {/* Supabase Title */}
      <div>
        <div
          className={"max-h-12 h-12 flex items-center border-b px-6"}
          style={{
            borderColor: "#282828",
          }}
        >
          <h5 className={"font-semibold text-white"}>Supabase Orchestra</h5>
        </div>
      </div>

      {/* Menu */}
      <nav>
        <div
          className={"flex border-b px-6 py-7"}
          style={{
            borderColor: "#282828",
          }}
        >
          <ul>
            {/* Projects */}
            <div className={"flex space-x-3 mb-2 font-normal"}>
              <span className={"text-sm text-scale-900 w-full text-gray-600"}>
                Projects
              </span>
            </div>
            <ul className={"space-y-1"}>
              <Link
                className={
                  "cursor-pointer text-sm text-scale-1100 text-gray-400 hover:text-gray-200"
                }
                to={"/"}
              >
                All Projects
              </Link>
            </ul>
          </ul>
        </div>
      </nav>
    </div>
  );
}
