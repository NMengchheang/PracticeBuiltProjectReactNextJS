export default function ToDoListPage() {
    return (
        <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Song</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Artist</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                        <td class="px-6 py-4">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td class="px-6 py-4">Malcolm Lockyer</td>
                        <td class="px-6 py-4">1961</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="inline-flex rounded-md shadow-sm" role="group">
                                <button type="button" 
                                    class="px-4 py-2
                                     bg-blue-500 
                                     text-white text-sm 
                                     font-medium rounded-l-md 
                                     hover:bg-blue-700 
                                     focus:outline-none 
                                     focus:ring-2 
                                     focus:ring-offset-2 
                                     focus:ring-blue-500">Edit
                                </button>
                                <button type="button" 
                                    class="px-4 py-2 
                                    bg-red-500 
                                    text-white text-sm 
                                    font-medium rounded-r-md 
                                    hover:bg-red-700 focus:outline-none 
                                    focus:ring-2 focus:ring-offset-2 
                                    focus:ring-red-500">Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>

    );
}