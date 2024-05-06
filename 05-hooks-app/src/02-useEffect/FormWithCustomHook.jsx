import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {
  const { username, email, password, onInputChange, resetForm } = useForm({
    username: "Mario",
    email: "mario@correo.com",
    password: "",
  });

  return (
    <>
      <h1>Form With Custom Hook</h1>
      <hr />
      <input 
        type="text" 
        className="form-control" 
        placeholder="User Name" 
        name="username" 
        value={username}
        onChange={onInputChange}
      />
      <input 
        type="email" 
        className="form-control mt-3" 
        placeholder="mario@correo.com" 
        name="email" 
        value={email}
        onChange={onInputChange}
      />
      <input 
        type="password" 
        className="form-control mt-3" 
        placeholder="*****" 
        name="password" 
        value={password}
        onChange={onInputChange}
      />
      <button className="btn btn-primary mt-2" onClick={resetForm}>Reset</button>
    </>
  );
}
