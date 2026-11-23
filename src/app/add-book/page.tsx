"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { authClient } from "@/lib/auth-client"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const categories = [
    "Fiction",
    "Non-Fiction",
    "Science",
    "History",
    "Biography",
    "Children's",
    "Fantasy",
    "Mystery",
] as const

export default function AddBookPage() {
    const [category, setCategory] = React.useState<string>("Fiction")
    const [submitted, setSubmitted] = React.useState(false)

    const { data: session } = authClient.useSession()
    const user = session?.user

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const form = new FormData(event.currentTarget)
        const fromData = Object.fromEntries(form.entries())
        form.set("category", category)
        setSubmitted(true)
        setCategory("Fiction")

        const res = await fetch('http://localhost:8000/add-book', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fromData)
        })
        const data = await res.json()
        console.log(data);
    }

    return (
        <div className="min-h-full bg-background">
            <header className="border-b border-border bg-muted/30 py-10 text-center">
                <h1 className="font-serif text-3xl font-bold tracking-tight">Add a Book</h1>
                <p className="mt-2 text-muted-foreground">Put a book from your shelf into the library.</p>
            </header>

            <div className="mx-auto max-w-3xl px-4 py-8">
                <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="title">Book Title</Label>
                        <Input id="title" name="title" required />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="author">Author Name</Label>
                        <Input id="author" name="author" required />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="category">Category</Label>
                        <Select value={category} onValueChange={(value) => setCategory(value ?? "Fiction")} name="category">
                            <SelectTrigger id="category" className="w-full">
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((item) => (
                                    <SelectItem key={item} value={item}>
                                        {item}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="totalCopies">Total Copies</Label>
                        <Input id="totalCopies" name="totalCopies" type="number" min={1} defaultValue={4} required />
                    </div>

                    <div className="flex flex-col gap-2 md:col-span-2">
                        <Label htmlFor="image">Book Image</Label>
                        <Input id="image" name="image" type="url" accept="image/*" />
                    </div>

                    <div className="flex flex-col gap-2 md:col-span-2">
                        <Label htmlFor="description">Short Description</Label>
                        <Textarea id="description" name="description" rows={4} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="userName">User Name</Label>
                        <Input id="userName" name="userName" defaultValue={user?.name} readOnly />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="userEmail">User Email</Label>
                        <Input
                            id="userEmail"
                            name="userEmail"
                            type="email"
                            defaultValue={user?.email}
                            readOnly
                        />
                    </div>

                    <div className="md:col-span-2">
                        <Button
                            type="submit"
                            className="h-11 w-full bg-orange-300 text-black hover:bg-orange-400"
                        >
                            Add Book
                        </Button>
                    </div>

                    {submitted && (
                        <p
                            role="status"
                            className="text-sm text-orange-500 md:col-span-2"
                        >
                            Book added to the library!
                        </p>
                    )}
                </form>
            </div>
        </div>
    )
}
