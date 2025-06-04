export function mapRoomToCardData(room: any, locale: "ru" | "uz" | "en") {
  return {
    id: room.id,
    title: room.title[locale],
    description: room.description[locale],
    image: room.image,
    images: room.gallery,
    features: room.features[locale],
    amenities: room.amenities[locale],
    amenities2: room.amenities2[locale],
    thumbnails: room.thumbnails,
    underCategories: room.underCategories,
  };
}
