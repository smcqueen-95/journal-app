import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/logo.png";

const CreateEntry = () => (
  <div className="text-left">
    <h1 className="mb-4">Create Journal Entry</h1>
    <div class="mb-3">
      <label for="titleInput" class="form-label">
        Title
      </label>
      <input
        type="email"
        class="form-control"
        id="titleInput"
        placeholder="New Entry"
      />
    </div>
    <div class="mb-3">
      <label for="textareaInput" class="form-label"></label>
      <textarea
        class="form-control"
        id="textareaInput"
        rows="12"
      ></textarea>
    </div>
  </div>
);

export default CreateEntry;
