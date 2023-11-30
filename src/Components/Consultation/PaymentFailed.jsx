import React from "react";
import { Container, Card, Button, CardText } from "react-bootstrap";
import { Link } from "react-router-dom";

const PaymentFailed = () => {
  return (
    <Container className="my-5">
      <Card>
        <Card.Body>
          <Card.Title className="text-center fs-1 fw-bold text-danger">
            Pembayaran Gagal!
          </Card.Title>
          <Card.Text className="text-center">
            Pembayaran Anda telah gagal dikarenakan telah melewati batas waktu
            pembayaran <br /> atau melakukan pembatalan pembayaran
          </Card.Text>
          <div className="text-center">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/payment-error-2130357-1800921.png?f=webp"
              alt="payment-success"
              style={{ width: "30rem" }}
            />
          </div>
          <div className="text-center">
            <Link to="/">
              <Button variant="primary">Kembali ke Beranda</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PaymentFailed;
