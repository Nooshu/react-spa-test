import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Textarea } from '@/components/Textarea'
import { Select } from '@/components/Select'

const formSchema = z.object({
  fullName: z.string().min(1, 'Enter your full name'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().optional(),
  age: z.string().min(1, 'Select your age range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  newsletter: z.boolean().optional(),
  terms: z.boolean().refine(val => val === true, 'You must accept the terms and conditions')
})

type FormData = z.infer<typeof formSchema>

export const Forms: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data)
    setIsSubmitted(true)
  }

  const ageOptions = [
    { value: '', label: 'Select an age range' },
    { value: '18-25', label: '18-25' },
    { value: '26-35', label: '26-35' },
    { value: '36-45', label: '36-45' },
    { value: '46-55', label: '46-55' },
    { value: '56-65', label: '56-65' },
    { value: '65+', label: '65+' }
  ]

  if (isSubmitted) {
    return (
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <div className="govuk-panel govuk-panel--confirmation">
            <h1 className="govuk-panel__title">
              Form submitted successfully
            </h1>
            <div className="govuk-panel__body">
              Thank you for your submission. We'll be in touch soon.
            </div>
          </div>
          <Button onClick={() => setIsSubmitted(false)}>
            Submit another form
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <h1 className="govuk-heading-xl">Forms</h1>
          <p className="govuk-body-l">
            Comprehensive form examples demonstrating accessibility best practices, 
            validation, and error handling.
          </p>
        </div>
      </div>

      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <fieldset className="govuk-fieldset">
              <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
                <h2 className="govuk-fieldset__heading">
                  Contact Information
                </h2>
              </legend>

              <Input
                {...register('fullName')}
                label="Full name"
                hint="Enter your first and last name"
                error={errors.fullName?.message}
                width="two-thirds"
              />

              <Input
                {...register('email')}
                type="email"
                label="Email address"
                hint="We'll use this to contact you"
                error={errors.email?.message}
                width="two-thirds"
              />

              <Input
                {...register('phone')}
                type="tel"
                label="Phone number"
                hint="Optional - include country code if outside UK"
                error={errors.phone?.message}
                width="one-half"
              />

              <Select
                {...register('age')}
                label="Age range"
                hint="Select your age range"
                options={ageOptions}
                error={errors.age?.message}
                width="one-third"
              />

              <Textarea
                {...register('message')}
                label="Message"
                hint="Tell us what you'd like to discuss"
                rows={5}
                error={errors.message?.message}
              />

              <div className="govuk-form-group">
                <div className="govuk-checkboxes">
                  <div className="govuk-checkboxes__item">
                    <input
                      {...register('newsletter')}
                      className="govuk-checkboxes__input"
                      id="newsletter"
                      type="checkbox"
                    />
                    <label className="govuk-label govuk-checkboxes__label" htmlFor="newsletter">
                      Subscribe to our newsletter
                    </label>
                  </div>
                </div>
              </div>

              <div className="govuk-form-group">
                <div className="govuk-checkboxes">
                  <div className="govuk-checkboxes__item">
                    <input
                      {...register('terms')}
                      className="govuk-checkboxes__input"
                      id="terms"
                      type="checkbox"
                    />
                    <label className="govuk-label govuk-checkboxes__label" htmlFor="terms">
                      I accept the{' '}
                      <a href="#" className="govuk-link">
                        terms and conditions
                      </a>
                    </label>
                  </div>
                </div>
                {errors.terms && (
                  <span className="govuk-error-message">
                    <span className="govuk-visually-hidden">Error:</span>
                    {errors.terms.message}
                  </span>
                )}
              </div>

              <Button type="submit">
                Submit form
              </Button>
            </fieldset>
          </form>
        </div>
        <div className="govuk-grid-column-one-third">
          <h2 className="govuk-heading-m">Accessibility Features</h2>
          <ul className="govuk-list govuk-list--bullet">
            <li>Proper form labels and hints</li>
            <li>Error messages with field associations</li>
            <li>Required field indicators</li>
            <li>Keyboard navigation support</li>
            <li>Screen reader compatibility</li>
            <li>Fieldset and legend usage</li>
          </ul>

          <h2 className="govuk-heading-m">Validation Features</h2>
          <ul className="govuk-list govuk-list--bullet">
            <li>Client-side validation with Zod</li>
            <li>Real-time error feedback</li>
            <li>Accessible error summaries</li>
            <li>Form state management</li>
          </ul>
        </div>
      </div>
    </>
  )
}
