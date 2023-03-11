import { FunctionComponent } from 'react'

type Props = {
  dietPlans: DietPlan[]
}

const DietTable: FunctionComponent<Props> = ({ dietPlans }) => {
  return (
    <>
      <div className='tw-my-5'>
        <h1 className='tw-font-semibold tw-text-2xl'>Here are your results!</h1>
        <p className='tw-text-gray-600 tw-text-sm'>
          In just a few minutes, you should receive your macronutrient profile
          delivered to your inbox. We have calculated your calories and popular
          macro splits dependent on what diet you may follow. Most experts
          recommend following a well-balanced diet plan to make sure you receive
          adequate macronutrients for a healthy adult.
        </p>
      </div>

      <div className='tw-overflow-x-auto'>
        <table className='tw-min-w-full tw-divide-y-2 tw-divide-gray-200 tw-text-sm'>
          <thead>
            <tr>
              <th className='tw-whitespace-nowrap tw-px-4 tw-py-2 tw-text-left tw-font-medium tw-text-gray-900'>
                Diet
              </th>
              <th className='tw-whitespace-nowrap tw-px-4 tw-py-2 tw-text-left tw-font-medium tw-text-gray-900'>
                Total Calories
              </th>
              <th className='tw-whitespace-nowrap tw-px-4 tw-py-2 tw-text-left tw-font-medium tw-text-gray-900'>
                Fat
              </th>
              <th className='tw-whitespace-nowrap tw-px-4 tw-py-2 tw-text-left tw-font-medium tw-text-gray-900'>
                Carbs
              </th>
              <th className='tw-whitespace-nowrap tw-px-4 tw-py-2 tw-text-left tw-font-medium tw-text-gray-900'>
                Protein
              </th>
            </tr>
          </thead>

          <tbody className='tw-divide-y tw-divide-gray-200'>
            {dietPlans.map((plan, index) => (
              <tr key={index}>
                <td className='tw-whitespace-nowrap tw-px-4 tw-py-2 tw-font-medium tw-text-gray-900'>
                  {plan.name}
                </td>
                <td className='tw-whitespace-nowrap tw-px-4 tw-py-2 tw-text-gray-700'>
                  {plan.calories} cals/day
                </td>
                <td className='tw-whitespace-nowrap tw-px-4 tw-py-2 tw-text-gray-700'>
                  {plan.fats} g/day
                </td>
                <td className='tw-whitespace-nowrap tw-px-4 tw-py-2 tw-text-gray-700'>
                  {plan.carbs} g/day
                </td>
                <td className='tw-whitespace-nowrap tw-px-4 tw-py-2 tw-text-gray-700'>
                  {plan.proteins} g/day
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default DietTable
