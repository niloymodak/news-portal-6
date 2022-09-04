const loadCategories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const categories = await res.json();
    displayNews(categories.data.news_category);

}
loadCategories();

const loadNewsCategories = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    const res = await fetch(url);
    const newsCategory = await res.json();
    console.log(newsCategory.data);

}
loadNewsCategories();

const displayNews = allNews => {
    const newsContainer = document.getElementById('news-container');
    allNews.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `
        <div class="col-md-4">
                 <img src="" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${news.category_name}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                         additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        </div>
        `;
        newsContainer.appendChild(newsDiv);
    })

}
