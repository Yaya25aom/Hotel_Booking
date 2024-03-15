// pages/admin.js
import { getServerSession } from 'next-auth/react';
import AdminPage from '@/components/AdminPage'; // Update the path based on your project structure

const Admin = ({ session }) => {
  return <AdminPage session={session} />;
};

export default Admin;

export const getServerSideProps = async (context) => {
  const session = await getServerSession(context);

  return {
    props: {
      session,
    },
  };
};
