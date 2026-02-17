import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import Image from 'next/image';

function slugify(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

export const mdxComponents: MDXComponents = {
    h2: ({ children, ...props }) => {
        const id = slugify(String(children));
        return (
            <h2 id={id} className="text-2xl font-bold text-slate-900 mt-12 mb-4 scroll-mt-24" {...props}>
                <a href={`#${id}`} className="hover:text-amber-600 no-underline">
                    {children}
                </a>
            </h2>
        );
    },
    h3: ({ children, ...props }) => {
        const id = slugify(String(children));
        return (
            <h3 id={id} className="text-xl font-bold text-slate-800 mt-8 mb-3 scroll-mt-24" {...props}>
                {children}
            </h3>
        );
    },
    p: ({ children, ...props }) => (
        <p className="text-slate-700 leading-relaxed mb-4" {...props}>{children}</p>
    ),
    a: ({ href, children, ...props }) => {
        if (href?.startsWith('/')) {
            return (
                <Link href={href} className="text-amber-600 hover:text-amber-700 underline underline-offset-2" {...props}>
                    {children}
                </Link>
            );
        }
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline underline-offset-2" {...props}>
                {children}
            </a>
        );
    },
    ul: ({ children, ...props }) => (
        <ul className="list-disc list-inside space-y-2 mb-4 text-slate-700" {...props}>{children}</ul>
    ),
    ol: ({ children, ...props }) => (
        <ol className="list-decimal list-inside space-y-2 mb-4 text-slate-700" {...props}>{children}</ol>
    ),
    li: ({ children, ...props }) => (
        <li className="leading-relaxed" {...props}>{children}</li>
    ),
    blockquote: ({ children, ...props }) => (
        <blockquote className="border-l-4 border-amber-500 bg-amber-50 pl-4 py-3 my-6 text-slate-700 italic rounded-r-lg" {...props}>
            {children}
        </blockquote>
    ),
    table: ({ children, ...props }) => (
        <div className="overflow-x-auto my-6 rounded-lg border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-sm" {...props}>{children}</table>
        </div>
    ),
    th: ({ children, ...props }) => (
        <th className="bg-slate-50 px-4 py-3 text-left font-semibold text-slate-800" {...props}>{children}</th>
    ),
    td: ({ children, ...props }) => (
        <td className="px-4 py-3 text-slate-700 border-t border-slate-100" {...props}>{children}</td>
    ),
    img: ({ src, alt, ...props }) => {
        if (!src) return null;
        return (
            <figure className="my-6">
                <Image
                    src={src}
                    alt={alt || ''}
                    width={800}
                    height={450}
                    className="rounded-xl w-full h-auto"
                    loading="lazy"
                />
                {alt && <figcaption className="text-center text-sm text-slate-500 mt-2">{alt}</figcaption>}
            </figure>
        );
    },
    strong: ({ children, ...props }) => (
        <strong className="font-semibold text-slate-900" {...props}>{children}</strong>
    ),
    hr: () => <hr className="my-8 border-slate-200" />,
    code: ({ children, ...props }) => (
        <code className="bg-slate-100 text-amber-700 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>{children}</code>
    ),
    pre: ({ children, ...props }) => (
        <pre className="bg-slate-900 text-slate-100 p-4 rounded-xl overflow-x-auto my-6 text-sm" {...props}>{children}</pre>
    ),
};
