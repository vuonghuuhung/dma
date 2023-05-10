import { Card, Typography } from '@material-tailwind/react';
import { useState } from 'react';

const TABLE_HEAD = ['Username', 'Discription', 'Action'];

const TABLE_ROWS = [
    {
        name: 'John Michael',
        job: 'Manager',
    },
    {
        name: 'Alexa Liras',
        job: 'Developer',
    },
    {
        name: 'Laurent Perrier',
        job: 'Executive',
    },
    {
        name: 'Michael Levi',
        job: 'Developer',
    },
    {
        name: 'Richard Gran',
        job: 'Manager',
    },
];

export default function User() {
    const [isUpdate, setIsUpdate] = useState(false);

    return (
        <>
            <div className="w-full h-screen flex flex-row justify-between items-center px-20 bg-blue-600">
                <div className="basis-1/2 flex flex-col justify-center items-center">
                    <h1 className="py-3 text-white text-3xl font-semibold">
                        User List
                    </h1>
                    <Card className="overflow-scroll h-full w-full">
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th
                                            key={head}
                                            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                        >
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal leading-none opacity-70"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {TABLE_ROWS.map(({ name, job }, index) => {
                                    const isLast =
                                        index === TABLE_ROWS.length - 1;
                                    const classes = isLast
                                        ? 'p-4'
                                        : 'p-4 border-b border-blue-gray-50';

                                    return (
                                        <tr key={name}>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {name}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {job}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    as="a"
                                                    href="#"
                                                    variant="small"
                                                    color="blue"
                                                    className="font-medium pr-3"
                                                >
                                                    <span
                                                        onClick={() =>
                                                            setIsUpdate(true)
                                                        }
                                                    >
                                                        Update
                                                    </span>
                                                </Typography>
                                                <Typography
                                                    as="a"
                                                    href="#"
                                                    variant="small"
                                                    color="blue"
                                                    className="font-medium"
                                                >
                                                    Delete
                                                </Typography>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </Card>
                </div>
                <div className="basis-1/2">
                    {!isUpdate ? (
                        <div className="bg-white w-[30vw] h-[50vh] m-auto flex flex-col justify-between items-center p-12 relative">
                            <label className="w-full" htmlFor="">
                                Username
                                <input
                                    className="w-full px-4 py-2 bg-slate-200"
                                    type="text"
                                    placeholder="Username"
                                />
                            </label>
                            <label className="w-full" htmlFor="">
                                Password
                                <input
                                    className="w-full px-4 py-2 bg-slate-200"
                                    type="password"
                                    placeholder="Password"
                                />
                            </label>
                            <label className="w-full pb-2" htmlFor="">
                                Discription
                                <input
                                    className="w-full px-4 py-2 bg-slate-200"
                                    type="text"
                                    placeholder="Discription"
                                />
                            </label>
                            <button className="bg-blue-700 text-white w-full py-3">
                                Create New User
                            </button>
                        </div>
                    ) : (
                        <div className="bg-white w-[30vw] h-[50vh] m-auto flex flex-col justify-between items-center p-12 relative">
                            <label className="w-full" htmlFor="">
                                Username
                                <input
                                    className="w-full px-4 py-2 bg-slate-200"
                                    type="text"
                                    value="username"
                                    disabled
                                />
                            </label>
                            <label className="w-full" htmlFor="">
                                Password
                                <input
                                    className="w-full px-4 py-2 bg-slate-200"
                                    type="password"
                                    value="password"
                                    disabled
                                />
                            </label>
                            <label className="w-full pb-2" htmlFor="">
                                Discription
                                <input
                                    className="w-full px-4 py-2 bg-slate-200"
                                    type="text"
                                    placeholder="Discription"
                                />
                            </label>
                            <button className="bg-blue-700 text-white w-full py-3">
                                Update User
                            </button>
                            <p className='cursor-pointer' onClick={() => setIsUpdate(false)}>Back to create new user</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
