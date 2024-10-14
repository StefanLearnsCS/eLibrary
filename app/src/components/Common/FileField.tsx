import React from "react";
import { useState } from "react";

interface FileFieldProps {
    onFileSelect: (file: File | null) => void;
}

export const FileField: React.FC<FileFieldProps> = ({ onFileSelect }) => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        onFileSelect(file);
    };

    return (
        <input 
            type="file" 
            className="file-input file-input-bordered w-full max-w-xl"
            onChange={handleFileChange}
            accept=".pdf" // Optional: Limit to PDF files
        />
    );
};
