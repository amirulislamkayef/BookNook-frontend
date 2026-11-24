"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

const DeleteBookButton = ({ id }: { id: string }) => {
    const router = useRouter();

    const handleDelete = async () => {
        const res = await fetch(`http://localhost:8000/delete-book/${id}`, {
            method: "DELETE",
        });

        const result = await res.json();

        if (res.ok) {
            toast.add({
                title: "Success",
                description: "Book deleted successfully!",
            });

            router.refresh();
        } else {
            toast.add({
                title: "Error",
                description: result.message || "Failed to delete book.",
            });
        }
    };

    return (
        <Button
            onClick={handleDelete}
            variant="outline"
            className="flex-1 border-red-500/30 text-red-600 hover:bg-red-50 hover:text-red-700"
        >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
        </Button>
    );
};

export default DeleteBookButton;
