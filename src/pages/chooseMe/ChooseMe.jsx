import PageTitle from "../../components/pageTitle/PageTitle";
import img from "../../assets/images/img_abt1.jpg";

const ChooseMe = () => {
  return (
    <div>
      <PageTitle text={"Choose Me"} />

      <div className="my-16">
        <div className="md:grid md:px-6 px-16 items-center grid-cols-2 gap-3">
          <div className="h-[400px]">
            <img className="mx-auto w-[80%] h-full" src={img} alt="" />
          </div>

          <div>
            <h2 className="text-[#d88531] font-semibold mt-4">Welcome</h2>

            <h1 className="text-4xl mt-3 mb-6 font-bold">
              Do You Need a Personal Assistant?
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab
              expedita repudiandae. Beatae iusto culpa perspiciatis aliquid fuga
              porro temporibus rem, veniam aut accusamus commodi nam voluptates
              nostrum nisi molestias dignissimos nobis, quis aperiam quo
              corporis eligendi. Iste, atque dignissimos. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Alias ab expedita repudiandae.
              Beatae iusto culpa perspiciatis aliquid fuga porro temporibus rem,
              veniam aut accusamus commodi nam voluptates nostrum nisi molestias
              dignissimos nobis, quis aperiam quo corporis eligendi. Iste, atque
              dignissimos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseMe;
