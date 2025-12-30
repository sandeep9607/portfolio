
import React from "react";
import { Link } from "react-router-dom";
import data from "./data.json";

function PortfolioSection({ title, items, rowClass }) {
  return (
    <section className="my-5 container">
      <header className="mb-4" style={{ fontSize: "30px", fontWeight: "600" }}>
        {title}
      </header>
      <div className="row g-3">
        {items.map((item, idx) => (
          <div className="col-md-6 col-sm-12 mb-4" key={item.name + idx}>
            <div className={rowClass || "row row-with-padding"}>
              <div className="d-flex justify-content-lg-end col-12 col-md-4 mb-3 mb-md-0 mt-1">
                <img
                  src={item.image}
                  className={item.image.includes(".jpg") || item.image.includes(".png") || item.image.includes(".webp") ? "rounded" : ""}
                  height="150px"
                  width="150px"
                  style={{ borderRadius: "10px" }}
                  alt={item.name}
                />
              </div>
              <div className="col-12 col-md-8 text-justify" style={{ width: "340px" }}>
                <div style={{ fontSize: "18px", fontWeight: "500" }}>{item.name}</div>
                <div style={{ color: "rgb(95, 99, 104)" }}>{item.platform}</div>
                <div style={{ color: "rgb(95, 99, 104)" }}>
                  {item.links && item.links.map((link, i) => (
                    <span key={link.label + i}>
                      <Link to={link.url} target="_blank">{link.label}</Link>
                      {i < item.links.length - 1 ? " / " : ""}
                    </span>
                  ))}
                </div>
                <div style={{ color: "rgb(95, 99, 104)" }}>{item.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <div
      className="mt-5"
      style={{
        maxWidth: "1500px",
        margin: "auto",
        paddingLeft: "15px",
        paddingRight: "15px",
      }}
    >
      <PortfolioSection title="Active/Live" items={data.active} />
      <hr />
      <PortfolioSection title="Inactive" items={data.inactive} rowClass="row align-items-center row-with-padding" />
    </div>
  );
}

export default App;

