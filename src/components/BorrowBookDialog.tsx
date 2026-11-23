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

export function BorrowBookDialog() {
    const { data: session } = authClient.useSession()
    const user = session?.user

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
                        <Button type="submit">Confirm Borrow</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
