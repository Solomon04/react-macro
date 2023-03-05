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
        className='tw-space-y-4 md:tw-flex md:tw-space-y-0 md:tw-space-x-8'>
        {steps.map((step) => (
          <li key={step.name} className='md:flex-1'>
            {currentStep.id > step.id || isComplete ? (
              <button
                onClick={() => onClick(step)}
                className='tw-group tw-flex tw-flex-col tw-border-l-4 tw-border-primary-600 tw-py-2 tw-pl-4 hover:tw-border-primary-800 md:tw-border-l-0 md:tw-border-t-4 md:tw-pl-0 md:tw-pt-4 md:tw-pb-0'>
                <span className='text-sm font-medium text-primary-600 group-hover:text-primary-800'>
                  {step.id}
                </span>
                <span className='tw-text-sm tw-font-medium'>{step.name}</span>
              </button>
            ) : step === currentStep ? (
              <button
                onClick={() => onClick(step)}
                className='tw-flex tw-flex-col tw-border-l-4 tw-border-primary-600 tw-py-2 tw-pl-4 md:tw-border-l-0 md:tw-border-t-4 md:tw-pl-0 md:tw-pt-4 md:tw-pb-0'
                aria-current='step'>
                <span className='tw-text-sm tw-font-medium tw-text-primary-600'>
                  {step.id}
                </span>
                <span className='tw-text-sm tw-font-medium'>{step.name}</span>
              </button>
            ) : (
              <button
                onClick={() => onClick(step)}
                className='tw-group tw-flex tw-flex-col tw-border-l-4 tw-border-gray-200 tw-py-2 tw-pl-4 hover:tw-border-gray-300 md:tw-border-l-0 md:tw-border-t-4 md:tw-pl-0 md:tw-pt-4 md:tw-pb-0'>
                <span className='text-sm font-medium text-gray-500 group-hover:text-gray-700'>
                  {step.id}
                </span>
                <span className='tw-text-sm tw-font-medium'>{step.name}</span>
              </button>
            )}
          </li>
        ))}
      </ol>

      {/*<ol*/}
      {/*  role='list'*/}
      {/*  className='divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0'>*/}
      {/*  {steps.map((step, stepIdx) => (*/}
      {/*    <li key={step.name} className='relative md:flex md:flex-1'>*/}
      {/*      {currentStep.id > step.id || isComplete ? (*/}
      {/*        <button*/}
      {/*          onClick={() => onClick(step)}*/}
      {/*          className="tw-group tw-flex tw-w-full tw-items-center">*/}
      {/*          <span className="tw-flex tw-items-center tw-px-6 tw-py-4 tw-text-sm tw-font-medium">*/}
      {/*            <span className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 group-hover:bg-primary-800'>*/}
      {/*              <CheckIcon*/}
      {/*                className="tw-h-6 tw-w-6 tw-text-white"*/}
      {/*                aria-hidden='true'*/}
      {/*              />*/}
      {/*            </span>*/}
      {/*            <span className="tw-ml-4 tw-text-sm tw-font-medium tw-text-gray-900">*/}
      {/*              {step.name}*/}
      {/*            </span>*/}
      {/*          </span>*/}
      {/*        </button>*/}
      {/*      ) : step === currentStep ? (*/}
      {/*        <button*/}
      {/*          onClick={() => onClick(step)}*/}
      {/*          className="tw-flex tw-items-center tw-px-6 tw-py-4 tw-text-sm tw-font-medium"*/}
      {/*          aria-current='step'>*/}
      {/*          <span className="tw-flex tw-h-10 tw-w-10 tw-flex-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-border-2 tw-border-primary-600">*/}
      {/*            <span className="tw-text-primary-600">{step.id}</span>*/}
      {/*          </span>*/}
      {/*          <span className="tw-ml-4 tw-text-sm tw-font-medium tw-text-primary-600">*/}
      {/*            {step.name}*/}
      {/*          </span>*/}
      {/*        </button>*/}
      {/*      ) : (*/}
      {/*        <button*/}
      {/*          disabled={true}*/}
      {/*          className="tw-group tw-flex tw-items-center tw-cursor-not-allowed">*/}
      {/*          <span className="tw-flex tw-items-center tw-px-6 tw-py-4 tw-text-sm tw-font-medium">*/}
      {/*            <span className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400'>*/}
      {/*              <span className='text-gray-500 group-hover:text-gray-900'>*/}
      {/*                {step.id}*/}
      {/*              </span>*/}
      {/*            </span>*/}
      {/*            <span className='ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900'>*/}
      {/*              {step.name}*/}
      {/*            </span>*/}
      {/*          </span>*/}
      {/*        </button>*/}
      {/*      )}*/}

      {/*      {stepIdx !== steps.length - 1 ? (*/}
      {/*        <>*/}
      {/*          /!* Arrow separator for lg screens and up *!/*/}
      {/*          <div*/}
      {/*            className='absolute top-0 right-0 hidden h-full w-5 md:block'*/}
      {/*            aria-hidden='true'>*/}
      {/*            <svg*/}
      {/*              className="tw-h-full tw-w-full tw-text-gray-300"*/}
      {/*              viewBox='0 0 22 80'*/}
      {/*              fill='none'*/}
      {/*              preserveAspectRatio='none'>*/}
      {/*              <path*/}
      {/*                d='M0 -2L20 40L0 82'*/}
      {/*                vectorEffect='non-scaling-stroke'*/}
      {/*                stroke='currentcolor'*/}
      {/*                strokeLinejoin='round'*/}
      {/*              />*/}
      {/*            </svg>*/}
      {/*          </div>*/}
      {/*        </>*/}
      {/*      ) : null}*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ol>*/}
    </nav>
  )
}

export default Stepper
