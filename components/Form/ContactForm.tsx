import { useState } from "react"
import {
  useForm,
  Controller,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import sendEmail from "lib/sendEmail"
import Form from "./Form"

declare const window: any

type Inputs = {
  fname: string
  lname: string
  email: string
  org: string
  message: string
}

const requiredFields = yup
  .object({
    fname: yup
      .string()
      // .min(2, "Too short!")
      // .max(50, "Too long!")
      .required("What can I call you?"),
    email: yup
      .string()
      .email("That doesn't look valid")
      .required("I need your email to get back to you"),
    message: yup.string().required("What's on your mind?"),
    // .min(20, "Please elaborate...")
    // .max(500, "Too long!")
  })
  .required()

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    control,
    // register,
    handleSubmit,
    // watch,
    formState: { errors, touchedFields },
  } = useForm<Inputs>({
    mode: "all",
    reValidateMode: "onChange",
    criteriaMode: "firstError",
    resolver: yupResolver(requiredFields),
  })

  const onSubmit: SubmitHandler<Inputs> = async (data, e) => {
    // console.log(data, e)
    setIsSubmitting(true)

    window?.umami?.trackEvent("submission succeeded", "contact form")

    const res = await sendEmail({
      to: "joey@joeyyax.com",
      from: data.email,
      subject: "New message from joeyyax.com",
      vars: { layout: "contact", ...data },
    })

    if (res?.success) {
      setIsSuccess(true)
      setIsSubmitting(false)
    }
  }
  const onError: SubmitErrorHandler<Inputs> = async (errors, e) => {
    // console.log(errors, e)

    window?.umami?.trackEvent("submission failed", "contact form")

    setIsSubmitting(false)
  }

  if (!isSuccess) {
    return (
      <Form name="contact-form" onSubmit={handleSubmit(onSubmit, onError)}>
        <Form.Row>
          <Form.Column>
            <Controller
              name="fname"
              control={control}
              render={({ field }) => (
                <Form.Input
                  label="First Name"
                  error={errors?.fname}
                  valid={touchedFields.fname && !errors?.fname}
                  {...field}
                />
              )}
            />
          </Form.Column>
          <Form.Column>
            <Controller
              name="lname"
              control={control}
              render={({ field }) => (
                <Form.Input
                  label="Last Name"
                  error={errors?.lname}
                  valid={touchedFields.lname && !errors?.lname}
                  {...field}
                />
              )}
            />
          </Form.Column>
        </Form.Row>

        <Controller
          name="org"
          control={control}
          render={({ field }) => (
            <Form.Input
              label="Company"
              placeholder="Acme, Inc."
              error={errors?.org}
              valid={touchedFields.org && !errors?.org}
              {...field}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Form.Input
              type="email"
              label="Email Address"
              placeholder="you@domain.com"
              helpText="I'll keep this between us"
              error={errors?.email}
              valid={touchedFields.email && !errors?.email}
              {...field}
            />
          )}
        />

        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <Form.TextArea
              label="Message"
              error={errors?.message}
              valid={touchedFields.message && !errors?.message}
              {...field}
            />
          )}
        />

        <div className="flex gap-4 items-center">
          <Form.Button theme="primary">Send message</Form.Button>
          <Form.Status loading={isSubmitting} errors={errors} />
        </div>
      </Form>
    )
  } else {
    return (
      <Form.ThankYou>
        <p>I&apos;ll be in touch soon</p>
        <p className="text-sm opacity-50">
          Expect a reply within one business day
        </p>
      </Form.ThankYou>
    )
  }
}

export default ContactForm
