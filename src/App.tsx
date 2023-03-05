import { FormEvent, useMemo, useState } from 'react'
import { steps } from './data'
import CallToAction from './components/CallToAction'
import PastExperience from './components/PastExperience'
import TotalActivity from './components/TotalActivity'
import PhysicalAttributes from './components/PhysicalAttributes'
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import Stepper from './components/Stepper'
import Button from './components/Button'
import { calculateTotalDailyExpenditure } from './formulas/tdee'
import {
  balancedFormula,
  highCarbFormula,
  highProteinFormula,
  ketoFormula,
  lowCarbFormula,
} from './formulas/macros'
import DietTable from './components/DietTable'

export default function App() {
  const [currentStep, setCurrentStep] = useState(steps[0])
  const [unit, setUnit] = useState<Unit>('Imperial')
  const [sex, setSex] = useState<Sex>('Male')
  const [age, setAge] = useState(18)
  const [height, setHeight] = useState(72)
  const [weight, setWeight] = useState(180)
  const [activityLevel, setActivityLevel] = useState()
  const [tdee, setTdee] = useState(0)
  const [bmr, setBmr] = useState<number | undefined>()
  const [bodyFatPercentage, setBodyFatPercentage] = useState()
  const [isCalculated] = useMemo(() => {
    return [bmr && tdee]
  }, [bmr, tdee])
  const [macroTrackingExperience, setMacroTrackingExperience] = useState<
    any | null
  >(null)
  const [weightliftingExperience, setWeightliftingExperience] = useState<
    any | null
  >(null)
  const [dietPlans, setDietPlans] = useState<DietPlan[]>([])
  const [goal, setGoal] = useState<WeightGoal | null>(null)
  const [callToAction, setCallToAction] = useState()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [wantsConsulting, setWantsConsulting] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [isCompleted, setIsComplete] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const incrementStep = () => {
    let stepIndex = currentStep.id - 1
    setCurrentStep(steps[stepIndex + 1])
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!lastStep) {
      return incrementStep()
    }

    setSubmitting(true)
    setIsComplete(true)

    const { tdee, bmr, diets } = calculateTotalDailyExpenditure(
      weight,
      height,
      age,
      sex,
      activityLevel,
      unit
    )

    if (goal) {
      let balanced = balancedFormula(tdee + goal.net)
      console.log({ maintain: balancedFormula(tdee), balanced })
      let lowCarb = lowCarbFormula(tdee + goal.net)
      let highCarb = highCarbFormula(tdee + goal.net)
      let highProtein = highProteinFormula(tdee + goal.net)
      let keto = ketoFormula(tdee + goal.net)

      setDietPlans([balanced, lowCarb, highCarb, keto])

      // Send email to the backend
      console.log('Send email to ConvertKIT via API', {
        email: email,
        name: name,
      })
      console.log('Ping sendgrid dynamic template via API', {
        email: email,
        tdee: tdee,
        wantsConsulting: wantsConsulting,
        goal: goal,
        callToAction: callToAction,
        diets: {
          balanced,
          lowCarb,
          highCarb,
          highProtein,
          keto,
        },
      })

      setTdee(tdee)
      setBmr(bmr)
    }
  }
  const handleStepper = (step: any) => {
    setCurrentStep(step)
  }

  const [lastStep] = useMemo(() => {
    return [currentStep.id === 4]
  }, [currentStep])

  return (
    <main className='tw-container tw-mx-auto tw-py-12 tw-px-4 sm:tw-px-0'>
      <Stepper
        isComplete={isCompleted}
        steps={steps}
        onClick={handleStepper}
        currentStep={currentStep}
      />
      <div className=''>
        {/*Results*/}
        {isCalculated && dietPlans.length > 0 ? (
          <DietTable dietPlans={dietPlans} />
        ) : (
          <form onSubmit={(e) => handleSubmit(e)} className='tw-mt-5'>
            <div className='grid grid-cols-1 sm:grid-cols-6 gap-8'>
              {/*Step One: Fill out your attributes*/}
              {currentStep.id === 1 ? (
                <PastExperience
                  weightliftingExperience={weightliftingExperience}
                  setWeightliftingExperience={setWeightliftingExperience}
                  macroTrackingExperience={macroTrackingExperience}
                  setMacroTrackingExperience={setMacroTrackingExperience}
                  isValid={(valid: boolean) => setIsValid(valid)}
                />
              ) : null}

              {currentStep.id === 2 ? (
                <PhysicalAttributes
                  height={height}
                  setHeight={setHeight}
                  age={age}
                  setAge={setAge}
                  bodyFatPercentage={bodyFatPercentage}
                  setBodyFatPercentage={setBodyFatPercentage}
                  sex={sex}
                  setSex={setSex}
                  unit={unit}
                  setUnit={setUnit}
                  weight={weight}
                  setWeight={setWeight}
                />
              ) : null}

              {currentStep.id === 3 ? (
                <TotalActivity
                  activityLevel={activityLevel}
                  setActivityLevel={setActivityLevel}
                  isValid={(valid: boolean) => setIsValid(valid)}
                />
              ) : null}

              {currentStep.id === 4 ? (
                <CallToAction
                  email={email}
                  setEmail={setEmail}
                  goal={goal}
                  setGoal={setGoal}
                  wantsConsulting={wantsConsulting}
                  setWantsConsulting={setWantsConsulting}
                  callToAction={callToAction}
                  setCallToAction={setCallToAction}
                  name={name}
                  setName={setName}
                  isValid={(valid: boolean) => setIsValid(valid)}
                />
              ) : null}
            </div>

            <div className='tw-flex tw-items-center tw-justify-end tw-mt-5 tw-space-x-4'>
              <Button disabled={!isValid} variant='solid' type='submit'>
                {lastStep ? 'See Results' : 'Next'}{' '}
                <ArrowRightCircleIcon className='tw-w-5 tw-h-5 tw-ml-1 tw-stroke-2' />
              </Button>
            </div>
          </form>
        )}
      </div>
    </main>
  )
}
