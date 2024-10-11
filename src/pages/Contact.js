import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCards";

import "../scss/contact.scss";

function Contact() {
  return (
    <>
      <Navbar select={"contact"} />
      <main>
        <div className="wrapper-1">
          <div className="contact-hero flex">
            <h1>Contact Me!</h1>
            <div className="cta-buttons flex">
              <a href="tel:+918533041415">Call Me</a>
              <span>Or</span>
              <a href="mailto:aanshik16@gmail.com">Email Me</a>
            </div>
            <p>
              Here are some of my professional platform accounts and my social
              media profiles for you to check out.
            </p>
          </div>

          <div className="cards">
            <ul className="cardList flex">
              <li>
                <ContactCard
                  imgLink={"img/instagram.svg"}
                  url={"https://github.com/aanshiksharma"}
                  username={"aanshiksharma"}
                  platform={"GitHub"}
                />
              </li>

              <li>
                <ContactCard
                  imgLink={"img/linkedin.svg"}
                  url={"https://www.linkedin.com/in/aanshik-sharma-976793229/"}
                  svg={
                    <svg
                      viewBox="0 0 16.00 16.00"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                    >
                      <g
                        id="SVGRepo_bgCarrier"
                        stroke-width="0"
                        transform="translate(3.2,3.2), scale(0.6)"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="16.00"
                          height="16.00"
                          rx="0.96"
                          fill="#ffffff"
                          strokewidth="0"
                        ></rect>
                      </g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fill="#0A66C2"
                          d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
                        ></path>
                      </g>
                    </svg>
                  }
                  username={"aanshik-sharma"}
                  platform={"LinkedIn"}
                />
              </li>

              <li>
                <ContactCard
                  imgLink={"img/instagram.svg"}
                  url={"https://leetcode.com/u/aanshik16/"}
                  svg={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="leetcode"
                    >
                      <path
                        fill="#B3B1B0"
                        d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"
                      ></path>
                      <path
                        fill="#E7A41F"
                        d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"
                      ></path>
                      <path
                        fill="#000000"
                        d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"
                      ></path>
                    </svg>
                  }
                  username={"aanshik16"}
                  platform={"Leet Code"}
                />
              </li>

              <li>
                <ContactCard
                  imgLink={"img/hackerrank.svg"}
                  url={"https://www.hackerrank.com/profile/aanshik16/"}
                  username={"aanshik16"}
                  platform={"Hacker Rank"}
                />
              </li>
            </ul>

            <h2>Social Media</h2>

            <ul className="cardList flex">
              <li>
                <ContactCard
                  imgLink={"img/whatsapp.svg"}
                  svg={
                    <svg
                      viewBox="0 0 48.00 48.00"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      fill="#000000"
                    >
                      <g
                        id="SVGRepo_bgCarrier"
                        stroke-width="0"
                        transform="translate(6.719999999999999,6.719999999999999), scale(0.72)"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="48.00"
                          height="48.00"
                          rx="24"
                          fill="#ffffff"
                          strokewidth="0"
                        ></rect>
                      </g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>Whatsapp-color</title>
                        <desc>Created with Sketch.</desc> <defs> </defs>
                        <g
                          id="Icons"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Color-"
                            transform="translate(-700.000000, -360.000000)"
                            fill="#67C15E"
                          >
                            <path
                              d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z"
                              id="Whatsapp"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  }
                  url={"https://api.whatsapp.com/send?phone=+918533041415"}
                  username={"+91 85330 41415"}
                  platform={"Whatsapp"}
                />
              </li>

              <li>
                <ContactCard
                  imgLink={"img/instagram.svg"}
                  url={"https://instagram.com/aanshik_sharma"}
                  username={"aanshik_sharma"}
                  platform={"Instagram"}
                />
              </li>

              <li>
                <ContactCard
                  imgLink={"img/facebook.svg"}
                  svg={
                    <svg
                      viewBox="0 0 48.00 48.00"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0">
                        <rect
                          x="0"
                          y="0"
                          width="48.00"
                          height="48.00"
                          rx="8.64"
                          fill="#ffffff"
                          strokewidth="0"
                        ></rect>
                      </g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>Facebook-color</title>
                        <desc>Created with Sketch.</desc> <defs> </defs>
                        <g
                          id="Icons"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Color-"
                            transform="translate(-200.000000, -160.000000)"
                            fill="#4460A0"
                          >
                            <path
                              d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
                              id="Facebook"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  }
                  url={"https://facaebook.com/AanshikSharma"}
                  username={"Aanshik Sharma"}
                  platform={"Facebook"}
                />
              </li>
            </ul>
          </div>

          <form action="/" className="form">
            {/* <p>Please fill out this form for any more queries.</p> */}
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
