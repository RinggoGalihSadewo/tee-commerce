import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Previous from "../../assets/img/icons/previous.png";
import Next from "../../assets/img/icons/next.png";
import BagBuy from "../../assets/img/icons/bag-buy.png";
import "../../assets/css/style.css";
import { GetAllProducts } from "../../redux/action/products";
import MenRed from "../../assets/img/products/men/merah.png";
import MenBlack from "../../assets/img/products/men/hitam.png";
import MenBlue from "../../assets/img/products/men/biru.png";
import WomenYellow from "../../assets/img/products/women/kuning.png";
import WomenCream from "../../assets/img/products/women/cream.png";
import WomenGray from "../../assets/img/products/women/abuabu.png";
import ChildBlack from "../../assets/img/products/child/hitam.png";
import ChildBlue from "../../assets/img/products/child/biru.png";
import ChildCream from "../../assets/img/products/child/cream.png";
import FormatRupiah from "../../helpers";

const MainProducts = () => {
  const {
    getAllProductsResult,
    getAllProductsLoading,
    getAllProductsError,
    valueSearchProduct,
    filterCategory,
    filterColor,
    modalFilter,
  } = useSelector((state) => state.ProductsReducer);
  const dispatch = useDispatch();
  const [isModalDetailProduct, setIsModalDetailProduct] = useState(false);
  const [detailProduct, setDetailProduct] = useState("");
  const [resultSearch, setResultSearch] = useState();

  const currentUrl = window.location.href;
  const urlObject = new URL(currentUrl);
  const url = urlObject.pathname.substr(1);

  // Get All Data
  const GetAllProductsByAge = () => {
    const results = [];
    switch (url) {
      case "":
        results.push(getAllProductsResult[0]);
        results.push(getAllProductsResult[1]);
        results.push(getAllProductsResult[2]);
        break;
      case "women-t-shirts":
        results.push(getAllProductsResult[3]);
        results.push(getAllProductsResult[4]);
        results.push(getAllProductsResult[5]);
        break;
      case "child-t-shirts":
        results.push(getAllProductsResult[6]);
        results.push(getAllProductsResult[7]);
        results.push(getAllProductsResult[8]);
        break;
      default:
        break;
    }
    return results;
  };

  const RenderImages = (name, isDetailProduct = false) => {
    switch (name) {
      case "Kaus Satu":
        return (
          <img
            src={MenRed}
            alt={`${isDetailProduct ? "Detail Product" : "Card Image"}`}
            className={`${isDetailProduct ? "detail-product-img" : "card-img"}`}
          />
        );
        break;
      case "Kemeja Satu":
        return (
          <img
            src={MenBlack}
            alt={`${isDetailProduct ? "Detail Product" : "Card Image"}`}
            className={`${isDetailProduct ? "detail-product-img" : "card-img"}`}
          />
        );
        break;
      case "Kemeja Dua":
        return (
          <img
            src={MenBlue}
            alt={`${isDetailProduct ? "Detail Product" : "Card Image"}`}
            className={`${isDetailProduct ? "detail-product-img" : "card-img"}`}
          />
        );
        break;
      case "Kaus Dua":
        return (
          <img
            src={WomenYellow}
            alt={`${isDetailProduct ? "Detail Product" : "Card Image"}`}
            className={`${isDetailProduct ? "detail-product-img" : "card-img"}`}
          />
        );
        break;
      case "Kaus Tiga":
        return (
          <img
            src={WomenCream}
            alt={`${isDetailProduct ? "Detail Product" : "Card Image"}`}
            className={`${isDetailProduct ? "detail-product-img" : "card-img"}`}
          />
        );
        break;
      case "Kaus Empat":
        return (
          <img
            src={WomenGray}
            alt={`${isDetailProduct ? "Detail Product" : "Card Image"}`}
            className={`${isDetailProduct ? "detail-product-img" : "card-img"}`}
          />
        );
        break;
      case "Celana Satu":
        return (
          <img
            src={ChildBlack}
            alt={`${isDetailProduct ? "Detail Product" : "Card Image"}`}
            className={`${isDetailProduct ? "detail-product-img" : "card-img"}`}
          />
        );
        break;
      case "Celana Dua":
        return (
          <img
            src={ChildBlue}
            alt={`${isDetailProduct ? "Detail Product" : "Card Image"}`}
            className={`${isDetailProduct ? "detail-product-img" : "card-img"}`}
          />
        );
        break;
      case "Celana Tiga":
        return (
          <img
            src={ChildCream}
            alt={`${isDetailProduct ? "Detail Product" : "Card Image"}`}
            className={`${isDetailProduct ? "detail-product-img" : "card-img"}`}
          />
        );
        break;
      default:
        break;
    }
  };

  // Search Product
  const SearchProduct = () => {
    const resultSearch =
      getAllProductsResult &&
      GetAllProductsByAge().find(
        (data) => data.nama.toLowerCase() === valueSearchProduct.toLowerCase()
      );

    setResultSearch((prev) => resultSearch);
  };

  // Filter By Kategori
  const FilterByKategori = () => {
    const filteredData =
      getAllProductsResult &&
      GetAllProductsByAge().filter((item) => {
        const kategori = item.kategori.find((kategori) => {
          return kategori.name.toLowerCase() === filterCategory;
        });
        return kategori;
      });
    return filteredData;
  };

  // Filter By Warna
  const FilterByColor = () => {
    const filteredData =
      getAllProductsResult &&
      GetAllProductsByAge().filter(
        (data) => data.warna.toLowerCase() === filterColor.toLowerCase()
      );
    return filteredData;
  };

  // Modal Detail Product
  const ShowDetailProduct = (id) => {
    setIsModalDetailProduct((prev) => (!isModalDetailProduct ? true : false));
    const data = getAllProductsResult.find((data) => data.id === id);
    setDetailProduct((prev) => data);
  };

  // Modal Filter
  const ModalFilter = () => {
    var results = null;

    switch (modalFilter) {
      case "new":
        results =
          getAllProductsResult &&
          GetAllProductsByAge().sort(
            (a, b) => new Date(b.created_date) - new Date(a.created_date)
          );
        return results;
      case "low-price":
        results =
          getAllProductsResult &&
          GetAllProductsByAge().sort((a, b) => a.harga - b.harga);
        return results;
        break;
      case "high-price":
        results =
          getAllProductsResult &&
          GetAllProductsByAge().sort((a, b) => b.harga - a.harga);
        return results;
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    dispatch(GetAllProducts());
  }, [dispatch]);

  useEffect(() => {
    SearchProduct();
    FilterByKategori();
    FilterByColor();
    ModalFilter();
  });

  return (
    <>
      <div className="main-products">
        {getAllProductsResult &&
        modalFilter !== "" &&
        !resultSearch &&
        !filterCategory &&
        !filterColor &&
        !valueSearchProduct
          ? ModalFilter().map((data, index) => {
              return (
                <div
                  className="card-product"
                  key={index}
                  onClick={() => ShowDetailProduct(data.id)}
                  style={{ display: "flec", justifyContent: "space-around" }}
                >
                  {RenderImages(data.nama)}
                  <div className="card-desc">
                    <p className="title-product">{data.nama}</p>
                    <p className="price-product">
                      <FormatRupiah value={data.harga} />
                    </p>
                  </div>
                </div>
              );
            })
          : ""}
        {getAllProductsResult &&
        !resultSearch &&
        !filterCategory &&
        filterColor &&
        !valueSearchProduct &&
        modalFilter === ""
          ? FilterByColor().map((data, index) => {
              return (
                <div
                  className="card-product"
                  key={index}
                  onClick={() => ShowDetailProduct(data.id)}
                  style={{ display: "flec", justifyContent: "space-around" }}
                >
                  {RenderImages(data.nama)}
                  <div className="card-desc">
                    <p className="title-product">{data.nama}</p>
                    <FormatRupiah value={data.harga} />
                  </div>
                </div>
              );
            })
          : ""}
        {getAllProductsResult &&
        !resultSearch &&
        filterCategory &&
        !filterColor &&
        !valueSearchProduct &&
        modalFilter === ""
          ? FilterByKategori().map((data, index) => {
              return (
                <div
                  className="card-product"
                  key={index}
                  onClick={() => ShowDetailProduct(data.id)}
                  style={{ display: "flec", justifyContent: "space-around" }}
                >
                  {RenderImages(data.nama)}
                  <div className="card-desc">
                    <p className="title-product">{data.nama}</p>
                    <FormatRupiah value={data.harga} />
                  </div>
                </div>
              );
            })
          : ""}
        {resultSearch && (
          <div
            className="card-product"
            key={resultSearch.id}
            onClick={() => ShowDetailProduct(resultSearch.id)}
          >
            {RenderImages(resultSearch.nama)}
            <div className="card-desc">
              <p className="title-product">{resultSearch.nama}</p>
              <p className="price-product">
                <FormatRupiah value={resultSearch.harga} />
              </p>
            </div>
          </div>
        )}
        {getAllProductsResult &&
        !resultSearch &&
        !filterCategory &&
        !filterColor &&
        modalFilter === "" &&
        !valueSearchProduct ? (
          GetAllProductsByAge().map((data, index) => {
            return (
              <div
                className="card-product"
                key={index}
                onClick={() => ShowDetailProduct(data.id)}
              >
                {RenderImages(data.nama)}
                <div className="card-desc">
                  <p className="title-product">{data.nama}</p>
                  <FormatRupiah value={data.harga} />
                </div>
              </div>
            );
          })
        ) : getAllProductsLoading ? (
          <div className="wrapper-loading">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <span>Loading</span>
          </div>
        ) : (
          ""
        )}
      </div>
      {isModalDetailProduct && (
        <div
          className={`modal-overlay ${isModalDetailProduct ? "active" : ""}`}
          onClick={() =>
            setIsModalDetailProduct((prev) =>
              isModalDetailProduct ? false : true
            )
          }
        >
          <div
            className="modal-detail-product"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="detail-product">
              {detailProduct ? (
                <>
                  {RenderImages(detailProduct.nama, true)}
                  <div className="detail-product-desc">
                    <p className="detail-product-title">{detailProduct.nama}</p>
                    <p className="detail-product-price">
                      <FormatRupiah value={detailProduct.harga} />
                    </p>
                    <div className="size-product-wrapper">
                      <p className="size-title-product">Ukuran</p>
                      <div className="all-size-product">
                        <div className="size-product">XS</div>
                        <div className="size-product">S</div>
                        <div className="size-product">M</div>
                        <div className="size-product">L</div>
                        <div className="size-product">XL</div>
                      </div>
                    </div>
                    <div className="buy-wrapper">
                      <button className="btn-buy">Beli</button>
                      <img src={BagBuy} alt="Icon Bag Buy" />
                    </div>
                  </div>
                </>
              ) : detailProduct ? (
                <h4 className="loading-text">Loading . . .</h4>
              ) : (
                <p>
                  {getAllProductsError ? getAllProductsError : "Data Kosong"}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="pagination">
        <div className="total-pagination">
          <p>
            1 - {getAllProductsResult ? GetAllProductsByAge().length : ""} dari{" "}
            {getAllProductsResult ? GetAllProductsByAge().length : ""} produk
          </p>
        </div>
        <div className="pagination-page-number">
          <button className="btn-pagination">
            <image src={Previous} alt="Icon Previous" />
            <span style={{ marginLeft: "0.5rem" }}>Kembali</span>
          </button>
          <div className="page-number active">
            <div>1</div>
          </div>
          <button className="btn-pagination">
            <span>Selanjutnya</span>
            <image
              src={Next}
              alt="Icon Next"
              style={{ marginLeft: "0.5rem" }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default MainProducts;
