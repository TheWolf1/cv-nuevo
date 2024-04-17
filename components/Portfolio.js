"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const items = [
/*   {
    id: 1,
    title: "Image Project",
    type: "img",
    src: "",
    img: "assets/img/projects/project-1.jpg",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
  },
  {
    id: 2,
    title: "youtube project",
    type: "youtube",
    src: "https://www.youtube.com/embed/7e90gBu4pas?enablejsapi=1&version=3&playerapiid=ytplayer",
    img: "assets/img/projects/project-2.jpg",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
  },
  {
    id: 3,
    title: "Local Video project",
    type: "local_video",
    src: "assets/img/projects/video.mp4",
    img: "assets/img/projects/project-3.jpg",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
  }, */
  {
    id: 4,
    title: "WayAndSat",
    type: "img",
    src: "https://wayandsat.com/",
    img: "assets/img/projects/wayandsat.jpg",
    project: "ERP",
    client: "Way & Sat",
    cargo: "Backend",
    previewLink: "wayandsat.com/",
  },
  {
    id: 5,
    title: "Pintu Bahia",
    type: "img",
    src: "https://pintubahia.proximamente.xyz/",
    img: "assets/img/projects/pintu.jpg",
    project: "ERP",
    client: "Pintu Bahia",
    cargo: "Backend",
    previewLink: "pintubahia.proximamente.xyz/",
  },
  {
    id: 6,
    title: "Mazda Mexico",
    type: "img",
    src: "https://www.mazda.mx/",
    img: "assets/img/projects/mazda.jpg",
    project: "ERP",
    client: "Mazda",
    cargo: "Backend",
    previewLink: "mazda.mx",
  },
  {
    id: 7,
    title: "Registro de la propiedad",
    type: "img",
    src: "https://rpquininde.gob.ec/",
    img: "assets/img/projects/rpq.jpg",
    project: "Website",
    client: "Envato",
    cargo: "Full Stack",
    previewLink: "rpquininde.gob.ec",
  },
  {
    id: 8,
    title: "Accesorios Alex",
    type: "img",
    src: "https://accesoriosalex.com/",
    img: "assets/img/projects/alex.jpg",
    project: "Website",
    client: "Accesorios Alex",
    cargo: "Full Stack",
    previewLink: "accesoriosalex.com",
  },
  {
    id: 9,
    title: "Galleta Mk",
    type: "img",
    src: "https://galletamkt.com/desarrollo-web",
    img: "assets/img/projects/galleta.jpg",
    project: "Website",
    client: "Galleta Mk",
    cargo: "Front End",
    previewLink: "galletamkt.com",
  },
];

const Portfolio = () => {
  const { popupToggle } = useContext(TunisContext);
  return (
    <SectionContainer id="portfolio">
      <div className="w-full pb-60">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"prooyectos"}
          colorTitle={"portafolio"}
          normalTitle={"mi"}
        />
        {/* Section Title Ends */}
        {/* Portfolio Items Starts */}
        <div className="-mt-15 pb-60 xs:pb-20 portfolio">
          <div
            id="grid-gallery"
            className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto"
          >
            {/* Portfolio Grid Starts */}
            <div className="grid-wrap mx-auto mb-25">
              <ul className="gridlist">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0"
                    onClick={() => popupToggle(item)}
                  >
                    <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                      <img
                        className="block relative w-full rounded-5 transition duration-300"
                        src={item.img}
                        alt=""
                      />
                      <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                        <span className="uppercase text-fs-18 text-white">
                          {item.title}
                        </span>
                      </div>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
            {/* Portfolio Grid Ends */}
          </div>
        </div>
        {/* Portfolio Items Ends */}
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
