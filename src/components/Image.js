import "./Navbar.css";

export default function Image({data}) {
  return (
    <>
      <a href={data.urls.regular} target="_blank" className="image card rounded shadow-sm  justify-content-evenly">
        <img
          src={data.urls.full}
          alt={data.alt_description}
          loading="lazy"
          className="im"
        />
        <div className="position-relative d-flex align-items-center m-1">
          <img
            src={data.user.profile_image.medium}
            alt={data.user.name}
            loading="lazy"
            className="rounded-circle profile align-items-center "
          />
          <ul className="list-unstyled align-items-center mt-3">
            <li className="fw-normal fw-bold">{data.user.name}</li>
            <li className="fst-italic fw-light fs-6">@{data.user.username}</li>
          </ul>
          <div className="position-absolute top-10 end-0 ">
            <ul className="list-unstyled">
              <li>{data.likes} likes</li>
            </ul>
          </div>
        </div>
      </a>
    </>
  );
}
