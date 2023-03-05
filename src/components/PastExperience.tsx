import { FunctionComponent, useEffect } from 'react'
import { macroExperienceOptions, weightliftingExperienceOptions } from '../data'
import { RadioGroup } from '@headlessui/react'
import { classNames } from '../utils'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

type Props = {
  weightliftingExperience: any
  setWeightliftingExperience: any
  macroTrackingExperience: any
  setMacroTrackingExperience: any
  isValid: (valid: boolean) => void
}

const PastExperience: FunctionComponent<Props> = ({
  weightliftingExperience,
  setWeightliftingExperience,
  macroTrackingExperience,
  setMacroTrackingExperience,
  isValid,
}) => {
  useEffect(() => {
    isValid(!!weightliftingExperience && !!macroTrackingExperience)
  }, [
    weightliftingExperience,
    setMacroTrackingExperience,
    macroTrackingExperience,
    setWeightliftingExperience,
  ])

  return (
    <>
      <div className='col-span-6'>
        <RadioGroup
          value={weightliftingExperience}
          onChange={setWeightliftingExperience}>
          <RadioGroup.Label className='text-base font-medium text-gray-900'>
            What is your experience with training and nutrition?
          </RadioGroup.Label>

          <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4'>
            {weightliftingExperienceOptions.map((option) => (
              <RadioGroup.Option
                key={option.id}
                value={option}
                className={({ checked, active }) =>
                  classNames(
                    checked ? 'border-transparent' : 'border-gray-300',
                    active ? 'border-primary-500 ring-2 ring-primary-500' : '',
                    'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm'
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
        <RadioGroup
          value={macroTrackingExperience}
          onChange={setMacroTrackingExperience}>
          <RadioGroup.Label className='text-base font-medium text-gray-900'>
            What is your experience with tracking macronutrients?
          </RadioGroup.Label>

          <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4'>
            {macroExperienceOptions.map((option) => (
              <RadioGroup.Option
                key={option.id}
                value={option}
                className={({ checked, active }) =>
                  classNames(
                    checked ? 'border-transparent' : 'border-gray-300',
                    active ? 'border-primary-500 ring-2 ring-primary-500' : '',
                    'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm'
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
    </>
  )
}

export default PastExperience
