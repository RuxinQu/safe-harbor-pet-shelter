import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPetsById } from "../util/api";
import { Detail } from "../components/Pet/Detail";

export default function PetDetail() {
  const { id } = useParams();
  const [pet, setPet] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleSearch = async (id) => {
      const petById = await getPetsById(id);
      petById.ImageGalleryArr = [];
      petById.images.forEach((img) => {
        petById.ImageGalleryArr.push({ original: img.url, thumbnail: img.url });
      });
      setPet(petById);
      setLoading(false);
    };
    handleSearch(id);
  }, [id]);

  return <Detail id={id} pet={pet} loading={loading} />;
}
