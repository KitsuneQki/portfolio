import React from "react";
import todoapp from "../assets/images/todoapp.png";
import surveyform from "../assets/images/survey-form.png";
import tributepage from "../assets/images/tribute-page.png";
import documentationpage from "../assets/images/documentation-page.png";
import productpage from "../assets/images/product-page.png";
import oldportfolio from "../assets/images/oldportfolio.png";
import Contact from "../components/Contact";
import Card from "../components/Cards/Card";

const Works = () => {
  return (
    <div className="mx-auto col-11 col-sm-10 col-lg-8 col-xl-8">
      <div className="min-vh-100">
        <div className="py-8 text-2xl font-bold">
          <h1 className="p-4 pb-8 text-white font-bold fs-4">Works</h1>
        </div>

        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
            <Card
              source={todoapp}
              name="To-do app"
              description="Daily task application."
              github="https://github.com/KitsuneQki/my-app"
              link="https://my-app-sigma-puce.vercel.app/"
              techs={["React", "Bootstrap"]}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <Card
              source={surveyform}
              name="Survey Form"
              description="Form design structure."
              github="https://github.com/KitsuneQki/my-app"
              link="https://codepen.io/Qki/full/OJOWvEM"
              techs={["HTML", "CSS"]}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <Card
              source={tributepage}
              name="Tribute Page"
              description="HTML & CSS template"
              github="https://github.com/KitsuneQki/my-app"
              link="https://codepen.io/Qki/full/wvPgqBe"
              techs={["HTML", "CSS"]}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <Card
              source={documentationpage}
              name="Technical Documentation Page"
              description="Basic HTML, CSS template example."
              github="https://github.com/KitsuneQki/my-app"
              link="https://codepen.io/Qki/full/LYOLBXQ"
              techs={["HTML", "CSS"]}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <Card
              source={productpage}
              name="Product Landing Page"
              description="Product landing structure webpage."
              github="https://github.com/KitsuneQki/my-app"
              link="https://codepen.io/Qki/full/zYPZKgY"
              techs={["HTML", "CSS"]}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <Card
              source={oldportfolio}
              name="Old Portfolio"
              description="Old design portfolio."
              github="https://github.com/KitsuneQki/my-app"
              link="https://codepen.io/Qki/full/qBVPPNL"
              techs={["HTML", "CSS"]}
            />
          </div>
        </div>

        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Works;
