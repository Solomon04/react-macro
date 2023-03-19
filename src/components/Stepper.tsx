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
      <div>
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
