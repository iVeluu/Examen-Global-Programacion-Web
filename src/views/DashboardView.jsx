import Question from "../components/Question";
import { preguntas } from "../constants/Preguntas";

export default function DashboardView() {
  return (
    <>
      <h3 className="mb-12 font-bold text-center text-4xl">Preguntas del examen</h3>
      <div className="space-y-6 md:grid md:grid-cols-2 md:gap-9 ">
        {preguntas.map((pregunta) => (
          <Question key={pregunta.pregunta} pregunta={pregunta} />
        ))}
      </div>
    </>
  );
}
