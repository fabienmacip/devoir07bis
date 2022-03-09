import { createClient } from "contentful";
import { SPACE_KEY, TOKEN_KEY } from "./secret.js";

//host: "cdn.contentful.com" // PRODUCTION

const useContentful = () => {
  const client = createClient({
    space: SPACE_KEY,
    accessToken: TOKEN_KEY,
    host: "preview.contentful.com"
  });
  
  const getCategories = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "categorie",
        select: "fields"
        //order: "titre" // , "fields.titre": "Bébé"
      });

      const sanitizedEntries = entries.items.map((item) => {
        const categorie = item.fields;

        return categorie;
        //{
          //...item, categorie
          //categorie
        //};
      });
      return sanitizedEntries;

    } catch (error) {
      console.log(`Erreur lors de la récupération des catégories ${error}`);
    }
    
  };

  return { getCategories };//

};
export default useContentful;
