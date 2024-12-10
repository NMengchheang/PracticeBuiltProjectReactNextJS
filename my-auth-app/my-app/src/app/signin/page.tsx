const SignInPage = () => {
    return (
        <div className="mt-5 flex items-center justify-center w-full h-full space-y-4 flex-col">
            <div>
                <p>
                    Email
                </p>
                <input type="password" className="p-2 border"/>
            </div>
            <div>
                <p>
                    Password
                </p>
                <input type="password" className="p-2 border"/>
            </div>
                
            <div>
                <button className="bg-gray-500 px-4 py-2 text-while rounded">
                    Login
                </button>
            </div>
        </div>
    )
};

export default SignInPage;