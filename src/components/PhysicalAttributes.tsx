import { FunctionComponent } from 'react'
import { imperialHeights } from '../data'

type Props = {
  bodyFatPercentage: any
  setBodyFatPercentage: any
  unit: any
  setUnit: any
  height: any
  setHeight: any
  weight: any
  setWeight: any
  sex: any
  setSex: any
  age: any
  setAge: any
}

const PhysicalAttributes: FunctionComponent<Props> = ({
  bodyFatPercentage,
  setBodyFatPercentage,
  unit,
  setUnit,
  setHeight,
  height,
  sex,
  setSex,
  weight,
  setWeight,
  setAge,
  age,
}) => {
  return (
    <>
      <div className='col-span-2'>
        <label htmlFor='unit' className='text-base font-medium text-gray-900'>
          Unit
        </label>
        <select
          id='unit'
          name='unit'
          className='mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-4 block text-sm font-medium text-gray-900 placeholder:text-sm'
          onChange={(e) => setUnit(e.target.value)}
          value={unit}
          required={true}>
          <option>Imperial</option>
          <option>Metric</option>
        </select>
      </div>

      <div className='col-span-2'>
        <label htmlFor='gender' className='text-base font-medium text-gray-900'>
          Sex
        </label>
        <select
          id='gender'
          name='gender'
          className='mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-4 block text-sm font-medium text-gray-900 placeholder:text-sm'
          onChange={(e) => setSex(e.target.value)}
          value={sex}
          required={true}>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      <div className='col-span-2'>
        <label htmlFor='weight' className='text-base font-medium text-gray-900'>
          Weight ({unit === 'Imperial' ? 'lbs' : 'kg'})
        </label>
        <div className=''>
          <input
            type='number'
            min={5}
            name='weight'
            id='weight'
            className='mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-4 block text-sm font-medium text-gray-900 placeholder:text-sm'
            placeholder={unit === 'Imperial' ? 'lbs' : 'kg'}
            required={true}
            value={weight}
            onChange={(e) => setWeight(e.target.valueAsNumber)}
          />
        </div>
      </div>

      <div className='col-span-2'>
        <label htmlFor='height' className='text-base font-medium text-gray-900'>
          Height ({unit === 'Imperial' ? 'ft' : 'cm'})
        </label>
        {unit === 'Imperial' ? (
          <select
            name='height'
            className='mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-4 block text-sm font-medium text-gray-900 placeholder:text-sm'
            id='height'
            value={height}
            onChange={(e) => setHeight(e.target.value)}>
            {imperialHeights.map((imperialHeight) => (
              <option key={imperialHeight.key} value={imperialHeight.value}>
                {imperialHeight.key}
              </option>
            ))}
          </select>
        ) : (
          <input
            type='number'
            min={30}
            name='height'
            id='height'
            className='mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-4 block text-sm font-medium text-gray-900 placeholder:text-sm'
            placeholder={'cm'}
            value={height}
            onChange={(e) => setHeight(e.target.valueAsNumber)}
          />
        )}
      </div>

      <div className='col-span-2'>
        <label htmlFor='age' className='text-base font-medium text-gray-900'>
          Age
        </label>
        <input
          type='number'
          min={1}
          name='age'
          id='age'
          className='mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-4 block text-sm font-medium text-gray-900 placeholder:text-sm'
          value={age}
          onChange={(e) => setAge(e.target.valueAsNumber)}
        />
      </div>

      <div className='col-span-2'>
        <label
          htmlFor='body_fat'
          className='text-base font-medium text-gray-900'>
          Body Fat Percentage (optional)
        </label>
        <input
          type='number'
          min={2}
          name='body_fat'
          id='body_fat'
          className='mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-4 block text-sm font-medium text-gray-900 placeholder:text-sm'
          value={bodyFatPercentage}
          max={60}
        />
      </div>
    </>
  )
}

export default PhysicalAttributes
