import React, { useState } from 'react'
import {
  H1,
  H2,
  Paragraph,
  FormGroup,
  Input,
  TextArea,
  Select,
  Checkbox,
  Radio,
  Button,
  ErrorSummary,
  Fieldset,
  ErrorText,
  Label,
  HintText,
  Panel
} from 'govuk-react'

interface FormData {
  name: string
  email: string
  age: string
  country: string
  interests: string[]
  newsletter: boolean
  contactMethod: string
  message: string
}

const Forms: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    age: '',
    country: '',
    interests: [],
    newsletter: false,
    contactMethod: '',
    message: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Enter your full name'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Enter your email address'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address'
    }

    if (!formData.age) {
      newErrors.age = 'Select your age range'
    }

    if (!formData.country) {
      newErrors.country = 'Select your country'
    }

    if (formData.interests.length === 0) {
      newErrors.interests = 'Select at least one interest'
    }

    if (!formData.contactMethod) {
      newErrors.contactMethod = 'Select your preferred contact method'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    alert('Form submitted successfully!')
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleInterestChange = (interest: string, checked: boolean) => {
    const newInterests = checked
      ? [...formData.interests, interest]
      : formData.interests.filter(i => i !== interest)
    handleInputChange('interests', newInterests)
  }

  const hasErrors = Object.keys(errors).length > 0

  return (
    <>
      <H1>Form Examples</H1>
      <Paragraph>
        This page demonstrates various form components with proper accessibility features,
        validation, and error handling.
      </Paragraph>

      {hasErrors && (
        <ErrorSummary
          heading="There is a problem"
          description="Please correct the following errors:"
          errors={Object.entries(errors).map(([field, message]) => ({
            targetName: field,
            text: message
          }))}
        />
      )}

      <form onSubmit={handleSubmit} noValidate>
        <H2>Personal Information</H2>
        
        <FormGroup>
          <Label htmlFor="name">
            Full name
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            error={!!errors.name}
          />
          {errors.name && <ErrorText>{errors.name}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">
            Email address
          </Label>
          <HintText>
            We'll use this to send you updates about your application
          </HintText>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            error={!!errors.email}
          />
          {errors.email && <ErrorText>{errors.email}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="age">
            Age range
          </Label>
          <Select
            id="age"
            name="age"
            value={formData.age}
            onChange={(e) => handleInputChange('age', e.target.value)}
            error={!!errors.age}
          >
            <option value="">Select age range</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36-45">36-45</option>
            <option value="46-55">46-55</option>
            <option value="56-65">56-65</option>
            <option value="65+">65+</option>
          </Select>
          {errors.age && <ErrorText>{errors.age}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="country">
            Country
          </Label>
          <Select
            id="country"
            name="country"
            value={formData.country}
            onChange={(e) => handleInputChange('country', e.target.value)}
            error={!!errors.country}
          >
            <option value="">Select country</option>
            <option value="uk">United Kingdom</option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="au">Australia</option>
            <option value="other">Other</option>
          </Select>
          {errors.country && <ErrorText>{errors.country}</ErrorText>}
        </FormGroup>

        <H2>Preferences</H2>

        <FormGroup>
          <Fieldset>
            <Fieldset.Legend>
              What are you interested in?
            </Fieldset.Legend>
            <HintText>
              Select all that apply
            </HintText>
            {errors.interests && <ErrorText>{errors.interests}</ErrorText>}
            
            <Checkbox
              id="tech"
              name="interests"
              value="tech"
              checked={formData.interests.includes('tech')}
              onChange={(e) => handleInterestChange('tech', e.target.checked)}
            >
              Technology
            </Checkbox>
            
            <Checkbox
              id="design"
              name="interests"
              value="design"
              checked={formData.interests.includes('design')}
              onChange={(e) => handleInterestChange('design', e.target.checked)}
            >
              Design
            </Checkbox>
            
            <Checkbox
              id="accessibility"
              name="interests"
              value="accessibility"
              checked={formData.interests.includes('accessibility')}
              onChange={(e) => handleInterestChange('accessibility', e.target.checked)}
            >
              Accessibility
            </Checkbox>
            
            <Checkbox
              id="performance"
              name="interests"
              value="performance"
              checked={formData.interests.includes('performance')}
              onChange={(e) => handleInterestChange('performance', e.target.checked)}
            >
              Performance
            </Checkbox>
          </Fieldset>
        </FormGroup>

        <FormGroup>
          <Fieldset>
            <Fieldset.Legend>
              How would you like to be contacted?
            </Fieldset.Legend>
            {errors.contactMethod && <ErrorText>{errors.contactMethod}</ErrorText>}
            
            <Radio
              id="email-contact"
              name="contactMethod"
              value="email"
              checked={formData.contactMethod === 'email'}
              onChange={(e) => handleInputChange('contactMethod', e.target.value)}
            >
              Email
            </Radio>
            
            <Radio
              id="phone-contact"
              name="contactMethod"
              value="phone"
              checked={formData.contactMethod === 'phone'}
              onChange={(e) => handleInputChange('contactMethod', e.target.value)}
            >
              Phone
            </Radio>
            
            <Radio
              id="post-contact"
              name="contactMethod"
              value="post"
              checked={formData.contactMethod === 'post'}
              onChange={(e) => handleInputChange('contactMethod', e.target.value)}
            >
              Post
            </Radio>
          </Fieldset>
        </FormGroup>

        <FormGroup>
          <Checkbox
            id="newsletter"
            name="newsletter"
            checked={formData.newsletter}
            onChange={(e) => handleInputChange('newsletter', e.target.checked)}
          >
            I would like to receive updates about new features
          </Checkbox>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">
            Additional comments
          </Label>
          <TextArea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
          />
        </FormGroup>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit form'}
        </Button>
      </form>

      <Panel title="Accessibility Features Demonstrated">
        <ul>
          <li>Proper form labels and hints</li>
          <li>Error summary with links to fields</li>
          <li>Fieldset and legend for grouped controls</li>
          <li>Required field indicators</li>
          <li>Keyboard navigation support</li>
          <li>Screen reader announcements</li>
        </ul>
      </Panel>
    </>
  )
}

export default Forms
