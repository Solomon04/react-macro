type Sex = 'Male' | 'Female'
type Unit = 'Imperial' | 'Metric'
type ActivityLevel = {
  id: number
  title: string
  description?: string
  value: number
}

type ConsultingOption = {
  id: number
  title: string
}

type MacroSelectOption = {
  id: number
  title: string
  description: string
}

type DietPlan = {
  name: string
  fat: number
  carbs: number
  protein: number
  calories: number
}

// id: 5,
//     title: 'Slow weight gain',
//     description: 'Gain about  0.5lb per week', // 250 daily surplus
//     net: 250,

type WeightGoal = {
  id: number
  title: string
  description: string
  net: number
  help: string
}
