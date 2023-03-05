import { FunctionComponent } from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'

type Step = {
  id: number
  name: string
}

type Props = {
  steps: Step[]
  onClick: (step: Step) => void
  currentStep: Step
  isComplete: boolean
}

const Stepper: FunctionComponent<Props> = ({
  currentStep,
  steps,
  onClick,
  isComplete,
}) => {
  return (
    <nav aria-label='Progress'>
      <ol
        role='list'
        className='tw-divide-y tw-divide-gray-300 tw-rounded-md tw-border tw-border-gray-300 md:tw-flex md:tw-divide-y-0'>
        {steps.map((step, stepIdx) => (
          <li key={step.name} className='tw-relative md:tw-flex md:tw-flex-1'>
            {currentStep.id > step.id || isComplete ? (
              <button
                onClick={() => onClick(step)}
                className='tw-group tw-flex tw-w-full tw-items-center'>
                <span className='tw-flex tw-items-center tw-px-6 tw-py-4 tw-text-sm tw-font-medium'>
                  <span className='tw-flex tw-h-10 tw-w-10 tw-flex-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-bg-primary-600 group-hover:tw-bg-primary-800'>
                    <CheckIcon
                      className='tw-h-6 tw-w-6 tw-text-white'
                      aria-hidden='true'
                    />
                  </span>
                  <span className='tw-ml-4 tw-text-sm tw-font-medium tw-text-gray-900'>
                    {step.name}
                  </span>
                </span>
              </button>
            ) : step === currentStep ? (
              <button
                onClick={() => onClick(step)}
                className='tw-flex tw-items-center tw-px-6 tw-py-4 tw-text-sm tw-font-medium'
                aria-current='step'>
                <span className='tw-flex tw-h-10 tw-w-10 tw-flex-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-border-2 tw-border-primary-600'>
                  <span className='tw-text-primary-600'>{step.id}</span>
                </span>
                <span className='tw-ml-4 tw-text-sm tw-font-medium tw-text-primary-600'>
                  {step.name}
                </span>
              </button>
            ) : (
              <button
                disabled={true}
                className='tw-group tw-flex tw-items-center tw-cursor-not-allowed'>
                <span className='tw-flex tw-items-center tw-px-6 tw-py-4 tw-text-sm tw-font-medium'>
                  <span className='tw-flex tw-h-10 tw-w-10 tw-flex-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-border-2 tw-border-gray-300 group-hover:tw-border-gray-400'>
                    <span className='tw-text-gray-500 group-hover:tw-text-gray-900'>
                      {step.id}
                    </span>
                  </span>
                  <span className='tw-ml-4 tw-text-sm tw-font-medium tw-text-gray-500 group-hover:tw-text-gray-900'>
                    {step.name}
                  </span>
                </span>
              </button>
            )}

            {stepIdx !== steps.length - 1 ? (
              <>
                {/* Arrow separator for lg screens and up */}
                <div
                  className='tw-absolute tw-top-0 tw-right-0 tw-hidden tw-h-full tw-w-5 md:tw-block'
                  aria-hidden='true'>
                  <svg
                    className='tw-h-full tw-w-full tw-text-gray-300'
                    viewBox='0 0 22 80'
                    fill='none'
                    preserveAspectRatio='none'>
                    <path
                      d='M0 -2L20 40L0 82'
                      vectorEffect='non-scaling-stroke'
                      stroke='currentcolor'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Stepper
