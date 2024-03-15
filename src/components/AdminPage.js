// pages/admin.js
import { useState, useEffect } from 'react';
import { getServerSession } from 'next-auth/react';
import Link from 'next/link';
import axios from 'axios';

const ShowUser = () => {
  // ... (Your ShowUser component code)
};

const AdminPage = ({ session }) => {
  if (session?.user) {
    return (
      <div>
        <h2 className="text-2xl">
          Admin page - welcome back {session?.user.username}
        </h2>
        <ShowUser />
      </div>
    );
  }

  return <h2 className="text-2xl">Please login to see this admin page</h2>;
};

export default AdminPage;
