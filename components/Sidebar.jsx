import Image from "next/image";
import SidebarLink from "./SidebarLink";
import Avatar from "@mui/material/Avatar";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className="h-full flex-col items-center hidden sm:flex xl:items-start xl:w-[340px] p-2 fixed">
      <div className="flex items-center justify-center p-0 w-14 h-14 hoverAnimation xl:ml-24">
        <Image src="https://rb.gy/ogau5a" width={30} height={30} />
      </div>
      <div className="mb-2.5 mt-4 space-y-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button
        className="hidden ml-auto xl:inline bg-[#1d9bf0] text-white rounded-full w-56 py-[10px]
      text-lg font-bold shadow-md hover:bg-[#1a8cd8]
      "
      >
        Tweet
      </button>
      <div className="text-[#d9d9d9] show flex relative items-center  justify-center xl:ml-auto mt-auto mr-2 xl:-mr-[16px] mb-1 ">
        <Avatar
          onClick={signOut}
          className="cursor-pointer hover:opacity-80 xl:ml-auto"
          src={session?.user?.image}
        />
        <div className="hidden ml-2 leading-5 xl:inline">
          <h4 className="font-bold">{session.user.name}</h4>
          <p className="font-normal text-[#6e767d]">Azad chaiwala show..</p>
        </div>
        <DotsHorizontalIcon className="hidden h-5 ml-4 cursor-pointer xl:inline" />
        <p
          className="absolute left-0 font-semibold hide -top-8"
          onClick={signOut}
        >
          Sign out
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
