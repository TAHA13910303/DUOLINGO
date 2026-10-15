import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { username, email, password } = body

    if (
      typeof username !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      return NextResponse.json(
        {
          message: "اطلاعات وارد شده معتبر نیست",
        },
        {
          status: 400,
        }
      )
    }

    const response = await fetch(
      `${process.env.STRAPI_URL}/api/auth/local/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        {
          message: data.error?.message || "ثبت‌نام انجام نشد",
        },
        {
          status: response.status,
        }
      )
    }

    return NextResponse.json({
      message: "ثبت‌نام با موفقیت انجام شد",
      user: data.user,
    })
  } catch {
    return NextResponse.json(
      {
        message: "خطا در ارتباط با سرور",
      },
      {
        status: 500,
      }
    )
  }
}