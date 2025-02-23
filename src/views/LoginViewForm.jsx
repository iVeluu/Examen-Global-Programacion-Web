import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function LoginViewForm() {
  const users = [
    { email: "admin@example.com", password: "1234" },
    { email: "user1@example.com", password: "abcd" },
    { email: "user2@example.com", password: "5678" },
  ];

  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reiniciar errores

    const validUser = users.find(
      (user) =>
        user.email === form.email.trim() &&
        user.password === form.password.trim()
    );

    if (validUser) {
        navigate('/dashboard')
    } else {
      setError("Credenciales incorrectas");
    }
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <>
      <h1 className="text-5xl font-black text-white">Iniciar Sesión</h1>
      <p className="text-2xl font-light text-white mt-5">
        Examen global de <br />
        <span className="text-fuchsia-500 font-bold">
          Alejandro Velazquez Luna 7S
        </span>
      </p>

      <form
        className="space-y-8 p-10 bg-white rounded-xl mt-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl">Email</label>
          <input
            id="username"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email de Registro"
            className="w-full p-3 border-gray-300 border"
          />
        </div>

        <div className="flex flex-col gap-5">
          <label className="font-normal text-2xl">Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password de Registro"
            className="w-full p-3 border-gray-300 border"
          />
        </div>

        {error && <p className="text-red-600 text-lg w-full bg-red-300 p-4 font-bold border-l-4 border-red-600">{error}</p>}

        <input
          type="submit"
          value="Iniciar Sesión"
          className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white font-black text-xl cursor-pointer"
        />
      </form>
    </>
  );
}
