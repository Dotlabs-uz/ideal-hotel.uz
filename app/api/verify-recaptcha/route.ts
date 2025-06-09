import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { token } = await request.json();

    const res = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    { method: 'POST' }
  );

  const data = await res.json();

  return NextResponse.json(data);
  
}
