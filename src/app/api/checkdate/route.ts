// api/checkdate/route.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Check if the request method is GET
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // Get today's date
    const today = new Date();
    // Set time to 00:00:00 for today
    today.setHours(0, 0, 0, 0);

    // Fetch rooms data from the database
    const room = await db.room.findMany();

    // Fetch reservations for today
    const reservation = await db.reservation.findMany({
      where: {
        ArrivalDate: today,
      },
    });

    // Filter rooms that are not reserved for today
    const availableRooms = room.filter(room => {
      // Check if there are any reservations for this room today
      const isReserved = reservation.some(reservation => reservation.RoomNo_id === room.RoomNo);
      // Return true if the room is not reserved, false otherwise
      return !isReserved;
    });

    // Check if there are available rooms
    if (availableRooms.length === 0) {
      return res.status(200).json({ message: 'No available rooms today. The rooms are full.' });
    }

    // Return the list of available rooms
    return res.status(200).json({ availableRooms });
    
  } catch (error) {
    // Handle errors and send appropriate response
    console.error('Error checking room availability:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
