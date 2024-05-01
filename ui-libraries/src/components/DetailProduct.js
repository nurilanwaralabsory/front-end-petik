import React from "react";

const DetailProduct = () => {
  return (
    <section className="section mt-5">
      <div className="columns">
        <div className="column is-half">
          <figure className="iamge is4by3">
            <img src="https://picsum.photos/800/600" alt="product" />
          </figure>
        </div>
        <div className="column">
          <div className="content">
            <div className="title is-4 text-black">Product Name</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequuntur ratione repellat ut, sint excepturi sapiente quibusdam totam? Incidunt beatae quasi minus vel similique dolores exercitationem ex culpa sint esse?</p>
            <p>
              <strong className="text-black">Price : </strong> Rp 1.000.000,00
            </p>
            <p>Stock : </p>
            <div className="field p-5">
              <button className="button is-primary has-text-white is-fullwidth mb-3">Add to Cart</button>
              <button className="button is-primary is-outlined is-fullwidth">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProduct;
