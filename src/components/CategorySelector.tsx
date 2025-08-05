import React from 'react';
import { Apple, Dog, Carrot, Star } from 'lucide-react';
import { Category } from '../types/game';

interface CategorySelectorProps {
  onCategorySelect: (category: Category) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ onCategorySelect }) => {
  const categories = [
    { 
      id: 'fruits' as Category, 
      name: 'Fruits', 
      icon: Apple, 
      color: 'bg-red-500 hover:bg-red-600',
      description: 'Yummy fruits to eat!'
    },
    { 
      id: 'animals' as Category, 
      name: 'Animals', 
      icon: Dog, 
      color: 'bg-green-500 hover:bg-green-600',
      description: 'Cute animals from around the world!'
    },
    { 
      id: 'vegetables' as Category, 
      name: 'Vegetables', 
      icon: Carrot, 
      color: 'bg-orange-500 hover:bg-orange-600',
      description: 'Healthy veggies to grow strong!'
    },
    { 
      id: 'trivia' as Category, 
      name: 'Fun Stuff', 
      icon: Star, 
      color: 'bg-purple-500 hover:bg-purple-600',
      description: 'Cool things all around us!'
    }
  ];

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-blue-600 mb-2">Choose a Category!</h2>
      <p className="text-lg text-gray-600 mb-8">Pick what kind of words you want to guess</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className={`
                ${category.color} text-white p-6 rounded-2xl shadow-lg 
                transform transition-all duration-200 hover:scale-105 hover:shadow-xl
                active:scale-95 group
              `}
            >
              <div className="flex flex-col items-center space-y-3">
                <IconComponent size={48} className="group-hover:animate-bounce" />
                <h3 className="text-2xl font-bold">{category.name}</h3>
                <p className="text-sm opacity-90">{category.description}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySelector;