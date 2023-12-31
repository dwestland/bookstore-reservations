
interface BookImage {
    [key: string]: any;
  }
  
export const books = [
    {
        id: 1,
        title: 'Think and Grow Rich',
        summary: 'Napoleon Hill reveals the secret to success shared by wealthy individuals, guiding readers to unlock their entrepreneurial potential and personal growth.',
        author: 'Napoleon Hill',
        featuredBook: true,
        topRated: true,
        newlyAdded: false,
        rating: 9,
        availability: true,
        isReserved: false,
        wasReserved: true,
        genre: 'Self-help Business',
        coverImage: 'think-and-grow-rich.jpg',
    },
    {
        id: 2,
        title: 'The Lean Startup',
        summary: 'Eric Ries presents a new approach to business that\'s transforming the way new products are built and launched, encouraging continuous innovation.',
        author: 'Eric Ries',
        featuredBook: false,
        topRated: true,
        newlyAdded: true,
        rating: 9,
        availability: true,
        isReserved: false,
        wasReserved: false,
        genre: 'Self-help Business',
        coverImage: 'the-lean-startup.jpg',
    },
    {
        id: 3,
        title: 'Pride and Prejudice',
        summary: 'In Jane Austen’s iconic love story, Elizabeth Bennet and Mr. Darcy navigate societal expectations and personal pride, finding love in unexpected places.',
        author: 'Jane Austen',
        featuredBook: false,
        topRated: false,
        newlyAdded: false,
        rating: 8,
        availability: true,
        isReserved: true,
        wasReserved: true,
        genre: 'Romance',
        coverImage: 'pride-and-prejudice.jpg',
    },
    {
        id: 4,
        title: 'Outlander',
        summary: 'Diana Gabaldon transports readers to 18th-century Scotland, where a time-traveling nurse falls for a rugged Highlander, changing her life forever.',
        author: 'Diana Gabaldon',
        featuredBook: false,
        topRated: true,
        newlyAdded: true,
        rating: 9,
        availability: false,
        isReserved: true,
        wasReserved: false,
        genre: 'Romance',
        coverImage: 'outlander.jpg',
    },
    {
        id: 5,
        title: 'Steve Jobs',
        summary: 'Walter Isaacson provides an in-depth look at the life of Steve Jobs, charting his journey from college dropout to Apple CEO.',
        author: 'Walter Isaacson',
        featuredBook: false,
        topRated: false,
        newlyAdded: false,
        rating: 9,
        availability: true,
        isReserved: false,
        wasReserved: true,
        genre: 'Biography',
        coverImage: 'steve-jobs.jpg',
    },
    {
        id: 6,
        title: 'The Diary of a Young Girl',
        summary: 'The poignant and powerful diary of Anne Frank provides a first-hand account of life and struggle during the Holocaust.',
        author: 'Anne Frank',
        featuredBook: true,
        topRated: true,
        newlyAdded: false,
        rating: 10,
        availability: false,
        isReserved: true,
        wasReserved: true,
        genre: 'Biography',
        coverImage: 'the-diary-of-a-young-girl.jpg',
    },
    {
        id: 7,
        title: 'The Cat in the Hat',
        summary: 'Dr. Seuss tells the tale of a mischievous cat and his chaotic adventures, teaching children about balance and responsibility.',
        author: 'Dr. Seuss',
        featuredBook: false,
        topRated: false,
        newlyAdded: true,
        rating: 8,
        availability: true,
        isReserved: false,
        wasReserved: false,
        genre: 'Children\'s',
        coverImage: 'the-cat-in-the-hat.jpg',
    },
    {
        id: 8,
        title: 'Harry Potter and the Sorcerer\'s Stone',
        summary: 'J.K. Rowling introduces readers to the magical world of Hogwarts, where a young wizard, Harry Potter, begins his exciting adventure.',
        author: 'J.K. Rowling',
        featuredBook: false,
        topRated: true,
        newlyAdded: false,
        rating: 9,
        availability: true,
        isReserved: true,
        wasReserved: true,
        genre: 'Children\'s',
        coverImage: 'harry-potter-and-the-sorcerers-stone.jpg',
    },
    {
        id: 9,
        title: 'To Kill a Mockingbird',
        summary: 'Harper Lee explores themes of racial inequality and lost innocence through the eyes of young Scout Finch in the Deep South.',
        author: 'Harper Lee',
        featuredBook: true,
        topRated: true,
        newlyAdded: false,
        rating: 10,
        availability: false,
        isReserved: true,
        wasReserved: true,
        genre: 'Fiction',
        coverImage: 'to-kill-a-mockingbird.jpg',
    },
    {
        id: 10,
        title: '1984',
        summary: 'George Orwell presents a chilling dystopian future where Big Brother watches every move, exploring themes of totalitarianism and censorship.',
        author: 'George Orwell',
        featuredBook: false,
        topRated: true,
        newlyAdded: true,
        rating: 9,
        availability: true,
        isReserved: false,
        wasReserved: false,
        genre: 'Fiction',
        coverImage: '1984.jpg',
    },
    {
        id: 11,
        title: 'Becoming',
        summary: 'Michelle Obama takes readers on an intimate journey, recounting the experiences that shaped her, from her childhood to her years in the White House.',
        author: 'Michelle Obama',
        featuredBook: false,
        topRated: true,
        newlyAdded: true,
        rating: 9,
        availability: false,
        isReserved: true,
        wasReserved: false,
        genre: 'Biography',
        coverImage: 'becoming.jpg',
    },
    {
        id: 12,
        title: 'Where the Wild Things Are',
        summary: 'Maurice Sendak spins a tale of imagination and adventure, capturing the heart of rebellious children who long for a world where they can be king.',
        author: 'Maurice Sendak',
        featuredBook: false,
        topRated: false,
        newlyAdded: true,
        rating: 8,
        availability: true,
        isReserved: false,
        wasReserved: true,
        genre: 'Children\'s',
        coverImage: 'where-the-wild-things-are.jpg',
    },
    {
        id: 13,
        title: 'The Alchemist',
        summary: 'Paulo Coelho\'s masterpiece tells the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure.',
        author: 'Paulo Coelho',
        featuredBook: true,
        topRated: true,
        newlyAdded: false,
        rating: 9,
        availability: true,
        isReserved: true,
        wasReserved: false,
        genre: 'Fiction',
        coverImage: 'the-alchemist.jpg',
    },
    {
        id: 14,
        title: 'Bridget Jones\'s Diary',
        summary: 'Helen Fielding presents a year in the life of Bridget Jones, a single woman in her thirties navigating love, life, and self-improvement.',
        author: 'Helen Fielding',
        featuredBook: false,
        topRated: false,
        newlyAdded: true,
        rating: 8,
        availability: true,
        isReserved: false,
        wasReserved: false,
        genre: 'Romance',
        coverImage: 'bridget-joness-diary.jpg',
    },
    {
        id: 15,
        title: 'The 4-Hour Workweek',
        summary: 'Timothy Ferriss provides a step-by-step guide to living the "luxury lifestyle" by working less and enjoying more personal time.',
        author: 'Timothy Ferriss',
        featuredBook: false,
        topRated: true,
        newlyAdded: false,
        rating: 9,
        availability: false,
        isReserved: true,
        wasReserved: false,
        genre: 'Self-help Business',
        coverImage: 'the-4-hour-workweek.jpg',
    },
    {
        id: 16,
        title: 'The Very Hungry Caterpillar',
        summary: 'Eric Carle\'s classic picture book follows the journey of a hungry caterpillar as it eats its way to becoming a beautiful butterfly.',
        author: 'Eric Carle',
        featuredBook: false,
        topRated: false,
        newlyAdded: true,
        rating: 9,
        availability: true,
        isReserved: false,
        wasReserved: true,
        genre: 'Children\'s',
        coverImage: 'the-very-hungry-caterpillar.jpg',
    },
    {
        id: 17,
        title: 'Life of Pi',
        summary: 'Yann Martel spins a tale of adventure and discovery as a young man survives a disaster at sea and forms an unexpected connection with another survivor...a terrifying Bengal tiger.',
        author: 'Yann Martel',
        featuredBook: false,
        topRated: true,
        newlyAdded: false,
        rating: 9,
        availability: false,
        isReserved: true,
        wasReserved: false,
        genre: 'Fiction',
        coverImage: 'life-of-pi.jpg',
    },
    {
        id: 18,
        title: 'Eleanor Oliphant is Completely Fine',
        summary: 'Gail Honeyman introduces readers to Eleanor Oliphant, a socially awkward, routine-oriented loner, whose life changes after a chance encounter.',
        author: 'Gail Honeyman',
        featuredBook: true,
        topRated: false,
        newlyAdded: true,
        rating: 9,
        availability: true,
        isReserved: false,
        wasReserved: false,
        genre: 'Romance',
        coverImage: 'eleanor-oliphant-is-completely-fine.jpg',
    },
    {
        id: 19,
        title: 'Elon Musk',
        summary: 'Ashlee Vance delves into the extraordinary life of Silicon Valley\'s most audacious entrepreneur, Elon Musk, providing a fascinating look into the future of the tech industry.',
        author: 'Ashlee Vance',
        featuredBook: false,
        topRated: true,
        newlyAdded: false,
        rating: 8,
        availability: true,
        isReserved: true,
        wasReserved: true,
        genre: 'Biography',
        coverImage: 'elon-musk-tesla-spacex-and-the-quest-for-a-fantastic-future.jpg',
    },
    {
        id: 20,
        title: 'Matilda',
        summary: 'Roald Dahl\'s heartwarming tale tells the story of a brilliant young girl named Matilda, who uses her wit and special powers to overcome obstacles.',
        author: 'Roald Dahl',
        featuredBook: false,
        topRated: true,
        newlyAdded: false,
        rating: 9,
        availability: true,
        isReserved: false,
        wasReserved: false,
        genre: 'Children\'s',
        coverImage: 'matilda.jpg',
    },
    {
        id: 21,
        title: 'The Great Gatsby',
        summary: 'F. Scott Fitzgerald tells the story of Jay Gatsby, a man with an obsession for the past and his love for the beautiful Daisy Buchanan.',
        author: 'F. Scott Fitzgerald',
        featuredBook: false,
        topRated: true,
        newlyAdded: false,
        rating: 10,
        availability: false,
        isReserved: true,
        wasReserved: false,
        genre: 'Fiction',
        coverImage: 'the-great-gatsby.jpg',
    },
    {
        id: 22,
        title: 'The Fault in Our Stars',
        summary: 'John Green introduces two extraordinary teenagers who share an acerbic wit, a disdain for the conventional, and a love that sweeps them on an unforgettable journey.',
        author: 'John Green',
        featuredBook: true,
        topRated: false,
        newlyAdded: false,
        rating: 9,
        availability: true,
        isReserved: false,
        wasReserved: true,
        genre: 'Romance',
        coverImage: 'the-fault-in-our-stars.jpg',
    },
    {
        id: 23,
        title: 'Lean In: Women, Work, and the Will to Lead',
        summary: 'Sheryl Sandberg investigates why women\'s progress in achieving leadership roles has stalled, and explains the ways in which women can combine professional achievement with personal fulfillment.',
        author: 'Sheryl Sandberg',
        featuredBook: false,
        topRated: true,
        newlyAdded: true,
        rating: 8,
        availability: true,
        isReserved: false,
        wasReserved: false,
        genre: 'Self-help Business',
        coverImage: 'lean-in-women-work-and-the-will-to-lead.jpg',
    },
    {
        id: 24,
        title: 'I Know Why the Caged Bird Sings',
        summary: 'Maya Angelou tells her life story up to the age of seventeen, revealing the struggles and triumphs of her formative years with a powerful, poetic voice.',
        author: 'Maya Angelou',
        featuredBook: false,
        topRated: true,
        newlyAdded: false,
        rating: 9,
        availability: false,
        isReserved: true,
        wasReserved: false,
        genre: 'Biography',
        coverImage: 'i-know-why-the-caged-bird-sings.jpg',
    },
    {
        id: 25,
        title: 'Green Eggs and Ham',
        summary: 'Dr. Seuss presents an unforgettable character determined to make his companion try a plate of green eggs and ham.',
        author: 'Dr. Seuss',
        featuredBook: true,
        topRated: false,
        newlyAdded: true,
        rating: 9,
        availability: true,
        isReserved: false,
        wasReserved: false,
        genre: 'Children\'s',
        coverImage: 'green-eggs-and-ham.jpg',
    },
    {
        id: 26,
        title: 'A Game of Thrones',
        summary: 'George R. R. Martin crafts a fantasy world of intrigue and betrayal, love and honor, and the never-ending quest for power.',
        author: 'George R. R. Martin',
        featuredBook: false,
        topRated: true,
        newlyAdded: false,
        rating: 9,
        availability: true,
        isReserved: true,
        wasReserved: true,
        genre: 'Fiction',
        coverImage: 'a-game-of-thrones.jpg',
    },
    {
        id: 27,
        title: 'Me Before You',
        summary: 'Jojo Moyes presents a romance between a small-town girl and a wheelchair-bound man, who teach each other how to live and love.',
        author: 'Jojo Moyes',
        featuredBook: false,
        topRated: false,
        newlyAdded: true,
        rating: 9,
        availability: true,
        isReserved: false,
        wasReserved: false,
        genre: 'Romance',
        coverImage: 'me-before-you.jpg',
    },
    {
        id: 28,
        title: 'Start With Why',
        summary: 'Simon Sinek demonstrates how successful leaders are able to inspire action by starting with the question "Why?"',
        author: 'Simon Sinek',
        featuredBook: false,
        topRated: true,
        newlyAdded: false,
        rating: 9,
        availability: false,
        isReserved: true,
        wasReserved: false,
        genre: 'Self-help Business',
        coverImage: 'start-with-why.jpg',
    },
    {
        id: 29,
        title: 'Maus',
        summary: 'Art Spiegelman depicts the horrors of the Holocaust through a unique, graphic novel format, portraying Jews as mice and Nazis as cats.',
        author: 'Art Spiegelman',
        featuredBook: false,
        topRated: true,
        newlyAdded: true,
        rating: 9,
        availability: true,
        isReserved: false,
        wasReserved: true,
        genre: 'Biography',
        coverImage: 'maus.jpg',
    },
    {
        id: 30,
        title: 'The Little Prince',
        summary: 'Antoine de Saint-Exupéry shares the story of a young prince who travels from planet to planet, learning about the bizarre behavior of adults.',
        author: 'Antoine de Saint-Exupéry',
        featuredBook: true,
        topRated: true,
        newlyAdded: false,
        rating: 10,
        availability: false,
        isReserved: true,
        wasReserved: false,
        genre: 'Children\'s',
        coverImage: 'the-little-prince.jpg',
    },
]

export const images: BookImage = {
    'think-and-grow-rich.jpg': require('@/assets/images/think-and-grow-rich.jpg'),
    'the-lean-startup.jpg': require('@/assets/images/the-lean-startup.jpg'),
    'pride-and-prejudice.jpg': require('@/assets/images/pride-and-prejudice.jpg'),
    'outlander.jpg': require('@/assets/images/outlander.jpg'),
    'steve-jobs.jpg': require('@/assets/images/steve-jobs.jpg'),
    'the-diary-of-a-young-girl.jpg': require('@/assets/images/the-diary-of-a-young-girl.jpg'),
    'the-cat-in-the-hat.jpg': require('@/assets/images/the-cat-in-the-hat.jpg'),
    'harry-potter-and-the-sorcerers-stone.jpg': require('@/assets/images/harry-potter-and-the-sorcerers-stone.jpg'),
    'to-kill-a-mockingbird.jpg': require('@/assets/images/to-kill-a-mockingbird.jpg'), 
    '1984.jpg': require('@/assets/images/1984.jpg'),
    'becoming.jpg': require('@/assets/images/becoming.jpg'),
    'where-the-wild-things-are.jpg': require('@/assets/images/where-the-wild-things-are.jpg'),
    'the-alchemist.jpg': require('@/assets/images/the-alchemist.jpg'),
    'bridget-joness-diary.jpg': require('@/assets/images/bridget-joness-diary.jpg'),
    'the-4-hour-workweek.jpg': require('@/assets/images/the-4-hour-workweek.jpg'),
    'the-very-hungry-caterpillar.jpg': require('@/assets/images/the-very-hungry-caterpillar.jpg'),
    'life-of-pi.jpg': require('@/assets/images/life-of-pi.jpg'),
    'eleanor-oliphant-is-completely-fine.jpg': require('@/assets/images/eleanor-oliphant-is-completely-fine.jpg'),
    'elon-musk-tesla-spacex-and-the-quest-for-a-fantastic-future.jpg': require('@/assets/images/elon-musk-tesla-spacex-and-the-quest-for-a-fantastic-future.jpg'),
    'matilda.jpg': require('@/assets/images/matilda.jpg'),
    'the-great-gatsby.jpg': require('@/assets/images/the-great-gatsby.jpg'),
    'the-fault-in-our-stars.jpg': require('@/assets/images/the-fault-in-our-stars.jpg'),
    'lean-in-women-work-and-the-will-to-lead.jpg': require('@/assets/images/lean-in-women-work-and-the-will-to-lead.jpg'),
    'i-know-why-the-caged-bird-sings.jpg': require('@/assets/images/i-know-why-the-caged-bird-sings.jpg'),
    'green-eggs-and-ham.jpg': require('@/assets/images/green-eggs-and-ham.jpg'),
    'a-game-of-thrones.jpg': require('@/assets/images/a-game-of-thrones.jpg'),
    'me-before-you.jpg': require('@/assets/images/me-before-you.jpg'),
    'start-with-why.jpg': require('@/assets/images/start-with-why.jpg'),
    'maus.jpg': require('@/assets/images/maus.jpg'),
    'the-little-prince.jpg': require('@/assets/images/the-little-prince.jpg')
  }
