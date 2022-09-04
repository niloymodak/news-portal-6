const loadContainer = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(status => displayCategory(status.data.news_category));

}

loadContainer();


const displayCategory = news_category => {
    const categoryContainer = document.getElementById('category-container');
    news_category.forEach(category => {
        const { category_id, category_name } = category
        const btn = document.createElement('button');
        btn.classList.add('nav-cat');
        btn.innerText = `${category_name}`;
        categoryContainer.appendChild(btn);
        btn.addEventListener('click', () => fetchDetails(category_id))
    })
}
const loadDetails = data => {
    const categoryDetails = document.getElementById('category-details');

    if (data.length > 0) {
        categoryDetails.innerHTML = ''
        data.forEach(item => {
            const details = document.createElement('card');
            details.classList.add('news-card');

            details.innerHTML = `
                <div class="card mb-3 cursor-pointer">
                    <div class="news-card row g-0">
                        <div class="col-md-4">
                            <img src="${item.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${item.title}"</h5>
                                <p class="card-text">${item.details.slice(0, 200)}..."</p>

                            </div>
                            <footer class="card-footer">

                                <div class="container text-center">
                                    <div class="row row-cols-3">
                                        <div class="container">
                                            <div class="row-cols-2">
                                                <div class="col">
                                                    <b>${item.author.name}</b>
                                                </div>
                                                <div class="col">${item.author.published_date}</div>
                                            </div>
                                        </div>
                                        <div class="container">
                                            <div class="row-cols-2">
                                                <div class="col">Total View</div>
                                                <div class="col">${item.total_view}M</div>
                                            </div>
                                        </div>

                                        <div class="col">
                                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Details..</button></div>
                                    </div>
                                </div>

                            </footer>
                        </div>
                    </div>
                </div>`;
            categoryDetails.appendChild(details);

            details.addEventListener('click', () => {
                showModal(item)
            })
        }
        )

    }
    else {
        categoryDetails.innerHTML = '<h3>No Data Found!</h3>'
    }
}

function showModal(item) {
    //     showModal.innerHTML = `
    //     <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    //     <div class="modal-dialog modal-dialog-centered" role="document">
    //       <div class="modal-content">
    //         <div class="modal-header">
    //           <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
    //           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    //             <span aria-hidden="true">&times;</span>
    //           </button>
    //         </div>
    //         <div class="modal-body">
    //           ...
    //         </div>
    //         <div class="modal-footer">
    //           <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    //           <button type="button" class="btn btn-primary">Save changes</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //    `;

    console.log(item)
}



function fetchDetails(category_id) {
    fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
        .then(res => res.json())
        .then(status => loadDetails(status.data));
}
fetchDetails('08');




