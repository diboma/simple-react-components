/**
 * Tailwind utility to write conditional classNames without conflicts
 * It combines twMerge and clsx
 *
 * Source:
 * - https://www.znovandap.com/blog/post/cn-utility-function
 * - https://www.youtube.com/watch?v=re2JFITR7TI
 *
 * Installation:
 * npm install -D clsx tailwind-merge
 */

import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes))
