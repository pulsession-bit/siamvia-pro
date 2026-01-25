import { redirect } from 'next/navigation';

export default function NotFound() {
    // Redirect all 404s to the specific comparator page as requested
    redirect('https://www.siamvisapro.com/en/thailand-visa-comparator-2026');
}
