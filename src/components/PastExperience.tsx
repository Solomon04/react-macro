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
      <div className='tw-col-span-6'>
        <RadioGroup
          value={weightliftingExperience}
          onChange={setWeightliftingExperience}>
          <RadioGroup.Label className='tw-text-base tw-font-medium tw-text-gray-900'>
            What is your experience with training and nutrition?
          </RadioGroup.Label>

          <div className='tw-mt-4 tw-grid tw-grid-cols-1 tw-gap-y-6 sm:tw-grid-cols-3 sm:tw-gap-x-4'>
            {weightliftingExperienceOptions.map((option) => (
              <RadioGroup.Option
                key={option.id}
                value={option}
                className={({ checked, active }) =>
                  classNames(
                    checked ? 'tw-border-transparent' : 'tw-border-gray-300',
                    active
                      ? 'tw-border-primary-500 tw-ring-2 tw-ring-primary-500'
                      : '',
                    'tw-relative tw-flex tw-cursor-pointer tw-rounded-lg tw-border tw-bg-white tw-p-4 tw-shadow-sm'
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
        <RadioGroup
          value={macroTrackingExperience}
          onChange={setMacroTrackingExperience}>
          <RadioGroup.Label className='tw-text-base tw-font-medium tw-text-gray-900'>
            What is your experience with tracking macronutrients?
          </RadioGroup.Label>

          <div className='tw-mt-4 tw-grid tw-grid-cols-1 tw-gap-y-6 sm:tw-grid-cols-3 sm:tw-gap-x-4'>
            {macroExperienceOptions.map((option) => (
              <RadioGroup.Option
                key={option.id}
                value={option}
                className={({ checked, active }) =>
                  classNames(
                    checked ? 'tw-border-transparent' : 'tw-border-gray-300',
                    active
                      ? 'tw-border-primary-500 tw-ring-2 tw-ring-primary-500'
                      : '',
                    'tw-relative tw-flex tw-cursor-pointer tw-rounded-lg tw-border tw-bg-white tw-p-4 tw-shadow-sm'
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
    </>
  )
}

export default PastExperience
