import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function DELETE(request: Request) {
  try {
    const { email, password } = await request.json();
    console.log('Received email:', email);
    console.log('Received password:', password);

    // Validate email and password
    const result = await sql`
      SELECT COUNT(*) as count
      FROM users
      WHERE email = ${email} AND password = ${password}
    `;

    console.log('Select response:', result);

    if (result.rows[0].count === 0) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 400 });
    }

    await sql`
      DELETE FROM users
      WHERE email = ${email} AND password = ${password}
    `;

    return NextResponse.json({ message: 'Account deleted successfully' });
  } catch (e) {
    console.log({ e });
    return NextResponse.json({ error: 'Error deleting account' }, { status: 500 });
  }
}