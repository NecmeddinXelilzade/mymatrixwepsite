import React, { useContext, useState, useEffect } from "react";
import { GlobalData } from "../../Context/GlobalContext";
import Singlecard from "../Singlecard/Singlecard";
import styles from "./Shop.module.css";
import img from "../../Assets/image/ins.jpg";
import Plamen from "../Plamen/Plamen";
import Aos from "aos";
import { Select } from "antd";
import { GlobalTheme } from "../../Context/Themecontext"
import { useTranslation } from "react-i18next";

const Shop = () => {
  const { data } = useContext(GlobalData);
  const [state, setState] = useState(data);
    const { toggleMode } = useContext(GlobalTheme);

  const [query,setQuery]=useState('');

  useEffect(() => {
    Aos.init();
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  const myCatageories = ["All", "Accessories", "Capuletos", "Brazil", "Cuban" ];

  const changeCategory = (myCategory) => {
    if (myCategory === "All") {
      setState(data);
      return;
    }

    const filteredArray = data.filter((item) => item.catageory === myCategory);
    setState(filteredArray);
  };


  const sortProducts = (value) => {
    if (value === "all") {
      setState(data);
      return;
    } else if (value === "lowest-price") {
      let copyState = [...state];
      let sortProducts = copyState.sort((a, b) => a.price - b.price);
      setState(sortProducts);
    } else if (value === "highest-price") {
      let copyState = [...state];
      let sortProducts = copyState.sort((a, b) => b.price - a.price);
      setState(sortProducts);
    } else if (value === "a-z") {
      let copyState = [...state];
      let sortProducts = copyState.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setState(sortProducts);
    } else if (value === "z-a") {
      let copyState = [...state];
      let sortProducts = copyState.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      setState(sortProducts);
    }
  };

  return (
    <section className={styles.theme}>
      <img className={styles.img} src={img} alt="" />
      {/* <div > */}
        <div className="container">
          <div className="row">

            <div className="col-lg-6 col-md-12 col-sm-12" style={{display:'flex',}} >

            <input 
            placeholder="search products..."
          className={styles.inputes}
          style={{height:'44px'}}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
                    <Select
                defaultValue="All"
                style={{ width: "160px", marginLeft: "10px", marginTop:"5px" }}
                onChange={sortProducts}
                options={[
                  {
                    value: "all",
                    label: "All",
                  },
                  {
                    value: "highest-price",
                    label: "High to low",
                  },
                  {
                    value: "lowest-price",
                    label: "Low to hight",
                  },
                  {
                    value: "a-z",
                    label: "A-Z",
                  },
                  {
                    value: "z-a",
                    label: "Z-A",
                  },

                ]}
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 p-2" >
          <div style={{display:'flex',justifyContent:'center',alignItems:"center"}}>
            {myCatageories.map((item, index) => {
              return (
                <button   class="btn btn-warning" style={{marginLeft:"10px"}} onClick={() => changeCategory(item)} key={index}> <h6>{item}</h6></button>
              );
            })}
          </div>
            </div>

            {state
              .filter((a) =>
                a.title.toLowerCase().includes(query.toLowerCase())
              )
              .map((item, index) => {
                return (
                  <div className="col-lg-4  col-md-6 col-sm-6 col-12 p-3">
                    <div data-aos="zoom-out-up">
                    <Singlecard product={item} key={item.id} />
                    </div>
      
                  </div>
                );
              })}
          </div>
        </div>
      {/* </div> */}
      <Plamen />
    </section>
  );
};

export default Shop;
