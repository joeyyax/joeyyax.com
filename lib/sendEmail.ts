type VarsType = {
  layout: string
  [key: string]: string
}

interface Props {
  to: string
  from: string
  subject: string
  vars: VarsType
}

const sendEmail = async ({ to, from, subject, vars }: Props) => {
  const body = JSON.stringify({ to, from, subject, vars })

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_NOTIFICATIONS_API_URL}/v1/email/send`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    }
  )

  const json = await res.json()

  if (!res.ok) {
    throw new Error(json.message)
  }

  return json
}

export default sendEmail
