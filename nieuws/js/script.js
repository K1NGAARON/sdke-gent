const news = [
    {
        title: "Blog voorbeeld 1",
        body: "Hier komt een korte uitleg",
        type: "type-1",
        img: "/home/img/banner.jpg",
        url: "/nieuws/blog-1/"
    },
    {
        title: "Blog voorbeeld 2",
        body: "Hier komt een korte uitleg",
        type: "type-2",
        img: "/home/img/banner.jpg",
        url: "/nieuws/blog-1/"
    },
    {
        title: "Blog voorbeeld 3",
        body: "Hier komt een korte uitleg",
        type: "type-3",
        img: "/home/img/banner.jpg",
        url: "/nieuws/blog-1/"
    },
];

function createCards(e) {
    const target = document.querySelector('#news-wrapper');
    
    const cards = news.map(item => {

        return `
            <div class="item card ${item.type}">
                <img src="${item.img}" alt="${item.title}">
                <div class="content">
                    <h3>
                        ${item.title}
                    </h3>
                    <p>
                        ${item.body}
                    </p>
                    <a href="${item.url}" class="btn">
                        Lees meer
                    </a>
                </div>
            </div>
        `;
    }).join('');

    target.innerHTML = cards;
}

function filterContent(e) {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    $('.news-wrapper .card').fadeOut();

    let activeFilter = $(this).attr('id');

    if (activeFilter === 'all') {
        $('.news-wrapper .card').fadeIn();
    } else {
        $('.' + activeFilter).fadeIn();
    }
};

$(document).ready(function() {
    createCards();
    $('.filter-btn').click(filterContent);
});