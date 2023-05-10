import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
            <div className="w-full h-32 bg-slate-600 flex flex-row justify-between items-center px-40 fixed top-0">
                <Link to="/user">
                    <span className="text-white text-xl">User</span>
                </Link>
                <Link to="/diploma">
                    <span className="text-white text-xl">Diploma</span>
                </Link>
                <Link to="/diploma-type">
                    <span className="text-white text-xl">Diploma Type</span>
                </Link>
                <Link to="/rank">
                    <span className="text-white text-xl">Rank</span>
                </Link>
                <Link to="/training-program">
                    <span className="text-white text-xl">Training Program</span>
                </Link>
                <Link to="/training-type">
                    <span className="text-white text-xl">Training Type</span>
                </Link>
            </div>
        </>
    );
}
