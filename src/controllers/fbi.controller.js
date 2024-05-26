import { results } from "../assets/js/agentes.js";
import jwt from "jsonwebtoken";
const secretKey = "4321"

export const login = (req, res) => {
  try {
    const { email, password } = req.query;
    const user = results.find((u) => u.email == email && u.password == password);
    if (user) {
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 10,
          data: user,
        },
        secretKey
      )
      res.send(`
<a href="/acceso?token=${token}"> <p> Acceso de Agente  </p> </a>
<p>${user.email}</p>
<script>
sessionStorage.setItem('accesoTk', JSON.stringify("${token}"))
</script>
`);
    }
  } catch (error) {
    res.status(404).send(`Tiempo expirado, ingrese nuevamente`, error)
  }

  res.send("Usuario o contraseña incorrecta");
};

export const acceso = (req, res) => {
  try {
    res.send(`
  Bienvenido Agente`)
  } catch (error) {
    res.status(404).send(`Tiempo expirado, ingrese nuevamente`, error)
  }
};
