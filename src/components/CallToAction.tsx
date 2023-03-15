import { FunctionComponent, useEffect } from 'react'
import { consultingOptions, goalOptions } from '../data'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { classNames } from '../utils'
import { FlowbiteTooltipTheme, Tooltip } from 'flowbite-react'
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
  const theme: FlowbiteTooltipTheme = {
    target: 'tw-w-fit',
    animation: 'tw-transition-opacity',
    arrow: {
      base: 'tw-absolute tw-z-10 tw-h-2 tw-w-2 tw-rotate-45',
      style: {
        dark: 'tw-bg-gray-900 dark:tw-bg-gray-700',
        light: 'tw-bg-white',
        auto: 'tw-bg-white dark:tw-bg-gray-700',
      },
      placement: '-4px',
    },
    base: 'tw-absolute tw-inline-block tw-z-10 tw-rounded-lg tw-py-2 tw-px-3 tw-text-sm tw-font-medium tw-shadow-sm',
    hidden: 'tw-invisible tw-opacity-0',
    style: {
      dark: 'tw-bg-gray-900 tw-text-white dark:tw-bg-gray-700',
      light: 'tw-border tw-border-gray-200 tw-bg-white tw-text-gray-900',
      auto: 'tw-border tw-border-gray-200 tw-bg-white tw-text-gray-900 dark:tw-border-none dark:tw-bg-gray-700 dark:tw-text-white',
    },
    content: 'tw-relative tw-z-20',
  }
  return (
    <>
      <div className='tw-col-span-6'>
        <label className='tw-font-medium tw-text-sm'>
          Please enter your name and best email address so we can send your
          results.
        </label>
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
            className='tw-form-input tw-block tw-w-full tw-rounded-md tw-border-gray-300 tw-shadow-sm focus:tw-border-primary focus:tw-ring-primary sm:tw-text-sm tw-p-4 tw-block tw-text-sm tw-font-medium tw-text-gray-900 placeholder:tw-text-sm'
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
            className='tw-form-input tw-block tw-w-full tw-rounded-md tw-border-gray-300 tw-shadow-sm focus:tw-border-primary focus:tw-ring-primary sm:tw-text-sm tw-p-4 tw-block tw-text-sm tw-font-medium tw-text-gray-900 placeholder:tw-text-sm'
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
                            <Tooltip
                              theme={theme}
                              content={option.help}
                              placement='top'>
                              <QuestionMarkCircleIcon className='tw-ml-1.5 tw-text-gray-400 tw-h-5 w-5' />
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
          a Registered Dietitian that specializes in weight loss?
        </label>
        <fieldset className='tw-mt-4'>
          <legend className='tw-sr-only'>Notification method</legend>
          <div className='tw-space-y-4 sm:tw-flex sm:tw-items-center sm:tw-space-y-0 sm:tw-space-x-10'>
            <div className='tw-flex tw-items-center'>
              <input
                id='yes'
                name='notification-method'
                onChange={(e) => setWantsConsulting(e.target.checked)}
                checked={wantsConsulting}
                type='radio'
                className='tw-form-radio tw-h-4 tw-w-4 tw-border-gray-300 tw-text-primary-600 focus:tw-ring-primary-500'
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
                className='tw-form-radio tw-h-4 tw-w-4 tw-border-gray-300 tw-text-primary-600 focus:tw-ring-primary-500'
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
