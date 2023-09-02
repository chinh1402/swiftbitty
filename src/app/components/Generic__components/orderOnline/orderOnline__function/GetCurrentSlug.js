"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function GetCurrentSlug() {
    const [slug, setSlug] = useState(null);
    const pathname = usePathname();

    useEffect(() => {
        const fetchData = async () => {
            let res = await fetch("../../../../../Jsondata/DomainName.json");
            let domainParsed = await res.json();
            setSlug(domainParsed.domain + pathname);
        };

        fetchData();
    }, [pathname]);

    return slug;
}