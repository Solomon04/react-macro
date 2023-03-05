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
      <div className='tw-col-span-6'>
        <h2 className='tw-font-medium tw-text-base'>
          Please enter your name and best email address so we can send your
          results, including a printable macronutrient document.{' '}
        </h2>
      </div>
      <div className='tw-col-span-6 sm:tw-col-span-3'>
        <label
          htmlFor='email'
          className='tw-text-sm tw-font-medium tw-text-gray-900'>
          Name
        </label>
        <div className='tw-mt-2'>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Your Name'
            value={name}
            onChange={(event) => setName(event.target.value)}
            className='tw-block tw-w-full tw-rounded-md tw-border-gray-300 tw-shadow-sm focus:tw-border-primary focus:tw-ring-primary sm:tw-text-sm tw-p-4 tw-block tw-text-sm tw-font-medium tw-text-gray-900 placeholder:tw-text-sm'
            required={true}
          />
        </div>
      </div>
      <div className='tw-col-span-6 sm:tw-col-span-3'>
        <label
          htmlFor='email'
          className='tw-text-sm tw-font-medium tw-text-gray-900'>
          Email Address
        </label>
        <div className='tw-mt-2'>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Your Email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className='tw-block tw-w-full tw-rounded-md tw-border-gray-300 tw-shadow-sm focus:tw-border-primary focus:tw-ring-primary sm:tw-text-sm tw-p-4 tw-block tw-text-sm tw-font-medium tw-text-gray-900 placeholder:tw-text-sm'
            required={true}
          />
        </div>
      </div>
      <div className='tw-col-span-6'>
        <RadioGroup value={goal} onChange={setGoal}>
          <RadioGroup.Label className='tw-text-sm tw-font-medium tw-text-gray-900'>
            What are you looking to accomplish?
          </RadioGroup.Label>

          <div className='tw-mt-4 tw-grid tw-grid-cols-1 tw-gap-y-6 sm:tw-grid-cols-3 sm:tw-gap-x-4'>
            {goalOptions.map((option) => (
              <RadioGroup.Option
                key={option.id}
                value={option}
                className={({ checked, active }) =>
                  classNames(
                    checked ? 'tw-border-transparent' : 'tw-border-gray-300',
                    active
                      ? 'tw-border-primary-500 tw-ring-2 tw-ring-primary-500'
                      : '',
                    'tw-relative tw-flex tw-cursor-pointer tw-rounded-lg tw-border tw-bg-white tw-p-4 tw-shadow-sm '
                  )
                }>
                {({ checked, active }) => (
                  <>
                    <span className='tw-flex tw-flex-1'>
                      <span className='tw-flex tw-flex-col'>
                        <RadioGroup.Label
                          as='span'
                          className='tw-inline-flex tw-text-sm tw-font-medium tw-text-gray-900'>
                          {option.title}
                          <span>
                            <Tooltip content={option.help} placement='top'>
                              <QuestionMarkCircleIcon className='ml-1.5 text-gray-400 h-5 w-5' />
                            </Tooltip>
                          </span>
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as='span'
                          className='tw-mt-1 tw-flex tw-items-center tw-text-sm tw-text-gray-500'>
                          {option.description}
                        </RadioGroup.Description>
                      </span>
                    </span>
                    <CheckCircleIcon
                      className={classNames(
                        !checked ? 'tw-invisible' : '',
                        'tw-h-5 tw-w-5 tw-text-primary-600'
                      )}
                      aria-hidden='true'
                    />
                    <span
                      className={classNames(
                        active ? 'tw-border' : 'tw-border-2',
                        checked
                          ? 'tw-border-primary-500'
                          : 'tw-border-transparent',
                        'tw-pointer-events-none tw-absolute -tw-inset-px tw-rounded-lg'
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
      <div className='tw-col-span-6'>
        <RadioGroup value={callToAction} onChange={setCallToAction}>
          <RadioGroup.Label className='tw-text-sm tw-font-medium tw-text-gray-900'>
            What can we help you with?
          </RadioGroup.Label>

          <div className='tw-mt-4 tw-grid tw-grid-cols-1 tw-gap-y-6 sm:tw-grid-cols-3 sm:tw-gap-x-4'>
            {consultingOptions.map((option) => (
              <RadioGroup.Option
                key={option.id}
                value={option}
                className={({ checked, active }) =>
                  classNames(
                    checked ? 'tw-border-transparent' : 'tw-border-gray-300',
                    active
                      ? 'tw-border-primary-500 tw-ring-2 tw-ring-primary-500'
                      : '',
                    'tw-relative tw-flex tw-cursor-pointer tw-rounded-lg tw-border tw-bg-white tw-p-4 tw-shadow-sm '
                  )
                }>
                {({ checked, active }) => (
                  <>
                    <span className='tw-flex tw-flex-1'>
                      <span className='tw-flex tw-flex-col'>
                        <RadioGroup.Label
                          as='span'
                          className='tw-block tw-text-sm tw-font-medium tw-text-gray-900'>
                          {option.title}
                        </RadioGroup.Label>
                      </span>
                    </span>
                    <CheckCircleIcon
                      className={classNames(
                        !checked ? 'tw-invisible' : '',
                        'tw-h-5 tw-w-5 tw-text-primary-600'
                      )}
                      aria-hidden='true'
                    />
                    <span
                      className={classNames(
                        active ? 'tw-border' : 'tw-border-2',
                        checked
                          ? 'tw-border-primary-500'
                          : 'tw-border-transparent',
                        'tw-pointer-events-none tw-absolute -tw-inset-px tw-rounded-lg'
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
      <div className='tw-col-span-6'>
        <label className='tw-text-sm tw-font-medium tw-text-gray-900'>
          Are you interested in a one on one free initial health assessment with
          a Registered Dietitian that specializes in Weight Loss?
        </label>
        <fieldset className='tw-mt-4'>
          <legend className='tw-sr-only'>Notification method</legend>
          <div className='space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10'>
            <div className='tw-flex tw-items-center'>
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
                className='tw-ml-3 tw-block tw-text-xs tw-font-medium tw-text-gray-700'>
                Yes
              </label>
            </div>

            <div className='tw-flex tw-items-center'>
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
                className='tw-ml-3 tw-block tw-text-xs tw-font-medium tw-text-gray-700'>
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
