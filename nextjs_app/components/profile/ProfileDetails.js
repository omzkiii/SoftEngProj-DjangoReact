const ProfileDetails = ({user}) => {
    return (
        <div className="bg-green-100 flex flex-col">
            <div className="flex justify-center">
                <h1 className="font-extrabold text-green-500 m-4 text-4xl">Profile</h1>
            </div>
            <div className="flex justify-start mb-2">
                <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg mr-2 hover:bg-green-600">Edit Profile</button>
            </div>

            <ul className="text-green-500 text-2xl font-semibold">
                <li className="mb-2">Name: {user.name}</li>
                <li className="mb-2">Email: {user.email}</li>
                <li className="mb-2">Username: {user.username}</li>
            </ul>

        </div>
    )
}

export default ProfileDetails