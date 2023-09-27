export const navLinks = [
  {
    title: "New & Featured",
    link: "new-featured",
  },
  {
    title: "Men",
    link: "/men",
  },
  {
    title: "Women",
    link: "/women",
  },
  {
    title: "Kids",
    link: "/kids",
  },
  {
    title: "Accessories",
    link: "/accessories",
  },
  {
    title: "Sale",
    link: "/sale",
  },
];
export const footerMainLinks = [
  {
    title: "GIFT CARDS",
    link: "/giftcards",
  },
  {
    title: "PROMOTIONS",
    link: "/promotions",
  },
  {
    title: "FIND A STORE",
    link: "/findstore",
  },
  {
    title: "BECOME A MEMBER",
    link: "/member",
  },
  {
    title: "NIKE JOURNAL",
    link: "/nike-journal",
  },
  {
    title: "SEND US FEEDBACK",
    link: "/feedback",
  },
];
export const footerSubLinks = [
  {
    linkTitle: "GET HELP",
    subLinks: [
      "Order Status",
      "Shipping and Delivery",
      "Returns",
      "Order Cancellation",
      "Payment Option",
      "Gift Card Balance",
      "Contact Us",
    ],
  },
  {
    linkTitle: "ABOUT NIKE",
    subLinks: ["News", "Careers", "Investors", "Purpose", "Sustainablity"],
  },
];

export const sizes = function(){
  const sizesArr = [];
  let x = 1
  do {
    sizesArr.push(x);
    x += 0.5
    
  } while (x <= 5);
  return sizesArr;
}

// function handleScroll() {
//   let prevYPosition = window.scrollY;
  
//   function scrollingUp() {
//     const currentYPosition = window.scrollY;
//     console.log('prev', prevYPosition, 'current', currentYPosition);
//     if (currentYPosition > prevYPosition) {
//       prevYPosition = currentYPosition;
//       window.isScrollingUp = false;
//     } else {
//       prevYPosition = currentYPosition;
//       window.isScrollingUp = true;
//     }
//   }
//   return scrollingUp;
// }

// window.addEventListener("scroll", handleScroll());
