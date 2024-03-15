import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

const ShowUser = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('/api/users'); // Update the API route accordingly
      setUsers(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`/api/users/${id}`); // Update the API route accordingly
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mt-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Link href={`/admin/edit-user/${user.id}`}>
                  <a>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </a>
                </Link>
                <Link href={`/admin/user/${user.id}`}>
                  <a>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </a>
                </Link>
                <i
                  className="fa fa-trash-o"
                  aria-hidden="true"
                  onClick={() => handleDelete(user.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowUser;
