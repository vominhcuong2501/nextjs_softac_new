'use client';

import { MENU_DATA } from "@/data";
import Link from "next/link";
import React, { useState } from "react";

export const MobileMenus = () => {
    const [navTitle, setNavTitle] = useState<string | undefined>("");
    //openMobileMenu
    const openMobileMenu = (menu?: string) => {
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    };
    return (
        <>
            <nav className="mean-nav">
                <ul>
                    {MENU_DATA.map((menu, i) => (
                        <React.Fragment key={i}>
                            {menu.has_dropdown && (
                                <li className="has-dropdown">
                                    <Link href={menu.link}>{menu.title}</Link>
                                    <ul
                                        className="submenu"
                                        style={{
                                            display: navTitle === menu.title ? "block" : "none",
                                        }}
                                    >
                                        {menu?.sub_menus?.map((sub, i) => (
                                            <li key={i}>
                                                <Link href={sub.link}>{sub.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        className={`mean-expand ${navTitle === menu.title ? "mean-clicked" : ""
                                            }`}

                                        onClick={() => openMobileMenu(menu?.title)}
                                        style={{ fontSize: "18px", cursor: "pointer" }}
                                    >
                                        <i className="fal fa-plus"></i>
                                    </a>
                                </li>
                            )}
                            {!menu.has_dropdown && (
                                <li>
                                    <Link href={menu.link}>{menu.title}</Link>
                                </li>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </nav>
        </>
    );
};

