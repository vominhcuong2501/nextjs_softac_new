import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    className?: string;
    children: React.ReactNode;
    target?: string;
    rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
    href,
    className = "",
    children,
    target,
    rel,
    ...rest
}) => {

    if (href) {
        return (
            <Link href={href} target={target} rel={rel} className={className} >
                {children}
            </Link>
        );
    }

    return (
        <button className={className} {...rest}>
            {children}
        </button>
    );
};