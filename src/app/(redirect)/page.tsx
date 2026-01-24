import { redirect } from 'next/navigation';

/**
 * Root Page
 * 
 * This page is hit if the middleware doesn't catch the root request.
 * It serves as a server-side fallback redirect to the default language.
 */
export default function RootPage() {
    redirect('/en');
}
