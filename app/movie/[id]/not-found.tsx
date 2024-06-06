import Link from 'next/link'
import React from 'react'

function MovieDetailNotFound() {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
        flexDirection: "column",
        gap: "70px"
    }}>
      <h1> We couldn't find the movie you looking for!</h1>
      <Link style={{
        textDecoration: "underline",
        textDecorationStyle: "wavy",
        fontSize: "20px",
        
      }} href="/">
        Go Home 🏠
      </Link>
    </div>
  )
}

export default MovieDetailNotFound
