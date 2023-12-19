'use client'
import { useState } from 'react';
import { usePathname } from 'next/navigation'
import HeaderLink from '../HeaderLink/HeaderLink';

const Header = () => {
    const pathname = usePathname()
    const [activeLink, setActiveLink] = useState(pathname);

    const handleLinkClick = (link: string) => setActiveLink(link);
    
    return (
        <header className="py-8 my-4">
            <HeaderLink link='/' activeLink={activeLink} handleClick={handleLinkClick}>Home</HeaderLink>
            <HeaderLink link='/work' activeLink={activeLink} handleClick={handleLinkClick}>Work</HeaderLink>
            <HeaderLink link='/blog' activeLink={activeLink} handleClick={handleLinkClick}>Blog</HeaderLink>
        </header>
    )
}

export default Header