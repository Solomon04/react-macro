export const balancedFormula = (tdee: number): DietPlan => {
  return {
    name: 'Balanced Diet',
    calories: Math.round(tdee),
    fat: Math.round((tdee * 0.3) / 9),
    carbs: Math.round((tdee * 0.4) / 4),
    protein: Math.round((tdee * 0.3) / 4),
  }
}

export const lowCarbFormula = (tdee: number): DietPlan => {
  return {
    name: 'Low Carb Diet',
    calories: Math.round(tdee),
    fat: Math.round((tdee * 0.3) / 9),
    carbs: Math.round((tdee * 0.2) / 4),
    protein: Math.round((tdee * 0.5) / 4),
  }
}

export const highCarbFormula = (tdee: number): DietPlan => {
  return {
    name: 'High Carb Diet',
    calories: Math.round(tdee),
    fat: Math.round((tdee * 0.2) / 9),
    carbs: Math.round((tdee * 0.5) / 4),
    protein: Math.round((tdee * 0.3) / 4),
  }
}

export const highProteinFormula = (tdee: number): DietPlan => {
  return {
    name: 'High Protein Diet',
    calories: Math.round(tdee),
    fat: Math.round((tdee * 0.25) / 9),
    carbs: Math.round((tdee * 0.25) / 4),
    protein: Math.round((tdee * 0.5) / 4),
  }
}

export const ketoFormula = (tdee: number): DietPlan => {
  return {
    name: 'Keto Diet',
    calories: Math.round(tdee),
    fat: Math.round((tdee * 0.5) / 9),
    carbs: Math.round((tdee * 0.1) / 4),
    protein: Math.round((tdee * 0.4) / 4),
  }
}
