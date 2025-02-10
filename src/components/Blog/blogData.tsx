import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "BoweryCO",
    paragraph:
      "Wherever food is needed,we can grow it.We’re not afraid of big, delicious plans. At Bowery, we’re helping secure the future of food by growing smart produce that’s more reliable and less harmful—wherever it’s needed.",
    image: "/images/portfolio/BoweryCO.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: [""],
    publishDate: "2024",
    link : "https://bowery.co/",
  },
  {
    id: 2,
    title: "Derekdanceault",
    paragraph:
      "Our objective is to make the process easy, efficient and simple while providing our expertise to our clients and sharing our vast market knowledge. We make ourselves accessible to you whether you have questions, want to book a showing, or you are ready to make an offer. We pride ourselves on being responsive to you and potential selling agents looking to buy your property. At the end of the day we deliver results and the price you want for the home you want.",
    image: "/images/portfolio/Derekdanceault.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: [""],
    publishDate: "2025",
    link : "https://derekdaneault.com/",
  },
  {
    id: 3,
    title: "GoodRx",
    paragraph:
      "We started GoodRx to solve both of those problems. We wanted a way for consumers — insured or not — to sort through our confusing, frustrating, and expensive healthcare system. And find the treatment they need at a price they can afford.",
    image: "/images/portfolio/GoodRx.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: [""],
    publishDate: "2025",
    link : "https://www.goodrx.com/"
  
  },
];
export default blogData;
