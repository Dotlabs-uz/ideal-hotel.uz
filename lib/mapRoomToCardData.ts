export function mapRoomToCardData(room: any, locale: "ru" | "uz" | "en") {
  return {
    id: room.id,
    title: room.title[locale],
    description: room.description[locale],
    image: room.image,
    images: room.gallery,
    features: room.features[locale],
    amenities: room.amenities,
    amenities2: room.amenities2,
    thumbnails: room.thumbnails,
  };
}
