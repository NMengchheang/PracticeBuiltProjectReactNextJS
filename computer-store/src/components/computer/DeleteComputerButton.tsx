"use client";

import { useState } from "react";
import { deleteComputer } from "@/actions/computerAction";
import { useRouter } from "next/navigation";

export default function DeleteComputerButton({ id } : { id: string}){ 
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();
    const handleDelete = async () => {
        if(confirm("Are you sure you want to delete this computer?")) {
            setIsDeleting(true);
    
            const result = await deleteComputer(id);
            setIsDeleting(false);

            if(result.success) {
                alert(result.message);
                router.refresh(); // Refresh the current route

            } else {
                alert(`Failed to delete: ${result.message}`);
            }
        }
    }

    return(
        <button
            onClick={handleDelete} 
            disabled={isDeleting}
            className='w-24 bg-red-500 rounded-lg p-1'
        >
            {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
    )
}