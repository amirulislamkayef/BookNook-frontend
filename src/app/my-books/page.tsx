import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import type { Borrow } from "@/types/borrow";
import { BookOpen, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import DeleteBookButton from "@/components/DeleteBookButton ";

const MyBooksPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;
    if (!user) {
        return <div>Please login first.</div>;
    }
    const res = await fetch(
        `http://localhost:8000/my-books/${encodeURIComponent(user.email)}`
    );
    const books = await res.json();
    console.log(books);

    return (
        <div className="min-h-screen bg-muted/20 px-4 py-10">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            My <span className="text-orange-400">Books</span>
                        </h1>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Manage all the books you have added to the library.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl border bg-card px-5 py-3 shadow-sm">
                        <BookOpen className="h-6 w-6 text-orange-500" />
                        <div>
                            <p className="text-xs text-muted-foreground">Total Books</p>
                            <p className="text-2xl font-bold">{books.length}</p>
                        </div>
                    </div>
                </div>

                {/* Books Grid */}
                {books.length === 0 ? (
                    <div className="rounded-xl border border-dashed bg-card py-20 text-center">
                        <BookOpen className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                        <h2 className="text-xl font-semibold">No Books Found</h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            You havent added any books yet.
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {books.map((book: Borrow) => (
                            <Card
                                key={book._id}
                                className="group overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                {/* Book Image */}
                                <div className="relative h-64 overflow-hidden bg-muted">
                                    <Image
                                        src={book.image}
                                        alt={book.title}
                                        width={100}
                                        height={100}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    <Badge className="absolute right-3 top-3 bg-orange-400 text-black hover:bg-orange-500">
                                        {book.category}
                                    </Badge>
                                </div>

                                <CardContent className="p-5">

                                    {/* Book Information */}
                                    <div>
                                        <h2 className="line-clamp-1 text-xl font-bold">
                                            {book.title}
                                        </h2>

                                        <p className="mt-1 text-sm text-muted-foreground">
                                            By {book.author}
                                        </p>

                                        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                                            {book.description}
                                        </p>
                                    </div>

                                    <Separator className="my-4" />

                                    {/* Copies */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-muted-foreground">
                                            Total Copies
                                        </span>
                                        <Badge variant="secondary">
                                            {book.totalCopies}
                                        </Badge>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="mt-5 flex gap-3">

                                        <Button
                                            variant="outline"
                                            className="flex-1 border-blue-500/30 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                                        >
                                            <Pencil className="mr-2 h-4 w-4" />
                                            Edit
                                        </Button>

                                        <DeleteBookButton id={book._id} />

                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyBooksPage;
