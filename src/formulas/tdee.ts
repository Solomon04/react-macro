import {
  balancedFormula,
  highCarbFormula,
  highProteinFormula,
  ketoFormula,
  lowCarbFormula,
} from '../formulas/macros'

export const calculateCaloriesForWeightLoss = (
  TDEE: number,
  weightLossPercent: number
) => {
  let calorieDeficit = TDEE * (weightLossPercent / 100)
  return TDEE - calorieDeficit
}

export const calculateCaloriesForWeightGain = (
  TDEE: number,
  weightLossPercent: number
) => {
  let calorieDeficit = TDEE * (weightLossPercent / 100)
  return TDEE + calorieDeficit
}

export const calculateTotalDailyExpenditure = (
  weight: number,
  height: number,
  age: number,
  sex: Sex,
  activityLevel: any,
  unit: Unit,
  bf?: number
) => {
  let bmr

  // Mifflin-St Jeor equation
  if (unit === 'Imperial') {
    weight = weight / 2.2046
    height = height * 2.54
  }

  bmr = 10 * weight + 6.25 * height - 5 * age + (sex === 'Male' ? 5 : -161)

  let tdee = bmr * activityLevel.value
  let balanced = balancedFormula(tdee)

  let lowCarb = lowCarbFormula(tdee)

  let highCarb = highCarbFormula(tdee)

  let highProtein = highProteinFormula(tdee)

  let keto = ketoFormula(tdee)

  console.log({ tdee })
  console.table(balanced)

  return {
    bmr,
    tdee,
    diets: {
      highCarb,
      highProtein,
      lowCarb,
      balanced,
      keto,
    },
  }
}
