// src/components/TimelineEntry.js
"use client";
import React, { useState } from "react";

const TimelineEntry = ({ entry, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEntry, setEditedEntry] = useState(entry);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedEntry({ ...editedEntry, [name]: value });
  };

  const handleSave = () => {
    onUpdate(editedEntry);
    setIsEditing(false);
  };

  return (
    <div className="timeline-entry border p-4 mb-4">
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editedEntry.title}
            onChange={handleEditChange}
            className="w-full mb-2 p-2"
            placeholder="Title"
          />
          <textarea
            name="description"
            value={editedEntry.description}
            onChange={handleEditChange}
            className="w-full mb-2 p-2"
            placeholder="Description"
          />
          <button
            onClick={handleSave}
            className="mr-2 bg-blue-500 text-white px-4 py-2"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-500 text-white px-4 py-2"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <h3 className="text-xl font-bold mb-2">{entry.title}</h3>
          <p className="mb-2">{entry.description}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="mr-2 bg-yellow-500 text-white px-4 py-2"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(entry.id)}
            className="bg-red-500 text-white px-4 py-2"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TimelineEntry;
