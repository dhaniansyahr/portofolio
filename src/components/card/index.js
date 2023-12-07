import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faTag, faUser } from "@fortawesome/free-solid-svg-icons";
import WOD from "../../asset/WOD.png";
import SIAU from "../../asset/SIAU.png";

const index = (props) => {
  return (
    <div className="flex flex-col gap-5">
      {Array.isArray(props.data) &&
        props.data.map((item) => (
          <>
            {item.id % 2 === 1 ? (
              <div className="blog-card">
                <div className="meta">
                  <div
                    className="photo"
                    style={{
                      backgroundImage: `url(${WOD})`,
                      objectFit: "cover",
                    }}
                  ></div>
                  <ul className="details">
                    <li className="author">
                      <span className="flex gap-2">
                        <FontAwesomeIcon icon={faUser} />
                        {item.name}
                      </span>
                    </li>
                    <li className="date flex gap-2">
                      <FontAwesomeIcon icon={faCalendar} />
                      {item.date}
                    </li>
                    <li className="tags ml-[5px]">
                      <ul className="">
                        <li>
                          <FontAwesomeIcon icon={faTag} />
                          {/* <span>Learn</span> */}
                        </li>
                        {item.tags.map((tag) => (
                          <li>
                            <span>{tag}</span>
                          </li>
                        ))}
                        {/* <li>
                          <span>Code</span>
                        </li>
                        <li>
                          <span>HTML</span>
                        </li>
                        <li>
                          <span>CSS</span>
                        </li> */}
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="description font-oswald">
                  <h1 className=" font-bold">{item.title}</h1>
                  <h2>{item.simpleDescription}</h2>
                  <p>{item.descriptions}</p>
                  <p className="read-more">
                    <a href={item.url} target="_BLANK">
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div class="blog-card alt">
                  <div class="meta">
                    <div
                      class="photo"
                      style={{
                        backgroundImage: `url(${SIAU})`,
                      }}
                    ></div>
                    <ul class="details font-oswald">
                      <li className="author">
                        <span className="flex gap-2">
                          <FontAwesomeIcon icon={faUser} />
                          Rama Dhaniansyah
                        </span>
                      </li>
                      <li className="date flex gap-2">
                        <FontAwesomeIcon icon={faCalendar} />
                        Aug. 24, 2015
                      </li>
                      <li className="tags ml-[5px]">
                        <ul className="">
                          <li>
                            <FontAwesomeIcon icon={faTag} />
                            {/* <span>Learn</span> */}
                          </li>
                          <li>
                            <span>Learn</span>
                          </li>
                          <li>
                            <span>Code</span>
                          </li>
                          <li>
                            <span>HTML</span>
                          </li>
                          <li>
                            <span>CSS</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div class="description font-oswald">
                    <h1 className="font-bold">Sistem Informasi Akademik USK</h1>
                    <h2>
                      Memudahkan Dalam Mengakses Semua Sistem Perkuliahan`
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad eum dolorum architecto obcaecati enim dicta
                      praesentium, quam nobis! Neque ad aliquam facilis numquam.
                      Veritatis, sit.
                    </p>
                    <p class="read-more">
                      <span>Read More</span>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
    </div>
  );
};

export default index;
