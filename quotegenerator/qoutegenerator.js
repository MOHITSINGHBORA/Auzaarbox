const button = document.querySelector("button");
const qoutetext = document.querySelector("#qoute-text");

const qoutes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "You learn more from failure than from success. Don't let it stop you. - Unknown",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen",
    "Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino",
    "We may encounter many defeats but we must not be defeated. - Maya Angelou",
    "Knowing is not enough; we must apply. Wishing is not enough; we must do. - Johann Wolfgang Von Goethe",
    "Whether you think you can or think you can't, you're right. - Henry Ford",
    "Security is mostly a superstition. Life is either a daring adventure or nothing. - Helen Keller",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Creativity is intelligence having fun. - Albert Einstein",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Henry David Thoreau",
    "Obstacles are those frightful things you see when you take your eyes off your goal. - Henry Ford",
    "The distance between insanity and genius is measured only by success. - Bruce Feirstein",
    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
    "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "Someone is sitting in the shade today because someone planted a tree a long time ago. - Warren Buffett",
    "Whenever you see a successful person, you only see the public glories, never the private sacrifices. - Vaibhav Shah",
    "Don't cry because it's over, smile because it happened. - Dr. Seuss",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
    "A person who never made a mistake never tried anything new. - Albert Einstein",
    "The person who says it cannot be done should not interrupt the person who is doing it. - Chinese Proverb",
    "There are no traffic jams along the extra mile. - Roger Staubach",
    "It is never too late to be what you might have been. - George Eliot",
    "You become what you believe. - Oprah Winfrey",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "Go confidently in the direction of your dreams. Live the life you have imagined. - Henry David Thoreau",
    "Everything you've ever wanted is on the other side of fear. - George Addair",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
    "Fall seven times and stand up eight. - Japanese Proverb",
    "Everything has beauty, but not everyone can see. - Confucius",
    "How wonderful it is that nobody need wait a single moment before starting to improve the world. - Anne Frank",
    "Life is 10% what happens to me and 90% of how I react to it. - Charles Swindoll",
    "An unexamined life is not worth living. - Socrates",
    "Eighty percent of success is showing up. - Woody Allen",
    "Your life does not get better by chance, it gets better by change. - Jim Rohn",
    "The mind is everything. What you think you become. - Buddha",
    "The best revenge is massive success. - Frank Sinatra"
];

function getqoute(){
     const randomIndex = Math.floor(Math.random() * qoutes.length);
     qoutetext.textContent = qoutes[randomIndex];
};

 

button.addEventListener('click', getqoute);
