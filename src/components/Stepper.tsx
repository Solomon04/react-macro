import { FunctionComponent } from 'react'
import {
  CheckCircleIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/solid'
import { classNames } from '../utils'

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

type StepProp = {
  name: string
  completed: boolean
  id: number
}

type StepIconProp = {
  id: number
}

const StepIcon: FunctionComponent<StepIconProp> = ({ id }) => (
  <span className='tw-flex tw-h-6 tw-w-6 tw-flex-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-border-2 tw-border-primary-600'>
    <span className='tw-text-primary-600'>{id}</span>
  </span>
)

const Step: FunctionComponent<StepProp> = ({ name, completed, id }) => (
  <li
    className={classNames(
      'tw-relative text-center',
      completed ? 'tw-text-primary' : 'tw-text-gray-600'
    )}>
    <div className='tw-absolute tw-left-0 -tw-bottom-[1.75rem] tw-rounded-full'>
      {completed ? (
        <CheckCircleIcon className='tw-h-6 tw-w-6' aria-hidden='true' />
      ) : (
        <StepIcon id={id} />
      )}
    </div>
    <span className='tw-hidden sm:tw-block'> {name} </span>
  </li>
)

const Stepper: FunctionComponent<Props> = ({
  currentStep,
  steps,
  onClick,
  isComplete,
}) => {
  return (
    <nav aria-label='Progress'>
      <div className='tw-hidden sm:tw-block'>
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
                      <CheckCircleIcon
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
      </div>

      <div className='sm:tw-hidden'>
        <h2 className='tw-sr-only'>Steps</h2>
        <div className='after:tw-mt-4 after:tw-block after:tw-h-1 after:tw-w-full after:tw-rounded-lg after:tw-bg-gray-200'>
          <ol className='tw-flex tw-justify-between tw-items-center tw-text-sm tw-font-medium tw-text-gray-500'>
            {steps.map((step) => (
              <Step
                key={step.id}
                id={step.id}
                name={step.name}
                completed={currentStep.id > step.id || isComplete}
              />
            ))}
          </ol>
        </div>
      </div>
    </nav>
  )
}

export default Stepper
