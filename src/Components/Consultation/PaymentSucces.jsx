import React from "react";
import { Container, Card, Button, CardText } from "react-bootstrap";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <Container className="my-5 text-center">
      <Card>
        <Card.Body>
          <Card.Title className=" fs-1 fw-bold">
            Pembayaran Berhasil!
          </Card.Title>
          <Card.Text className="">
            Terima kasih atas pembayaran Anda. Proses pembelian telah berhasil.
          </Card.Text>
          <CardText className="">
            <Link
              to="zoomus://zoom.us/join?confno=8529015944&pwd=12345&uname=Nobody%20-%2051800000000"
              target="_blank"
              className="fs-3"
            >
              Silahkan klik link ini untuk segera memulai konsultasi
            </Link>
          </CardText>
          <div className="">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/payment-successful-5343612-4475257.png"
              alt="payment-success"
              style={{ width: "30rem" }}
            />
          </div>

          <Link to="/">
            <Button variant="primary">Kembali ke Beranda</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PaymentSuccess;
