// src/views/external-api.js
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/logo.png";

const JournalEntries = () => (
  <div className="text-left">
    <h1 className="mb-4">Journal Entries</h1>

    <a
      href="/create-entry"
      role="button"
      className="btn btn-outline-secondary btn-block"
    >
      Create New Journal Entry
    </a>
  </div>
);

export default JournalEntries;
