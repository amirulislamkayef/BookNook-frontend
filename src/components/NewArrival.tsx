import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Book {
    _id: string;
    title: string;
    author: string;
    category: string;
    totalCopies: string | number;
    image?: string;
    description?: string;
    userName?: string;
    userEmail?: string;
}

const NewArrival = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newbooks`, {
        cache: 'no-store',
    });

    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
        return (
            <div className="bg-background px-4 py-16 text-center text-muted-foreground">
                No books found.
            </div>
        )
    }

    return (
        <div className="min-h-full bg-background">
            <div className="mx-auto max-w-7xl px-4 py-8">
                <h2 className="my-8 text-center text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Explore <span className="text-orange-400">New Arrivals</span>
                </h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {data.map((book: Book) => (
                        <article
                            key={book._id}
                            className="flex flex-col overflow-hidden rounded-xl border border-border bg-background"
                        >
                            <div className="relative aspect-[2/3] w-full bg-muted">
                                {book.image ? (
                                    <Image
                                        src={book.image}
                                        alt={book.title}
                                        fill
                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                                        className="object-cover"
                                    />
                                ) : null}
                            </div>
                            <div className="flex flex-1 flex-col gap-2 p-4">
                                <Badge className="w-fit bg-secondary text-secondary-foreground">
                                    {book.category}
                                </Badge>
                                <h2 className="font-serif text-lg leading-snug font-semibold">
                                    {book.title}
                                </h2>
                                <p className="text-sm text-muted-foreground">by {book.author}</p>
                                <Button
                                    className="mt-2 w-full bg-green-300 text-black hover:bg-green-400"
                                    render={<Link href={`/all-books/${book._id}`} />}
                                >
                                    View Details
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewArrival;
