import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import type { Borrow } from "@/types/borrow";
import ReturnBookButton from "@/components/ReturnBookButton";

const MyBorrowsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user

    const res = await fetch(`http://localhost:8000/my-borrows/${user?.email}`)
    const borrows = await res.json()


    return (
        <div className="min-h-screen bg-muted/20 px-4 py-10">
            <div className="mx-auto max-w-6xl">

                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold sm:text-4xl">
                            My <span className="text-orange-400">Borrows</span>
                        </h1>
                        <p className="mt-2 text-sm text-muted-foreground">
                            All the books you have borrowed from our library.
                        </p>
                    </div>

                    <div className="rounded-xl border bg-card px-5 py-3 shadow-sm">
                        <p className="text-sm text-muted-foreground">Total Books</p>
                        <h2 className="text-2xl font-bold">{borrows.length}</h2>
                    </div>
                </div>

                {borrows.length === 0 ? (
                    <div className="rounded-xl border border-dashed py-20 text-center">
                        <h2 className="text-xl font-semibold">No Books Found</h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            You havent borrowed any books yet.
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {borrows.map((borrow: Borrow) => (
                            <Card
                                key={borrow._id}
                                className="overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="h-64 overflow-hidden bg-muted">
                                    <Image
                                        src={borrow.image}
                                        alt={borrow.title}
                                        height={100}
                                        width={100}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <CardContent className="p-5">
                                    <Badge variant="secondary" className="mb-3">
                                        {borrow.category}
                                    </Badge>

                                    <h2 className="line-clamp-1 text-xl font-bold">
                                        {borrow.title}
                                    </h2>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        By {borrow.author}
                                    </p>

                                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                                        {borrow.description}
                                    </p>

                                    <Separator className="my-4" />

                                    <div className="mt-4">
                                        <ReturnBookButton
                                            borrowId={borrow._id}
                                            email={user!.email}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
};

export default MyBorrowsPage;
