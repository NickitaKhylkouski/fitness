const fitnessQuotes = [
    { text: "The groundwork for all happiness is good health.", author: "Leigh Hunt" },
    { text: "Take care of your body. It's the only place you have to live.", author: "Jim Rohn" },
    { text: "Your body can stand almost anything. It's your mind you have to convince.", author: "Anonymous" },
    { text: "The only bad workout is the one that didn't happen.", author: "Anonymous" },
    { text: "Success isn't given. It's earned in the gym.", author: "Anonymous" },
    { text: "Don't wish for it. Work for it.", author: "Anonymous" },
    { text: "The pain you feel today will be the strength you feel tomorrow.", author: "Anonymous" },
    { text: "Champions train, losers complain.", author: "Anonymous" },
    { text: "Sweat is fat crying.", author: "Anonymous" },
    { text: "If you want something you've never had, you must be willing to do something you've never done.", author: "Thomas Jefferson" },
    { text: "Fitness is not about being better than someone else. It's about being better than you used to be.", author: "Khloe Kardashian" },
    { text: "The first wealth is health.", author: "Ralph Waldo Emerson" },
    { text: "A healthy outside starts from the inside.", author: "Robert Urich" },
    { text: "Exercise is king. Nutrition is queen. Put them together and you've got a kingdom.", author: "Jack LaLanne" },
    { text: "The body achieves what the mind believes.", author: "Anonymous" },
    { text: "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't.", author: "Rikki Rogers" },
    { text: "Take care of your body. It's the only place you have to live.", author: "Jim Rohn" },
    { text: "Physical fitness is the first requisite of happiness.", author: "Joseph Pilates" },
    { text: "The hardest lift of all is lifting your butt off the couch.", author: "Anonymous" },
    { text: "Exercise is a celebration of what your body can do. Not a punishment for what you ate.", author: "Anonymous" },
    { text: "Motivation is what gets you started. Habit is what keeps you going.", author: "Jim Ryun" },
    { text: "You don't have to be extreme, just consistent.", author: "Anonymous" },
    { text: "A one hour workout is 4% of your day. No excuses.", author: "Anonymous" },
    { text: "The resistance that you fight physically in the gym and the resistance that you fight in life can only build a strong character.", author: "Arnold Schwarzenegger" },
    { text: "Fitness is like a relationship. You can't cheat and expect it to work.", author: "Anonymous" },
    { text: "The only way to finish is to start.", author: "Anonymous" },
    { text: "Your health is an investment, not an expense.", author: "Anonymous" },
    { text: "Dead last finish is greater than did not finish, which trumps did not start.", author: "Anonymous" },
    { text: "If you're tired of starting over, stop giving up.", author: "Anonymous" },
    { text: "The gym is not a place where you go to impress others. It's a place where you go to improve yourself.", author: "Anonymous" },
    { text: "Strive for progress, not perfection.", author: "Anonymous" },
    { text: "Be stronger than your excuses.", author: "Anonymous" },
    { text: "What seems impossible today will one day become your warm-up.", author: "Anonymous" },
    { text: "Push yourself because no one else is going to do it for you.", author: "Anonymous" },
    { text: "Great things never come from comfort zones.", author: "Anonymous" },
    { text: "Don't limit your challenges. Challenge your limits.", author: "Anonymous" },
    { text: "Your only limit is you.", author: "Anonymous" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The clock is ticking. Are you becoming the person you want to be?", author: "Greg Plitt" },
    { text: "Discipline is choosing between what you want now and what you want most.", author: "Anonymous" },
    { text: "You are what you do, not what you say you'll do.", author: "Anonymous" },
    { text: "A healthy body is a guest chamber for the soul; a sick body is a prison.", author: "Francis Bacon" },
    { text: "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.", author: "Buddha" },
    { text: "Health is not valued till sickness comes.", author: "Dr. Thomas Fuller" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "Don't put off tomorrow what you can do today.", author: "Benjamin Franklin" },
    { text: "A goal without a plan is just a wish.", author: "Antoine de Saint-Exupéry" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "Fall seven times, stand up eight.", author: "Japanese Proverb" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Life is what happens to you while you're busy making other plans.", author: "John Lennon" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It is never too late to be what you might have been.", author: "George Eliot" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
    { text: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "Life is 10% what happens to you and 90% how you react to it.", author: "Charles R. Swindoll" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "The difference between ordinary and extraordinary is that little extra.", author: "Jimmy Johnson" },
    { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { text: "Try not to become a person of success, but rather try to become a person of value.", author: "Albert Einstein" },
    { text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
    { text: "Challenges are what make life interesting and overcoming them is what makes life meaningful.", author: "Joshua J. Marine" },
    { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    { text: "You have been assigned this mountain to show others it can be moved.", author: "Mel Robbins" },
    { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "Stay hungry. Stay foolish.", author: "Steve Jobs" },
    { text: "The people who are crazy enough to think they can change the world are the ones who do.", author: "Steve Jobs" },
    { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.", author: "Unknown" },
    { text: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.", author: "Steve Jobs" },
    { text: "Experience is a hard teacher because she gives the test first, the lesson afterward.", author: "Vernon Law" },
    { text: "To live a creative life, we must lose our fear of being wrong.", author: "Anonymous" },
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { text: "May you live all the days of your life.", author: "Jonathan Swift" },
    { text: "Life itself is the most wonderful fairy tale.", author: "Hans Christian Andersen" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", author: "Dr. Seuss" },
    { text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.", author: "Bill Keane" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { text: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", author: "Martin Luther King Jr." },
    { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { text: "Well done is better than well said.", author: "Benjamin Franklin" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "A champion is defined not by their wins but by how they can recover when they fall.", author: "Serena Williams" },
    { text: "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.", author: "Roald Dahl" },
    { text: "No matter what people tell you, words and ideas can change the world.", author: "Robin Williams" },
    { text: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein" },
    { text: "Life is 10% what happens to me and 90% of how I react to it.", author: "Charles Swindoll" },
    { text: "The most common way people give up their power is by thinking they don't have any.", author: "Alice Walker" },
    { text: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
    { text: "You can't use up creativity. The more you use, the more you have.", author: "Maya Angelou" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "Our lives begin to end the day we become silent about things that matter.", author: "Martin Luther King Jr." }
];

function getRandomQuotes(count = 10) {
    const shuffled = [...fitnessQuotes].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displayQuotes() {
    const container = document.querySelector('.quotes-container');
    const randomQuotes = getRandomQuotes(10);
    
    container.innerHTML = '';
    
    randomQuotes.forEach(quote => {
        const quoteBox = document.createElement('div');
        quoteBox.className = 'quote-box';
        quoteBox.innerHTML = `
            <blockquote>"${quote.text}"</blockquote>
            <cite>- ${quote.author}</cite>
        `;
        container.appendChild(quoteBox);
    });
}

document.addEventListener('DOMContentLoaded', displayQuotes);