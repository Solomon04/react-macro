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
      <ol role='list' className='space-y-4 md:flex md:space-y-0 md:space-x-8'>
        {steps.map((step) => (
          <li key={step.name} className='md:flex-1'>
            {currentStep.id > step.id || isComplete ? (
              <button
                onClick={() => onClick(step)}
                className='group flex flex-col border-l-4 border-primary-600 py-2 pl-4 hover:border-primary-800 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0'>
                <span className='text-sm font-medium text-primary-600 group-hover:text-primary-800'>
                  {step.id}
                </span>
                <span className='text-sm font-medium'>{step.name}</span>
              </button>
            ) : step === currentStep ? (
              <button
                onClick={() => onClick(step)}
                className='flex flex-col border-l-4 border-primary-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0'
                aria-current='step'>
                <span className='text-sm font-medium text-primary-600'>
                  {step.id}
                </span>
                <span className='text-sm font-medium'>{step.name}</span>
              </button>
            ) : (
              <button
                onClick={() => onClick(step)}
                className='group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0'>
                <span className='text-sm font-medium text-gray-500 group-hover:text-gray-700'>
                  {step.id}
                </span>
                <span className='text-sm font-medium'>{step.name}</span>
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
      {/*          className='group flex w-full items-center'>*/}
      {/*          <span className='flex items-center px-6 py-4 text-sm font-medium'>*/}
      {/*            <span className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 group-hover:bg-primary-800'>*/}
      {/*              <CheckIcon*/}
      {/*                className='h-6 w-6 text-white'*/}
      {/*                aria-hidden='true'*/}
      {/*              />*/}
      {/*            </span>*/}
      {/*            <span className='ml-4 text-sm font-medium text-gray-900'>*/}
      {/*              {step.name}*/}
      {/*            </span>*/}
      {/*          </span>*/}
      {/*        </button>*/}
      {/*      ) : step === currentStep ? (*/}
      {/*        <button*/}
      {/*          onClick={() => onClick(step)}*/}
      {/*          className='flex items-center px-6 py-4 text-sm font-medium'*/}
      {/*          aria-current='step'>*/}
      {/*          <span className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary-600'>*/}
      {/*            <span className='text-primary-600'>{step.id}</span>*/}
      {/*          </span>*/}
      {/*          <span className='ml-4 text-sm font-medium text-primary-600'>*/}
      {/*            {step.name}*/}
      {/*          </span>*/}
      {/*        </button>*/}
      {/*      ) : (*/}
      {/*        <button*/}
      {/*          disabled={true}*/}
      {/*          className='group flex items-center cursor-not-allowed'>*/}
      {/*          <span className='flex items-center px-6 py-4 text-sm font-medium'>*/}
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
      {/*              className='h-full w-full text-gray-300'*/}
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
