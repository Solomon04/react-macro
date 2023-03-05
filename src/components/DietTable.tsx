import { FunctionComponent } from 'react'

type Props = {
  dietPlans: DietPlan[]
}

const DietTable: FunctionComponent<Props> = ({ dietPlans }) => {
  return (
    <>
      <div className='my-5'>
        <h1 className='font-semibold text-2xl'>Here are your results!</h1>
        <p className='text-gray-600'>
          In just a few minutes, you should receive your macronutrient profile
          delivered to your inbox. We have calculated your calories and popular
          macro splits dependent on what diet you may follow. Most experts
          recommend following a well-balanced diet plan to make sure you receive
          adequate macronutrients for a healthy adult.
        </p>
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y-2 divide-gray-200 text-sm'>
          <thead>
            <tr>
              <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900'>
                Diet
              </th>
              <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900'>
                Total Calories
              </th>
              <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900'>
                Fat
              </th>
              <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900'>
                Carbs
              </th>
              <th className='whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900'>
                Protein
              </th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-200'>
            {dietPlans.map((plan, index) => (
              <tr key={index}>
                <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                  {plan.name}
                </td>
                <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                  {plan.calories} cals/day
                </td>
                <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                  {plan.fat} g/day
                </td>
                <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                  {plan.carbs} g/day
                </td>
                <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                  {plan.protein} g/day
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
