import { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";

import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchProgramDetailsById } from "../../Services/programService";

const PaymentDone = () => {
  const [programDetails, setProgramDetails] = useState([]);
  const [module, setmodule] = useState([]);

  const { id } = useParams();
  const {string} = useParams();
  const navigate = useNavigate()

  const akseskLink = `/${string}/${id}`
  
  useEffect(() => {
    const fetchProgramDetails = async () => {
      try {
        const details = await fetchProgramDetailsById(id);
        setProgramDetails(details);
        setmodule(details.module)
      } catch (error) {
        console.error('Error fetching program details:', error);
      }
    };

    fetchProgramDetails();
  }, [id]);

  const handleModuleclick = () => {
    string === "event"?  navigate('/') : navigate(`/program/${programDetails._id}/${module[0].id}`);
  };

  return (
    <Container className="my-5 text-center">
      <Card>
        <Card.Body>
          <Card.Title className=" fs-1 fw-bold">
            Pembayaran Berhasil!
          </Card.Title>
          <Card.Text className="">
            Terima kasih atas pembayaran Anda. Proses pembelian {string} telah berhasil.
          </Card.Text>
          {string === "event" ? (
            <Card.Text>

            <Link
                to="zoomus://zoom.us/join?confno=8529015944&pwd=12345&uname=Nobody%20-%2051800000000"
                target="_blank"
                className="fs-3"
              >
                Silahkan klik link ini untuk mengikuti Event
              </Link>
  
            </Card.Text>
          ) : (
            // onLogout={handleLogout}
            ""
          )}
          
          
          <div className="">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/payment-successful-5343612-4475257.png"
              alt="payment-success"
              style={{ width: "30rem" }}
            />
          </div>
            <Button variant="primary" onClick={handleModuleclick}>Akses {string}</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PaymentDone;
