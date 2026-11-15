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

export function BorrowBookDialog() {
    return (
        <Dialog>
            <form>
                <DialogTrigger render={<Button variant="outline"  className="bg-orange-300 text-black hover:bg-orange-400">Borrow This Books</Button>} />
                <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Borrow This Books</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <FieldGroup>
                        <Field>
                            <Label htmlFor="username-1">Username</Label>
                            <Input id="username-1" name="username" defaultValue="@peduarte" />
                        </Field>
                        <Field>
                            <Label htmlFor="email-1">Name</Label>
                            <Input id="email-1" name="email" defaultValue="Pedro Duarte" />
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
