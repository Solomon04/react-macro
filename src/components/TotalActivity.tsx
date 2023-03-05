import { FunctionComponent, useEffect } from 'react'
import { RadioGroup } from '@headlessui/react'
import { activityLevelOptions } from '../data'
import { classNames } from '../utils'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

type Props = {
  activityLevel: any
  setActivityLevel: any
  isValid: (valid: boolean) => void
}

const TotalActivity: FunctionComponent<Props> = ({
  activityLevel,
  setActivityLevel,
  isValid,
}) => {
  useEffect(() => {
    isValid(!!activityLevel)
  }, [activityLevel, setActivityLevel])

  return (
    <>
      <div className='tw-col-span-6'>
        <RadioGroup value={activityLevel} onChange={setActivityLevel}>
          <RadioGroup.Label className='tw-text-base tw-font-medium tw-text-gray-900'>
            What are your day-to-day activity levels?
          </RadioGroup.Label>

          <div className='tw-mt-2 tw-block tw-w-full tw-rounded-md tw-border-gray-300 tw-shadow-sm focus:tw-border-primary focus:tw-ring-primary sm:tw-text-sm tw-p-4 tw-block tw-text-sm tw-font-medium tw-text-gray-900'>
            {activityLevelOptions.map((option) => (
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

export default TotalActivity
