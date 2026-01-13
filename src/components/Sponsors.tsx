const sponsorLogos = [
  "googlelogo_color_272x92dp.png",
  "sfc.png",
  "sgp.webp",
  "met.png",
  "hm.png",
  "uniq.png",
  "nike.png",
  "adid.png",
];

export default function Sponsors() {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb sponsor-cloud-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <h3 className="heading">PROUDLY SPONSORED BY</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="sponsor-cloud d-flex flex-wrap justify-content-center align-items-center">
              {sponsorLogos.map((logo, idx) => (
                <div key={idx} className="sponsor-item">
                  <img src={`/images/${logo}`} alt="Sponsor" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
