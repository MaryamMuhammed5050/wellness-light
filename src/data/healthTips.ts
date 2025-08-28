export interface HealthTip {
  id: number;
  tip: string;
  category: string;
}

export const healthTips: HealthTip[] = [
  {
    id: 1,
    tip: "Drink at least 8 glasses of water daily to stay hydrated and support your body's natural functions.",
    category: "Hydration"
  },
  {
    id: 2,
    tip: "Take a 10-minute walk after meals to aid digestion and improve blood sugar levels.",
    category: "Exercise"
  },
  {
    id: 3,
    tip: "Aim for 7-9 hours of quality sleep each night to boost your immune system and mental clarity.",
    category: "Sleep"
  },
  {
    id: 4,
    tip: "Practice deep breathing for 5 minutes daily to reduce stress and lower blood pressure.",
    category: "Mental Health"
  },
  {
    id: 5,
    tip: "Include colorful fruits and vegetables in your meals for essential vitamins and antioxidants.",
    category: "Nutrition"
  },
  {
    id: 6,
    tip: "Wash your hands regularly for at least 20 seconds to prevent the spread of germs.",
    category: "Hygiene"
  },
  {
    id: 7,
    tip: "Take regular breaks from screens to rest your eyes and prevent digital eye strain.",
    category: "Eye Health"
  }
];

export function getTodaysHealthTip(): HealthTip {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  return healthTips[dayOfYear % healthTips.length];
}