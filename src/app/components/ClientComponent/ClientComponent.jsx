"use client"
import React from 'react'

export default function ClientComponent ({ nonSerial }) {
  console.log('nonSerial',nonSerial)
    return (
        <div>
            <h2>Client component</h2>
            <p>
              {nonSerial ? nonSerial?.toString() : "props is null or undefined"}
            </p>
        </div>
    )
}
