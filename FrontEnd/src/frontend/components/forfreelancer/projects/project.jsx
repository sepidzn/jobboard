import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import StickyBox from "react-sticky-box";
import _, { includes } from "lodash";
// Import Images
import {
  company_img1,
  company_img2,
  company_img3,
  company_img4,
  company_img5,
  company_img6,
  company_img7,
  company_img8,
  company_img9,
  company_img10,
  home_icon,
} from "../../imagepath";
import Loader from "../../../../Loader";
// redux
import { useDispatch, useSelector } from "react-redux";
import { listJobs, jobsPostRequirments } from "../../../../actions/jobActions";

const Projects = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const listAllJobs = useSelector((state) => state.jobList);
  const { jobs, loading } = listAllJobs;
  const [users, setUsers] = useState([]);
  const searchPhrase = location.state?.searchPhrase
    ? location.state?.searchPhrase
    : "";
  const Requirments = useSelector((state) => state.jobsPostRequirments);
  const { postJobDetailsRequirments } = Requirments;
  const { categories, cities, skills, states } = postJobDetailsRequirments;
  const [searchFilter, setSearchFilter] = useState([]);

  const handleTagClose = (item) => {
    delete searchFilter[item];
  };

  const daysBetween = (input) => {
    const now = new Date().getDate();
    const date = new Date(input).getDate();
    return now - date;
  };
  const afterFilter = jobs
    ?.filter((job) => job.status === "فعال")
    .filter((job) => {
      const category =
        searchFilter?.job_category === undefined
          ? true
          : job.job_category.title === searchFilter?.job_category;
      const job_type =
        searchFilter?.job_type === undefined
          ? true
          : job.job_type === searchFilter?.job_type;
      const salary_type =
        searchFilter?.salary_type === undefined
          ? true
          : job.salary_type === searchFilter?.salary_type;
      const experience =
        searchFilter?.experience === undefined
          ? true
          : job.experience === searchFilter?.experience;
      const filter =
        category && job_type && salary_type && experience ? true : false;
      return filter;
    });

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setSearchFilter((searchFilter) => ({
      ...searchFilter,
      [id]: value,
    }));
  };

  useEffect(() => {
    dispatch(listJobs());
    dispatch(jobsPostRequirments());
  }, [dispatch]);

  // console.log(searchFilter, "searxc");
  console.log(jobs, "jobs");
  console.log(afterFilter, "afterFilter");
  // console.log(postJobDetailsRequirments, "requierments");

  return (
    <>
      {/* Breadcrumb */}
      <div className="bread-crumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center"></div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row align-right">
            <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
              {/* Search Filter */}
              <StickyBox offsetTop={20} offsetBottom={20}>
                <div className="card search-filter">
                  <div className="card-header d-flex justify-content-between">
                    <h4 className="card-title mb-0">فیلتر</h4>
                    <a onClick={() => setSearchFilter([])}>پاک کردن همه</a>
                  </div>
                  <div className="card-body">
                    <div className="filter-widget">
                      <h4>دسته بندی</h4>
                      <option>انتخاب کنید</option>
                      <div className="form-group">
                        <select
                          onChange={handleChange}
                          id="job_category"
                          className="form-control select"
                        >
                          {postJobDetailsRequirments.categories?.map((item) => (
                            <option value={item.title}>{item.title}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="filter-widget">
                      <h4>استان</h4>
                      <div className="form-group">
                        <select className="form-control select">
                          <option>انتخاب کنید</option>
                          {postJobDetailsRequirments.states?.map((item) => (
                            <option value={item.id}>{item.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="filter-widget">
                      <h4>حقوق</h4>
                      <div className="form-group">
                        <select
                          onChange={handleChange}
                          id="salary_type"
                          className="form-control select"
                        >
                          <option value="مشخص"> مشخص شده</option>
                          <option value="توافقی">توافقی</option>
                        </select>
                      </div>
                    </div>
                    {/* <div className="filter-widget">
                      <h4>مهارت اضافه کنید</h4>
                      <div className="form-group">
                        <select className="form-control select mb-2">
                          <option>انتخاب کنید</option>
                          {postJobDetailsRequirments.skills?.map((item) => (
                            <option value={item.id}>{item.title}</option>
                          ))}
                        </select>
                        <span className="badge badge-pill badge-skill">
                          + Web Design
                        </span>

                        <input type="text" className="form-control" />
                      </div>
                    </div> */}
                    <div className="filter-widget">
                      <h4>نوع همکاری</h4>
                      <div className="form-group">
                        <select
                          onChange={handleChange}
                          id="job_type"
                          className="form-control select"
                        >
                          <option value="پاره وقت">پاره وقت</option>
                          <option value="تمام وقت">تمام وقت</option>
                        </select>
                      </div>
                    </div>
                    <div className="filter-widget">
                      <h4>سابقه کار</h4>
                      <div className="form-group">
                        <select
                          onChange={handleChange}
                          id="experience"
                          className="form-control select"
                        >
                          <option value="بدون محدودیت">بدون محدودیت</option>
                          <option value="کمتر از ۲ سال">کمتر از 2 سال</option>
                          <option value="۲ تا ۵ سال">2 تا 5 سال</option>
                          <option value="بیشتر از ۵ سال">بیشتر از ۵ سال</option>
                        </select>
                      </div>
                    </div>

                    <div className="btn-search">
                      <button type="button" className="btn btn-block">
                        اعمال
                      </button>
                    </div>
                  </div>
                </div>
              </StickyBox>
              {/* /Search Filter */}
            </div>
            <div className="col-md-12 col-lg-8 col-xl-9">
              <div className="sort-tab">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="d-flex align-items-center">
                      <div className="freelance-view"></div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="d-flex justify-content-sm-end">
                      <div className="sort-by">
                        <select className="custom-select">
                          <option>مرتبط ترین</option>
                          <option>جدیدترین</option>
                          <option>بیشترین حقوق</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bootstrap-tags text-start pl-0">
                {Object.keys(searchFilter)?.map((item) => {
                  return (
                    <span className="badge badge-pill badge-skills">
                      {searchFilter[item]}
                      <span
                        onClick={() => handleTagClose(item)}
                        className="tag-close"
                        data-role="remove"
                      >
                        <i className="fa fa-times" />
                      </span>
                    </span>
                  );
                })}
              </div>
              <div className="row">
                {/* Project Content */}
                {loading ? (
                  <Loader />
                ) : (
                  afterFilter
                    .filter(
                      (job) =>
                        _.includes(
                          job.title?.toLowerCase(),
                          searchPhrase?.toLowerCase()
                        ) ||
                        _.includes(
                          job.company.Name?.toLowerCase(),
                          searchPhrase?.toLowerCase()
                        )
                    )
                    .map(
                      (item) =>
                        item.status === "فعال" && (
                          <div className="col-md-6 col-lg-12 col-xl-4">
                            <div className="freelance-widget widget-author">
                              <div className="freelance-content">
                                <a
                                  data-bs-toggle="modal"
                                  href="#rating"
                                  className="favourite"
                                >
                                  <i className="fa fa-star" />
                                </a>
                                <div className="">
                                  <div className="mb-3">
                                    <a href="#">
                                      <img
                                        style={{
                                          borderRadius: "100px",
                                          width: "42%",
                                        }}
                                        alt=""
                                        src={
                                          "http://127.0.0.1:8000" +
                                          item.company?.image
                                        }
                                      />
                                    </a>
                                  </div>
                                  <div className="profile-name">
                                    <div className="author-location">
                                      {item.company?.Name}
                                      <i className="fa fa-check-circle text-success verified ms-1" />
                                    </div>
                                  </div>
                                  <div className="freelance-info">
                                    <h3>
                                      <a href="#">{item.title}</a>
                                    </h3>
                                    <div className="freelance-location mb-1">
                                      <i className="fa fa-clock" />{" "}
                                      {60 - daysBetween(item?.published_at)} روز
                                    </div>
                                    <div className="freelance-location">
                                      <i className="fa fa-map-marker-alt ms-1" />
                                      {item.company.city?.name}
                                    </div>
                                  </div>
                                  <div className="freelance-tags">
                                    {item.job_skills
                                      ?.slice(0, 3)
                                      .map((item) => (
                                        <a href="">
                                          <span className="badge badge-pill badge-design">
                                            {item.title}
                                          </span>
                                        </a>
                                      ))}
                                  </div>
                                  {/* <div className="freelancers-price">حقوق</div> */}
                                  {/* <div className="freelancers-price">$40-$500</div> */}
                                </div>
                                <div className="counter-stats ">
                                  <ul>
                                    <li>
                                      <h5> حقوق</h5>
                                      <h3 className="counter-value">
                                        {item.salary_amount === null
                                          ? item.salary_type
                                          : `${item.salary_amount}میلیون تومان`}
                                      </h3>
                                    </li>

                                    <li>
                                      <h3 className="counter-value">
                                        <h5>نوع همکاری</h5>
                                        <span className="jobtype">
                                          {item.job_type}
                                        </span>
                                      </h3>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="cart-hover">
                                <Link
                                  to={{
                                    pathname: "/project-details",
                                    state: { jobIdInput: item.id },
                                  }}
                                >
                                  <h4 className="btn-cart">مشاهده بیشتر</h4>
                                </Link>
                              </div>
                            </div>
                          </div>
                        )
                    )
                )}
              </div>
            </div>
          </div>
        </div>
        {/* The Modal */}
        <div className="modal fade" id="rating">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header d-block b-0 pb-0">
                <span className="modal-close float-end">
                  <a href="#" data-bs-dismiss="modal" aria-label="Close">
                    <i className="far fa-times-circle orange-text" />
                  </a>
                </span>
              </div>
              <div className="modal-body">
                <form>
                  <div className="modal-info">
                    <div className="text-center pt-0 mb-5">
                      <h3>لطفا وارد شوید تا این فرصت شغلی را نشان کنید</h3>
                    </div>
                    <div className="submit-section text-center">
                      <a
                        data-bs-dismiss="modal"
                        href="#"
                        className="btn btn-primary black-btn click-btn ms-3"
                      >
                        بازگشت
                      </a>
                      <button
                        type="submit"
                        className="btn btn-primary click-btn"
                      >
                        تایید
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /The Modal */}
      </div>
      {/* /Page Content */}
    </>
  );
};
export default Projects;
