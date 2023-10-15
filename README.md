# JavaScript Frameworks Course Assignment at Noroff - mariesaeter

An e-commerce site for fashion shopping (made with API distributed by Noroff)

> Live demo [_here_](https://trendtrovefashion.netlify.app)

<img width="1440" alt="TrendTrove-home-page-screenshot" src="https://user-images.githubusercontent.com/96269610/275353974-de161d8b-e46b-4b48-980f-554141ce790c.png">

## Description
An e-commerce site where you can view products, add them to a cart and checkout. Created with React and SASS.

## Assignment brief

You are tasked with build out the following pages for an eCom store:
1. Homepage
2. Individual product page
3. Cart page
4. Checkout success page
   
Homepage should have a list of all the products. There should be a look-ahead search bar that filters products when typing in a product name. Clicking on a product should take a user to an individual product page.

You pages should use a <Layout> component that contains a header and footer. The header should contain a nav bar as well as a Cart icon component that acts as a button as well as displays the current number of items in the cart.

The individual product page should display data for a single product. There should be an Add to cart button which, upon clicking, adds the product to the cart. The product page should display the title of the product, the description and the image. There should also be reviews listed for the product, if there are any. You should use the discountedPrice property to display the price of the product. If there is a difference between the discountedPrice and price properties then that means there is a discount for that product. Calculate what this discount is and display it on the page.

Clicking on the Cart icon will load the Cart page, which will list all of the products as well as a total. The Cart page will have a Checkout button. Clicking this Checkout button then goes to a Checkout success page.

The Checkout success page will display a message to the user notifying them that their order was successful. There should also be a link that lets a user go back to the store. The cart must be cleared if the user gets to the Checkout success page.

There will be a contact page which will contain a contact form with the following fields. There must be form validation:

Full name (Minimum number of characters is 3, required)
Subject (Minimum number of characters is 3, required)
Email (Must be a valid email address, required)
Body (Minimum number of characters is 3, required)
You will be using React Router to switch between pages.

Your design should be responsive. You are welcome to use a CSS Framework, however, you’re encouraged to design from scratch and use styled-components or CSS Modules.

You are not required to use TypeScript.

Your code is expected to be clean and well-formatted.

## Project's goal
To apply knowledge of React to build an eCom store.

## API
> [_Noroff API_](https://api.noroff.dev/api/v1/online-shop)

## Some features 
- Contact form created with react-hook-form and yup-validation
- Lookahead searchbar (page)
- Adding to cart with total counter in nav

## Built with
- HTML
- SASS v. 1.69.0
- React v. 18.2.0
- JavaScript

 ## Contributing
 ### Issues
 Feel free to submit issues and requests for improvements.

 ### Pull requests

 1. Fork the repo on GitHub
 2. Install the repo on your own computer
 3. Commit changes to the new branch you created
 4. Push your work up to your fork
 5. Submit a Pull request so that your changes can be reviewed

 ## Contact

 [My LinkedIn Page](www.linkedin.com/in/marie-sæter-954821207)

 Feel free to contact me!
 
  ## Design process
 Prototype for mobile and styletile can be found below.
 
 > [_Style guide_](https://xd.adobe.com/view/21c928da-de50-402a-8172-ac3f6a7e3ba9-749a/)
 
 > [_Mobile prototype_](https://xd.adobe.com/view/b23d7bfb-862f-4b70-9f83-ac92d2d452bb-e76e/)

## Work process
There are some planned features that may be missing or lacking due to unplanned sickness during the working process before assignment delivery. During this assignment I chose to focus on getting to know SCSS more for styling without combining it with Bootstrap. This has given me a broader understanding of the opportunities in SCSS such as mixins, functions and extending of classes. I've also gotten more familiar with React, but as this is my first React project there's still a lot of new things to get familiar with. 

## To do
+ Adjust responsiveness for larger screens
+ Cart page: Get the increase and decrease button to function, as well as adding a remove single product button
+ Add a change to the navbar when scrolling
+ Add active status to navlinks
+ Adjust so that the original and the discounted price don't both show up when there's no discount
+ Fix placement for counter in nav when on bigger screens


## Issues
+  The increase and decrease buttons do not work, see commit: e1b27bd
  

 ### Images and icons
 + Icons are made by me

 ### Inspiration
 #### Lookahead search
 Inspired by [Alfonsina Lizardo at dev.to](https://dev.to/alais29/building-a-real-time-search-filter-in-react-a-step-by-step-guide-3lmm) & [Mary Gathoni at makeuseof.com](https://www.makeuseof.com/react-search-bar-filters-data-create/)
 
 #### Spacing classes (margin and padding)
 Inspired by [Jerry Thimothy J at medium.com](https://medium.com/@jerrythimothy/margins-paddings-sass-mixin-16460c32507f)

 #### Responsive font sizes 
 Inspired by [dev.to](https://dev.to/dostonnabotov/responsive-font-sizes-with-sass-maps-and-each-2ge9)

 #### Shopping cart
 Inspired by [Annastacia Kioko at dev.to](https://dev.to/anne46/cart-functionality-in-react-with-context-api-2k2f), [Israel Oyetunji at hashnode.dev](https://israelmitolu.hashnode.dev/build-an-ecommerce-shopping-app-with-react-context-api), [Thapa Technical on youtube](https://www.youtube.com/watch?v=sGMb0dGiX74) & Noroff lessons
