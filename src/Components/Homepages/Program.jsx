import { useDispatch, useSelector } from "react-redux";
import ProgramCard from "../Programs/ProgramCard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchPrograms } from "../../Services/programService";

function Program() {
  const programs = useSelector((state) => state.programs.programs);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPrograms());
  }, [dispatch]);

  const handleProgramDetail = (programId) => {
    // Navigate to the event detail page with the specified event ID
    navigate(`/program/${programId}`);
  };

  return (
    <>
      <section className="programbox">
        <div className="programphrase">
          <div className="programphrase1">
            Eksplorasi Berbagai Program Nutrikid
          </div>
          <div className="programphrase2">
            Program kami akan menemani perkembangan buah hati anda
          </div>
        </div>
        <div className="card-group contentprogram ">
        <ProgramCard programs={programs} onProgramClick={handleProgramDetail} />
        </div>
      </section>
    </>
  );
}

export default Program;
