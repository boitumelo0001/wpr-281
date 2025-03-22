const product = [
    {
        id: 0,
        image: 'image/one.jpg',
        title: 'Highter certificate',
        price: 'This Higher Certificate in IT is created in line with Belgium Campus’s mission to train young people to understand, use and apply ICT effectively, efficiently and in ethical ways, leading to gainful employment.',
        URL: 'Higher-Certificate.html'
    },
    {
        id: 1,
        image: 'image/one.jpg',
        title: 'Diploma',
        price: 'Our Diploma in Information Technology consists of a generic foundation phase and a specialisation phase. The foundation phase gives insight into the field of information technology, while the specialisation phase is career oriented. This academic programme will transform you into a well-rounded professional through a strong focus on knowledge, execution, and professional and practical skills. You will also have the incredible opportunity to complete 6 months of in-service training at an external company or in a simulated work environment.',
        URL: 'Diploma.HTML'
    },
    {
        id: 2,
        image: 'image/one.jpg',
        title: 'BIT',
        price: 'This IT degree focuses on information systems modules and will provide you with foundational knowledge in software engineering and business intelligence. You will cover an extensive range of topics, from mobile and wireless networks to artificial intelligence and intelligent systems.',
        URL: 'BIT.html'
    },
    {
        id: 3,
        image: 'image/one.jpg',
        title: 'BCOM',
        price: 'Our Bachelor of Computing degree will teach you the essential computing skills of troubleshooting and formulating viable solutions. Additionally, you will learn to apply theories and integrate them in real-world environments, across multiple disciplines, by presenting best practices and solutions.',
        URL: 'Bcom.html'
    },
];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, price, URL} = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <h4>${title}</h4>
                    <p> ${price}</p>
                <button><a href="${URL}">View Course Detials</a></button>
                </div>
            </div>`
        )
    }).join('')
};
displayItem(categories);
