import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ITask } from "@/types";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { deleteTask, toggleCompleteState } from "@/redux/features/task/taskSlice";
import { selectUsers } from "@/redux/features/user/userSlice";

interface IProps{
    task:ITask
}

export default function TaskCard({task}:IProps){
    const dispatch = useAppDispatch();

    const users = useAppSelector(selectUsers);

    const assignedUser = users.find(user => user.id === task.assignedTo)

    return (
        <div className="border px-5 py-3 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className={cn("size-3 rounded-full",{
                         "bg-green-500":task.priority === "low",
                         "bg-yellow-500":task.priority === "medium",
                         "bg-red-500":task.priority === "high",
                    })}></div>
                    <h1 className={cn({"line-through":task.isCompleted})}>{task.title}</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <Button onClick={()=>dispatch(deleteTask(task.id))} variant="link" className="p-0 text-red-500">
                        <Trash2  />
                    </Button>
                    <Checkbox checked={task.isCompleted} onClick={()=>dispatch(toggleCompleteState(task.id))}/>
                </div>
            </div>
            <p>Assigned to {assignedUser? assignedUser.name:"No one"}</p>
            <p className="mt-5">{task.description}</p>
        </div>
    )
}