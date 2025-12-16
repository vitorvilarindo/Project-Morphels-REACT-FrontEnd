function PermissionModal(){
    return (
        <div className="fixed inset-0 bg-[rgb(0,0,0,0.7)] bg-opacity-50 flex items-center justify-center">
            <div className="flex flex-col bg-white w-[50%] lg:w-[30%] p-6 rounded-lg shadow-lg space-y-4">
                <h1>without permission</h1>
                <p className="text-sm text-gray-500">You don't have permission to execute this action</p>
            </div>
        </div>
    );
}

export default PermissionModal;