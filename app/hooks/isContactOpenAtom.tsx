"use client"
import { atom, useAtom } from "jotai"

const isContactOpenAtom = atom(false)
export const useIsContactOpen = () => useAtom(isContactOpenAtom)
