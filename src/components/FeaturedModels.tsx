const models = [
  { id: 1, name: "UNIQLO", team: "UNIQLO", img: "/images/image_1.jpg" },
  { id: 2, name: "ZARA", team: "ZARA", img: "/images/image_2.jpg" },
  { id: 3, name: "Ginlee Studio", team: "Ginlee", img: "/images/image_3.jpg" },
  { id: 4, name: "Sabrina", team: "Sabrina", img: "/images/image_4.jpg" },
];

export default function FeaturedModels() {
  return (
    <section className="ftco-section ftco-no-pt ftco-featured-model">
      <div className="container-fluid">
        <div className="row">
          {models.map((model) => (
            <div key={model.id} className="col-md-6 col-lg-3">
              <div className="model-entry">
                <div
                  className="model-img"
                  style={{ backgroundImage: `url(${model.img})` }}>
                  <div className="name text-center">
                    <h3>
                      <a href="javascript:void(0)">{model.name}</a>
                    </h3>
                  </div>
                  <div className="text text-center">
                    <h3>
                      <a href="javascript:void(0)">
                        Team
                        <br />
                        <span>{model.team}</span>
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
