import { FunctionComponent, useEffect } from 'react'
import { consultingOptions, goalOptions } from '../data'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { classNames } from '../utils'
import { Tooltip } from 'flowbite-react'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

type Props = {
  email: any
  name: any
  setEmail: any
  setName: any
  goal: any
  setGoal: any
  callToAction: any
  setCallToAction: any
  wantsConsulting: any
  setWantsConsulting: any
  isValid: (valid: boolean) => void
}
const CallToAction: FunctionComponent<Props> = ({
  wantsConsulting,
  setWantsConsulting,
  setEmail,
  email,
  setCallToAction,
  callToAction,
  setGoal,
  goal,
  name,
  setName,
  isValid,
}) => {
  useEffect(() => {
    isValid(!!goal && !!callToAction)
  }, [callToAction, setCallToAction, goal, setGoal])
  return (
    <>
      <div className='col-span-6'>
        <h2 className='font-semibold text-lg'>
          Please enter your name and best email address so we can send your
          results, including a printable macronutrient document.{' '}
        </h2>
      </div>
      <div className='col-span-6 sm:col-span-3'>
        <label htmlFor='email' className='text-sm font-medium text-gray-900'>
          Name
        </label>
        <div className='mt-2'>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Your Name'
            value={name}
            onChange={(event) => setName(event.target.value)}
            className='block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-4 block text-sm font-medium text-gray-900 placeholder:text-sm'
            required={true}
          />
        </div>
      </div>
      <div className='col-span-6 sm:col-span-3'>
        <label htmlFor='email' className='text-sm font-medium text-gray-900'>
          Email Address
        </label>
        <div className='mt-2'>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Your Email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className='block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-4 block text-sm font-medium text-gray-900 placeholder:text-sm'
            required={true}
          />
        </div>
      </div>
      <div className='col-span-6'>
        <RadioGroup value={goal} onChange={setGoal}>
          <RadioGroup.Label className='text-sm font-medium text-gray-900'>
            What are you looking to accomplish?
          </RadioGroup.Label>

          <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4'>
            {goalOptions.map((option) => (
              <RadioGroup.Option
                key={option.id}
                value={option}
                className={({ checked, active }) =>
                  classNames(
                    checked ? 'border-transparent' : 'border-gray-300',
                    active ? 'border-primary-500 ring-2 ring-primary-500' : '',
                    'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm '
                  )
                }>
                {({ checked, active }) => (
                  <>
                    <span className='flex flex-1'>
                      <span className='flex flex-col'>
                        <RadioGroup.Label
                          as='span'
                          className='inline-flex text-sm font-medium text-gray-900'>
                          {option.title}
                          <span>
                            <Tooltip content={option.help} placement='top'>
                              <QuestionMarkCircleIcon className='ml-1.5 text-gray-400 h-5 w-5' />
                            </Tooltip>
                          </span>
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as='span'
                          className='mt-1 flex items-center text-sm text-gray-500'>
                          {option.description}
                        </RadioGroup.Description>
                      </span>
                    </span>
                    <CheckCircleIcon
                      className={classNames(
                        !checked ? 'invisible' : '',
                        'h-5 w-5 text-primary-600'
                      )}
                      aria-hidden='true'
                    />
                    <span
                      className={classNames(
                        active ? 'border' : 'border-2',
                        checked ? 'border-primary-500' : 'border-transparent',
                        'pointer-events-none absolute -inset-px rounded-lg'
                      )}
                      aria-hidden='true'
                    />
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
      <div className='col-span-6'>
        <RadioGroup value={callToAction} onChange={setCallToAction}>
          <RadioGroup.Label className='text-sm font-medium text-gray-900'>
            What can we help you with?
          </RadioGroup.Label>

          <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4'>
            {consultingOptions.map((option) => (
              <RadioGroup.Option
                key={option.id}
                value={option}
                className={({ checked, active }) =>
                  classNames(
                    checked ? 'border-transparent' : 'border-gray-300',
                    active ? 'border-primary-500 ring-2 ring-primary-500' : '',
                    'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm '
                  )
                }>
                {({ checked, active }) => (
                  <>
                    <span className='flex flex-1'>
                      <span className='flex flex-col'>
                        <RadioGroup.Label
                          as='span'
                          className='block text-sm font-medium text-gray-900'>
                          {option.title}
                        </RadioGroup.Label>
                      </span>
                    </span>
                    <CheckCircleIcon
                      className={classNames(
                        !checked ? 'invisible' : '',
                        'h-5 w-5 text-primary-600'
                      )}
                      aria-hidden='true'
                    />
                    <span
                      className={classNames(
                        active ? 'border' : 'border-2',
                        checked ? 'border-primary-500' : 'border-transparent',
                        'pointer-events-none absolute -inset-px rounded-lg'
                      )}
                      aria-hidden='true'
                    />
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
      <div className='col-span-6'>
        <label className='text-sm font-medium text-gray-900'>
          Are you interested in a one on one free initial health assessment with
          a Registered Dietitian that specializes in Weight Loss?
        </label>
        <fieldset className='mt-4'>
          <legend className='sr-only'>Notification method</legend>
          <div className='space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10'>
            <div className='flex items-center'>
              <input
                id='yes'
                name='notification-method'
                onChange={(e) => setWantsConsulting(e.target.checked)}
                checked={wantsConsulting}
                type='radio'
                className='h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500'
              />
              <label
                htmlFor='yes'
                className='ml-3 block text-xs font-medium text-gray-700'>
                Yes
              </label>
            </div>

            <div className='flex items-center'>
              <input
                id='sms'
                name='notification-method'
                checked={!wantsConsulting}
                onChange={(e) => setWantsConsulting(!e.target.checked)}
                type='radio'
                className='h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500'
              />
              <label
                htmlFor='sms'
                className='ml-3 block text-xs font-medium text-gray-700'>
                No
              </label>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  )
}

export default CallToAction
