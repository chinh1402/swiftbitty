"use client";
import { usePathname } from 'next/navigation';

export default function idreturn(id) {
    // Check pathname, nếu là homepage thì giữ nguyên logic, còn ko phải thì k gán
    let the_url;
    const pathname = usePathname();
    pathname == "/" ? the_url = id : the_url = "#";
    return the_url;
}