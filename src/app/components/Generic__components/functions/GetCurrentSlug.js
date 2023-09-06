'use client'
import { usePathname } from "next/navigation"

export default function GetCurrentSlug() {
    return usePathname();
}