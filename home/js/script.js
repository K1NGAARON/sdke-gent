function changeReviews() {
    const reviews = [
        {
            name: "Sidney",
            review: "Just wanna say thanks a lot man, before I subscribed to you I was recklessly betting and losing abit of money but after i subscribed, I learnt not to recklessly bet, listened to you and it bailed out. You're the best man thank you",
        },
        {
            name: "John P.",
            review: "Just wanted to say this is the best group I've been with, won many times today biggest ACCA being £224, keep up the good wood, P.s I've gone into the elite tier now, well impressed"
        },
        {
            name: "Will",
            review: "PSA is truly worth it, especially elite. Been elite now for two months and have profited more than I could have ever imagined. Paid for my Holiday to Greece for 2 already!",
        },
    ];

    $('.dot').removeClass('active');
    $(this).addClass('active');

    const dotIndex = $('.dot').index(this);
    const reviewContainer = $('.review-wrapper');

    reviewContainer.find('.review-author').text(reviews[dotIndex].name);
    reviewContainer.find('.review-body').text(reviews[dotIndex].review);
};

// $('.dot').click(changeReviews);