import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = (id) => {
    const {InventoryId} = useParams();
    const [user, setUser] = useState({});
    useEffect( () =>{
        const url = `http://localhost:5000/allinventory/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data));
    }, []);

    const handleUpdateUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const updatedUser = {name, email};

        // send data to the server
        const url = `http://localhost:5000/allinventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('users added successfully!!!');
            event.target.reset();
        })
    }
    

    return (
        <section className='section-center'>
            <h2>Updating User: {user.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" placeholder='Name' required />
                <br />
                <input type="email" name="email" placeholder='Email' required />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </section>
    );
};

export default UpdateUser;