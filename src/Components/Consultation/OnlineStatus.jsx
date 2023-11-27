import { FaCircle } from "react-icons/fa6";

export default function OnlineStatus() {
  return (
    <>
      <p className="card-text text-white">
        <small className="text-white rounded bg-success p-2 position-absolute top-0 start-0 ">
          <FaCircle
            style={{
              fontSize: "0.5rem",
              marginRight: "3px",
              marginBottom: "3px",
              verticalAlign: "middle",
            }}
          />
          Online
        </small>
      </p>
    </>
  );
}
