import {createNavigation} from 'next-intl/navigation'; // <-- This is the corrected import
import {routing} from './routing';

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);