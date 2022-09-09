import { useState, useEffect } from "react";

export const useAsync = (asyncFn, dependencias = []) => {
  const [datos, setDatos] = useState();
  const [cargando, setCargando] = useState(true);
  const [error , setError] = useState();

  useEffect(() => {
    setCargando(true);

    asyncFn().then(respuesta => {
        setDatos(respuesta);
      })
      .catch((error) => {
       setError(error);
      })
      .finally(() => {
        setCargando(false);
      });
  }, dependencias);

  return{
    datos,
    error,
    cargando
  }
};

