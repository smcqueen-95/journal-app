// src/views/external-api.js
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/logo.png";
import "./journal-entries.css";

const JournalEntries = () => (
  <div className="text-left">
    <h1 className="mb-4">Journal Entries</h1>

    <a
      href="/create-entry"
      role="button"
      class="btn btn-block"
    >
      Create New Journal Entry
    </a>
  </div>
);

export default JournalEntries;
