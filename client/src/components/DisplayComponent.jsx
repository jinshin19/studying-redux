import { resolvedAction, unResolvedAction } from "../redux/actions";
import { store } from "../redux/store";

const DisplayComponent = (data) => {
  const resolvedHandler = (id) => store.dispatch(resolvedAction(id));
  const unResolvedHandler = (id) =>
    store.dispatch(unResolvedAction(id));

  return (
    <div className="display-component">
      <h2> Display Section</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>DESCRIPTION</th>
            <th>RESOLVED</th>
          </tr>
        </thead>
        <tbody>
          {data.data.length ? (
            data.data.map(({ id, description, resolved }) => (
              <>
                <tr>
                  <td>{resolved ? "RESOLVED" : id}</td>
                  <td>{resolved ? "RESOLVED" : description}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => resolvedHandler(id)}
                    >
                      RESOLVED
                    </button>
                    <button
                      type="button"
                      onClick={() => unResolvedHandler(id)}
                    >
                      UNRESOLVED
                    </button>
                  </td>
                </tr>
              </>
            ))
          ) : (
            <>
              <tr>
                <td>No Data</td>
                <td>No Data</td>
                <td>No Data</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayComponent;
