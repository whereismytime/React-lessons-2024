import List from "../List";

function Section({ todosList, editHandler }) {
  return (
    <section className="bg-primary bg-gradient">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <h1 className="mb-3">Awesome Todo List</h1>

                <form className="d-flex justify-content-center align-items-end mb-4">
                  <div data-mdb-input-init className="form-outline flex-fill">
                    <label className="form-label" htmlFor="form3">
                      What do you need to do today?
                    </label>
                    <input
                      type="text"
                      id="form3"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <button
                    type="submit"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-lg ms-2"
                  >
                    Add
                  </button>
                </form>
                <List todosList={todosList} editHandler={editHandler} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
