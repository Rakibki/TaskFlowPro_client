import PageTitle from "../../components/pageTitle/PageTitle";
import b1 from "../../assets/images/b1.png";
import b2 from "../../assets/images/b2.png";
import b3 from "../../assets/images/b3.png";

const Blog = () => {
  return (
    <div>
      <PageTitle text={"Blog"} />

      <div className="md:grid md:px-6 px-24 gap-2 my-10 grid-cols-3">
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img className="h-[200px] w-full" src={b1} />
          </figure>
          <div className="card-body">
            <h2 className=" text-lg font-semibold text-[#d88531]">Gutenberg</h2>
            <h1 className="card-title">Gutenberg: Columns</h1>
            <p>
              2 columns This is a 2-column layout, just trying some things out
              to see how it goes. Each column should
            </p>
            <div className="card-actions mt-4">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img className="h-[200px] w-full" src={b2} />
          </figure>
          <div className="card-body">
            <h2 className=" text-lg font-semibold text-[#d88531]">Gutenberg</h2>
            <h1 className="card-title">Gutenberg: Columns</h1>
            <p>
              2 columns This is a 2-column layout, just trying some things out
              to see how it goes. Each column should
            </p>
            <div className="card-actions mt-4">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img className="h-[200px] w-full" src={b3} />
          </figure>
          <div className="card-body">
            <h2 className=" text-lg font-semibold text-[#d88531]">Gutenberg</h2>
            <h1 className="card-title">Gutenberg: Columns</h1>
            <p>
              2 columns This is a 2-column layout, just trying some things out
              to see how it goes. Each column should
            </p>
            <div className="card-actions mt-4">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
