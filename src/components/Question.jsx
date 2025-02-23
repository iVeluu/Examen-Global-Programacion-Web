import PropTypes from "prop-types";

export default function Question({ pregunta }) {
  return (
    <>
      <div className="border-2 border-indigo-600 bg-indigo-600 p-10 rounded-2xl shadow-indigo-400 shadow-lg text-white hover:scale-105 transition-all ease-in-out">
        <p className="font-bold mb-4 text-center text-2xl">{pregunta.pregunta}</p>
        <p>{pregunta.respuesta}</p>
      </div>
    </>
  );
}

Question.propTypes = {
  pregunta: PropTypes.shape({
    pregunta: PropTypes.string.isRequired,
    respuesta: PropTypes.string.isRequired,
  }).isRequired,
};
