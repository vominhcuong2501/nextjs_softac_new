import { MENU_DATA } from "@/data";
import Link from "next/link";
import React from "react";

export const NavMenu = () => {
    return (
        <div className="flex items-center gap-11">
            {MENU_DATA.map((menu_item) => (
                <div key={menu_item.id} className="group relative h-[84px] flex flex-col justify-center item-center">
                    <Link href={menu_item.link} target="_self" title={menu_item.title} className="text-17 font-medium text-black group-hover:text-blue">{menu_item.title}</Link>
                    {menu_item.has_dropdown && (
                        <ul className="min-w-[240px] absolute top-full left-0 z-10 bg-white px-10  py-7 opacity-0 shadow-26 scale-y-0 invisible group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible origin-top flex flex-col gap-3">
                            {menu_item?.sub_menus?.map((sub_menu) => (
                                <li key={sub_menu.title}>
                                    <Link href={sub_menu.link} target="_self" title={sub_menu.title} className="text-14 font-medium text-black hover:text-blue relative after:absolute after:-bottom-0.5 after:right-0 after:w-0 after:left-auto after:h-[1px] after:bg-blue after:transition-all after:duration-700 hover:after:left-0 hover:after:w-full hover:after:right-auto">{sub_menu.title}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

