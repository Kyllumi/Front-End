import { useState, useEffect } from 'react';

const Fetch = () => {
    const [users, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);

    return (
        <table>
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Phone</th>
            </thead>

            <tbody>
                {users.map((user) => (
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                        <td>{user.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
export default Fetch;