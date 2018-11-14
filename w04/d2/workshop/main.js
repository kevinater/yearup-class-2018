console.log('🚀');

let url = "https://www.redbullshopus.com/products.json";

axios.get(url)
  .then(function(productImage){
    console.log(productImage.data.products[0].images[0].src);
    console.log(productImage.data.products[0].images[1].src);
    console.log(productImage.data.products[0].images[2].src);

    let image_1 = productImage.data.products[0].images[0].src;
    let image_2 = productImage.data.products[0].images[1].src;
    let image_3 = productImage.data.products[0].images[2].src;
    let image_4 = productImage.data.products[1].images[1].src;
    let image_5 = productImage.data.products[1].images[2].src;
    let image_6 = productImage.data.products[1].images[0].src;
    let image_7 = productImage.data.products[2].images[0].src;
    let image_8 = productImage.data.products[2].images[1].src;
    let image_9 = productImage.data.products[2].images[2].src;
    let image_array = [image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9];
    let image1 = document.getElementById('one');
    let image2 = document.getElementById('two');
    let image3 = document.getElementById('three');



    image1.src = image_1;
    image2.src = image_2;
    image3.src = image_3;




})


.catch(function (error) {
    console.log(error);
  })
