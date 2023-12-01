import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import QRCode from "react-qr-code";
import { Link, useNavigate } from "react-router-dom";

const QRCodeComponent = () => {
  const [countdown, setCountdown] = useState(300);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/payment/failed");
    }
  }, [countdown, navigate]);

  const formattedTime = () => {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <Container className="my-5 text-center">
      <Card>
        <Card.Body>
          <Card.Title className="fs-1 fw-bold">Pembayaran</Card.Title>
          <Card.Title className="">
            Scan QR Code untuk melakukan pembayaran
          </Card.Title>
          <Card.Text className="fw-bold">
            Batas waktu pembayaran: {formattedTime()}
          </Card.Text>
          <Link to="/payment/success">
            <QRCode value="https://example.com/payment" className="mb-4" />
          </Link>

          <div className="">
            <Link to="/payment/failed">
              <Button variant="danger">Batalkan Pembayaran</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default QRCodeComponent;
