export default function Navigation() {
    return (
        <nav>
            <h1>Tech Assist Portal</h1>
            <ul className="navbar-items">
                <li><a href="/create-project" className="text-gray-700 underline hover:text-blue-600">
                    Create Project
                </a></li>
                <li><a href="/create-volunteer" className="text-gray-700 underline hover:text-blue-600">
                    Create Volunteer
                </a></li>
                <li><a href="/find-volunteer-matches" className="text-gray-700 underline hover:text-blue-600">
                    Find Volunteer Matches
                </a></li>
            </ul>
        </nav>
    );
};