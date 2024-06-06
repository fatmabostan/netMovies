"use client"
import Link from 'next/link'
import React from 'react'

function MovieError() {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
        flexDirection: "column",
        gap: "70px"
    }}>
      <h1> An error has occurred. Sorry for that! </h1>
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

export default MovieError
