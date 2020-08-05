import React from "react"
import SEO from "../components/seo"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function thanks() {
  return (
    <div>
      <SEO title="Compra Exitosa" />
      <Purchase>
        <h2>Compra Exitosa</h2>
        <p>Espero que disfrutes tu compra!</p>
        <p>Te esperamos de vuelta, Gracias </p>
        <br />
        <span role="img" aria-label="emoji">
          💙
        </span>
        <br />
        <Link to="/">
          <Button>Volver al Catálogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
