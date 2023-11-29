import React, { useState, useEffect } from "react";
import DoctorCard from "./DoctorCard";
import axios from "axios";

function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Panggil API untuk mendapatkan data dokter
    axios
      .get("http://localhost:3001/api/users/doctors")
      .then((response) => {
        const sortedDoctors = response.data.sort(
          (a, b) => b.isOnline - a.isOnline
        );
        setDoctors(sortedDoctors);
      })
      .catch((error) => console.error("Error fetching doctors:", error));
  }, []);

  return (
    <div>
      <div className="row m-0 mb-4 justify-content-center overflow-auto vh-100">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

export default DoctorList;
