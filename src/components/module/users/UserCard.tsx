import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IUser } from "@/types";
import { useAppDispatch } from "@/redux/hook";
import { removeUser } from "@/redux/features/user/userSlice";

interface IProps{
    task:IUser
}

export default function UserCard({user}:IProps){
    const dispatch = useAppDispatch();

    return (
        <div className="border px-5 py-3 rounded-md">
            <div className="flex justify-between items-center">
            <p className="mt-5">{user.name}</p>
                <div className="flex gap-3 items-center">
                    <Button onClick={()=>dispatch(removeUser(user.id))} variant="link" className="p-0 text-red-500">
                        <Trash2  />
                    </Button>
                </div>
                
            </div>
           
        </div>
    )
}