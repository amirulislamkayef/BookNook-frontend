"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/20 px-4">
            <div className="w-full max-w-lg text-center">

                <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-orange-100">
                    <BookOpen className="h-12 w-12 text-orange-500" />
                </div>

                <h1 className="text-8xl font-extrabold tracking-tighter text-orange-400">
                    404
                </h1>

                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                    Oops! Page Not Found
                </h2>

                <p className="mx-auto mt-4 max-w-sm text-muted-foreground">
                    Looks like this page has gone missing from our library.
                    Dont worry, there plenty more to explore!
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-md bg-orange-400 px-4 py-2 text-sm font-medium text-black transition hover:bg-orange-500"
                    >
                        <Home className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>

                    <Button
                        variant="outline"
                        onClick={() => window.history.back()}
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Go Back
                    </Button>

                </div>

                <p className="mt-12 text-sm text-muted-foreground">
                    BookNook — Your Digital Library
                </p>

            </div>
        </div>
    );
};

export default NotFound;
