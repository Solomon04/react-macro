export const imperialHeights = [
  { key: '4ft 7in', value: 55 },
  { key: '4ft 8in', value: 56 },
  { key: '4ft 9in', value: 57 },
  { key: '4ft 10in', value: 58 },
  { key: '4ft 11in', value: 59 },
  { key: '5ft 0in', value: 60 },
  { key: '5ft 1in', value: 61 },
  { key: '5ft 2in', value: 62 },
  { key: '5ft 3in', value: 63 },
  { key: '5ft 4in', value: 64 },
  { key: '5ft 5in', value: 65 },
  { key: '5ft 6in', value: 66 },
  { key: '5ft 7in', value: 67 },
  { key: '5ft 8in', value: 68 },
  { key: '5ft 9in', value: 69 },
  { key: '5ft 10in', value: 70 },
  { key: '5ft 11in', value: 71 },
  { key: '6ft 0in', value: 72 },
  { key: '6ft 1in', value: 73 },
  { key: '6ft 2in', value: 74 },
  { key: '6ft 3in', value: 75 },
  { key: '6ft 4in', value: 76 },
  { key: '6ft 5in', value: 77 },
  { key: '6ft 6in', value: 78 },
  { key: '6ft 7in', value: 79 },
  { key: '6ft 8in', value: 80 },
  { key: '6ft 9in', value: 81 },
  { key: '6ft 10in', value: 82 },
  { key: '6ft 11in', value: 83 },
  { key: '7ft 0in', value: 84 },
]
// High protein diet
//
export const activityLevelOptions: ActivityLevel[] = [
  {
    id: 1,
    title: 'Sedentary',
    description: 'Very rarely exercise and a non physical job.',
    value: 1.2,
  },
  {
    id: 2,
    title: 'Lightly Active',
    description:
      'Exercise 1-2 days per week and have a somewhat physical job or active life.',
    value: 1.375,
  },
  {
    id: 3,
    title: 'Moderately Active',
    description: 'Exercise 3-5 days and active lifestyle.',
    value: 1.55,
  },
  {
    id: 4,
    title: 'Heavily Active',
    description:
      'Exercise 6-7 days per week and a physical job or active life.',
    value: 1.725,
  },
  {
    id: 5,
    title: 'Athlete Active',
    description: 'Intense training 1-2 times per day every day.',
    value: 1.9,
  },
]

export const goalOptions: WeightGoal[] = [
  {
    id: 1,
    title: 'Rapid Weight Loss',
    description: 'Lose around 2 lbs (1 kg) per week.', // 1000 daily deficit
    net: -1000,
    help: 'Rapid weight loss should be used with caution. Generally, best for people who need to lose quite a lot of weight but not for people who just need to lose a little bit of weight. If you are already lean and trying to cut weight, this isn’t a good option.',
  },
  {
    id: 2,
    title: 'Moderate Weight Loss',
    description: 'Lose around 1 lb (0.5 kg) per week.', // 500 daily deficit
    net: -500,
    help: 'One of the most popular weight loss goals for most people. It achieves great results, is much easier to adhere to, and is less likely to lose muscle mass.',
  },
  {
    id: 3,
    title: 'Slow Weight Loss',
    description: 'Lose around 0.5 lb (0.25 kg) per week.', // 250 daily deficit
    net: -250,
    help: 'A perfect option for those who want to cut fat gradually and maintain as much muscle mass during a slight calorie deficit. Much easier to adhere to this weight loss goal and long-term sustainability.',
  },
  {
    id: 4,
    title: 'Maintain Weight',
    description: 'Stay the same size.',
    net: 0,
    help: 'You’ve reached your ideal body goals and want to maintain your current muscle mass and body fat percentage.',
  },
  {
    id: 5,
    title: 'Slow Weight Gain',
    description: 'Gain about 0.5lb (0.25kg) per week.', // 250 daily surplus
    net: 250,
    help: 'Perfect for those who want to maximize muscle growth recovery while minimizing the potential of gaining body fat.',
  },
  {
    id: 6,
    title: 'Moderate Weight Gain',
    description: 'Gain around 1 lb (0.5 kg) per week.', // 500 daily surplus
    net: 500,
    help: 'Ideal for those who are beginner weightlifters or hard gainers. Those who are looking to maximize muscle growth potential for size and strength development. You most likely will experience an increase in body fat.',
  },
]

export const consultingOptions: ConsultingOption[] = [
  {
    id: 1,
    title: 'Meal Planning',
  },
  {
    id: 2,
    title: 'Weight Loss Coaching',
  },
  {
    id: 3,
    title: 'Diet Consultation',
  },
  {
    id: 4,
    title: '30 Minute Consulting',
  },
  {
    id: 5,
    title: 'None',
  },
  {
    id: 6,
    title: 'Other',
  },
]

export const macroExperienceOptions: MacroSelectOption[] = [
  {
    id: 1,
    title: 'Beginner',
    description: 'I have never tracked macros and barely understand them.',
  },
  {
    id: 2,
    title: 'Intermediate',
    description:
      'I know what macros are and I am somewhat confident in tracking them.',
  },
  {
    id: 3,
    title: 'Advanced',
    description:
      'I have been tracking my macros for years and teaching others how.',
  },
]

export const weightliftingExperienceOptions = [
  {
    id: 1,
    title: 'Beginner',
    description: "I'm a complete noob and just starting to learn.",
  },
  {
    id: 2,
    title: 'Intermediate',
    description:
      "I've been training for 1-2 years and know somewhat about nutrition.\n",
  },
  {
    id: 3,
    title: 'Advanced',
    description:
      "I'm a seasoned veteran and know my way around training and nutrition.",
  },
]

export const steps = [
  {
    id: 1,
    name: 'Your Experience',
    description: 'Experience with macros & strength training.',
    href: '#',
    status: 'complete',
  },
  {
    id: 2,
    name: 'Physical Attributes',
    description: 'Cursus semper viverra.',
    href: '#',
    status: 'current',
  },
  {
    id: 3,
    name: 'Activity Level',
    description: 'Penatibus eu quis ante.',
    href: '#',
    status: 'upcoming',
  },
  {
    id: 4,
    name: 'Your goals',
    description: 'Penatibus eu quis ante.',
    href: '#',
    status: 'upcoming',
  },
]
