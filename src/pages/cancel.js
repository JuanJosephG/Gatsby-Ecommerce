import React from "react"
import SEO from "../components/seo"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function cancel() {
  return (
    <div>
      <SEO title="Compra Exitosa" />
      <Purchase>
        <h2>Compra No Realizada</h2>
        <p>Lo Sentimos, el proceso ha fallado!</p> <br />
        <span role="img" aria-label="emoji">
          🙁
        </span>
        <br />
        <p>Aún tu producto sigue aquí </p>
        <p>Vuelve al Menú e intentalo de nuevo </p>
        <Link to="/">
          <Button>Volver al Catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
