"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { toast } from "@/components/ui/toast";

interface Book {
    _id: string;
    title: string;
    author: string;
    category: string;
    totalCopies: number;
    image: string;
    description: string;
}

const EditBookButton = ({ book }: { book: Book }) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const [formData, setFormData] = useState({
        title: book.title,
        author: book.author,
        category: book.category,
        totalCopies: book.totalCopies,
        image: book.image,
        description: book.description,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: name === "totalCopies" ? Number(value) : value,
        });
    };

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch(
            `http://localhost:8000/update-book/${book._id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }
        );

        const result = await res.json();

        if (!res.ok) {
            toast.add({
                title: "Update Failed",
                description: result.message || "Something went wrong.",
            });
            return;
        }

        toast.add({
            title: "Success",
            description: "Book updated successfully!",
        });

        setOpen(false);
        router.refresh();
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <span className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-blue-500/30 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50">
                    <Pencil className="h-4 w-4" />
                    Edit
                </span>
            </DialogTrigger>

            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Edit Book Information</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleUpdate} className="space-y-4">

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Book Title
                        </label>
                        <Input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Author
                        </label>
                        <Input
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Category
                        </label>
                        <Input
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Total Copies
                        </label>
                        <Input
                            type="number"
                            name="totalCopies"
                            min="0"
                            value={formData.totalCopies}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Image URL
                        </label>
                        <Input
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Description
                        </label>
                        <Textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <Button type="submit" className="w-full bg-orange-400 text-black hover:bg-orange-500">
                        Update Book
                    </Button>

                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditBookButton;
