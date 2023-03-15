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
      <div className='tw-col-span-2'>
        <label
          htmlFor='unit'
          className='tw-text-sm tw-font-medium tw-text-gray-900'>
          Unit
        </label>
        <select
          style={{ padding: '.75rem' }}
          id='unit'
          name='unit'
          className='tw-form-input tw-mt-2 tw-cst-pf tw-block tw-w-full tw-rounded-md tw-border-gray-300 tw-shadow-sm focus:tw-border-primary focus:tw-ring-primary sm:tw-text-sm tw-p-4 tw-block tw-text-sm tw-font-medium tw-text-gray-900'
          onChange={(e) => setUnit(e.target.value)}
          value={unit}
          required={true}>
          <option>Imperial</option>
          <option>Metric</option>
        </select>
      </div>

      <div className='tw-col-span-2'>
        <label
          htmlFor='gender'
          className='tw-text-sm tw-font-medium tw-text-gray-900'>
          Sex
        </label>
        <select
          id='gender'
          name='gender'
          className='tw-form-select tw-cst-pf tw-mt-2 tw-block tw-w-full tw-rounded-md tw-border-gray-300 tw-shadow-sm focus:tw-border-primary focus:tw-ring-primary sm:tw-text-sm tw-p-4 tw-block tw-text-sm tw-font-medium tw-text-gray-900'
          onChange={(e) => setSex(e.target.value)}
          value={sex}
          required={true}>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      <div className='tw-col-span-2'>
        <label
          htmlFor='weight'
          className='tw-text-sm tw-font-medium tw-text-gray-900'>
          Weight ({unit === 'Imperial' ? 'lbs' : 'kg'})
        </label>
        <div className=''>
          <input
            type='number'
            min={5}
            name='weight'
            id='weight'
            className='tw-form-input tw-mt-2 tw-cst-pf tw-block tw-w-full tw-rounded-md tw-border-gray-300 tw-shadow-sm focus:tw-border-primary focus:tw-ring-primary sm:tw-text-sm tw-p-4 tw-block tw-text-sm tw-font-medium tw-text-gray-900'
            placeholder={unit === 'Imperial' ? 'lbs' : 'kg'}
            required={true}
            value={weight}
            onChange={(e) => setWeight(e.target.valueAsNumber)}
          />
        </div>
      </div>

      <div className='tw-col-span-2'>
        <label
          htmlFor='height'
          className='tw-text-sm tw-font-medium tw-text-gray-900'>
          Height ({unit === 'Imperial' ? 'ft' : 'cm'})
        </label>
        {unit === 'Imperial' ? (
          <select
            name='height'
            className='tw-form-input tw-mt-2 tw-block tw-w-full tw-rounded-md tw-border-gray-300 tw-shadow-sm focus:tw-border-primary focus:tw-ring-primary sm:tw-text-sm tw-p-4 tw-block tw-text-sm tw-font-medium tw-text-gray-900'
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
            className='tw-form-input tw-mt-2 tw-block tw-w-full tw-rounded-md tw-border-gray-300 tw-shadow-sm focus:tw-border-primary focus:tw-ring-primary sm:tw-text-sm tw-p-4 tw-block tw-text-sm tw-font-medium tw-text-gray-900'
            placeholder={'cm'}
            value={height}
            onChange={(e) => setHeight(e.target.valueAsNumber)}
          />
        )}
      </div>

      <div className='tw-col-span-2'>
        <label
          htmlFor='age'
          className='tw-text-sm tw-font-medium tw-text-gray-900'>
          Age
        </label>
        <input
          type='number'
          min={1}
          name='age'
          id='age'
          className='tw-form-input tw-mt-2 tw-block tw-w-full tw-rounded-md tw-border-gray-300 tw-shadow-sm focus:tw-border-primary focus:tw-ring-primary sm:tw-text-sm tw-p-4 tw-block tw-text-sm tw-font-medium tw-text-gray-900'
          value={age}
          onChange={(e) => setAge(e.target.valueAsNumber)}
        />
      </div>

      <div className='tw-col-span-2'>
        <label
          htmlFor='body_fat'
          className='tw-text-sm tw-font-medium tw-text-gray-900'>
          Body Fat Percentage (optional)
        </label>
        <input
          type='number'
          min={2}
          name='body_fat'
          id='body_fat'
          className='tw-form-input tw-mt-2 tw-block tw-w-full tw-rounded-md tw-border-gray-300 tw-shadow-sm focus:tw-border-primary focus:tw-ring-primary sm:tw-text-sm tw-p-4 tw-block tw-text-sm tw-font-medium tw-text-gray-900'
          value={bodyFatPercentage}
          max={60}
        />
      </div>
    </>
  )
}

export default PhysicalAttributes
