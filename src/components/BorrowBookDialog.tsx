'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authClient } from "@/lib/auth-client"
import { Book } from "@/app/all-books/[id]/page"
import { toast } from "@/components/ui/toast"
import { useRouter } from "next/navigation";


export function BorrowBookDialog({ book }: { book: Book }) {
    const { data: session } = authClient.useSession()
    const user = session?.user
    const router = useRouter();

    const handleBorrow = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!user?.email) {
            toast.add({
                title: "Login Required",
                description: "Please login first.",
            });
            return;
        }
        const data = {
            ...book,
            userName: user.name,
            email: user.email,
            userimage: user.image,
        };
        const res = await fetch("http://localhost:8000/borrow", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();

        if (!res.ok) {
            toast.add({
                title: "Borrow Failed",
                description: result.message || "Failed to borrow book.",
            });
            return;
        }
        toast.add({
            title: "Success",
            description: "Book borrowed successfully!",
        });

        router.push("/my-borrows");
        router.refresh();
    };
    
    return (
        <Dialog>
            <form>
                <DialogTrigger render={<Button variant="outline" className="bg-orange-300 text-black hover:bg-orange-400"><h1 className="font-semibold">Borrow This Books</h1></Button>} />
                <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle><h1 className="font-semibold">Borrow This Books</h1></DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <FieldGroup>
                        <Field>
                            <Label htmlFor="username-1">Username</Label>
                            <Input id="username-1" name="username" defaultValue={user?.name} readOnly />
                        </Field>
                        <Field>
                            <Label htmlFor="email-1">Email</Label>
                            <Input id="email-1" name="email" defaultValue={user?.email} readOnly />
                        </Field>
                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose render={<Button variant="outline">Cancel</Button>} />
                        <Button onClick={handleBorrow} type="submit">Confirm Borrow</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
