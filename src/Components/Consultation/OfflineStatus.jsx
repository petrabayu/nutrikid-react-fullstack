import { FaCircle } from "react-icons/fa6";

export default function OfflineStatus() {
  return (
    <>
      <p className="card-text m-0">
        <small className="text-body-secondary rounded-1 bg-dark-subtle p-2 position-absolute top-0 start-0 ">
          <FaCircle
            style={{
              fontSize: "0.5rem",
              marginRight: "3px",
              marginBottom: "3px",
              verticalAlign: "middle",
            }}
          />
          Offline
        </small>
      </p>
    </>
  );
}
