"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { useRouter } from "next/navigation";

interface Props {
    borrowId: string;
    email: string;
}

const ReturnBookButton = ({ borrowId, email }: Props) => {
    const router = useRouter();

    const handleReturn = async () => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/return/${borrowId}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            }
        );

        const result = await res.json();

        if (!res.ok) {
            toast.add({
                title: "Return Failed",
                description: result.message,
            });
            return;
        }

        toast.add({
            title: "Success",
            description: "Book returned successfully!",
        });

        router.refresh();
    };

    return (
        <Button
            onClick={handleReturn}
            className="w-full bg-orange-300 text-black hover:bg-orange-400"
        >
            Return Book
        </Button>
    );
};

export default ReturnBookButton;
