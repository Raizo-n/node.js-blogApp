import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({cat}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/?cat=${cat}`)
                setPosts(res.data)
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [cat])

//   const posts = [
//     {
//       id: 1,
//       title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at molestiae, aut sit consequuntur distinctio ducimus et aliquid aliquam architecto.",
//       img: "https://pixabay.com/get/g7d91fc52828de033678c2230988fc840e9763abedcab7098e57be58faa3e7f1dafc05d2e302ab751b9fd798114a12648.jpg",
//     },
//     {
//       id: 2,
//       title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at molestiae, aut sit consequuntur distinctio ducimus et aliquid aliquam architecto.",
//       img: "https://pixabay.com/get/gb2cdf23248901aa88f0c733c13fd809b40c2599d22776ed716e5aeb1d914f7c247345c108a6a56a3dfaabe2ee8125b65.jpg",
//     },
//     {
//       id: 3,
//       title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at molestiae, aut sit consequuntur distinctio ducimus et aliquid aliquam architecto.",
//       img: "https://pixabay.com/get/gcad3257a3dfb2e2462d327b1d6e03069bf63da10266ed9129f3191463554088cfba663a9c50d1296565e2549dfea943f176b9c5140d39f1f5f27d73f632033d3c320cf3fa4b1f976ddd895058f58a97f_1920.jpg",
//     },
//     {
//       id: 4,
//       title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at molestiae, aut sit consequuntur distinctio ducimus et aliquid aliquam architecto.",
//       img: "https://pixabay.com/get/gd07e342401b9fbda0b9fe067c0600e8d77f3e6b55375be4cdb0965d2c79605fb5656aa4b84a43122dea609cc2f157eb1.jpg",
//     },
//   ];

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post?.img}`} alt="" />
          <h2>{post.title}</h2>
          <Link className='link' to={`/post/${post.id}`}>
          <button>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
