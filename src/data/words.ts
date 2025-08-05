import { Category, WordData } from '../types/game';

export const WORDS_BY_CATEGORY: Record<Category, WordData[]> = {
  fruits: [
    { word: 'APPLE', hint: 'Red or green, crunchy and sweet! 🍎' },
    { word: 'BANANA', hint: 'Yellow and curved, monkeys love it! 🍌' },
    { word: 'ORANGE', hint: 'Round and orange, full of vitamin C! 🍊' },
    { word: 'STRAWBERRY', hint: 'Red with tiny seeds on the outside! 🍓' },
    { word: 'WATERMELON', hint: 'Big, green outside, red inside, perfect for summer! 🍉' },
    { word: 'PINEAPPLE', hint: 'Spiky outside, sweet inside, grows in tropical places! 🍍' },
    { word: 'GRAPES', hint: 'Small, round, grow in bunches, can be purple or green! 🍇' },
    { word: 'CHERRY', hint: 'Small, red, and comes in pairs on a stem! 🍒' },
    { word: 'MANGO', hint: 'Tropical fruit, orange inside, very sweet and juicy! 🥭' },
    { word: 'PEACH', hint: 'Fuzzy skin, sweet and juicy, has a big pit inside!' },
    { word: 'BLUEBERRY', hint: 'Tiny, blue, grows on bushes, great in pancakes!' },
    { word: 'KIWI', hint: 'Brown and fuzzy outside, green inside with black seeds!' },
    { word: 'COCONUT', hint: 'Hard brown shell, white inside, grows on palm trees! 🥥' },
    { word: 'LEMON', hint: 'Yellow and sour, makes great lemonade! 🍋' },
    { word: 'LIME', hint: 'Small, green, and very sour, used in cooking!' }
  ],
  animals: [
    { word: 'ELEPHANT', hint: 'Huge gray animal with a long trunk and big ears! 🐘' },
    { word: 'GIRAFFE', hint: 'Tallest animal in the world with a super long neck! 🦒' },
    { word: 'TIGER', hint: 'Orange cat with black stripes, lives in the jungle! 🐅' },
    { word: 'PENGUIN', hint: 'Black and white bird that slides on ice and cannot fly! 🐧' },
    { word: 'DOLPHIN', hint: 'Smart sea animal that jumps and plays in the water! 🐬' },
    { word: 'BUTTERFLY', hint: 'Colorful insect with pretty wings that flutter around flowers! 🦋' },
    { word: 'KANGAROO', hint: 'Jumps around on strong legs and carries babies in a pouch! 🦘' },
    { word: 'OCTOPUS', hint: 'Sea creature with eight long arms and can change colors! 🐙' },
    { word: 'FLAMINGO', hint: 'Pink bird with long legs that stands on one foot! 🦩' },
    { word: 'CHEETAH', hint: 'Fastest land animal with spots, can run super fast! 🐆' },
    { word: 'MONKEY', hint: 'Swings from trees, loves bananas, and is very playful! 🐒' },
    { word: 'ZEBRA', hint: 'Looks like a horse but has black and white stripes! 🦓' },
    { word: 'LION', hint: 'King of the jungle with a big mane, goes ROAR! 🦁' },
    { word: 'TURTLE', hint: 'Slow animal that carries its house on its back! 🐢' },
    { word: 'RABBIT', hint: 'Fluffy animal with long ears that hops and loves carrots! 🐰' }
  ],
  vegetables: [
    { word: 'CARROT', hint: 'Orange and crunchy, rabbits love it, good for your eyes! 🥕' },
    { word: 'BROCCOLI', hint: 'Green like tiny trees, makes you strong like Popeye! 🥦' },
    { word: 'POTATO', hint: 'Brown outside, white inside, makes yummy french fries! 🥔' },
    { word: 'TOMATO', hint: 'Red and juicy, used on pizza and in salads! 🍅' },
    { word: 'CUCUMBER', hint: 'Green and crunchy, mostly water, great in salads!' },
    { word: 'LETTUCE', hint: 'Green leafy vegetable, the base of most salads! 🥬' },
    { word: 'PEPPER', hint: 'Can be red, yellow, or green, crunchy and sweet!' },
    { word: 'SPINACH', hint: 'Dark green leaves that make you strong like Popeye!' },
    { word: 'CORN', hint: 'Yellow kernels on a cob, tasty with butter! 🌽' },
    { word: 'PUMPKIN', hint: 'Big, orange, used for Halloween jack-o-lanterns! 🎃' },
    { word: 'ONION', hint: 'Makes you cry when you cut it, has many layers!' },
    { word: 'CELERY', hint: 'Green and crunchy, makes a loud crunch when you bite it!' },
    { word: 'CABBAGE', hint: 'Round vegetable with lots of green or purple leaves!' },
    { word: 'RADISH', hint: 'Small, red outside, white inside, a bit spicy!' },
    { word: 'BEET', hint: 'Deep red vegetable that can stain your hands purple!' }
  ],
  trivia: [
    { word: 'RAINBOW', hint: 'Colorful arc in the sky after rain with 7 colors! 🌈' },
    { word: 'BICYCLE', hint: 'Two wheels and pedals, you ride it for fun! 🚲' },
    { word: 'BIRTHDAY', hint: 'Special day once a year with cake and candles! 🎂' },
    { word: 'PLAYGROUND', hint: 'Fun place with swings, slides, and monkey bars!' },
    { word: 'TREASURE', hint: 'Hidden gold, jewels, and coins that pirates look for! 💰' },
    { word: 'SUPERHERO', hint: 'Person with special powers who saves the day! 🦸' },
    { word: 'SPACESHIP', hint: 'Rocket that flies to the moon and stars! 🚀' },
    { word: 'DINOSAUR', hint: 'Giant extinct animals that lived millions of years ago! 🦕' },
    { word: 'CASTLE', hint: 'Big stone house where kings and queens live! 🏰' },
    { word: 'FIREWORKS', hint: 'Colorful explosions in the sky that go BOOM! 🎆' },
    { word: 'SNOWMAN', hint: 'Made of three snowballs with a carrot nose! ⛄' },
    { word: 'PIRATE', hint: 'Sailor who looks for treasure and says "Ahoy matey!" 🏴‍☠️' },
    { word: 'WIZARD', hint: 'Magic person with a wand and pointy hat! 🧙' },
    { word: 'ROBOT', hint: 'Metal person that can do cool things and beep! 🤖' },
    { word: 'VOLCANO', hint: 'Mountain that can explode with hot lava! 🌋' }
  ]
};

export const MAX_WRONG_GUESSES = 6;