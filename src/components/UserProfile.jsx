import React from "react";

export const UserProfile = ({name,age,email}) => {
    return (
        <div  className="user-profile">
            <h3> User info</h3>
            <ul>
                <li> Name: {name}</li>
                <li> Age: {age}</li>
                <li> email: {email}</li>
            </ul>
        </div>
    )
}
