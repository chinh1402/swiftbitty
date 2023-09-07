"use client";
import { usePathname } from 'next/navigation';

export default function GetCurrentPath() {
    let Path;
    let Slugname = usePathname();
    if (typeof window !== 'undefined') Path = window.location.origin + Slugname;
    return Path;
}