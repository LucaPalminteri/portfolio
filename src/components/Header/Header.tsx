'use client'
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import HeaderLink from '../HeaderLink/HeaderLink';
import axios from 'axios';

const Header = () => {
    const pathname = usePathname()
    const [activeLink, setActiveLink] = useState<string>(pathname);
    const [showProfile, setShowProfile] = useState<boolean>(false);

    const handleLinkClick = (link: string) => setActiveLink(link);

    useEffect(() => {
        let getIP = async () => {
            let { data } = await axios.get(`https://api.ipify.org/`)
            if (data == process.env.NEXT_PUBLIC_IP) setShowProfile(true)
        }
        getIP()
    }, [])

    return (
        <header className="py-4 my-2 md:py-8 md:my-4">
            <HeaderLink link='/' activeLink={activeLink} handleClick={handleLinkClick}>Home</HeaderLink>
            <HeaderLink link='/work' activeLink={activeLink} handleClick={handleLinkClick}>Work</HeaderLink>
            <HeaderLink link='/blog' activeLink={activeLink} handleClick={handleLinkClick}>Blog</HeaderLink>
            {showProfile && <HeaderLink link='/profile' activeLink={activeLink} handleClick={handleLinkClick}>Profile</HeaderLink>}
        </header>
    )
}

export default Header