import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState("");
    const [control,setControl] = useState(false)
    const handleStatus = (e) => {
        setStatus(e.target.value);
    };

    useEffect(() => {
        fetch('https://serene-taiga-16616.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setOrders(data))
    })

    const handleUpdate = (id) => {
        fetch(`https://serene-taiga-16616.herokuapp.com/updatestatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status })
        })

    }

    const handleDelete = (id) => {
        if (id) { (window.confirm('Are you sure you want to delete this item?')) };

        fetch(`https://serene-taiga-16616.herokuapp.com/deletebookings/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount) {
                    setControl(!control);
                }
            });
    }
    return (
        <div className='container '>
            <h3>Total Orders: {orders.length}</h3>

            <table className="table table-dark table-hover table-responsive-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Order Id</th>
                        <th>Order Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((od, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{od?.name}</td>
                            <td>{od?.address}</td>
                            <td>{od?.email}</td>
                            <td>{od?._id}</td>
                            {/* <td>{od?.status}</td> */}
                            <td><input onChange={handleStatus} type="text" defaultValue={od?.status} /></td>

                            <button onClick={
                                () => handleDelete(od?._id)} className='btn btn-danger text-danger'>delete</button>
                            <button onClick={() => handleUpdate(od?._id)} className='btn btn-success border-0 text-success'>update</button>
                        </tr>
                    </tbody>
                )
                )}

            </table>
        </div>
    );
};

export default ManageAllOrders;