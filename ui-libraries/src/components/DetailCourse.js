import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const DetailCourse = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  let { id } = useParams();

  useEffect(() => {
    getCourseById();
  }, [id]);

  const getCourseById = async () => {
    try {
      const response = await axios.get(`https://api.sukmax.my.id/course/${id}`);
      setName(response.data.name);
      setDesc(response.data.desc);
      setImage(response.data.url);
      console.log(response);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  return (
    <section className='section mt-5'>
      <div className='columns'>
        <div className='column is-half'>
          <figure className='iamge is4by3'>
            <img src={image} alt='product' />
          </figure>
        </div>
        <div className='column'>
          <div className='content'>
            <p>{name}</p>
            <p>{desc}</p>
            <div className='field p-5'>
              <button className='button is-primary has-text-white is-fullwidth mb-3'>
                Add to Cart
              </button>
              <button className='button is-primary is-outlined is-fullwidth'>
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailCourse;
