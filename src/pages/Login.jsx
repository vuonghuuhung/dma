import { useState } from 'react';
import { login } from '../apis/login';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        login(username, password)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <div className="bg-blue-500 w-full h-screen flex flex-col">
                <div className="bg-white w-[30vw] h-[40vh] m-auto flex flex-col justify-between items-center p-12 relative">
                    <h1 className="text-3xl">Login</h1>
                    <input
                        className="w-full px-4 py-2 bg-slate-200"
                        type="text"
                        placeholder="Username"
                        value={username} onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        className="w-full px-4 py-2 bg-slate-200"
                        type="password"
                        placeholder="Password"
                        value={password} onChange={e => setPassword(e.target.value)}
                    />
                    <button className="bg-blue-700 text-white w-full py-3" onClick={() => handleSubmit(username, password)}>
                        Sign in
                    </button>
                    <p className="underline cursor-pointer">
                        Lost your Password?
                    </p>
                    <p className="text-white text-sm absolute -bottom-10">
                        Don't have an account?{' '}
                        <span className="underline cursor-pointer">
                            Sign up here!
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}
