import React from 'react';
import axios from 'axios';

const DeleteArticle = ({ id }) => {
    return (
        <button onClick={() => {

            const handleDelete = () => {
                axios.delete('http://localhost:3003/articles/' + id);
            };

            if (window.confirm('Voulez vous supprimer cet article ?')) {
                handleDelete();
            }
        }}>Supprimer</button>
    );
};

export default DeleteArticle;