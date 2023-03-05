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
      <div className='col-span-6'>
        <RadioGroup value={activityLevel} onChange={setActivityLevel}>
          <RadioGroup.Label className='text-base font-medium text-gray-900'>
            What are your day-to-day activity levels?
          </RadioGroup.Label>

          <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4'>
            {activityLevelOptions.map((option) => (
              <RadioGroup.Option
                key={option.id}
                value={option}
                className={({ checked, active }) =>
                  classNames(
                    checked ? 'border-transparent' : 'border-gray-300',
                    active ? 'border-primary-500 ring-2 ring-primary-500' : '',
                    'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
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

export default TotalActivity
