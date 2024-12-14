function Element({ title, editHandler }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
      <div className="d-flex align-items-center">
        <input
          className="form-check-input me-2"
          type="checkbox"
          value=""
          aria-label="..."
        />
        {title}
      </div>
      <a href="#!" data-mdb-tooltip-init title="Remove item">
        <i className="fas fa-times text-primary"></i>
      </a>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => {
          editHandler(title);
        }}
      >
        Edit
      </button>
    </li>
  );
}

export default Element;
