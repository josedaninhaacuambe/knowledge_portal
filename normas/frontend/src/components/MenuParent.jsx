import ArrowDownLineIcon from "@rsuite/icons/ArrowDownLine";
import ArrowUpLineIcon from "@rsuite/icons/ArrowUpLine";
import DashboardIcon from "@rsuite/icons/Dashboard";

import { useState } from "react";

export default function MenuParent(props) {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  return (
    <li className="flex flex-col gap-2">
      <div
        class="flex justify-between items-center cursor-pointer hover:bg-gray-200"
        onClick={() => {
          setOpenSubMenu(!openSubMenu);
        }}
      >
        <div className="flex items-center gap-2">
          <props.icon />
          {props.mainTitle}
        </div>
        {openSubMenu ? <ArrowUpLineIcon /> : <ArrowDownLineIcon />}
      </div>
      {openSubMenu && (
        <ul className=" flex flex-col gap-2 pl-7 ">
          {props.childTitle.map(function (task, index) {
            return <a href={task.url}>{task.index}</a>;
          })}
        </ul>
      )}
    </li>
  );
}
