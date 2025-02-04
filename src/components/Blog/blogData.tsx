import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Discover the World",
    paragraph:
      "Our dedication to excellence means that every interaction is an opportunity to exceed your expectations and deliver unparalleled service.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "AI Agent for ILT",
    paragraph:
      "We believe that exceptional service is the cornerstone of a great customer experience. We are committed to making every moment count.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Crypto Travel",
    paragraph:
      "Customer satisfaction is our priority; we continuously refine our services to ensure they align with your needs and preferences.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Crypto"],
    publishDate: "2025",
  },
];
export default blogData;
