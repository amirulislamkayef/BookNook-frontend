import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { BorrowBookDialog } from '@/components/BorrowBookDialog';

export interface Book {
    _id: string;
    title: string;
    author: string;
    category: string;
    totalCopies: number;
    image?: string;
    description?: string;
    userName?: string;
    userEmail?: string;
}

const BookDetailsPage = async ({ params }: PageProps<"/all-books/[id]">) => {
    const { id } = await params

    const res = await fetch(`http://localhost:8000/book/${id}`)
    const data = await res.json()

    console.log(data);

    if (!data?.title) {
        return (
            <div className="bg-background px-4 py-16 text-center text-muted-foreground">
                Book not found.
            </div>
        );
    }

    const book = data as Book;

    return (
        <div className="min-h-full bg-background">
            <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[minmax(0,340px)_1fr]">
                <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl border border-border bg-muted">
                    {book.image ? (
                        <Image
                            src={book.image}
                            alt={book.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 340px"
                            className="object-cover"
                            priority
                        />
                    ) : null}
                </div>

                <div className="flex flex-col gap-4">
                    <Badge className="w-fit bg-secondary text-secondary-foreground">
                        {book.category}
                    </Badge>

                    <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                        {book.title}
                    </h1>

                    <p className="text-sm text-muted-foreground">by {book.author}</p>

                    <p className="max-w-2xl text-sm leading-relaxed">
                        {book.description}
                    </p>

                    <div className="grid gap-6 rounded-xl border border-border bg-muted/40 px-5 py-4 sm:grid-cols-2">
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-muted-foreground">Added by</span>
                            <span className="text-sm font-medium">{book.userName}</span>
                            <span className="text-sm text-muted-foreground">{book.userEmail}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-muted-foreground">Copies left</span>
                            <span className="text-sm font-medium">{book.totalCopies}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">

                        <BorrowBookDialog book={book}/>

                        <Link
                            href="/all-books"
                            className="text-black text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                        >
                            Back to all books
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;
