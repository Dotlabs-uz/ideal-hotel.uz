import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { token } = await req.json();

    const secretKey = process.env.NEXT_PUBLIC_SECRETE_KEY;

    const res = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      {
        method: 'POST',
      }
    );

    const data = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
