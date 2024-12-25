import React, { useState } from 'react';
import axios from 'axios';

const Gallery = () =>  {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]); // CORRECTION: Initialisation avec un tableau vide

    const rechercherImages = async () => {
        const API_KEY = '47856087-486173b4ba450363678f546c5'; // Remplacez par votre clé API réelle
        const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo`;

        try {
            const response = await axios.get(URL);
            setImages(response.data.hits || []); // Ajout d'une vérification pour éviter les erreurs
        } catch (error) {
            console.error('Erreur lors de la récupération des images :', error);
            setImages([]); // Réinitialiser en cas d'erreur
        }
    };

    return (
        <div>
          <input 
            type="text" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Rechercher une image..."
          />
          <button onClick={rechercherImages}>Rechercher</button>
    
          <div>
            {images.length > 0 ? ( // Vérification s'il y a des images
              images.map((image) => (
                <img key={image.id} src={image.webformatURL} alt={image.tags} />
              ))
            ) : (
              <p>Aucune image trouvée.</p>
            )}
          </div>
        </div>
      );
};

export default Gallery;
