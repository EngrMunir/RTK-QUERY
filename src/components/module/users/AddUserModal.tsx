import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { addUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/types";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
export function AddUserModal() {

    const form = useForm();
    const dispatch = useAppDispatch();

    const onSubmit:SubmitHandler<FieldValues> = (data) =>{
        dispatch(addUser(data as IUser));
    }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription className="sr-only">Fill up this form to add task and task</DialogDescription>
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
        </DialogHeader>
        <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
    control={form.control}
    name="name"
    render={({field}) => (
      <FormItem>
        <FormItem>Name</FormItem>
        <FormControl>
          <Input {...field} value={field.value || ''}/>
        </FormControl>
      </FormItem>
    )}
  />
        <DialogFooter >
          <Button className="mt-5" type="submit">Save changes</Button>
        </DialogFooter>
        </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
