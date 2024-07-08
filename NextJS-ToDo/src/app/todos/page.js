import ToDoList from "@/components/ToDos";

async function getToDoData() {
    const res = await fetch('https://coding-fairy.com/api/mock-api-resources/1715945679/todos', {
        cache : 'no-store'
    });

    if(!res.ok) {
        throw new Error('Failed to fetch data!!');
    }

    return res.json();
}

export default async function ToDoListPage() {
    const todos = await getToDoData();

    return (
        <div className="overflow-x-auto">
            <ToDoList items={todos} />
        </div>
    );
}